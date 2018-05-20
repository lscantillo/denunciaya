import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav} from 'ionic-angular';
import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';
import { HomePage } from '../home/home';
//Importamos paquetes de Geolocalización
import { Geolocation } from '@ionic-native/geolocation';
import { Observable } from 'rxjs/Observable';

//@IonicPage()
declare var google: any;
@Component({
  selector: 'page-homicidioform',
  templateUrl: 'homicidioform.html',
})
export class HomicidioformPage {
  @ViewChild(Nav) nav: Nav;
 // arrDenuncias=[];

  //items: Observable<any[]>;
  item: Observable<any[]>;
  arrDenuncias= {};
  ubicacion: boolean;
  lat: any;
  lng: any;  
  location: any;
  contador: number;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public geo: Geolocation, private fdb: AngularFireDatabase) {
    // this.fdb.list("/Denuncias/").valueChanges().subscribe(_data=>{
    // this.arrDenuncias=_data;
    // console.log(this.arrDenuncias);
    // });
    this.item = fdb.list('Denuncias/Total').valueChanges();
    
    this.item.forEach(element => {
      this.contador = element[0];
      console.log("Element: ", element[0])

    });

    this.showMap(); 
    
      
  }

 
  EnviarHom(){

    this.showMap();
    if (this.ubicacion == true) {
      //this.showMap();
      console.log("True_toggle_gps")
      this.arrDenuncias[0]= {Latitud:this.lat,Longitud:this.lng};
      console.log("Latitud",this.lat)
      this.fdb.list("/Denuncias/Homicidio").push(this.arrDenuncias)
      this.fdb.list("/Mapa").push({Latitud:this.lat,Longitud:this.lng})      
      
      
      
      this.contador = this.contador + 1;
      console.log("Nuevo item: ",this.contador)
      //this.fdb.list('Denuncias/Total').push({Homicidio: this.contador});
      this.fdb.list('Denuncias/').update('Total' ,{Homicidio: this.contador});

      this.navCtrl.push(HomePage);
      //this.nav.setRoot(HomePage);
      

      } else{

        this.fdb.list("/Denuncias/Homicidio").push(this.arrDenuncias)  
        this.contador = this.contador + 1;
        console.log("Nuevo item: ",this.contador)
        //this.fdb.list('Denuncias/Total').push({Homicidio: this.contador});
        this.fdb.list('Denuncias/').update('Total' ,{Homicidio: this.contador});  
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
