import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { HurtotransportePage } from '../hurtotransporte/hurtotransporte';
import { HurtocomercioPage } from '../hurtocomercio/hurtocomercio';
import { HurtopersonasPage } from '../hurtopersonas/hurtopersonas';
import { HurtoresidenciasPage } from '../hurtoresidencias/hurtoresidencias';


@IonicPage()
@Component({
  selector: 'page-claseshurto',
  templateUrl: 'claseshurto.html',
})
export class ClaseshurtoPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  

  denunciatransporte(){
  
    this.navCtrl.push(HurtotransportePage);
  }

  denunciacomercio(){
    
    this.navCtrl.push(HurtocomercioPage);
    
  }

  denunciapersonas(){
     
    this.navCtrl.push(HurtopersonasPage);
      
  }

  denunciaresidencias(){
        
   this.navCtrl.push(HurtoresidenciasPage);
        
  }

}
