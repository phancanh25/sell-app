import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    declarations: [HeaderComponent, FooterComponent, HomeComponent, NotFoundComponent, SigninComponent, SignupComponent],
    imports: [CommonModule],
    exports: [HeaderComponent, FooterComponent],
})
export class LayoutModule {}
