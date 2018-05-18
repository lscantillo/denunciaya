import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { TotalPage } from '../total/total';
import { GraficasPage } from '../graficas/graficas';
import { MasPage } from '../mas/mas';

/**
 * Generated class for the GraficosPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-graficos',
  templateUrl: 'graficos.html'
})
export class GraficosPage {

  // inicioRoot = 'InicioPage'
  // totalRoot = 'TotalPage'
  // graficasRoot = 'GraficasPage'
  // masRoot = 'MasPage'
  inicioRoot = InicioPage;
  totalRoot = TotalPage;
  graficasRoot = GraficasPage
  masRoot = MasPage;


  constructor(public navCtrl: NavController) {}

}
