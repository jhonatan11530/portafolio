import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  // FILA 1 CARD 1
  title: String = 'UNIVERSAL DE GRADAS';
  ESTRUCTURA: String = 'HTML5';
  CSS3: String = 'CSS3';
  STYLES:String ='color: dodgerblue;';
  JavaScript: String = 'JavaScript';
  Materialize: String = 'Materialize';
  link: String = 'https://github.com/jhonatan11530/Universal-de-gradas';
  btn: String = 'btn btn-primary';
  url: String = 'https://universaldegradas.com/';
  img: String = 'assets/img/universal.png';
  // FILA 1 CARD 2
  title_0: String = 'INARDEK';
  ESTRUCTURA_0: String = 'WordPress';
  CSS3_0: String = 'CSS3';
  JavaScript_0: String = 'JavaScript';
  Materialize_0: String = 'Bootstrap';
  link_0: String = 'https://github.com/juniorwilson/inardek';
  url_0: String = 'https://inardek.com/';
  img_0: String = 'assets/img/inardek.png';

  // FILA 1 CARD 3
  title_1: String = 'MAINCO APP WEB';
  ESTRUCTURA_1: String = 'LARAVEL';
  CSS3_1: String = 'HTML5';
  JavaScript_1: String = 'JavaScript';
  Materialize_1: String = 'Bootstrap';
  link_1: String = 'https://github.com/jhonatan11530/Mainco_Health_APP_Web';
  img_1: String = 'assets/img/mainco.jpg';

  // FILA 2 CARD 1
  title_2: String = 'MAINCO APP MOVIL';
  ESTRUCTURA_2: String = 'JAVA';
  CSS3_2: String = 'Material Design';
  JavaScript_2: String = 'PHP';
  Materialize_2: String = 'API REST FULL';
  link_2: String = 'https://github.com/jhonatan11530/Mainco_Health_APP_Movil';
  img_2: String = 'assets/img/mainco.jpg';

  // FILA 2 CARD 2
  title_3: String = 'MULTIGRADAS';
  ESTRUCTURA_3: String = 'WordPress';
  CSS3_3: String = 'HTML5';
  JavaScript_3: String = 'JavaScript';
  Materialize_3: String = 'Bootstrap';
  link_3: String = 'https://github.com/jhonatan11530/multigradas';
  url_3: String = 'https://multigradas.com.co/';
  img_3: String = 'assets/img/multigradas.jpg';

  // FILA 2 CARD 3
  title_4: String = 'MAINCO APP CALIDAD';
  ESTRUCTURA_4: String = 'C#';
  CSS3_4: String = 'SQL SERVER';
  JavaScript_4: String = 'API Office Interop Excel';
  Materialize_4: String = '';
  link_4: String = 'https://github.com/jhonatan11530/Mainco-Indicador-de-acciones-Calidad';
  img_4: String = 'assets/img/mainco.jpg';

  // FILA 3 CARD 1
  title_5: String = 'MAINCO APP GESTION HUMANA';
  ESTRUCTURA_5: String = 'C#';
  CSS3_5: String = 'SQL SERVER';
  JavaScript_5: String = 'API Office Interop Excel';
  Materialize_5: String = '';
  link_5: String = 'https://github.com/jhonatan11530/Mainco-GH-Incapacidades-medica';
  img_5: String = 'assets/img/mainco.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
