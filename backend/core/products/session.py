SESSION_KEY = 'basket'

class BasketSession:

    def __init__(self, request) -> None:
        self.requset = request
        self.session = request.session
        
        if not self.session.get(SESSION_KEY):
            self.session[SESSION_KEY] = []
        
    
    def update_basket(self, data):
        for basket_product in data:
            if basket_product not in self.session[SESSION_KEY]:
                self.session[SESSION_KEY].append(basket_product)
        self.save()

    def save(self):
        self.session.modified = True
        
    @property
    def show(self):
        return self.session[SESSION_KEY]