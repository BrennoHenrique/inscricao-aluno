import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "example-01",
        loadChildren: () => import('./pages/example-01/student-list.module').then(m => m.Ex01StudentListModule)
    },
    {
        path: "example-02",
        loadChildren: () => import('./pages/example-02/student-list.module').then(m => m.Ex02StudentListModule)
    },
    {
        path: "**",
        redirectTo: "example-01",
        pathMatch: "full"
    },
    {
        path: "",
        redirectTo: "example-01",
        pathMatch: "full"
    }
];
