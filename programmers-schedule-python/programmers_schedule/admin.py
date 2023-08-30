from django.contrib import admin

from .models import Article,AccumulateTime,ColorTheme
# Register your models here.

admin.site.register(Article)
admin.site.register(AccumulateTime)
admin.site.register(ColorTheme)