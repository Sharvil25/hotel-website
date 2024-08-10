import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageGridComponent } from './image-grid/image-grid.component';
import { HeaderComponent } from './reusable/header/header.component';
import { BannerComponent } from './reusable/banner/banner.component';
import { AboutComponent } from './reusable/about/about.component';
import { MenuComponent } from './reusable/menu/menu.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { TestimonialComponent } from './reusable/testimonial/testimonial.component';
import { GallaryComponent } from './reusable/gallary/gallary.component';
import { ContactComponent } from './reusable/contact/contact.component';
import { HeaderMobileComponent } from './reusable/header-mobile/header-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageGridComponent,
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    MenuComponent,
    TestimonialComponent,
    GallaryComponent,
    ContactComponent,
    HeaderMobileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SlickCarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
