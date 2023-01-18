import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talepedilenler',
  templateUrl: './talepedilenler.component.html',
  styleUrls: ['./talepedilenler.component.scss']
})
export class TalepedilenlerComponent implements OnInit {

  onayBeklenenForm : any = 4;
  panelOpenState = false;

  onayBeklenenFormlar : any[] = [
    {talepTipi : 'İzin Talebi', name : 'Test Kullanıcısı1', neden : 'Yıllık İzin', baslangicTarih : '20-10-2022 00:00:00', bitisTarihi : '20-10-2022 00:00:00', aciklama : 'Test açıklama yazıyorum'},
    {talepTipi : 'İzin Talebi', name : 'Test Kullanıcısı2', neden : 'Yıllık İzin', baslangicTarih : '20-10-2022 00:00:00', bitisTarihi : '20-10-2022 00:00:00', aciklama : 'Test açıklama yazıyorum'},
    {talepTipi : 'Fazla Mesai Talebi', name : 'Test Kullanıcısı3', neden : 'Fazla mesai nedeni', baslangicTarih : '10-10-2022 00:00:00', bitisTarihi : '12-10-2022 00:00:00', aciklama : 'Test açıklama yazıyorum'},
    {talepTipi : 'Araç Talebi', name : 'Test Kullanıcısı4', neden : 'Araç talebi nedeni', baslangicTarih : '22-10-2022 00:00:00', bitisTarihi : '24-10-2022 00:00:00', aciklama : 'Test açıklama yazıyorum'}
  ];

  onaylananFormlar : any[] = [
    {talepTipi : 'İzin Talebi', name : 'Test Kullanıcısı2', neden : 'Yıllık İzin', baslangicTarih : '20-10-2022 00:00:00', bitisTarihi : '20-10-2022 00:00:00', aciklama : 'Test açıklama yazıyorum'},
    {talepTipi : 'Fazla Mesai Talebi', name : 'Test Kullanıcısı3', neden : 'Fazla mesai nedeni', baslangicTarih : '10-10-2022 00:00:00', bitisTarihi : '12-10-2022 00:00:00', aciklama : 'Test açıklama yazıyorum'},
    {talepTipi : 'Araç Talebi', name : 'Test Kullanıcısı4', neden : 'Araç talebi nedeni', baslangicTarih : '22-10-2022 00:00:00', bitisTarihi : '24-10-2022 00:00:00', aciklama : 'Test açıklama yazıyorum'}
  ];

  reddedilenFormlar : any[] = [
    {talepTipi : 'İzin Talebi', name : 'Test Kullanıcısı1', neden : 'Yıllık İzin', baslangicTarih : '20-10-2022 00:00:00', bitisTarihi : '20-10-2022 00:00:00', aciklama : 'Test açıklama yazıyorum'},
    {talepTipi : 'İzin Talebi', name : 'Test Kullanıcısı2', neden : 'Yıllık İzin', baslangicTarih : '20-10-2022 00:00:00', bitisTarihi : '20-10-2022 00:00:00', aciklama : 'Test açıklama yazıyorum'},
    {talepTipi : 'Fazla Mesai Talebi', name : 'Test Kullanıcısı3', neden : 'Fazla mesai nedeni', baslangicTarih : '10-10-2022 00:00:00', bitisTarihi : '12-10-2022 00:00:00', aciklama : 'Test açıklama yazıyorum'},
    {talepTipi : 'Araç Talebi', name : 'Test Kullanıcısı4', neden : 'Araç talebi nedeni', baslangicTarih : '22-10-2022 00:00:00', bitisTarihi : '24-10-2022 00:00:00', aciklama : 'Test açıklama yazıyorum'},
    {talepTipi : 'Araç Talebi', name : 'Test Kullanıcısı4', neden : 'Araç talebi nedeni', baslangicTarih : '22-10-2022 00:00:00', bitisTarihi : '24-10-2022 00:00:00', aciklama : 'Test açıklama yazıyorum'},
    {talepTipi : 'Araç Talebi', name : 'Test Kullanıcısı4', neden : 'Araç talebi nedeni', baslangicTarih : '22-10-2022 00:00:00', bitisTarihi : '24-10-2022 00:00:00', aciklama : 'Test açıklama yazıyorum'},
    {talepTipi : 'Araç Talebi', name : 'Test Kullanıcısı4', neden : 'Araç talebi nedeni', baslangicTarih : '22-10-2022 00:00:00', bitisTarihi : '24-10-2022 00:00:00', aciklama : 'Test açıklama yazıyorum'},
    {talepTipi : 'Araç Talebi', name : 'Test Kullanıcısı4', neden : 'Araç talebi nedeni', baslangicTarih : '22-10-2022 00:00:00', bitisTarihi : '24-10-2022 00:00:00', aciklama : 'Test açıklama yazıyorum'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
