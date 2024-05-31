import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './layout/not-found/not-found.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule],
})
export class RouteModule {}
