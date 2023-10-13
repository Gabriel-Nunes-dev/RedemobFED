import { Component } from '@angular/core';
import {ChildrenOutletContexts, Router} from "@angular/router";
import {LoaderService} from "./shared/services/loader.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'consumoRedemob';
  getRouteAnimationData() {
    let data =
      this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
    return data;
  }

  constructor(
    private contexts: ChildrenOutletContexts,
    public loaderService: LoaderService,
    private router: Router
  ) {}

  ngOnInit(): void {

  }


}
