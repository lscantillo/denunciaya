import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the MapasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()

declare var google: any;

@Component({
  selector: 'page-mapas',
  templateUrl: 'mapas.html',
})
export class MapasPage {

  lat: any;
  lng: any;
  location: any;
  @ViewChild('map') mapRef: ElementRef;
  //map:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public geo: Geolocation) {
  }

  ionViewDidLoad() {
  //  this.geo.getCurrentPosition().then(pos =>{
  //    this.lat = pos.coords.latitude;
  //    this.lng = pos.coords.longitude;
  //  }).catch(err => console.log(err));
  this.showMap();

  }

  showMap(){
    this.geo.getCurrentPosition().then(pos =>{
      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;
      const location = new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude);
     

    const options = {
      center: location,
      zoom: 16,
      panControl: true,
    }
    //setTimeout(() => {
    const map = new google.maps.Map(this.mapRef.nativeElement,options);
    this.addMarker(location, map);
    // }, 2000);
    
    }).catch(err => console.log(err));   
  }

  addMarker(position,map){
    return new google.maps.Marker({
      position,
      map
     } );
  }

}
