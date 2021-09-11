import { Component, AfterViewInit, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  public habilidad: Array<any> = []; framework: Array<any> = []; Certificaciones: Array<any> = []; proyectos: Array<any> = []; Databases: Array<any> = []; CMS: Array<any> = [];

  // ngOnInit EJECUTA ARRAY
  ngOnInit(): void {
    this.Certificaciones = [
      {
        filtro: 'SENA',
        img: 'assets/img/Certificado Tecnologo.svg',
        url: 'assets/PDF/Certificado Tecnologo.pdf'
      },
      {
        filtro: 'SENA',
        img: 'assets/img/Certificado Arquic Compu.svg',
        url: 'assets/PDF/Certificado Arquic Compu.pdf'
      },
      {
        filtro: 'GOOGLE',
        img: 'assets/img/Certificado Desarrollo de Apps.svg',
        url: 'assets/PDF/Certificado Desarrollo de Apps.pdf'
      },
      {
        filtro: 'OTROS',
        img: 'assets/img/Certificado Movistar-Wordpress.svg',
        url: 'assets/PDF/Certificado Movistar-Wordpress.pdf'
      },
      {
        filtro: 'OTROS',
        img: 'assets/img/Certificado Movistar-JavaScript.svg',
        url: 'assets/PDF/Certificado Movistar-JavaScript.pdf'
      }

    ]
    this.habilidad = [
      {
        img: 'assets/img/html.svg'
      },
      {
        img: 'assets/img/css.svg'
      },
      {
        img: 'assets/img/javascript.svg'
      },
      {
        img: 'assets/img/Csharp.svg'
      },
      {
        img: 'assets/img/java.svg'
      },
      {
        img: 'assets/img/php.svg'
      },
      {
        img: 'assets/img/jquery.svg'
      },
      {
        img: 'assets/img/sass.svg'
      },
      {
        img: 'assets/img/dotnet.svg'
      },
      {
        img: 'assets/img/Git.svg'
      },
      {
        img: 'assets/img/github.svg'
      }

    ]
    this.CMS = [
      {
        img: 'assets/img/WordPress.svg'
      }
    ]
    this.framework = [
      {
        img: 'assets/img/laravel.svg'
      },
      {
        img: 'assets/img/angular.svg'
      },
      {
        img: 'assets/img/Android_Studio.svg'
      },
      {
        img: 'assets/img/Visual_Studio.svg'
      },
      {
        img: 'assets/img/Nodejs.svg'
      },
      {
        img: 'assets/img/ExpressJS.svg'
      }
    ]
    this.Databases = [
      {
        img: 'assets/img/mysql.svg',
      },
      {
        img: 'assets/img/sqlserver.svg',
      },
      {
        img: 'assets/img/oracle.svg',
      }
    ]
    this.proyectos = [
      {
        title: 'UNIVERSAL DE GRADAS',
        Estructura: 'HTML5',
        Css: 'Css',
        Style: 'color: dodgerblue;',
        JavaScript: 'JavaScript',
        Materialize: 'Materialize',
        link: 'https://github.com/jhonatan11530/Universal-de-gradas',
        btn: 'btn btn-primary',
        url: 'https://universaldegradas.com/',
        img: 'assets/img/universal.svg',
        href: 'Collapse'

      },
      {
        title: 'INARDEK',
        Estructura: 'WordPress',
        Css: 'Css',
        Style: 'color: dodgerblue;',
        JavaScript: 'JavaScript',
        Materialize: 'Bootstrap',
        link: 'https://github.com/jhonatan11530/Inardek',
        btn: 'btn btn-primary',
        url: 'https://inardek.com/',
        img: 'assets/img/inardek.svg',
        href: 'Collapse1'
      },
      {
        title: 'MAINCO APP WEB',
        Estructura: 'LARAVEL',
        Css: 'HTML5',
        Style: 'color: dodgerblue;',
        JavaScript: 'JavaScript',
        Materialize: 'Bootstrap',
        link: 'https://github.com/jhonatan11530/Mainco_Health_APP_Web',
        btn: 'btn btn-primary',
        url: '',
        img: 'assets/img/mainco.svg',
        href: 'Collapse2'
      },
      {
        title: 'MAINCO APP MOVIL',
        Estructura: 'JAVA',
        Css: 'Material Design',
        Style: 'color: dodgerblue;',
        JavaScript: 'PHP',
        Materialize: 'API REST FULL',
        link: 'https://github.com/jhonatan11530/Mainco_Health_APP_Movil',
        btn: 'btn btn-primary',
        url: '',
        img: 'assets/img/mainco.svg',
        href: 'Collapse3'
      },
      {
        title: 'MULTIGRADAS',
        Estructura: 'WordPress',
        Css: 'HTML5',
        Style: 'color: dodgerblue;',
        JavaScript: 'JavaScript',
        Materialize: 'Bootstrap',
        link: 'https://github.com/jhonatan11530/multigradas',
        btn: 'btn btn-primary',
        url: 'https://multigradas.com.co/',
        img: 'assets/img/multigradas.svg',
        href: 'Collapse4'
      },
      {
        title: 'MAINCO APP CALIDAD',
        Estructura: 'C#',
        Css: 'SQL SERVER',
        Style: 'color: dodgerblue;',
        JavaScript: 'API Office Interop Excel',
        Materialize: '',
        link: 'https://github.com/jhonatan11530/Mainco-Indicador-de-acciones-Calidad',
        btn: 'btn btn-primary',
        url: '',
        img: 'assets/img/mainco.svg',
        href: 'Collapse5'
      },
      {
        title: 'MAINCO APP GESTION HUMANA',
        Estructura: 'C#',
        Css: 'SQL SERVER',
        Style: 'color: dodgerblue;',
        JavaScript: 'API Office Interop Excel',
        Materialize: '',
        link: 'https://github.com/jhonatan11530/Mainco-GH-Incapacidades-medica',
        btn: 'btn btn-primary',
        url: '',
        img: 'assets/img/mainco.svg',
        href: 'Collapse6'
      },
      {
        title: 'TELCOBRAS',
        Estructura: 'Bootstrap',
        Css: 'Js',
        Style: 'color: dodgerblue;',
        JavaScript: 'Jquery',
        Materialize: 'Laravel',
        link: 'https://github.com/jhonatan11530/Telcobras',
        btn: 'btn btn-primary',
        url: 'https://telcobras.com',
        img: 'assets/img/Telcobras.svg',
        href: 'Collapse7'
      },
      {
        title: 'STRATECSA',
        Estructura: 'Bootstrap',
        Css: 'Js',
        Style: 'color: dodgerblue;',
        JavaScript: 'Jquery',
        Materialize: 'Laravel',
        link: 'https://github.com/jhonatan11530/stratecsa',
        btn: 'btn btn-primary',
        url: 'https://stratecsa.com',
        img: 'assets/img/stratecsa.svg',
        href: 'Collapse8'
      }
    ]
  }
  useLanguage(language: string): void {
    this.translate.use(language);
  }
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
  }
  // ngAfterViewInit EJECUTA JS Y JQUERY 
  ngAfterViewInit() {
    $(document).ready(function () {

      $('[data-toggle="popover"]').popover();
      $("#liveToastBtnES").click(function () {
        $('.toast').toast('show');
      });
      $("#liveToastBtnEN").click(function () {
        $('.toast').toast('show');
      });
      $("#soy").click(function () {
        $('html, body').animate({
          scrollTop: $("#quiensoy").offset().top
        }, 1500);
      });

      $("#down").click(function () {
        $('html, body').animate({
          scrollTop: $("#habilidades").offset().top
        }, 1500);
      });

      $("#down1").click(function () {
        $('html, body').animate({
          scrollTop: $("#framework").offset().top
        }, 1500);
      });

      $("#down2").click(function () {
        $('html, body').animate({
          scrollTop: $("#proyecto").offset().top
        }, 1500);
      });
      $('#certificadoItem').on('change', function () {
        var data = $("#certificadoItem").val();

        if (data=="TODO"){
          $('[id=SENA]').show();
          $('[id=GOOGLE]').show();
          $('[id=DATABASE]').show();
          $('[id=OTROS]').show();
         }
        if (data == "SENA") {
          $('[id=SENA]').show();
          $('[id=GOOGLE]').hide();
          $('[id=DATABASE]').hide();
          $('[id=OTROS]').hide();
        }
        if (data == "GOOGLE") {
          $('[id=SENA]').hide();
          $('[id=GOOGLE]').show();
          $('[id=DATABASE]').hide();
          $('[id=OTROS]').hide();
        }
        if (data == "DATABASE") {
          $('[id=SENA]').hide();
          $('[id=GOOGLE]').hide();
          $('[id=DATABASE]').show();
          $('[id=OTROS]').hide();
        }
        if (data == "OTROS") {
          $('[id=SENA]').hide();
          $('[id=GOOGLE]').hide();
          $('[id=DATABASE]').hide();
          $('[id=OTROS]').show();
        }

      });
    });
  }
}