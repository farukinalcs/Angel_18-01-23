import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-mobillokasyon',
  templateUrl: './mobillokasyon.component.html',
  styleUrls: ['./mobillokasyon.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class MobillokasyonComponent implements OnInit {
  @ViewChild(MatPaginator, {static : true}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  columnsToDisplay : string[] = ['id', 'harita', 'yerAd', 'adSoyad', 'eventTime', 'IO', 'adres']; 
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  dataSource :MatTableDataSource<any>;
  expandedElement: any | null;
  lokasyonListesi : any[] = [
    {id : '1', harita : '', yerAd : 'Kayıt Yok..', adSoyad : 'Test Kulanıcısı', eventTime : '2023-01-11T10:06:24', IO : 'Çıkış', adres : 'Test cd. Test sk. İstanbul/Türkiye'},
    {id : '1', harita : 'Test', yerAd : 'Kayıt Yok..', adSoyad : 'Test Kulanıcısı', eventTime : '2023-01-11T10:06:24', IO : 'Çıkış', adres : 'Test cd. Test sk. İstanbul/Türkiye'},
    {id : '1', harita : 'Test', yerAd : 'Kayıt Yok..', adSoyad : 'Test Kulanıcısı', eventTime : '2023-01-11T10:06:24', IO : 'Çıkış', adres : 'Test cd. Test sk. İstanbul/Türkiye'},
    {id : '1', harita : 'Test', yerAd : 'Kayıt Yok..', adSoyad : 'Test Kulanıcısı', eventTime : '2023-01-11T10:06:24', IO : 'Çıkış', adres : 'Test cd. Test sk. İstanbul/Türkiye'}
  ];
  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.lokasyonListesi);
    this.dataSource.paginator = this.paginator;
  }



  // <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24089.341169036295!2d29.127422!3d40.9997037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1673425189231!5m2!1str!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  // <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24089.341169036295!2d29.127422!3d40.9997037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1673425283484!5m2!1str!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  // <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!{{1d6759774.621925058!2d27.427691222729887}}!3d40.{{65789637683933}}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!{{4v1673425368707}}!5m2!1str!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  // <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!{{1d3012.143034768043!2d29.222215415276153}}!3d40.{{97834867930379}}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacfe69146009f%3A0x9fd1d91beb3dfa3!2sEy%C3%BCp%20Sultan%2C%20Sekmen%20Cd%20No%3A26%20D%3A28%2C%2034885%20Sancaktepe%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1673426752415!5m2!1str!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
