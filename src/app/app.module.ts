import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "**", redirectTo: "home"}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot (routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
