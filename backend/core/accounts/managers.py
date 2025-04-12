from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import gettext_lazy as _
from .models import USER_TYPES


class UserManager(BaseUserManager):
    """
    Custom user model manager where phone_number is the unique identifiers
    for authentication instead of usernames.
    """

    def create_user(self, phone_number, password, **extra_fields):
        """
        Create and save a User with the given phone_number and password.
        """
        if not phone_number:
            raise ValueError(_("The phone_number must be set"))
        
        phone_number = self.normalize_phone_number(phone_number)
        user = self.model(phone_number=phone_number, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, phone_number, password, **extra_fields):
        """
        Create and save a SuperUser with the given phone_number and password.
        """
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_active", True)
        extra_fields.setdefault("is_verified", True)
        extra_fields.setdefault("user_type", USER_TYPES.ADMIN.value)


        if extra_fields.get("is_staff") is not True:
            raise ValueError(_("Superuser must have is_staff=True."))
        
        if extra_fields.get(USER_TYPES.ADMIN.value) is not True:
            raise ValueError(_("Superuser must have USER_TYPE=admin."))
        
        return self.create_user(phone_number, password, **extra_fields)
    
    def create_authoruser(self, phone_number, password, **extra_fields):
        """
        Create and save a AuthorUser with the given phone_number and password.
        """
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("TYPE", USER_TYPES.AUTHOR.value)


        if extra_fields.get("is_staff") is not True:
            raise ValueError(_("Superuser must have is_staff=True."))
        
        if extra_fields.get(USER_TYPES.AUTHOR.value) is not True:
            raise ValueError(_("Superuser must have user_type=author."))
        
        return self.create_user(phone_number, password, **extra_fields)
    
    def create_authoruser(self, phone_number, password, **extra_fields):
        """
        Create and save a AuthorUser with the given phone_number and password.
        """
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("TYPE", USER_TYPES.SELLER.value)


        if extra_fields.get("is_staff") is not True:
            raise ValueError(_("Superuser must have is_staff=True."))
        
        if extra_fields.get(USER_TYPES.SELLER.value) is not True:
            raise ValueError(_("Superuser must have user_type=seller."))
        
        return self.create_user(phone_number, password, **extra_fields)