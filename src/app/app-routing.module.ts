import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { SigninComponent } from './layout/signin/signin.component';
import { SignupComponent } from './layout/signup/signup.component';

const routes: Routes = [
    { path: '', component: HomeComponent, data: {
        title: 'home',
        breadcrumb: [
                {
                    label: 'Trang chủ',
                    url: '/'
                }
            ]
        },
    },
    { path: 'signin', component: SigninComponent, data: {
        title: 'Signin',
        breadcrumb: [
                {
                    label: 'Trang chủ',
                    url: '/'
                },
                {
                    label: 'Đăng nhập',
                    url: 'signin'
                }
            ]
        },
    },
    { path: 'signup', component: SignupComponent, data: {
        title: 'Signup',
        breadcrumb: [
                {
                    label: 'Trang chủ',
                    url: '/'
                },
                {
                    label: 'Đăng ký',
                    url: 'signup'
                }
            ]
        },
    },
    // { path: 'category', component: HomeComponent, data: {
    //     title: 'category',
    //     breadcrumb: [
    //             {
    //                 label: 'Category',
    //                 url: '/category'
    //             }
    //         ]
    //     },
    // },
    // { path: 'category/item', component: HomeComponent, data: {
    //     title: 'item',
    //     breadcrumb: [
    //             {
    //                 label: 'Category',
    //                 url: '/category'
    //             },
    //             {
    //                 label: 'Item',
    //                 url: '/category/item'
    //             }
    //         ]
    //     },
    // },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
