from django.urls import path
from .views import ArticleListView

urlpatterns = [
    path('list/',ArticleListView.as_view(), name='index'),
    
]
