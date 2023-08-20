from django.shortcuts import render
from .models import Article
from django.http import HttpResponse
# Create your views here.

def index(request):
    latestArticleList=Article.objects.order_by('-articleTime')[:5]
    output=', '.join([str(tmp.articleProblemNumber)+' / '+ tmp.articleNote for tmp in latestArticleList])
    return HttpResponse(output)