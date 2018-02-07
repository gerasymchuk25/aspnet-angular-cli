import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
        data: {
          title: 'Home',
          meta: [{ name: 'description', content: 'This is an Counter page Description!' }],
          links: [
            { rel: 'canonical', href: 'http://blogs.example.com/counter/something' },
            { rel: 'alternate', hreflang: 'es', href: 'http://es.example.com/counter' }
          ]
        }
      },
      {
        path: 'counter',
        component: CounterComponent,
        data: {
          title: 'Counter',
          meta: [{ name: 'description', content: 'This is an Counter page Description!' }],
          links: [
            { rel: 'canonical', href: 'http://blogs.example.com/counter/something' },
            { rel: 'alternate', hreflang: 'es', href: 'http://es.example.com/counter' }
          ]
        }
      },
      {
        path: 'fetch-data',
        loadChildren: 'app/fetch-data/fetch-data.module#FetchDataModule',
        data: {
          title: 'Fetch Data',
          meta: [{ name: 'description', content: 'This is an Counter page Description!' }],
          links: [
            { rel: 'canonical', href: 'http://blogs.example.com/counter/something' },
            { rel: 'alternate', hreflang: 'es', href: 'http://es.example.com/counter' }
          ]
        }
      }
    ], { useHash: false, enableTracing: false, initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
