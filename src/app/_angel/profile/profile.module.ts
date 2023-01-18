import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfiledashboardComponent } from './profiledashboard/profiledashboard.component';
import { RouterModule } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { GecislerimComponent } from './islemler/gecislerim/gecislerim.component';
import { IzinlerimComponent } from './islemler/izinlerim/izinlerim.component';
import { SurelerimComponent } from './islemler/surelerim/surelerim.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { TalepedilenlerComponent } from './talepler/talepedilenler/talepedilenler.component';
import { TaleplerimComponent } from './talepler/taleplerim/taleplerim.component';
import { ZiyaretcitaleplerimComponent } from './talepler/ziyaretcitaleplerim/ziyaretcitaleplerim.component';
import { MobillokasyonComponent } from './talepler/mobillokasyon/mobillokasyon.component';
import { TasklistemComponent } from './talepler/tasklistem/tasklistem.component';
import { TakimimComponent } from './talepler/takimim/takimim.component';
import { ProfileDataWidgetComponent } from './profile-data-widget/profile-data-widget.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips'
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ProfiledashboardComponent,
    GecislerimComponent,
    IzinlerimComponent,
    SurelerimComponent,
    TalepedilenlerComponent,
    TaleplerimComponent,
    ZiyaretcitaleplerimComponent,
    MobillokasyonComponent,
    TasklistemComponent,
    TakimimComponent,
    ProfileDataWidgetComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProfiledashboardComponent,
      },
    ]),
    InlineSVGModule,
    MatTabsModule,
    MatChipsModule,
    MatCardModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule
    
  ]
})
export class ProfileModule { }
