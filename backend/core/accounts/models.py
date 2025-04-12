from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from .managers import UserManager


class USER_TYPES(models.TextChoices):
    ADMIN = "admin", _("admin")
    AUTHOR = "author", _("author")
    SELLER = "seller", _("seller")
    NORMAL = "normal", _("normal")


class User(AbstractBaseUser, PermissionsMixin):
    # username field
    phone_number = models.EmailField(_("phone_number"), unique=True)

    # permission fields
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_verified = models.BooleanField(default=False)

    user_type = models.CharField(choices=USER_TYPES, default=USER_TYPES.NORMAL)

    # date fields
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)


    USERNAME_FIELD = "phone_number"
    REQUIRED_FIELDS = []

    # manager
    objects = UserManager()

    def __str__(self):
        return self.phone_number
