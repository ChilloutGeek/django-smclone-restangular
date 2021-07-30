import { ListsComponent } from './lists/lists.component';
import { CreateComponent } from './create/create.component';
import { NavbarComponent } from 'src/app/components/globals/navbar/navbar.component';
import { SidelistsComponent } from './sidelists/sidelists.component';


const NavContent = (content: any) => {
    return {
        header: NavbarComponent,
        content,
        SidelistsComponent
    }
}


export const FEED_ROUTES: any[] = [
    {
        name: 'post-list',
        url: "/homefeed",
        views: NavContent(ListsComponent)
    },
    {
        name: 'post-create',
        url: "/posts/create",
        views: NavContent(CreateComponent)
    }
]
;
