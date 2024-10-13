import {Routes} from '@angular/router';
import {HomeComponent} from '@app/features/pages/home/home.component';
import {DetailsComponent} from '@app/features/pages/details/details.component';
import {NotFoundPageComponent} from '@app/features/pages/not-found-page/not-found-page.component';
import {RegisterComponent} from "@app/features/auth/register/register.component";
import {LoginComponent} from "@app/features/auth/login/login.component";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home details',
    },
    {
        path: 'register',
        component: RegisterComponent,
        title: 'Register Page'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login Page'
    },
    {
        path: '**',
        component: NotFoundPageComponent,
        title: 'Not Found Page'
    }
];
