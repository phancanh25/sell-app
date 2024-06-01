import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent, data: {
        title: 'home',
        breadcrumb: [
                {
                    label: 'Home',
                    url: '/'
                }
            ]
        },
    },
    { path: 'category', component: HomeComponent, data: {
        title: 'category',
        breadcrumb: [
                {
                    label: 'Category',
                    url: '/category'
                }
            ]
        },
    },
    { path: 'category/item', component: HomeComponent, data: {
        title: 'item',
        breadcrumb: [
                {
                    label: 'Category',
                    url: '/category'
                },
                {
                    label: 'Item',
                    url: '/category/item'
                }
            ]
        },
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
