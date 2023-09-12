import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './views/welcome-page/welcome-page.component';
import { GalleryComponent } from './views/gallery/gallery.component';
import { AboutComponent } from './views/about/about.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
