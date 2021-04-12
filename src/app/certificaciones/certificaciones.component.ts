import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.css']
})
export class CertificacionesComponent implements OnInit {
  @Input() DataEntrante:any;
  constructor() { }

  ngOnInit(): void {
  }

}
