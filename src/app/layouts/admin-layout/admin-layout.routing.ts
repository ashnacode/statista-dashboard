import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { BenchmarkingComponent } from '../../benchmarking/benchmarking.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'benchmark',      component: BenchmarkingComponent },
];
