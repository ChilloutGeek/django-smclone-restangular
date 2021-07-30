from django.urls import path
from .views import ProfileList, ProfileUser

urlpatterns = [
    path('profileuser/', ProfileUser.as_view({
        'get':'get',
    })),

    path('profilelist/', ProfileList.as_view({
        'get':'get',
    }))
]