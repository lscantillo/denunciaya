import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the TelefonosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-telefonos',
  templateUrl: 'telefonos.html',
})
export class TelefonosPage {

  pages: Array<{number:string, text: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,private callNumber: CallNumber) {

    this.pages = [
      //{ title: 'Home', component: HomePage },
      { number: '123', text: 'Número integral de seguridad y emergencias' },
      { number: '125', text: 'Ambulancias' },
      { number: '165', text: 'Gaula (Antisecuestro)' },
      { number: '147', text: 'Gaula (Antiextorsiones)' },
      { number: '111', text: 'Atención a Desastres' },
      { number: '119', text: 'Bomberos de Colombia' },
      { number: '156', text: 'CAI de la Policía Nacional' },
      { number: '157', text: 'DIJIN' },
      { number: '112', text: 'Policía' },
      { number: '127', text: 'Policía de Tránsito' }
      
      
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TelefonosPage');
  }

  openPhone(phone) {

    this.callNumber.callNumber(phone.number, false)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
    console.log(phone.number);
    
  }

}
