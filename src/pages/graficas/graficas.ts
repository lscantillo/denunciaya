import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import Chart from 'chart.js'

/**
 * Generated class for the GraficasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-graficas',
  templateUrl: 'graficas.html',
})
export class GraficasPage {

  data: Observable<any[]>;
  items: Observable<any[]>;
  ref: AngularFireList<any>;

  types = [
    {value: 0, name: 'Aplicación'},
    {value: 1, name: 'Twitter'},   
   
  ];

   
  @ViewChild('valueBarsCanvas') valueBarsCanvas;

  
  valueBarsChart: any;
  chartData = null;
  constructor(public navCtrl: NavController, private db: AngularFireDatabase, private toastCtrl: ToastController) {
    this.items = db.list('Datos/TotalDenuncias/').valueChanges();
  }

  ionViewDidLoad() {   
    

      this.ref = this.db.list('Datos/Total', ref => ref.orderByChild('month'));
      
      // Catch any update to draw the Chart
      this.ref.valueChanges().subscribe(result => {
        if (this.chartData) {
          this.updateCharts(result)
        } else {
          this.createCharts(result)
        }
      })     
      
    
  }


  createCharts(data) {
    this.chartData = data;
   
    // Calculate Values for the Chart
    // let chartData = this.getReportValues();
       let chartData = this.chartData
       console.log(chartData)
    // Create the chart
    this.valueBarsChart = new Chart(this.valueBarsCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: Object.keys(this.types).map(a => this.types[a].name),
        
        datasets: [{
          data: chartData,
          // backgroundColor: '#32db64'
          backgroundColor: [
            ('#36a2eb'),
            ('#ff6384'),                   
            ],
            
        }]
      },
     
      options: {
        legend: {
          display: true
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItems, data) {
              return data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] +' denuncias';
            }
          }
        },
        // scales: {
        //   xAxes: [{
        //     ticks: {
        //       beginAtZero: true
        //     }
        //   }],
        //   yAxes: [{
        //     ticks: {
        //       callback: function (value, index, values) {
        //         return value ;
        //       },
        //       beginAtZero: true
        //       // suggestedMin: 0
        //     }
        //   }]
        // },

        
        
      }
    });
  }


  updateCharts(data) {
    this.chartData = data;
    // let chartData = this.getReportValues();
    let chartData = this.chartData
   
    // Update our dataset
    this.valueBarsChart.data.datasets.forEach((dataset) => {
      dataset.data = chartData
    });
    this.valueBarsChart.update();
  }


}
