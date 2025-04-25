from .models import Product

SESSION_KEY = 'basket'

class BasketSession:
    """A class to manage basket operations in the session."""

    def __init__(self, request) -> None:
        self.request = request
        self.session = request.session
        
        # Initialize empty basket if not exists
        if SESSION_KEY not in self.session:
            self.session[SESSION_KEY] = {}
    


    def add_basket(self, data) -> None:
        basket = self.session[SESSION_KEY]
        product = Product.objects.get(id=data['id'])

        basket_product = {
            'id': data['id'],
            'quantity': data['quantity'],
            'title': product.title,
            'price': str(product.price),
            'has_discount': product.has_discount(),
            'price_with_discount': str(product.price_with_discount()),
            'max_quantity': product.quantity,
            'image_url': f"http://localhost:8000{product.image.url}",
        }

        if data['id'] not in basket.keys():
            basket[data['id']] = basket_product

        self.save()
        return basket_product

    def update_quantity(self, product_id, quantity) -> None:
        basket = self.session[SESSION_KEY]
        basket[product_id]['quantity'] = quantity
        self.save()

    def remove_basket(self, product_id) -> None:
        basket = self.session[SESSION_KEY]
        del basket[product_id]
        self.save()

    def clear_basket(self) -> None:
        basket = self.session[SESSION_KEY]
        basket.clear()
        self.save()

    def save(self) -> None:
        """Mark the session as modified to ensure changes are saved."""
        self.session.modified = True        

    def __iter__(self):
        basket = self.session[SESSION_KEY]
        return iter(basket.values())
    
    def __len__(self):
        return len(self.session[SESSION_KEY].keys())