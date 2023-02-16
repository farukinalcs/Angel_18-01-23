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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DialogLokasyonDetayComponent } from './talepler/mobillokasyon/dialog-lokasyon-detay/dialog-lokasyon-detay.component';
import { DialogFazlaMesaiTalebiComponent } from './talep-olustur/dialog-fazla-mesai-talebi/dialog-fazla-mesai-talebi.component';
import { DialogZiyaretciTalebiComponent } from './talep-olustur/dialog-ziyaretci-talebi/dialog-ziyaretci-talebi.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DialogSaatlikIzinTalebiComponent } from './talep-olustur/dialog-saatlik-izin-talebi/dialog-saatlik-izin-talebi.component';
import { DialogGunlukIzinTalebiComponent } from './talep-olustur/dialog-gunluk-izin-talebi/dialog-gunluk-izin-talebi.component';
import { TranslationModule } from 'src/app/modules/i18n';


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
    ProfileDataWidgetComponent,
    DialogLokasyonDetayComponent,
    DialogFazlaMesaiTalebiComponent,
    DialogZiyaretciTalebiComponent,
    DialogSaatlikIzinTalebiComponent,
    DialogGunlukIzinTalebiComponent
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
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatStepperModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    TranslationModule
    
  ]
})
export class ProfileModule { }
