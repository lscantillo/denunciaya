import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { HomePage } from '../home/home';
/**
 * Generated class for the HurtoformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hurtoform',
  templateUrl: 'hurtoform.html',
})
export class HurtoformPage {
  arrDenuncias= {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private fdb: AngularFireDatabase) {
    // this.fdb.list("/Denuncias/").valueChanges().subscribe(_data=>{
    //   this.arrDenuncias=_data;
    //   console.log(this.arrDenuncias);
  
    //   });

  }

  EnviarHurto(){
    this.fdb.list("/Denuncias/Hurto").push(this.arrDenuncias)
    // this.fdb.list<'items'>("/Denuncias/Homicidio/Apellidos").push(this.Apellidos)
    // this.fdb.list<'items'>("/Denuncias/Homicidio/Telefono").push(this.Telefono)
    this.navCtrl.push(HomePage);
  }


  

}
