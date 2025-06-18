import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutusComponent},
    {path:'contact',component:ContactComponent},
    {path:'project',component:ProjectComponent}
];
