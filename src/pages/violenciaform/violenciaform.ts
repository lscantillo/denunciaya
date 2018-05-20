import { Component,ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav,  Platform } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { HomePage } from '../home/home';
import { Geolocation } from '@ionic-native/geolocation';
import { Observable } from 'rxjs/Observable';

//@IonicPage()
declare var google: any;
@Component({
  selector: 'page-violenciaform',
  templateUrl: 'violenciaform.html',
})
export class ViolenciaformPage {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;
  arrDenuncias= {};
  ubicacion: boolean;
  lat: any;
  lng: any;  
  location: any;
  contador: number;
  item: Observable<any[]>;
  constructor(public platform: Platform, public navCtrl: NavController, public navParams: NavParams, private fdb: AngularFireDatabase,public geo: Geolocation) {
    this.item = fdb.list('Denuncias/Total').valueChanges();
    
    this.item.forEach(element => {
      this.contador = element[2];
      console.log("Element: ", element[2])

    });
    this.showMap();  
  }

  EnviarViolencia(){

    this.showMap();
    if (this.ubicacion == true) {
      //this.showMap();
      console.log("True_toggle_gps")
      this.arrDenuncias[0]={Latitud:this.lat,Longitud:this.lng};
      this.fdb.list("/Denuncias/Violencia").push(this.arrDenuncias)
      this.fdb.list("/Mapa").push({Latitud:this.lat,Longitud:this.lng})      
      console.log("Latitud",this.lat)

      this.contador = this.contador + 1;
      console.log("Nuevo item: ",this.contador)
      //this.fdb.list('Denuncias/Total').push({Homicidio: this.contador});
      this.fdb.list('Denuncias/').update('Total' ,{Violencia: this.contador});

      this.navCtrl.push(HomePage);
      

      } else{

        this.fdb.list("/Denuncias/Violencia").push(this.arrDenuncias) 
        
        this.contador = this.contador + 1;
        console.log("Nuevo item: ",this.contador)
        //this.fdb.list('Denuncias/Total').push({Homicidio: this.contador});
        this.fdb.list('Denuncias/').update('Total' ,{Violencia: this.contador});
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
