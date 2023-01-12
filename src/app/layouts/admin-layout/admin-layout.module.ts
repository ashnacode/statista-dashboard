import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { LbdModule } from '../../lbd/lbd.module';
// import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { AspectLeftComponent } from '../../components/aspect-left/aspect-left.component';
import { AspectRightComponent } from '../../components/aspect-right/aspect-right.component';
import { BenchmarkLeftComponent } from '../../components/benchmark-left/benchmark-left.component';
import { BenchmarkRightComponent } from '../../components/benchmark-right/benchmark-right.component';
import { AspectChartLeftComponent } from '../../components/aspect-chart-left/aspect-chart-left.component';
import { AspectChartRightComponent } from '../../components/aspect-chart-right/aspect-chart-right.component';

import { BenchmarkingComponent } from '../../benchmarking/benchmarking.component';
import { ChartRadarComponent } from '../../components/chart-radar/chart-radar.component';
import { ChartAspectComponent } from '../../widgets/chart-aspect/chart-aspect.component';
import { ReviewsComponent } from '../../widgets/reviews/reviews.component';
import { NgChartsModule } from 'ng2-charts';





@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgChartsModule,
  ],
  declarations: [
    HomeComponent,
    SearchBarComponent,
    AspectLeftComponent,
    AspectRightComponent,
    BenchmarkLeftComponent,
    BenchmarkRightComponent,
    AspectChartLeftComponent,
    AspectChartRightComponent,
    BenchmarkingComponent,
    ChartRadarComponent,
    ChartAspectComponent,
    ReviewsComponent,
  ]
})

export class AdminLayoutModule {}
