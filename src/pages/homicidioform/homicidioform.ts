import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav} from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { HomePage } from '../home/home';
//Importamos paquetes de Geolocalización
import { Geolocation } from '@ionic-native/geolocation';

//@IonicPage()
declare var google: any;
@Component({
  selector: 'page-homicidioform',
  templateUrl: 'homicidioform.html',
})
export class HomicidioformPage {
  @ViewChild(Nav) nav: Nav;
 // arrDenuncias=[];

  
  arrDenuncias= {};
  ubicacion: boolean;
  lat: any;
  lng: any;  
  location: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public geo: Geolocation, private fdb: AngularFireDatabase) {
    // this.fdb.list("/Denuncias/").valueChanges().subscribe(_data=>{
    // this.arrDenuncias=_data;
    // console.log(this.arrDenuncias);
    // });
    this.showMap();     
  }

 
  EnviarHom(){
    this.showMap();
    if (this.ubicacion == true) {
      //this.showMap();
      console.log("True_toggle_gps")
      this.arrDenuncias[0]={Latitud:this.lat,Longitud:this.lng};
      this.fdb.list("/Denuncias/Homicidio").push(this.arrDenuncias)
      // this.fdb.list("/Denuncias/Homicidio").push({Latitud:this.lat})
      // this.fdb.list("/Denuncias/Homicidio").push({Latitud:this.lng})
      console.log("Latitud",this.lat)
      this.navCtrl.push(HomePage);
      //this.nav.setRoot(HomePage);

      } else{

        this.fdb.list("/Denuncias/Homicidio").push(this.arrDenuncias)    
        this.navCtrl.push(HomePage);
        //this.nav.setRoot(HomePage);        
        console.log("False_toggle_gps")
        
      }
         
   
  }


  showMap(){
    this.geo.getCurrentPosition().then(pos =>{
      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;
      return this.lat,this.lng
    
    
    }).catch(err => console.log(err));   
  }


}
