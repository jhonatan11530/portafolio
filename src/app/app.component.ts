import { Component, AfterViewInit, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  public habilidad: Array<any> = []; framework: Array<any> = [];Certificaciones: Array<any> = [];
    
  // ngOnInit EJECUTA ARRAY
    ngOnInit(): void {
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
            img: 'assets/img/spring.svg'
          }
    
        ]
        this.Certificaciones=[
          {
            img: 'assets/img/Certificado Tecnologo.svg',
            url:'assets/PDF/Certificado Tecnologo.pdf'
          },
          {
            img: 'assets/img/Certificado Arquic Compu.svg',
            url:'assets/PDF/Certificado Arquic Compu.pdf'
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
        $('.fixed-action-btn').floatingActionButton({
          toolbarEnabled: true
        });
        
          $('.tooltipped').tooltip();
          $('.modal').modal();
          $('.sidenav').sidenav();
          $('.materialboxed').materialbox();
          $(".soy").click(function () {
              $('html, body').animate({
                  scrollTop: $("#quiensoy").offset().top
              }, 1500);
          });

          $(".down").click(function () {
              $('html, body').animate({
                  scrollTop: $("#habilidades").offset().top
              }, 1500);
          });

          $(".down1").click(function () {
              $('html, body').animate({
                  scrollTop: $("#framework").offset().top
              }, 1500);
          });

          $(".down2").click(function () {
              $('html, body').animate({
                  scrollTop: $("#proyecto").offset().top
              }, 1500);
          });

          $(".down3").click(function () {
              $('html, body').animate({
                  scrollTop: $("#habilidades").offset().top
              }, 1500);
          });

          $(".down4").click(function () {
              $('html, body').animate({
                  scrollTop: $("#framework").offset().top
              }, 1500);
          });

          $(".down5").click(function () {
              $('html, body').animate({
                  scrollTop: $("#proyecto").offset().top
              }, 1500);
          });
      });
  }
  
}
