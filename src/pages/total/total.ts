import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import Chart from 'chart.js'

/**
 * Generated class for the TotalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-total',
  templateUrl: 'total.html',
})


export class TotalPage {

  data: Observable<any[]>;
  ref: AngularFireList<any>;
// Datos de las redes sociales
  dataRed: Observable<any[]>;
  refRed: AngularFireList<any>;

  // Datos de los tipos de denuncias
  datatype: Observable<any[]>;
  reftype: AngularFireList<any>;

  // Datos de las redes sociales
  datahurto: Observable<any[]>;
  refhurto: AngularFireList<any>;
 
 
  types = [
    {value: 0, name: 'Aplicación'},
    {value: 1, name: 'Twitter'},   
   
  ];

  redes = [
    {value: 0, name: 'Con GPS'},
    {value: 1, name: 'Sin GPS'},   
   
  ];

  clases = [
    {value: 0, name: 'Homicidios'},
    {value: 1, name: 'Hurto'},
    {value: 2, name: 'Violencia'},  
   
  ];

  hurto = [
    {value: 0, name: 'Comercio'},
    {value: 1, name: 'Personas'},
    {value: 2, name: 'Residencias'},
    {value: 3, name: 'Transporte'},     
   
  ];



 
  // transaction = {
  //   value: 0,
  //   expense: false,
  //   month: 0
  // }
 
  @ViewChild('valueBarsCanvas') valueBarsCanvas;
  @ViewChild('valueBarRedes') valueBarRedes ;
  @ViewChild('valueBarTipos') valueBarTipos;
  @ViewChild('valueBarHurtos') valueBarHurtos ;


  valueBarsChart: any;
  valueBarRed: any;
  valueBarTipo: any;
  valueBarHurto: any;

  chartData = null;
  chartDataRed = null;
  chartDataTipo = null;
  chartDataHurto = null;
 

  constructor(public navCtrl: NavController, private db: AngularFireDatabase, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {

    this.ref = this.db.list('Datos/Total', ref => ref.orderByChild('month'));
    this.refRed = this.db.list('Datos/TotalRedes', ref => ref.orderByChild('month'));
    this.reftype = this.db.list('Denuncias/Total', ref => ref.orderByChild('month'));
    this.refhurto = this.db.list('Denuncias/Hurto/Total', ref => ref.orderByChild('month'));
    // Catch any update to draw the Chart
    this.ref.valueChanges().subscribe(result => {
      if (this.chartData) {
        this.updateCharts(result)
      } else {
        this.createCharts(result)
      }
    })

    this.refRed.valueChanges().subscribe(result => {
      if (this.chartDataRed) {
        this.updateChartsRed(result)
      } else {
        this.createChartsRed(result)
      }
    })

    this.reftype.valueChanges().subscribe(result => {
      if (this.chartDataTipo) {
        this.updateChartstype(result)
      } else {
        this.createChartstype(result)
      }
    })

    this.refhurto.valueChanges().subscribe(result => {
      if (this.chartDataHurto) {
        this.updateChartshurto(result)
      } else {
        this.createChartshurto(result)
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
      type: 'bar',
      data: {
        labels: Object.keys(this.types).map(a => this.types[a].name),
        datasets: [{
          data: chartData,
          backgroundColor: '#32db64'
        }]
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItems, data) {
              return data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] +' denuncias';
            }
          }
        },
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          yAxes: [{
            ticks: {
              callback: function (value, index, values) {
                return value ;
              },
              beginAtZero: true
              // suggestedMin: 0
            }
          }]
        },
      }
    });
  }


  createChartsRed(data) {
    this.chartDataRed = data;
   
    // Calculate Values for the Chart
    // let chartData = this.getReportValues();
       let chartDataRed = this.chartDataRed
       console.log(chartDataRed)
    // Create the chart
    this.valueBarRed = new Chart(this.valueBarRedes.nativeElement, {
      type: 'bar',
      data: {
        labels: Object.keys(this.redes).map(a => this.redes[a].name),
        datasets: [{
          data: chartDataRed,
          backgroundColor: '#32a2db'
        }]
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItems, data) {
              return data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] +' denuncias';
            }
          }
        },
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          yAxes: [{
            ticks: {
              callback: function (value, index, values) {
                return value ;
              },
              beginAtZero: true
              // suggestedMin: 0
            }
          }]
        },
      }
    });
  }

  createChartstype(data) {
    this.chartDataTipo = data;
   
    // Calculate Values for the Chart
    // let chartData = this.getReportValues();
       let chartDataTipo = this.chartDataTipo
       console.log(chartDataTipo)
    // Create the chart
    this.valueBarTipo = new Chart(this.valueBarTipos.nativeElement, {
      type: 'bar',
      data: {
        labels: Object.keys(this.clases).map(a => this.clases[a].name),
        datasets: [{
          data: chartDataTipo,
          backgroundColor: '#db5332'
        }]
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItems, data) {
              return data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] +' denuncias';
            }
          }
        },
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          yAxes: [{
            ticks: {
              callback: function (value, index, values) {
                return value ;
              },
              beginAtZero: true
              // suggestedMin: 0
            }
          }]
        },
      }
    });
  }


  createChartshurto(data) {
    this.chartDataHurto = data;
   
    // Calculate Values for the Chart
    // let chartData = this.getReportValues();
       let chartDataHurto = this.chartDataHurto
       console.log(chartDataHurto)
    // Create the chart
    this.valueBarHurto = new Chart(this.valueBarHurtos.nativeElement, {
      type: 'bar',
      data: {
        labels: Object.keys(this.hurto).map(a => this.hurto[a].name),
        datasets: [{
          data: chartDataHurto,
          backgroundColor: '#db3264'
        }]
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItems, data) {
              return data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] +' denuncias';
            }
          }
        },
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          yAxes: [{
            ticks: {
              callback: function (value, index, values) {
                return value ;
              },
              beginAtZero: true
              // suggestedMin: 0
            }
          }]
        },
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

  updateChartsRed(data) {
    this.chartDataRed = data;
    // let chartData = this.getReportValues();
    let chartDataRed = this.chartDataRed
   
    // Update our dataset
    this.valueBarRed.data.datasets.forEach((dataset) => {
      dataset.data = chartDataRed
    });
    this.valueBarRed.update();
  }

  updateChartstype(data) {
    this.chartDataTipo = data;
    // let chartData = this.getReportValues();
    let chartDataTipo = this.chartDataTipo
   
    // Update our dataset
    this.valueBarTipo.data.datasets.forEach((dataset) => {
      dataset.data = chartDataTipo
    });
    this.valueBarTipo.update();
  }

  updateChartshurto(data) {
    this.chartDataHurto = data;
    // let chartData = this.getReportValues();
    let chartDataHurto = this.chartDataHurto
       
    // Update our dataset
    this.valueBarHurto.data.datasets.forEach((dataset) => {
      dataset.data = chartDataHurto
    });
    this.valueBarHurto.update();
  }

}
