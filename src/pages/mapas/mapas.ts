import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


//@IonicPage()

declare var google: any;

@Component({
  selector: 'page-mapas',
  templateUrl: 'mapas.html',
})
export class MapasPage {

  items: Observable<any[]>;
  
  
 
  

  lat: any;
  lng: any;  
  location: any;

  @ViewChild('map') mapRef: ElementRef;
  //map:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public geo: Geolocation,private fdb: AngularFireDatabase,public loadingCtrl: LoadingController) {
    this.items = fdb.list('Mapa').valueChanges();
    // Sentencia para obtener los ultimos valores de las coordenadas de la base de datos
   // this.items = fdb.list('/Mapa', ref => ref.limitToLast(2)).valueChanges();  
    //this.showMap();
    
  }

  ionViewDidLoad() {   
  
  // let loading = this.loadingCtrl.create({
  //   content: 'Please wait...'
  // });

  // loading.present();     
  setTimeout(() => {    
    this.showMap();
    }, 2000);
    //this.showMap();   
  }

  

  showMap(){
    
    this.geo.getCurrentPosition().then(pos =>{
      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;
      const location = new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude);      
      
       
     var heatmapData = [];
      //   this.items.forEach(element => {
      //     const point = new google.maps.LatLng(obj.Latitud,obj.Longitud)
      //     heatmapData.push(point)
      //     console.log(heatmapData);
      // });
      
      this.items.forEach(
       element => {      
       //console.log(element);
       element.forEach(element => {
         const point = new google.maps.LatLng(element.Latitud,element.Longitud)
        heatmapData.push(point)
         console.log(element.Latitud)

       });
       //console.log('Latitud:', element);
      });
      console.log(heatmapData)      

      
      // var heatmapData = [
      //   new google.maps.LatLng(10.9724155,-74.905229),
      //   new google.maps.LatLng(10.899273, -74.868453),
      //   new google.maps.LatLng(10.907434, -74.783954),
      //   new google.maps.LatLng(10.889070, -74.977887),
      //   new google.maps.LatLng(10.887710, -75.070699),
      //   new google.maps.LatLng(10.842817, -75.049227),
      //   new google.maps.LatLng(10.763216, -75.106022),
      //   new google.maps.LatLng(10.753690, -74.973039),
      //   new google.maps.LatLng(10.645478, -74.925248),
      //   new google.maps.LatLng(10.605314, -74.846982),
      //   new google.maps.LatLng(10.636629, -74.772179),
      //   new google.maps.LatLng(10.728512, -74.761790),
      //   new google.maps.LatLng(10.765768, -74.759192),
      //   new google.maps.LatLng(10.788732, -74.763694),
      //   new google.maps.LatLng(10.798427, -74.759885),
      //   new google.maps.LatLng(10.853953, -74.775730),
      //   new google.maps.LatLng(10.908233, -74.781052),
      //   new google.maps.LatLng(10.905222, -74.806008),
      //   new google.maps.LatLng(10.910129, -74.782216),
      //   new google.maps.LatLng(10.921762, -74.771292),
      //   new google.maps.LatLng(10.919756, -74.760092),
      //   new google.maps.LatLng(10.939048, -74.768698),
      //   new google.maps.LatLng(10.942559, -74.766851),
      //   new google.maps.LatLng(10.945260, -74.762607)
      // ];
      //var heatmapData = [];
      
    const options = {
      center: location,      
      zoom: 12,      
      panControl: true,
    }
    //setTimeout(() => {
    const map = new google.maps.Map(this.mapRef.nativeElement,options);
    this.addMarker(location, map);
    // }, 2000);

    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: heatmapData //json coordenadas
      //data: coord
    });
    // heatmap.setMap(map);
    setInterval(heatmap.setMap(map),500);
    
    
    }).catch(err => console.log(err));   
  }

  addMarker(position,map){
    return new google.maps.Marker({
      position,
      map          
     } );
  }

  

}
