import { Routes } from '@angular/router';
import { List } from './features/list/list';

export const routes: Routes = [
    {
        path: '',
        component: List
    },
    {
        path: ':name',
        loadComponent: () => import('./features/details/details').then((c) => c.Details),
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    },

];
