import { ListsComponent } from './lists/lists.component';


export const FEED_ROUTES: any[] = [
    {
        name: 'post-list',
        url: "/posts",
        views: {
            'content': ListsComponent
        }
    },
]
;