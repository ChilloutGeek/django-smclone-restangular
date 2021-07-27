from django.urls import path
from .views import ProfileList, ProfileUser

urlpatterns = [
    path('', ProfileUser.as_view({
        'get':'get',
    })),

    path('', ProfileList.as_view({
        'get':'get',
    }))
]