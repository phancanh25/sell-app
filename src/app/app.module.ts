import { NgModule } from '@angular/core';
import {
    BrowserModule,
    provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '../@core/core.module';
import { LayoutModule } from './layout/layout.module';
import { RouteModule } from './route.module';
import { NgDynamicBreadcrumbModule } from 'ng-dynamic-breadcrumb';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        LayoutModule,
        RouteModule,
        NgDynamicBreadcrumbModule
    ],
    providers: [provideClientHydration()],
    bootstrap: [AppComponent],
})
export class AppModule {}
