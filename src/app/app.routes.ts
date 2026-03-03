import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { MenuComponent } from './pages/menu/menu';
import { GalleryComponent } from './pages/gallery/gallery';
import { EventsComponent } from './pages/events/events';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'events', component: EventsComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '' }
];
