import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-homicidioform',
  templateUrl: 'homicidioform.html',
})
export class HomicidioformPage {

 // arrDenuncias=[];
  arrDenuncias= {};
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private fdb: AngularFireDatabase) {
    // this.fdb.list("/Denuncias/").valueChanges().subscribe(_data=>{
    // this.arrDenuncias=_data;
    // console.log(this.arrDenuncias);

    // });
      
  }

 
  EnviarHom(){
    this.fdb.list("/Denuncias/Homicidio").push(this.arrDenuncias)    
    this.navCtrl.push(HomePage);
   
  }


}
