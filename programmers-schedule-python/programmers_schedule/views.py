from django.shortcuts import render
from .models import Article
from django.http import HttpResponse
# Create your views here.

def index(request):
    latestArticleList=Article.objects.order_by('-articleTime')[:5]
    output='\n'.join([str(tmp.articleProblemNumber)+' / '+ tmp.articleNote for tmp in latestArticleList])
    output = "<pre>{}</pre>".format(output) # new line 작동되게 함
    return HttpResponse(output)