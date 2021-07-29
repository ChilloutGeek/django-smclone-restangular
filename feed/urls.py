from django.urls import path
from .views import PostView, CommentView

urlpatterns = [

    path('posts/', PostView.as_view({
        'get':'postlist',
        'post':'createpost'
    })),

    path('comments/', CommentView.as_view({
        'get':'get'
    }))
]