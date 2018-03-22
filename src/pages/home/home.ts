import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular/navigation/nav-controller';
//import { AlertaPage } from '../alerta/alerta';
//import { AngularFireDatabase } from 'angularfire2/database';
import { HomicidioformPage } from '../homicidioform/homicidioform';
import { HurtoformPage } from '../hurtoform/hurtoform';
import { ViolenciaformPage } from '../violenciaform/violenciaform';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public alertCtrl: AlertController,
              public navCtrl: NavController
              ) 
               { } 


  alertarobo(){
    
      let confirm = this.alertCtrl.create({
        title: 'Términos y Condiciones',
        message: 'Señor usuario, le damos la bienvenida al Sistema Nacional de Denuncia Virtual. Le informamos que para dar trámite a las diferentes solicitudes que pueden realizarse en este Sistema, se requiere del registro de toda la información requerida. A esta información por usted brindada, se le dará el tratamiento de la "Ley 1581 de 2012. Ley de Protección de Datos Personales".',
        buttons: [
          {
            text: 'Disagree',
            handler: () => {
              console.log('Disagree clicked');
              //this.navCtrl.push(HomePage);
            }
          },
          {
            text: 'Agree',
            handler: () => {
              console.log('Agree clicked');              
             this.navCtrl.push(HurtoformPage);
              
            }
          }
        ]
      });
      confirm.present();
    
  }

  alertaviolencia(){
    
    let confirm = this.alertCtrl.create({
      title: 'Términos y Condiciones',
      message: 'Señor usuario, le damos la bienvenida al Sistema Nacional de Denuncia Virtual. Le informamos que para dar trámite a las diferentes solicitudes que pueden realizarse en este Sistema, se requiere del registro de toda la información requerida. A esta información por usted brindada, se le dará el tratamiento de la "Ley 1581 de 2012. Ley de Protección de Datos Personales".',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
            //this.navCtrl.push(HomePage);
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');              
           this.navCtrl.push(ViolenciaformPage);
            
          }
        }
      ]
    });
    confirm.present();
  
  }

  alertahomicidio(){
    
    let confirm = this.alertCtrl.create({
      title: 'Términos y Condiciones',
      message: 'Señor usuario, le damos la bienvenida al Sistema Nacional de Denuncia Virtual. Le informamos que para dar trámite a las diferentes solicitudes que pueden realizarse en este Sistema, se requiere del registro de toda la información requerida. A esta información por usted brindada, se le dará el tratamiento de la "Ley 1581 de 2012. Ley de Protección de Datos Personales".',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
            //this.navCtrl.push(HomePage);
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');              
           this.navCtrl.push(HomicidioformPage);
            
          }
        }
      ]
    });
    confirm.present();
  
  }

  }


