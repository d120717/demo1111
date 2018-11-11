import { Page2Component } from './page2/page2.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { Page1Component } from './page1/page1.component';
import { Page2detailComponent } from './page2detail/page2detail.component';

const routes: Route[] = [
  { path: 'page1', component: Page1Component },
  {
    path: 'page2',
    component: Page2Component,
    children: [{ path: ':id', component: Page2detailComponent }],
  },
  { path: '**', redirectTo: 'page1', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent, Page1Component, Page2Component, Page2detailComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
