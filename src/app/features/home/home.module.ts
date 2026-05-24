import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { FeaturedListingsComponent } from './components/featured-listings/featured-listings.component';
import { CategoriesSectionComponent } from './components/categories-section/categories-section.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroSectionComponent,
    FeaturedListingsComponent,
    CategoriesSectionComponent,
    HowItWorksComponent
  ],
  imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}