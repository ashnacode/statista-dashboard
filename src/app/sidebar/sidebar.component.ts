import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Aspect scores',  icon: 'pe-7s-graph', class: '' },
    { path: '/benchmark', title: 'Benchmark',  icon: 'pe-7s-timer', class: '' },
    { path: '/1', title: 'Time series',  icon: 'pe-7s-graph1', class: '' },
    { path: '/2', title: 'Driver analysis',  icon: 'pe-7s-science', class: '' },
    { path: '/3', title: 'Aspect details',  icon: 'pe-7s-graph', class: '' },
    { path: '/4', title: 'Change Dashboard',  icon: 'pe-7s-rocket', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
