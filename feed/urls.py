from django.urls import path
from .views import PostView, CommentView

urlpatterns = [

    path('posts/', PostView.as_view({
        'get':'postlist',
        'post':'create'
    })),

    path('posts/<int:post_id>/comments/', CommentView.as_view({
        'get':'comments'
    }))
]