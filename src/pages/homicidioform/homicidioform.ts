import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { HomePage } from '../home/home';
//Impotamos paquetes de Geolocalizacion
import { Geolocation } from '@ionic-native/geolocation';

//@IonicPage()
declare var google: any;
@Component({
  selector: 'page-homicidioform',
  templateUrl: 'homicidioform.html',
})
export class HomicidioformPage {

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
      
      this.fdb.list("/Denuncias/Homicidio").push(this.arrDenuncias)
      this.fdb.list("/Denuncias/Homicidio/Latitud").push(this.lat)
      console.log("Latitud",this.lat)
      this.navCtrl.push(HomePage);

      } else{

        this.fdb.list("/Denuncias/Homicidio").push(this.arrDenuncias)    
        this.navCtrl.push(HomePage);
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
