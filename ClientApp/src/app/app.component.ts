import {Component, Injector, OnInit} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  private routerSub$: Subscription;
  // This will go at the END of your title for example "Home - Angular Universal..." <-- after the dash (-)
  private endPageTitle: string = 'Angular Universal and ASP.NET Core Starter';
  // If no Title is provided, we'll use a default one before the dash(-)
  private defaultPageTitle: string = 'My App';

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private title: Title,
              private meta: Meta,
              private injector: Injector)
  {}

  ngOnInit() {
    // Change "Title" on every navigationEnd event
    // Titles come from the data.title property on all Routes (see app.routes.ts)
    this._changeTitleOnNavigation();
  }

  private _changeTitleOnNavigation() {
    this.routerSub$ = this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe((event) => {
        this._setMetaAndLinks(event);
      });
  }

  private _setMetaAndLinks(event) {
    // Set Title if available, otherwise leave the default Title
    const title = event['title']
      ? `${event['title']} - ${this.endPageTitle}`
      : `${this.defaultPageTitle} - ${this.endPageTitle}`;

    this.title.setTitle(title);
  }
}
