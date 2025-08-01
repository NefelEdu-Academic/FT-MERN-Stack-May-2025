import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsComponent } from './forms/forms.component';
import { DisplayComponent } from './display/display.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:"about", component: AboutComponent},
    {path: "contact", component: ContactComponent},
    {path: "profile/:id/:title", component: ProfileComponent},
    {path: "form", component: FormsComponent},
    {path: "display", component: DisplayComponent},
];
