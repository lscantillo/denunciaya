webpackJsonp([9],{

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomicidioformPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//Importamos paquetes de Geolocalización

var HomicidioformPage = (function () {
    function HomicidioformPage(navCtrl, navParams, geo, fdb) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geo = geo;
        this.fdb = fdb;
        this.arrDenuncias = {};
        // this.fdb.list("/Denuncias/").valueChanges().subscribe(_data=>{
        // this.arrDenuncias=_data;
        // console.log(this.arrDenuncias);
        // });
        this.item = fdb.list('Denuncias/Total').valueChanges();
        this.item.forEach(function (element) {
            _this.contador = element[0];
            console.log("Element: ", element[0]);
        });
        this.showMap();
    }
    HomicidioformPage.prototype.EnviarHom = function () {
        this.showMap();
        if (this.ubicacion == true) {
            //this.showMap();
            console.log("True_toggle_gps");
            this.arrDenuncias[0] = { Latitud: this.lat, Longitud: this.lng };
            console.log("Latitud", this.lat);
            this.fdb.list("/Denuncias/Homicidio").push(this.arrDenuncias);
            this.fdb.list("/Mapa").push({ Latitud: this.lat, Longitud: this.lng });
            this.contador = this.contador + 1;
            console.log("Nuevo item: ", this.contador);
            //this.fdb.list('Denuncias/Total').push({Homicidio: this.contador});
            this.fdb.list('Denuncias/').update('Total', { Homicidio: this.contador });
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            //this.nav.setRoot(HomePage);
        }
        else {
            this.fdb.list("/Denuncias/Homicidio").push(this.arrDenuncias);
            this.contador = this.contador + 1;
            console.log("Nuevo item: ", this.contador);
            //this.fdb.list('Denuncias/Total').push({Homicidio: this.contador});
            this.fdb.list('Denuncias/').update('Total', { Homicidio: this.contador });
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            //this.nav.setRoot(HomePage);        
            console.log("False_toggle_gps");
        }
    };
    HomicidioformPage.prototype.showMap = function () {
        var _this = this;
        this.geo.getCurrentPosition().then(function (pos) {
            _this.lat = pos.coords.latitude;
            _this.lng = pos.coords.longitude;
            return _this.lat, _this.lng;
        }).catch(function (err) { return console.log(err); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], HomicidioformPage.prototype, "nav", void 0);
    HomicidioformPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-homicidioform',template:/*ion-inline-start:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\homicidioform\homicidioform.html"*/'<!--\n  Generated template for the HomicidioformPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title class="center">Formulario Homicidio</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <form #loginForm="ngForm"  autocomplete="off">\n  <ion-list>\n    \n    <h4 class="center">Digite los siguientes campos</h4>\n    <ion-item>\n      <ion-label stacked>Nombres</ion-label>\n      <ion-input required name="nombres" [(ngModel)]="arrDenuncias.Nombres" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Apellidos</ion-label>\n      <ion-input required name="apellidos" [(ngModel)]="arrDenuncias.Apellidos" type="text" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked>Género</ion-label>\n        <ion-select require name="genero" [(ngModel)]="arrDenuncias.Genero">\n            <ion-option value="Masculino">Masculino</ion-option>\n            <ion-option value="Femenino">Femenino</ion-option>                   \n          </ion-select>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>Tipo de Documento</ion-label>\n      <ion-select required name="documento" [(ngModel)]="arrDenuncias.TipoDocumento">\n        <ion-option value="CC">Cédula de ciudadanía</ion-option>\n        <ion-option value="CE">Cédula de Extranjeria</ion-option>\n        <ion-option value="TI">Tarjeta de Identidad</ion-option>        \n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Número de Documento</ion-label>\n      <ion-input required name="nrodocumento" [(ngModel)]="arrDenuncias.NumDoc" type="number"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Telefono</ion-label>\n      <ion-input required name="telefono" [(ngModel)]="arrDenuncias.Telefono" type="number"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Correo Electrónico</ion-label>\n      <ion-input required name="correo" [(ngModel)]="arrDenuncias.Email" type="email"></ion-input>\n    </ion-item>\n\n    <h4 class="center">Información de la denuncia</h4>\n\n    <ion-item>\n        <ion-label stacked>Describa la denuncia</ion-label>\n        <ion-input required name="denuncia" [(ngModel)]="arrDenuncias.Denuncia" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked>Dirección de la denuncia</ion-label>\n        <ion-input required name="direccion" [(ngModel)]="arrDenuncias.DireccionDenuncia" type="text"></ion-input>\n    </ion-item>\n\n    \n    \n    \n    <ion-item>\n      <ion-label>Ubicación Actual</ion-label>\n      <ion-toggle name="ubicacion" [(ngModel)]="ubicacion" checked="false"></ion-toggle>\n    </ion-item>\n  \n  </ion-list>\n\n    \n    <div padding>\n      <button (click)="EnviarHom()" ion-button class="submit-btn" full type="submit" [disabled]="!loginForm.form.valid">Enviar Denuncia</button>\n    </div>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\homicidioform\homicidioform.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], HomicidioformPage);
    return HomicidioformPage;
}());

//# sourceMappingURL=homicidioform.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViolenciaformPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViolenciaformPage = (function () {
    function ViolenciaformPage(platform, navCtrl, navParams, fdb, geo) {
        var _this = this;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fdb = fdb;
        this.geo = geo;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.arrDenuncias = {};
        this.item = fdb.list('Denuncias/Total').valueChanges();
        this.item.forEach(function (element) {
            _this.contador = element[2];
            console.log("Element: ", element[2]);
        });
        this.showMap();
    }
    ViolenciaformPage.prototype.EnviarViolencia = function () {
        this.showMap();
        if (this.ubicacion == true) {
            //this.showMap();
            console.log("True_toggle_gps");
            this.arrDenuncias[0] = { Latitud: this.lat, Longitud: this.lng };
            this.fdb.list("/Denuncias/Violencia").push(this.arrDenuncias);
            this.fdb.list("/Mapa").push({ Latitud: this.lat, Longitud: this.lng });
            console.log("Latitud", this.lat);
            this.contador = this.contador + 1;
            console.log("Nuevo item: ", this.contador);
            //this.fdb.list('Denuncias/Total').push({Homicidio: this.contador});
            this.fdb.list('Denuncias/').update('Total', { Violencia: this.contador });
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }
        else {
            this.fdb.list("/Denuncias/Violencia").push(this.arrDenuncias);
            this.contador = this.contador + 1;
            console.log("Nuevo item: ", this.contador);
            //this.fdb.list('Denuncias/Total').push({Homicidio: this.contador});
            this.fdb.list('Denuncias/').update('Total', { Violencia: this.contador });
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            console.log("False_toggle_gps");
        }
    };
    ViolenciaformPage.prototype.showMap = function () {
        var _this = this;
        this.geo.getCurrentPosition().then(function (pos) {
            _this.lat = pos.coords.latitude;
            _this.lng = pos.coords.longitude;
            return _this.lat, _this.lng;
        }).catch(function (err) { return console.log(err); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], ViolenciaformPage.prototype, "nav", void 0);
    ViolenciaformPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-violenciaform',template:/*ion-inline-start:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\violenciaform\violenciaform.html"*/'<!--\n  Generated template for the ViolenciaformPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title class="center">Formulario Violencia</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form #loginForm="ngForm"  autocomplete="off">\n        <ion-list>\n          \n          <h4 class="center">Digite los siguientes campos</h4>\n          <ion-item>\n            <ion-label stacked>Nombres</ion-label>\n            <ion-input required name="nombres" [(ngModel)]="arrDenuncias.Nombres" type="text"></ion-input>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label stacked>Apellidos</ion-label>\n            <ion-input required name="apellidos" [(ngModel)]="arrDenuncias.Apellidos" type="text" required></ion-input>\n          </ion-item>\n      \n          <ion-item>\n              <ion-label stacked>Género</ion-label>\n              <ion-select require name="genero" [(ngModel)]="arrDenuncias.Genero">\n                  <ion-option value="Masculino">Masculino</ion-option>\n                  <ion-option value="Femenino">Femenino</ion-option>                   \n                </ion-select>\n          </ion-item>\n        \n          <ion-item>\n            <ion-label>Tipo de Documento</ion-label>\n            <ion-select required name="documento" [(ngModel)]="arrDenuncias.TipoDocumento">\n              <ion-option value="CC">Cédula de ciudadanía</ion-option>\n              <ion-option value="CE">Cédula de Extranjeria</ion-option>\n              <ion-option value="TI">Tarjeta de Identidad</ion-option>        \n            </ion-select>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label stacked>Número de Documento</ion-label>\n            <ion-input required name="nrodocumento" [(ngModel)]="arrDenuncias.NumDoc" type="number"></ion-input>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label stacked>Telefono</ion-label>\n            <ion-input required name="telefono" [(ngModel)]="arrDenuncias.Telefono" type="number"></ion-input>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label stacked>Correo Electrónico</ion-label>\n            <ion-input required name="correo" [(ngModel)]="arrDenuncias.Email" type="email"></ion-input>\n          </ion-item>\n      \n          <h4 class="center">Información de la denuncia</h4>\n      \n          <ion-item>\n              <ion-label stacked>Describa la denuncia</ion-label>\n              <ion-input required name="denuncia" [(ngModel)]="arrDenuncias.Denuncia" type="text"></ion-input>\n          </ion-item>\n      \n          <ion-item>\n              <ion-label stacked>Dirección de la denuncia</ion-label>\n              <ion-input required name="direccion" [(ngModel)]="arrDenuncias.DireccionDenuncia" type="text"></ion-input>\n          </ion-item>\n      \n          \n          \n          \n          <ion-item>\n            <ion-label>Ubicación Actual</ion-label>\n            <ion-toggle name="ubicacion" [(ngModel)]="ubicacion" checked="false"></ion-toggle>\n          </ion-item>\n        \n        </ion-list>\n      \n          \n          <div padding>\n            <button (click)="EnviarViolencia()" ion-button class="submit-btn" full type="submit" [disabled]="!loginForm.form.valid">Enviar Denuncia</button>\n          </div>\n      \n        </form>\n</ion-content>\n \n\n \n'/*ion-inline-end:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\violenciaform\violenciaform.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]])
    ], ViolenciaformPage);
    return ViolenciaformPage;
}());

//# sourceMappingURL=violenciaform.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraficasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_toast_toast_controller__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the GraficasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GraficasPage = (function () {
    function GraficasPage(navCtrl, db, toastCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.types = [
            { value: 0, name: 'Aplicación' },
            { value: 1, name: 'Twitter' },
        ];
        this.chartData = null;
        this.items = db.list('Datos/TotalDenuncias/').valueChanges();
    }
    GraficasPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.ref = this.db.list('Datos/Total', function (ref) { return ref.orderByChild('month'); });
        // Catch any update to draw the Chart
        this.ref.valueChanges().subscribe(function (result) {
            if (_this.chartData) {
                _this.updateCharts(result);
            }
            else {
                _this.createCharts(result);
            }
        });
    };
    GraficasPage.prototype.createCharts = function (data) {
        var _this = this;
        this.chartData = data;
        // Calculate Values for the Chart
        // let chartData = this.getReportValues();
        var chartData = this.chartData;
        console.log(chartData);
        // Create the chart
        this.valueBarsChart = new __WEBPACK_IMPORTED_MODULE_4_chart_js___default.a(this.valueBarsCanvas.nativeElement, {
            type: 'pie',
            data: {
                labels: Object.keys(this.types).map(function (a) { return _this.types[a].name; }),
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
                            return data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + ' denuncias';
                        }
                    }
                },
            }
        });
    };
    GraficasPage.prototype.updateCharts = function (data) {
        this.chartData = data;
        // let chartData = this.getReportValues();
        var chartData = this.chartData;
        // Update our dataset
        this.valueBarsChart.data.datasets.forEach(function (dataset) {
            dataset.data = chartData;
        });
        this.valueBarsChart.update();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('valueBarsCanvas'),
        __metadata("design:type", Object)
    ], GraficasPage.prototype, "valueBarsCanvas", void 0);
    GraficasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-graficas',template:/*ion-inline-start:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\graficas\graficas.html"*/'<!--\n  Generated template for the GraficasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>Total</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-card >\n        <ion-card-header>\n         Total Denuncias\n        </ion-card-header>\n        <ion-card-content>\n          <canvas #valueBarsCanvas></canvas>\n          <ion-label class="center" >\n            Total Denuncias:\n          </ion-label>\n          <ion-item class="center" *ngFor="let item of items | async">\n              {{item | json}}\n            </ion-item>\n        </ion-card-content>\n      </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\graficas\graficas.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_toast_toast_controller__["a" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_toast_toast_controller__["a" /* ToastController */]) === "function" && _c || Object])
    ], GraficasPage);
    return GraficasPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=graficas.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraficosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_inicio__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__total_total__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__graficas_graficas__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mas_mas__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the GraficosPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GraficosPage = (function () {
    function GraficosPage(navCtrl) {
        this.navCtrl = navCtrl;
        // inicioRoot = 'InicioPage'
        // totalRoot = 'TotalPage'
        // graficasRoot = 'GraficasPage'
        // masRoot = 'MasPage'
        this.inicioRoot = __WEBPACK_IMPORTED_MODULE_2__inicio_inicio__["a" /* InicioPage */];
        this.totalRoot = __WEBPACK_IMPORTED_MODULE_3__total_total__["a" /* TotalPage */];
        this.graficasRoot = __WEBPACK_IMPORTED_MODULE_4__graficas_graficas__["a" /* GraficasPage */];
        this.masRoot = __WEBPACK_IMPORTED_MODULE_5__mas_mas__["a" /* MasPage */];
    }
    GraficosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-graficos',template:/*ion-inline-start:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\graficos\graficos.html"*/'<ion-tabs>\n    <!-- <ion-tab [root]="inicioRoot" tabTitle="Inicio" tabIcon="home"></ion-tab> -->\n    <ion-tab [root]="totalRoot" tabTitle="Gráficas" tabIcon="stats"></ion-tab>\n    <ion-tab [root]="graficasRoot" tabTitle="Total" tabIcon="trending-up"></ion-tab>\n    <!-- <ion-tab [root]="masRoot" tabTitle="Mas" tabIcon="add-circle"></ion-tab> -->\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\graficos\graficos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], GraficosPage);
    return GraficosPage;
}());

//# sourceMappingURL=graficos.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InicioPage = (function () {
    function InicioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InicioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InicioPage');
    };
    InicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inicio',template:/*ion-inline-start:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\inicio\inicio.html"*/'<!--\n  Generated template for the InicioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>Inicio</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\inicio\inicio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], InicioPage);
    return InicioPage;
}());

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TotalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_toast_toast_controller__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TotalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TotalPage = (function () {
    function TotalPage(navCtrl, db, toastCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.types = [
            { value: 0, name: 'Aplicación' },
            { value: 1, name: 'Twitter' },
        ];
        this.redes = [
            { value: 0, name: 'Con GPS' },
            { value: 1, name: 'Sin GPS' },
        ];
        this.clases = [
            { value: 0, name: 'Homicidios' },
            { value: 1, name: 'Hurto' },
            { value: 2, name: 'Violencia' },
        ];
        this.hurto = [
            { value: 0, name: 'Comercio' },
            { value: 1, name: 'Personas' },
            { value: 2, name: 'Residencias' },
            { value: 3, name: 'Transporte' },
        ];
        this.chartData = null;
        this.chartDataRed = null;
        this.chartDataTipo = null;
        this.chartDataHurto = null;
    }
    TotalPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.ref = this.db.list('Datos/Total', function (ref) { return ref.orderByChild('month'); });
        this.refRed = this.db.list('Datos/TotalRedes', function (ref) { return ref.orderByChild('month'); });
        this.reftype = this.db.list('Denuncias/Total', function (ref) { return ref.orderByChild('month'); });
        this.refhurto = this.db.list('Denuncias/Hurto/Total', function (ref) { return ref.orderByChild('month'); });
        // Catch any update to draw the Chart
        this.ref.valueChanges().subscribe(function (result) {
            if (_this.chartData) {
                _this.updateCharts(result);
            }
            else {
                _this.createCharts(result);
            }
        });
        this.refRed.valueChanges().subscribe(function (result) {
            if (_this.chartDataRed) {
                _this.updateChartsRed(result);
            }
            else {
                _this.createChartsRed(result);
            }
        });
        this.reftype.valueChanges().subscribe(function (result) {
            if (_this.chartDataTipo) {
                _this.updateChartstype(result);
            }
            else {
                _this.createChartstype(result);
            }
        });
        this.refhurto.valueChanges().subscribe(function (result) {
            if (_this.chartDataHurto) {
                _this.updateChartshurto(result);
            }
            else {
                _this.createChartshurto(result);
            }
        });
    };
    TotalPage.prototype.createCharts = function (data) {
        var _this = this;
        this.chartData = data;
        // Calculate Values for the Chart
        // let chartData = this.getReportValues();
        var chartData = this.chartData;
        console.log(chartData);
        // Create the chart
        this.valueBarsChart = new __WEBPACK_IMPORTED_MODULE_4_chart_js___default.a(this.valueBarsCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: Object.keys(this.types).map(function (a) { return _this.types[a].name; }),
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
                            return data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + ' denuncias';
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
                                    return value;
                                },
                                beginAtZero: true
                                // suggestedMin: 0
                            }
                        }]
                },
            }
        });
    };
    TotalPage.prototype.createChartsRed = function (data) {
        var _this = this;
        this.chartDataRed = data;
        // Calculate Values for the Chart
        // let chartData = this.getReportValues();
        var chartDataRed = this.chartDataRed;
        console.log(chartDataRed);
        // Create the chart
        this.valueBarRed = new __WEBPACK_IMPORTED_MODULE_4_chart_js___default.a(this.valueBarRedes.nativeElement, {
            type: 'bar',
            data: {
                labels: Object.keys(this.redes).map(function (a) { return _this.redes[a].name; }),
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
                            return data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + ' denuncias';
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
                                    return value;
                                },
                                beginAtZero: true
                                // suggestedMin: 0
                            }
                        }]
                },
            }
        });
    };
    TotalPage.prototype.createChartstype = function (data) {
        var _this = this;
        this.chartDataTipo = data;
        // Calculate Values for the Chart
        // let chartData = this.getReportValues();
        var chartDataTipo = this.chartDataTipo;
        console.log(chartDataTipo);
        // Create the chart
        this.valueBarTipo = new __WEBPACK_IMPORTED_MODULE_4_chart_js___default.a(this.valueBarTipos.nativeElement, {
            type: 'bar',
            data: {
                labels: Object.keys(this.clases).map(function (a) { return _this.clases[a].name; }),
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
                            return data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + ' denuncias';
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
                                    return value;
                                },
                                beginAtZero: true
                                // suggestedMin: 0
                            }
                        }]
                },
            }
        });
    };
    TotalPage.prototype.createChartshurto = function (data) {
        var _this = this;
        this.chartDataHurto = data;
        // Calculate Values for the Chart
        // let chartData = this.getReportValues();
        var chartDataHurto = this.chartDataHurto;
        console.log(chartDataHurto);
        // Create the chart
        this.valueBarHurtos = new __WEBPACK_IMPORTED_MODULE_4_chart_js___default.a(this.valueBarHurtos.nativeElement, {
            type: 'bar',
            data: {
                labels: Object.keys(this.hurto).map(function (a) { return _this.hurto[a].name; }),
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
                            return data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + ' denuncias';
                        }
                    }
                },
                scales: {
                    xAxes: [{
                            ticks: {
                                beginAtZero: true,
                                fontSize: 9
                            },
                            barThickness: 40,
                        }],
                    yAxes: [{
                            ticks: {
                                callback: function (value, index, values) {
                                    return value;
                                },
                                beginAtZero: true
                                // suggestedMin: 0
                            }
                        }]
                },
            }
        });
    };
    TotalPage.prototype.updateCharts = function (data) {
        this.chartData = data;
        // let chartData = this.getReportValues();
        var chartData = this.chartData;
        // Update our dataset
        this.valueBarsChart.data.datasets.forEach(function (dataset) {
            dataset.data = chartData;
        });
        this.valueBarsChart.update();
    };
    TotalPage.prototype.updateChartsRed = function (data) {
        this.chartDataRed = data;
        // let chartData = this.getReportValues();
        var chartDataRed = this.chartDataRed;
        // Update our dataset
        this.valueBarRed.data.datasets.forEach(function (dataset) {
            dataset.data = chartDataRed;
        });
        this.valueBarRed.update();
    };
    TotalPage.prototype.updateChartstype = function (data) {
        this.chartDataTipo = data;
        // let chartData = this.getReportValues();
        var chartDataTipo = this.chartDataTipo;
        // Update our dataset
        this.valueBarTipo.data.datasets.forEach(function (dataset) {
            dataset.data = chartDataTipo;
        });
        this.valueBarTipo.update();
    };
    TotalPage.prototype.updateChartshurto = function (data) {
        this.chartDataHurto = data;
        // let chartData = this.getReportValues();
        var chartDataHurto = this.chartDataHurto;
        // Update our dataset
        this.valueBarHurto.data.datasets.forEach(function (dataset) {
            dataset.data = chartDataHurto;
        });
        this.valueBarHurto.update();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('valueBarsCanvas'),
        __metadata("design:type", Object)
    ], TotalPage.prototype, "valueBarsCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('valueBarRedes'),
        __metadata("design:type", Object)
    ], TotalPage.prototype, "valueBarRedes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('valueBarTipos'),
        __metadata("design:type", Object)
    ], TotalPage.prototype, "valueBarTipos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('valueBarHurtos'),
        __metadata("design:type", Object)
    ], TotalPage.prototype, "valueBarHurtos", void 0);
    TotalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-total',template:/*ion-inline-start:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\total\total.html"*/'<!--\n  Generated template for the TotalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>Gráficas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n      <ion-card >\n        <ion-card-header>\n          Datos de Denuncias\n        </ion-card-header>\n        <ion-card-content>\n          <canvas #valueBarsCanvas></canvas>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card >\n        <ion-card-header>\n          Datos desde Twitter\n        </ion-card-header>\n        <ion-card-content>\n          <canvas #valueBarRedes></canvas>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card >\n        <ion-card-header>\n          Datos por tipos de Denuncias\n        </ion-card-header>\n        <ion-card-content>\n          <canvas #valueBarTipos></canvas>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card >\n        <ion-card-header>\n          Datos por tipo de Hurto\n        </ion-card-header>\n        <ion-card-content>\n          <canvas #valueBarHurtos></canvas>\n        </ion-card-content>\n      </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\total\total.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_toast_toast_controller__["a" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_toast_toast_controller__["a" /* ToastController */]) === "function" && _c || Object])
    ], TotalPage);
    return TotalPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=total.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MasPage = (function () {
    function MasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MasPage');
    };
    MasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mas',template:/*ion-inline-start:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\mas\mas.html"*/'<!--\n  Generated template for the MasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>Más</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\mas\mas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MasPage);
    return MasPage;
}());

//# sourceMappingURL=mas.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TelefonosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(391);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TelefonosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TelefonosPage = (function () {
    function TelefonosPage(navCtrl, navParams, callNumber) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.callNumber = callNumber;
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
    TelefonosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TelefonosPage');
    };
    TelefonosPage.prototype.openPhone = function (phone) {
        this.callNumber.callNumber(phone.number, false)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
        console.log(phone.number);
    };
    TelefonosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-telefonos',template:/*ion-inline-start:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\telefonos\telefonos.html"*/'<!--\n  Generated template for the TelefonosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>Teléfonos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="ion-content">\n\n  <ion-list>\n      <ion-list-header class="home">\n          Marcado Rápido\n        </ion-list-header>\n\n    <ion-card  class="ion-content" *ngFor="let p of pages" (click)="openPhone(p.number)">\n      <ion-card-content ion-item class="home" >\n          <ion-icon name="call"></ion-icon> {{p.number}}    {{p.text}}\n      </ion-card-content>\n    </ion-card>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\telefonos\telefonos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */]])
    ], TelefonosPage);
    return TelefonosPage;
}());

//# sourceMappingURL=telefonos.js.map

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/alerta/alerta.module": [
		642,
		8
	],
	"../pages/claseshurto/claseshurto.module": [
		643,
		7
	],
	"../pages/graficas/graficas.module": [
		644,
		6
	],
	"../pages/graficos/graficos.module": [
		645,
		5
	],
	"../pages/hurtoform/hurtoform.module": [
		646,
		4
	],
	"../pages/inicio/inicio.module": [
		647,
		3
	],
	"../pages/mas/mas.module": [
		649,
		2
	],
	"../pages/telefonos/telefonos.module": [
		648,
		1
	],
	"../pages/total/total.module": [
		650,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 209;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HurtotransportePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//@IonicPage()
var HurtotransportePage = (function () {
    function HurtotransportePage(navCtrl, navParams, fdb, geo) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fdb = fdb;
        this.geo = geo;
        this.arrDenuncias = {};
        this.item = fdb.list('Denuncias/Hurto/Total').valueChanges();
        this.item.forEach(function (element) {
            _this.contador = element[3];
            console.log("Element: ", element[3]);
        });
        this.showMap();
    }
    HurtotransportePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HurtotransportePage');
    };
    HurtotransportePage.prototype.EnviarHurtoTransporte = function () {
        this.showMap();
        if (this.ubicacion == true) {
            //this.showMap();
            console.log("True_toggle_gps");
            this.arrDenuncias[0] = { Latitud: this.lat, Longitud: this.lng };
            this.fdb.list("/Denuncias/Hurto/Transporte").push(this.arrDenuncias);
            this.fdb.list("/Mapa").push({ Latitud: this.lat, Longitud: this.lng });
            console.log("Latitud", this.lat);
            this.contador = this.contador + 1;
            console.log("Nuevo item: ", this.contador);
            //this.fdb.list('Denuncias/Total').push({Homicidio: this.contador});
            this.fdb.list('Denuncias/Hurto').update('Total', { Transporte: this.contador });
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }
        else {
            this.fdb.list("/Denuncias/Hurto/Transporte").push(this.arrDenuncias);
            this.contador = this.contador + 1;
            console.log("Nuevo item: ", this.contador);
            //this.fdb.list('Denuncias/Total').push({Homicidio: this.contador});
            this.fdb.list('Denuncias/Hurto').update('Total', { Transporte: this.contador });
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            console.log("False_toggle_gps");
        }
    };
    HurtotransportePage.prototype.showMap = function () {
        var _this = this;
        this.geo.getCurrentPosition().then(function (pos) {
            _this.lat = pos.coords.latitude;
            _this.lng = pos.coords.longitude;
            return _this.lat, _this.lng;
        }).catch(function (err) { return console.log(err); });
    };
    HurtotransportePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hurtotransporte',template:/*ion-inline-start:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\hurtotransporte\hurtotransporte.html"*/'<!--\n  Generated template for the HurtotransportePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color= "primary">\n    <ion-title>Hurto Transporte</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <form #loginForm="ngForm"  autocomplete="off">\n        <ion-list>\n          \n          <h4 class="center">Digite los siguientes campos</h4>\n          <ion-item>\n            <ion-label stacked>Nombres</ion-label>\n            <ion-input required name="nombres" [(ngModel)]="arrDenuncias.Nombres" type="text"></ion-input>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label stacked>Apellidos</ion-label>\n            <ion-input required name="apellidos" [(ngModel)]="arrDenuncias.Apellidos" type="text" required></ion-input>\n          </ion-item>\n      \n          <ion-item>\n              <ion-label stacked>Género</ion-label>\n              <ion-select require name="genero" [(ngModel)]="arrDenuncias.Genero">\n                  <ion-option value="Masculino">Masculino</ion-option>\n                  <ion-option value="Femenino">Femenino</ion-option>                   \n                </ion-select>\n          </ion-item>\n        \n          <ion-item>\n            <ion-label>Tipo de Documento</ion-label>\n            <ion-select required name="documento" [(ngModel)]="arrDenuncias.TipoDocumento">\n              <ion-option value="CC">Cédula de ciudadanía</ion-option>\n              <ion-option value="CE">Cédula de Extranjeria</ion-option>\n              <ion-option value="TI">Tarjeta de Identidad</ion-option>        \n            </ion-select>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label stacked>Número de Documento</ion-label>\n            <ion-input required name="nrodocumento" [(ngModel)]="arrDenuncias.NumDoc" type="number"></ion-input>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label stacked>Telefono</ion-label>\n            <ion-input required name="telefono" [(ngModel)]="arrDenuncias.Telefono" type="number"></ion-input>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label stacked>Correo Electrónico</ion-label>\n            <ion-input required name="correo" [(ngModel)]="arrDenuncias.Email" type="email"></ion-input>\n          </ion-item>\n      \n          <h4 class="center">Información de la denuncia</h4>\n      \n          <ion-item>\n              <ion-label stacked>Describa la denuncia</ion-label>\n              <ion-input required name="denuncia" [(ngModel)]="arrDenuncias.Denuncia" type="text"></ion-input>\n          </ion-item>\n      \n          <ion-item>\n              <ion-label stacked>Dirección de la denuncia</ion-label>\n              <ion-input required name="direccion" [(ngModel)]="arrDenuncias.DireccionDenuncia" type="text"></ion-input>\n          </ion-item>\n      \n          \n          \n          \n          <ion-item>\n            <ion-label>Ubicación Actual</ion-label>\n            <ion-toggle name="ubicacion" [(ngModel)]="ubicacion" checked="false"></ion-toggle>\n          </ion-item>\n        \n        </ion-list>\n      \n          \n          <div padding>\n            <button (click)="EnviarHurtoTransporte()" ion-button class="submit-btn" full type="submit" [disabled]="!loginForm.form.valid">Enviar Denuncia</button>\n          </div>\n      \n        </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\hurtotransporte\hurtotransporte.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]])
    ], HurtotransportePage);
    return HurtotransportePage;
}());

//# sourceMappingURL=hurtotransporte.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HurtocomercioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HurtocomercioPage = (function () {
    function HurtocomercioPage(navCtrl, navParams, fdb, geo) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fdb = fdb;
        this.geo = geo;
        this.arrDenuncias = {};
        this.item = fdb.list('Denuncias/Hurto/Total').valueChanges();
        this.item.forEach(function (element) {
            _this.contador = element[0];
            console.log("Element: ", element[0]);
        });
        this.showMap();
    }
    HurtocomercioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HurtocomercioPage');
    };
    HurtocomercioPage.prototype.EnviarHurtoComercio = function () {
        this.showMap();
        if (this.ubicacion == true) {
            //this.showMap();
            console.log("True_toggle_gps");
            this.arrDenuncias[0] = { Latitud: this.lat, Longitud: this.lng };
            this.fdb.list("/Denuncias/Hurto/Comercio").push(this.arrDenuncias);
            this.fdb.list("/Mapa").push({ Latitud: this.lat, Longitud: this.lng });
            console.log("Latitud", this.lat);
            this.contador = this.contador + 1;
            console.log("Nuevo item: ", this.contador);
            //this.fdb.list('Denuncias/Total').push({Homicidio: this.contador});
            this.fdb.list('Denuncias/Hurto').update('Total', { Comercio: this.contador });
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }
        else {
            this.fdb.list("/Denuncias/Hurto/Comercio").push(this.arrDenuncias);
            this.contador = this.contador + 1;
            console.log("Nuevo item: ", this.contador);
            //this.fdb.list('Denuncias/Total').push({Homicidio: this.contador});
            this.fdb.list('Denuncias/Hurto').update('Total', { Comercio: this.contador });
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            console.log("False_toggle_gps");
        }
    };
    HurtocomercioPage.prototype.showMap = function () {
        var _this = this;
        this.geo.getCurrentPosition().then(function (pos) {
            _this.lat = pos.coords.latitude;
            _this.lng = pos.coords.longitude;
            return _this.lat, _this.lng;
        }).catch(function (err) { return console.log(err); });
    };
    HurtocomercioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hurtocomercio',template:/*ion-inline-start:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\hurtocomercio\hurtocomercio.html"*/'<!--\n  Generated template for the HurtocomercioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Hurto Comercio</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <form #loginForm="ngForm"  autocomplete="off">\n        <ion-list>\n          \n          <h4 class="center">Digite los siguientes campos</h4>\n          <ion-item>\n            <ion-label stacked>Nombres</ion-label>\n            <ion-input required name="nombres" [(ngModel)]="arrDenuncias.Nombres" type="text"></ion-input>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label stacked>Apellidos</ion-label>\n            <ion-input required name="apellidos" [(ngModel)]="arrDenuncias.Apellidos" type="text" required></ion-input>\n          </ion-item>\n      \n          <ion-item>\n              <ion-label stacked>Género</ion-label>\n              <ion-select require name="genero" [(ngModel)]="arrDenuncias.Genero">\n                  <ion-option value="Masculino">Masculino</ion-option>\n                  <ion-option value="Femenino">Femenino</ion-option>                   \n                </ion-select>\n          </ion-item>\n        \n          <ion-item>\n            <ion-label>Tipo de Documento</ion-label>\n            <ion-select required name="documento" [(ngModel)]="arrDenuncias.TipoDocumento">\n              <ion-option value="CC">Cédula de ciudadanía</ion-option>\n              <ion-option value="CE">Cédula de Extranjeria</ion-option>\n              <ion-option value="TI">Tarjeta de Identidad</ion-option>        \n            </ion-select>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label stacked>Número de Documento</ion-label>\n            <ion-input required name="nrodocumento" [(ngModel)]="arrDenuncias.NumDoc" type="number"></ion-input>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label stacked>Telefono</ion-label>\n            <ion-input required name="telefono" [(ngModel)]="arrDenuncias.Telefono" type="number"></ion-input>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label stacked>Correo Electrónico</ion-label>\n            <ion-input required name="correo" [(ngModel)]="arrDenuncias.Email" type="email"></ion-input>\n          </ion-item>\n      \n          <h4 class="center">Información de la denuncia</h4>\n      \n          <ion-item>\n              <ion-label stacked>Describa la denuncia</ion-label>\n              <ion-input required name="denuncia" [(ngModel)]="arrDenuncias.Denuncia" type="text"></ion-input>\n          </ion-item>\n      \n          <ion-item>\n              <ion-label stacked>Dirección de la denuncia</ion-label>\n              <ion-input required name="direccion" [(ngModel)]="arrDenuncias.DireccionDenuncia" type="text"></ion-input>\n          </ion-item>\n      \n          \n          \n          \n          <ion-item>\n            <ion-label>Ubicación Actual</ion-label>\n            <ion-toggle name="ubicacion" [(ngModel)]="ubicacion" checked="false"></ion-toggle>\n          </ion-item>\n        \n        </ion-list>\n      \n          \n          <div padding>\n            <button (click)="EnviarHurtoComercio()" ion-button class="submit-btn" full type="submit" [disabled]="!loginForm.form.valid">Enviar Denuncia</button>\n          </div>\n      \n        </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\hurtocomercio\hurtocomercio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]])
    ], HurtocomercioPage);
    return HurtocomercioPage;
}());

//# sourceMappingURL=hurtocomercio.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HurtopersonasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HurtopersonasPage = (function () {
    function HurtopersonasPage(navCtrl, navParams, fdb, geo) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fdb = fdb;
        this.geo = geo;
        this.arrDenuncias = {};
        this.item = fdb.list('Denuncias/Hurto/Total').valueChanges();
        this.item.forEach(function (element) {
            _this.contador = element[1];
            console.log("Element: ", element[1]);
        });
        this.showMap();
    }
    HurtopersonasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HurtopersonasPage');
    };
    HurtopersonasPage.prototype.EnviarHurtoPersonas = function () {
        this.showMap();
        if (this.ubicacion == true) {
            //this.showMap();
            console.log("True_toggle_gps");
            this.arrDenuncias[0] = { Latitud: this.lat, Longitud: this.lng };
            this.fdb.list("/Denuncias/Hurto/Personas").push(this.arrDenuncias);
            this.fdb.list("/Mapa").push({ Latitud: this.lat, Longitud: this.lng });
            console.log("Latitud", this.lat);
            this.contador = this.contador + 1;
            console.log("Nuevo item: ", this.contador);
            //this.fdb.list('Denuncias/Total').push({Homicidio: this.contador});
            this.fdb.list('Denuncias/Hurto').update('Total', { Personas: this.contador });
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }
        else {
            this.fdb.list("/Denuncias/Hurto/Personas").push(this.arrDenuncias);
            this.contador = this.contador + 1;
            console.log("Nuevo item: ", this.contador);
            //this.fdb.list('Denuncias/Total').push({Homicidio: this.contador});
            this.fdb.list('Denuncias/Hurto').update('Total', { Personas: this.contador });
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            console.log("False_toggle_gps");
        }
    };
    HurtopersonasPage.prototype.showMap = function () {
        var _this = this;
        this.geo.getCurrentPosition().then(function (pos) {
            _this.lat = pos.coords.latitude;
            _this.lng = pos.coords.longitude;
            return _this.lat, _this.lng;
        }).catch(function (err) { return console.log(err); });
    };
    HurtopersonasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hurtopersonas',template:/*ion-inline-start:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\hurtopersonas\hurtopersonas.html"*/'<!--\n  Generated template for the HurtopersonasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Hurto a Personas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <form #loginForm="ngForm"  autocomplete="off">\n        <ion-list>\n          \n          <h4 class="center">Digite los siguientes campos</h4>\n          <ion-item>\n            <ion-label stacked>Nombres</ion-label>\n            <ion-input required name="nombres" [(ngModel)]="arrDenuncias.Nombres" type="text"></ion-input>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label stacked>Apellidos</ion-label>\n            <ion-input required name="apellidos" [(ngModel)]="arrDenuncias.Apellidos" type="text" required></ion-input>\n          </ion-item>\n      \n          <ion-item>\n              <ion-label stacked>Género</ion-label>\n              <ion-select require name="genero" [(ngModel)]="arrDenuncias.Genero">\n                  <ion-option value="Masculino">Masculino</ion-option>\n                  <ion-option value="Femenino">Femenino</ion-option>                   \n                </ion-select>\n          </ion-item>\n        \n          <ion-item>\n            <ion-label>Tipo de Documento</ion-label>\n            <ion-select required name="documento" [(ngModel)]="arrDenuncias.TipoDocumento">\n              <ion-option value="CC">Cédula de ciudadanía</ion-option>\n              <ion-option value="CE">Cédula de Extranjeria</ion-option>\n              <ion-option value="TI">Tarjeta de Identidad</ion-option>        \n            </ion-select>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label stacked>Número de Documento</ion-label>\n            <ion-input required name="nrodocumento" [(ngModel)]="arrDenuncias.NumDoc" type="number"></ion-input>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label stacked>Telefono</ion-label>\n            <ion-input required name="telefono" [(ngModel)]="arrDenuncias.Telefono" type="number"></ion-input>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label stacked>Correo Electrónico</ion-label>\n            <ion-input required name="correo" [(ngModel)]="arrDenuncias.Email" type="email"></ion-input>\n          </ion-item>\n      \n          <h4 class="center">Información de la denuncia</h4>\n      \n          <ion-item>\n              <ion-label stacked>Describa la denuncia</ion-label>\n              <ion-input required name="denuncia" [(ngModel)]="arrDenuncias.Denuncia" type="text"></ion-input>\n          </ion-item>\n      \n          <ion-item>\n              <ion-label stacked>Dirección de la denuncia</ion-label>\n              <ion-input required name="direccion" [(ngModel)]="arrDenuncias.DireccionDenuncia" type="text"></ion-input>\n          </ion-item>\n      \n          \n          \n          \n          <ion-item>\n            <ion-label>Ubicación Actual</ion-label>\n            <ion-toggle name="ubicacion" [(ngModel)]="ubicacion" checked="false"></ion-toggle>\n          </ion-item>\n        \n        </ion-list>\n      \n          \n          <div padding>\n            <button (click)="EnviarHurtoPersonas()" ion-button class="submit-btn" full type="submit" [disabled]="!loginForm.form.valid">Enviar Denuncia</button>\n          </div>\n      \n        </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\hurtopersonas\hurtopersonas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]])
    ], HurtopersonasPage);
    return HurtopersonasPage;
}());

//# sourceMappingURL=hurtopersonas.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HurtoresidenciasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HurtoresidenciasPage = (function () {
    function HurtoresidenciasPage(navCtrl, navParams, fdb, geo) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fdb = fdb;
        this.geo = geo;
        this.arrDenuncias = {};
        this.item = fdb.list('Denuncias/Hurto/Total').valueChanges();
        this.item.forEach(function (element) {
            _this.contador = element[2];
            console.log("Element: ", element[2]);
        });
        this.showMap();
    }
    HurtoresidenciasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HurtoresidenciasPage');
    };
    HurtoresidenciasPage.prototype.EnviarHurtoResidencia = function () {
        this.showMap();
        if (this.ubicacion == true) {
            //this.showMap();
            console.log("True_toggle_gps");
            this.arrDenuncias[0] = { Latitud: this.lat, Longitud: this.lng };
            this.fdb.list("/Denuncias/Hurto/Residencias").push(this.arrDenuncias);
            this.fdb.list("/Mapa").push({ Latitud: this.lat, Longitud: this.lng });
            console.log("Latitud", this.lat);
            this.contador = this.contador + 1;
            console.log("Nuevo item: ", this.contador);
            //this.fdb.list('Denuncias/Total').push({Homicidio: this.contador});
            this.fdb.list('Denuncias/Hurto').update('Total', { Residencias: this.contador });
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }
        else {
            this.fdb.list("/Denuncias/Hurto/Residencias").push(this.arrDenuncias);
            this.contador = this.contador + 1;
            console.log("Nuevo item: ", this.contador);
            //this.fdb.list('Denuncias/Total').push({Homicidio: this.contador});
            this.fdb.list('Denuncias/Hurto').update('Total', { Residencias: this.contador });
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            console.log("False_toggle_gps");
        }
    };
    HurtoresidenciasPage.prototype.showMap = function () {
        var _this = this;
        this.geo.getCurrentPosition().then(function (pos) {
            _this.lat = pos.coords.latitude;
            _this.lng = pos.coords.longitude;
            return _this.lat, _this.lng;
        }).catch(function (err) { return console.log(err); });
    };
    HurtoresidenciasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hurtoresidencias',template:/*ion-inline-start:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\hurtoresidencias\hurtoresidencias.html"*/'<!--\n  Generated template for the HurtoresidenciasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Hurto a Residencias</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <form #loginForm="ngForm"  autocomplete="off">\n        <ion-list>\n          \n          <h4 class="center">Digite los siguientes campos</h4>\n          <ion-item>\n            <ion-label stacked>Nombres</ion-label>\n            <ion-input required name="nombres" [(ngModel)]="arrDenuncias.Nombres" type="text"></ion-input>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label stacked>Apellidos</ion-label>\n            <ion-input required name="apellidos" [(ngModel)]="arrDenuncias.Apellidos" type="text" required></ion-input>\n          </ion-item>\n      \n          <ion-item>\n              <ion-label stacked>Género</ion-label>\n              <ion-select require name="genero" [(ngModel)]="arrDenuncias.Genero">\n                  <ion-option value="Masculino">Masculino</ion-option>\n                  <ion-option value="Femenino">Femenino</ion-option>                   \n                </ion-select>\n          </ion-item>\n        \n          <ion-item>\n            <ion-label>Tipo de Documento</ion-label>\n            <ion-select required name="documento" [(ngModel)]="arrDenuncias.TipoDocumento">\n              <ion-option value="CC">Cédula de ciudadanía</ion-option>\n              <ion-option value="CE">Cédula de Extranjeria</ion-option>\n              <ion-option value="TI">Tarjeta de Identidad</ion-option>        \n            </ion-select>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label stacked>Número de Documento</ion-label>\n            <ion-input required name="nrodocumento" [(ngModel)]="arrDenuncias.NumDoc" type="number"></ion-input>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label stacked>Telefono</ion-label>\n            <ion-input required name="telefono" [(ngModel)]="arrDenuncias.Telefono" type="number"></ion-input>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label stacked>Correo Electrónico</ion-label>\n            <ion-input required name="correo" [(ngModel)]="arrDenuncias.Email" type="email"></ion-input>\n          </ion-item>\n      \n          <h4 class="center">Información de la denuncia</h4>\n      \n          <ion-item>\n              <ion-label stacked>Describa la denuncia</ion-label>\n              <ion-input required name="denuncia" [(ngModel)]="arrDenuncias.Denuncia" type="text"></ion-input>\n          </ion-item>\n      \n          <ion-item>\n              <ion-label stacked>Dirección de la denuncia</ion-label>\n              <ion-input required name="direccion" [(ngModel)]="arrDenuncias.DireccionDenuncia" type="text"></ion-input>\n          </ion-item>\n      \n          \n          \n          \n          <ion-item>\n            <ion-label>Ubicación Actual</ion-label>\n            <ion-toggle name="ubicacion" [(ngModel)]="ubicacion" checked="false"></ion-toggle>\n          </ion-item>\n        \n        </ion-list>\n      \n          \n          <div padding>\n            <button (click)="EnviarHurtoResidencia()" ion-button class="submit-btn" full type="submit" [disabled]="!loginForm.form.valid">Enviar Denuncia</button>\n          </div>\n      \n        </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\hurtoresidencias\hurtoresidencias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]])
    ], HurtoresidenciasPage);
    return HurtoresidenciasPage;
}());

//# sourceMappingURL=hurtoresidencias.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_controller__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__homicidioform_homicidioform__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__violenciaform_violenciaform__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__claseshurto_claseshurto__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { AlertaPage } from '../alerta/alerta';
//import { AngularFireDatabase } from 'angularfire2/database';



var HomePage = (function () {
    function HomePage(alertCtrl, navCtrl) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.alertarobo = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Términos y Condiciones',
            message: 'Señor usuario, le damos la bienvenida al Sistema Nacional de Denuncia Virtual. Le informamos que para dar trámite a las diferentes solicitudes que pueden realizarse en este Sistema, se requiere del registro de toda la información requerida. A esta información por usted brindada, se le dará el tratamiento de la "Ley 1581 de 2012. Ley de Protección de Datos Personales".',
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        console.log('Disagree clicked');
                        //this.navCtrl.push(HomePage);
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__claseshurto_claseshurto__["a" /* ClaseshurtoPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    HomePage.prototype.alertaviolencia = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Términos y Condiciones',
            message: 'Señor usuario, le damos la bienvenida al Sistema Nacional de Denuncia Virtual. Le informamos que para dar trámite a las diferentes solicitudes que pueden realizarse en este Sistema, se requiere del registro de toda la información requerida. A esta información por usted brindada, se le dará el tratamiento de la "Ley 1581 de 2012. Ley de Protección de Datos Personales".',
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        console.log('Disagree clicked');
                        //this.navCtrl.push(HomePage);
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__violenciaform_violenciaform__["a" /* ViolenciaformPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    HomePage.prototype.alertahomicidio = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Términos y Condiciones',
            message: 'Señor usuario, le damos la bienvenida al Sistema Nacional de Denuncia Virtual. Le informamos que para dar trámite a las diferentes solicitudes que pueden realizarse en este Sistema, se requiere del registro de toda la información requerida. A esta información por usted brindada, se le dará el tratamiento de la "Ley 1581 de 2012. Ley de Protección de Datos Personales".',
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        console.log('Disagree clicked');
                        //this.navCtrl.push(HomePage);
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__homicidioform_homicidioform__["a" /* HomicidioformPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n      <img class="titleicon" src="assets/imgs/headerapp.png" width="30px" style="display:inline-block" height="40px"/>\n      \n  </ion-navbar>  \n  </ion-header>\n\n<ion-content class="ion-content">\n\n   \n    <ion-list >\n        <ion-list-header  class="home">\n            Denuncias\n        </ion-list-header>\n      <ion-item (click)="alertahomicidio()" class="ion-content">\n          <ion-avatar item-start>\n              <img src="assets/imgs/crime.png">\n          </ion-avatar>\n        <!-- <ion-icon name="leaf" item-start></ion-icon> -->\n          Homicidio\n        <ion-icon name="arrow-dropright" item-end></ion-icon>\n      </ion-item>\n\n      <ion-item (click)="alertarobo()" class="ion-content">\n          <ion-avatar item-start>\n              <img src="assets/imgs/robo.png">\n          </ion-avatar>\n          Hurto\n        <ion-icon name="arrow-dropright" item-end></ion-icon>\n      </ion-item>\n\n      <ion-item (click)="alertaviolencia()" class="ion-content">\n          <ion-avatar item-start>\n              <img src="assets/imgs/acoso.png">\n          </ion-avatar>\n          Violencia Intrafamiliar\n        <ion-icon name="arrow-dropright" item-end></ion-icon>\n      </ion-item>\n\n      <!-- <ion-item class="ion-content">\n          <ion-avatar item-start>\n              <img src="assets/imgs/people.png">\n          </ion-avatar>\n          Otras Denuncias\n        <ion-icon name="arrow-dropright" item-end></ion-icon>\n      </ion-item> -->\n      \n    </ion-list>\n   \n\n    <ion-footer class="footer" >\n            Aplicación Proyecto Final: Acosta Julian, Cantillo Luis\n    </ion-footer>\n    \n<!--     \n    <ion-fab bottom right >\n        <button ion-fab><ion-icon name="share"></ion-icon></button>\n        <ion-fab-list side="top">\n          <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n          <button ion-fab action="https://twitter.com/denunciayageo"><ion-icon name="logo-twitter"></ion-icon></button>\n          <button ion-fab><ion-icon name="logo-youtube"></ion-icon></button>\n        </ion-fab-list>\n        <ion-fab-list side="left">\n          <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n        </ion-fab-list>\n      </ion-fab> -->\n  \n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_controller__["a" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapasPage = (function () {
    //map:any;
    function MapasPage(navCtrl, navParams, geo, fdb, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geo = geo;
        this.fdb = fdb;
        this.loadingCtrl = loadingCtrl;
        // setInterval(() => {    
        //   this.items = fdb.list('Mapa').valueChanges();
        //   console.log("Funcionando")
        //   }, 2000);
        this.items = fdb.list('Mapa').valueChanges();
        // Sentencia para obtener los ultimos valores de las coordenadas de la base de datos
        // this.items = fdb.list('/Mapa', ref => ref.limitToLast(2)).valueChanges();  
        //this.showMap();
    }
    MapasPage.prototype.ionViewDidLoad = function () {
        // let loading = this.loadingCtrl.create({
        //   content: 'Please wait...'
        // });
        // loading.present();     
        // setInterval(() => {    
        //   this.showMap();
        //   console.log("Funcionando")
        //   }, 2000);
        //this.items = this.fdb.list('Mapa').valueChanges();
        this.showMap();
    };
    MapasPage.prototype.showMap = function () {
        var _this = this;
        this.geo.getCurrentPosition().then(function (pos) {
            _this.lat = pos.coords.latitude;
            _this.lng = pos.coords.longitude;
            var location = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
            var heatmapData = [];
            _this.items.forEach(function (element) {
                //console.log(element);
                element.forEach(function (element) {
                    var point = new google.maps.LatLng(element.Latitud, element.Longitud);
                    heatmapData.push(point);
                    console.log(element.Latitud);
                });
                //console.log('Latitud:', element);
            });
            console.log(heatmapData);
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
            var options = {
                center: location,
                zoom: 12,
                panControl: true,
            };
            var map = new google.maps.Map(_this.mapRef.nativeElement, options);
            _this.addMarker(location, map);
            var heatmap = new google.maps.visualization.HeatmapLayer({
                data: heatmapData //json coordenadas
                //data: coord
            });
            heatmap.setMap(map);
            setInterval(function () {
                heatmap.setMap(map);
                console.log("Funcionando heatmap");
            }, 5000);
        }).catch(function (err) { return console.log(err); });
    };
    MapasPage.prototype.addMarker = function (position, map) {
        return new google.maps.Marker({
            position: position,
            map: map
        });
    };
    MapasPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.items = this.fdb.list('Mapa').valueChanges();
        this.showMap;
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapasPage.prototype, "mapRef", void 0);
    MapasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mapas',template:/*ion-inline-start:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\mapas\mapas.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n     <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="center">Mapa Del Delito</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="ion-content">\n\n        <!-- <ion-refresher (ionRefresh)="doRefresh($event)">\n          <ion-refresher-content\n          pullingIcon="arrow-dropdown"\n          pullingText="Pull to refresh"\n          refreshingSpinner="circles"\n          refreshingText="Refreshing...">            \n          </ion-refresher-content>\n        </ion-refresher> -->\n      \n    <ion-card>\n        <ion-card-header ion-item color="side">\n          Mapa de Calor:\n          Concentración Denuncias\n        </ion-card-header>        \n    </ion-card>\n<div #map id="map" > </div>\n\n<!-- <div  hidden></div> -->\n<div hidden>\n  <ion-list>\n\n    <ion-item class="text" *ngFor="let item of items | async">\n      {{item | json}}\n    </ion-item>\n  \n  </ion-list>\n</div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\mapas\mapas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], MapasPage);
    return MapasPage;
}());

//# sourceMappingURL=mapas.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { AlertController } from 'ionic-angular';
/**
 * Generated class for the AlertaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlertaPage = (function () {
    function AlertaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AlertaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlertaPage');
    };
    AlertaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alerta',template:/*ion-inline-start:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\alerta\alerta.html"*/'\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Alerta</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\alerta\alerta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AlertaPage);
    return AlertaPage;
}());

//# sourceMappingURL=alerta.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HurtoformPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the HurtoformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HurtoformPage = (function () {
    function HurtoformPage(navCtrl, navParams, fdb) {
        // this.fdb.list("/Denuncias/").valueChanges().subscribe(_data=>{
        //   this.arrDenuncias=_data;
        //   console.log(this.arrDenuncias);
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fdb = fdb;
        this.arrDenuncias = {};
        //   });
    }
    HurtoformPage.prototype.EnviarHurto = function () {
        this.fdb.list("/Denuncias/Hurto").push(this.arrDenuncias);
        // this.fdb.list<'items'>("/Denuncias/Homicidio/Apellidos").push(this.Apellidos)
        // this.fdb.list<'items'>("/Denuncias/Homicidio/Telefono").push(this.Telefono)
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    HurtoformPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hurtoform',template:/*ion-inline-start:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\hurtoform\hurtoform.html"*/'<!--\n  Generated template for the HurtoformPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title class="center">Formulario Hurto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <h1 center>Digite los siguientes campos</h1>\n    <ion-item>\n      <ion-label stacked>Nombres</ion-label>\n      <ion-input [(ngModel)]="arrDenuncias.Nombres" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Apellidos</ion-label>\n      <ion-input [(ngModel)]="arrDenuncias.Apellidos" type="text" required></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label stacked>Telefono</ion-label>\n      <ion-input [(ngModel)]="arrDenuncias.Telefono" type="text"></ion-input>\n    </ion-item>\n      \n  </ion-list>\n\n  \n  <div padding>\n    <button (click)="EnviarHurto()" ion-button block>Enviar Denuncia</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\hurtoform\hurtoform.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], HurtoformPage);
    return HurtoformPage;
}());

//# sourceMappingURL=hurtoform.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(456);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_alerta_alerta__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_homicidioform_homicidioform__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_hurtoform_hurtoform__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_violenciaform_violenciaform__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_mapas_mapas__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_claseshurto_claseshurto__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_hurtotransporte_hurtotransporte__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_hurtocomercio_hurtocomercio__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_hurtopersonas_hurtopersonas__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_hurtoresidencias_hurtoresidencias__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_auth__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_geolocation__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_telefonos_telefonos__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_call_number__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_graficos_graficos__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_graficas_graficas__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_inicio_inicio__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_mas_mas__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_total_total__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var firebaseConfig = {
    apiKey: "AIzaSyA_jOFmnvR-jwlbeIGD5DNxjzMKQJ4LRoI",
    authDomain: "denunciaya-7a782.firebaseapp.com",
    databaseURL: "https://denunciaya-7a782.firebaseio.com",
    storageBucket: "denunciaya-7a782.appspot.com",
    messagingSenderId: '163606553417'
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_alerta_alerta__["a" /* AlertaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_homicidioform_homicidioform__["a" /* HomicidioformPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_hurtoform_hurtoform__["a" /* HurtoformPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_violenciaform_violenciaform__["a" /* ViolenciaformPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_mapas_mapas__["a" /* MapasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_claseshurto_claseshurto__["a" /* ClaseshurtoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_hurtocomercio_hurtocomercio__["a" /* HurtocomercioPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_hurtopersonas_hurtopersonas__["a" /* HurtopersonasPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_hurtoresidencias_hurtoresidencias__["a" /* HurtoresidenciasPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_hurtotransporte_hurtotransporte__["a" /* HurtotransportePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_telefonos_telefonos__["a" /* TelefonosPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_graficos_graficos__["a" /* GraficosPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_graficas_graficas__["a" /* GraficasPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_mas_mas__["a" /* MasPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_total_total__["a" /* TotalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/alerta/alerta.module#AlertaPageModule', name: 'AlertaPage', segment: 'alerta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/claseshurto/claseshurto.module#ClaseshurtoPageModule', name: 'ClaseshurtoPage', segment: 'claseshurto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/graficas/graficas.module#GraficasPageModule', name: 'GraficasPage', segment: 'graficas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/graficos/graficos.module#GraficosPageModule', name: 'GraficosPage', segment: 'graficos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hurtoform/hurtoform.module#HurtoformPageModule', name: 'HurtoformPage', segment: 'hurtoform', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicio/inicio.module#InicioPageModule', name: 'InicioPage', segment: 'inicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/telefonos/telefonos.module#TelefonosPageModule', name: 'TelefonosPage', segment: 'telefonos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mas/mas.module#MasPageModule', name: 'MasPage', segment: 'mas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/total/total.module#TotalPageModule', name: 'TotalPage', segment: 'total', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_17_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_19_angularfire2_auth__["a" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_alerta_alerta__["a" /* AlertaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_homicidioform_homicidioform__["a" /* HomicidioformPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_hurtoform_hurtoform__["a" /* HurtoformPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_violenciaform_violenciaform__["a" /* ViolenciaformPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_mapas_mapas__["a" /* MapasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_claseshurto_claseshurto__["a" /* ClaseshurtoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_hurtocomercio_hurtocomercio__["a" /* HurtocomercioPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_hurtopersonas_hurtopersonas__["a" /* HurtopersonasPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_hurtoresidencias_hurtoresidencias__["a" /* HurtoresidenciasPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_hurtotransporte_hurtotransporte__["a" /* HurtotransportePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_telefonos_telefonos__["a" /* TelefonosPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_graficos_graficos__["a" /* GraficosPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_graficas_graficas__["a" /* GraficasPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_mas_mas__["a" /* MasPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_total_total__["a" /* TotalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__["a" /* AngularFireDatabase */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_call_number__["a" /* CallNumber */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 268,
	"./af.js": 268,
	"./ar": 269,
	"./ar-dz": 270,
	"./ar-dz.js": 270,
	"./ar-kw": 271,
	"./ar-kw.js": 271,
	"./ar-ly": 272,
	"./ar-ly.js": 272,
	"./ar-ma": 273,
	"./ar-ma.js": 273,
	"./ar-sa": 274,
	"./ar-sa.js": 274,
	"./ar-tn": 275,
	"./ar-tn.js": 275,
	"./ar.js": 269,
	"./az": 276,
	"./az.js": 276,
	"./be": 277,
	"./be.js": 277,
	"./bg": 278,
	"./bg.js": 278,
	"./bm": 279,
	"./bm.js": 279,
	"./bn": 280,
	"./bn.js": 280,
	"./bo": 281,
	"./bo.js": 281,
	"./br": 282,
	"./br.js": 282,
	"./bs": 283,
	"./bs.js": 283,
	"./ca": 284,
	"./ca.js": 284,
	"./cs": 285,
	"./cs.js": 285,
	"./cv": 286,
	"./cv.js": 286,
	"./cy": 287,
	"./cy.js": 287,
	"./da": 288,
	"./da.js": 288,
	"./de": 289,
	"./de-at": 290,
	"./de-at.js": 290,
	"./de-ch": 291,
	"./de-ch.js": 291,
	"./de.js": 289,
	"./dv": 292,
	"./dv.js": 292,
	"./el": 293,
	"./el.js": 293,
	"./en-au": 294,
	"./en-au.js": 294,
	"./en-ca": 295,
	"./en-ca.js": 295,
	"./en-gb": 296,
	"./en-gb.js": 296,
	"./en-ie": 297,
	"./en-ie.js": 297,
	"./en-il": 298,
	"./en-il.js": 298,
	"./en-nz": 299,
	"./en-nz.js": 299,
	"./eo": 300,
	"./eo.js": 300,
	"./es": 301,
	"./es-do": 302,
	"./es-do.js": 302,
	"./es-us": 303,
	"./es-us.js": 303,
	"./es.js": 301,
	"./et": 304,
	"./et.js": 304,
	"./eu": 305,
	"./eu.js": 305,
	"./fa": 306,
	"./fa.js": 306,
	"./fi": 307,
	"./fi.js": 307,
	"./fo": 308,
	"./fo.js": 308,
	"./fr": 309,
	"./fr-ca": 310,
	"./fr-ca.js": 310,
	"./fr-ch": 311,
	"./fr-ch.js": 311,
	"./fr.js": 309,
	"./fy": 312,
	"./fy.js": 312,
	"./gd": 313,
	"./gd.js": 313,
	"./gl": 314,
	"./gl.js": 314,
	"./gom-latn": 315,
	"./gom-latn.js": 315,
	"./gu": 316,
	"./gu.js": 316,
	"./he": 317,
	"./he.js": 317,
	"./hi": 318,
	"./hi.js": 318,
	"./hr": 319,
	"./hr.js": 319,
	"./hu": 320,
	"./hu.js": 320,
	"./hy-am": 321,
	"./hy-am.js": 321,
	"./id": 322,
	"./id.js": 322,
	"./is": 323,
	"./is.js": 323,
	"./it": 324,
	"./it.js": 324,
	"./ja": 325,
	"./ja.js": 325,
	"./jv": 326,
	"./jv.js": 326,
	"./ka": 327,
	"./ka.js": 327,
	"./kk": 328,
	"./kk.js": 328,
	"./km": 329,
	"./km.js": 329,
	"./kn": 330,
	"./kn.js": 330,
	"./ko": 331,
	"./ko.js": 331,
	"./ky": 332,
	"./ky.js": 332,
	"./lb": 333,
	"./lb.js": 333,
	"./lo": 334,
	"./lo.js": 334,
	"./lt": 335,
	"./lt.js": 335,
	"./lv": 336,
	"./lv.js": 336,
	"./me": 337,
	"./me.js": 337,
	"./mi": 338,
	"./mi.js": 338,
	"./mk": 339,
	"./mk.js": 339,
	"./ml": 340,
	"./ml.js": 340,
	"./mn": 341,
	"./mn.js": 341,
	"./mr": 342,
	"./mr.js": 342,
	"./ms": 343,
	"./ms-my": 344,
	"./ms-my.js": 344,
	"./ms.js": 343,
	"./mt": 345,
	"./mt.js": 345,
	"./my": 346,
	"./my.js": 346,
	"./nb": 347,
	"./nb.js": 347,
	"./ne": 348,
	"./ne.js": 348,
	"./nl": 349,
	"./nl-be": 350,
	"./nl-be.js": 350,
	"./nl.js": 349,
	"./nn": 351,
	"./nn.js": 351,
	"./pa-in": 352,
	"./pa-in.js": 352,
	"./pl": 353,
	"./pl.js": 353,
	"./pt": 354,
	"./pt-br": 355,
	"./pt-br.js": 355,
	"./pt.js": 354,
	"./ro": 356,
	"./ro.js": 356,
	"./ru": 357,
	"./ru.js": 357,
	"./sd": 358,
	"./sd.js": 358,
	"./se": 359,
	"./se.js": 359,
	"./si": 360,
	"./si.js": 360,
	"./sk": 361,
	"./sk.js": 361,
	"./sl": 362,
	"./sl.js": 362,
	"./sq": 363,
	"./sq.js": 363,
	"./sr": 364,
	"./sr-cyrl": 365,
	"./sr-cyrl.js": 365,
	"./sr.js": 364,
	"./ss": 366,
	"./ss.js": 366,
	"./sv": 367,
	"./sv.js": 367,
	"./sw": 368,
	"./sw.js": 368,
	"./ta": 369,
	"./ta.js": 369,
	"./te": 370,
	"./te.js": 370,
	"./tet": 371,
	"./tet.js": 371,
	"./tg": 372,
	"./tg.js": 372,
	"./th": 373,
	"./th.js": 373,
	"./tl-ph": 374,
	"./tl-ph.js": 374,
	"./tlh": 375,
	"./tlh.js": 375,
	"./tr": 376,
	"./tr.js": 376,
	"./tzl": 377,
	"./tzl.js": 377,
	"./tzm": 378,
	"./tzm-latn": 379,
	"./tzm-latn.js": 379,
	"./tzm.js": 378,
	"./ug-cn": 380,
	"./ug-cn.js": 380,
	"./uk": 381,
	"./uk.js": 381,
	"./ur": 382,
	"./ur.js": 382,
	"./uz": 383,
	"./uz-latn": 384,
	"./uz-latn.js": 384,
	"./uz.js": 383,
	"./vi": 385,
	"./vi.js": 385,
	"./x-pseudo": 386,
	"./x-pseudo.js": 386,
	"./yo": 387,
	"./yo.js": 387,
	"./zh-cn": 388,
	"./zh-cn.js": 388,
	"./zh-hk": 389,
	"./zh-hk.js": 389,
	"./zh-tw": 390,
	"./zh-tw.js": 390
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 598;

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_homicidioform_homicidioform__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_violenciaform_violenciaform__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_claseshurto_claseshurto__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_mapas_mapas__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_telefonos_telefonos__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_timer__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_graficos_graficos__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, alertCtrl) {
        // platform.ready().then(() => {
        //   // Okay, so the platform is ready and our plugins are available.
        //   // Here you can do any higher level native things you might need.
        //   statusBar.styleDefault();
        //   splashScreen.hide();
        // });
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.showSplash = true;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            //{ title: 'Home', component: HomePage },
            { title: 'Homicidio', component: __WEBPACK_IMPORTED_MODULE_5__pages_homicidioform_homicidioform__["a" /* HomicidioformPage */] },
            { title: 'Hurto', component: __WEBPACK_IMPORTED_MODULE_7__pages_claseshurto_claseshurto__["a" /* ClaseshurtoPage */] },
            { title: 'Violencia Intrafamiliar', component: __WEBPACK_IMPORTED_MODULE_6__pages_violenciaform_violenciaform__["a" /* ViolenciaformPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        // this.platform.ready().then(() => {
        //     // Okay, so the platform is ready and our plugins are available.
        //     // Here you can do any higher level native things you might need.
        //     this.statusBar.styleDefault();
        //     this.splashScreen.hide();
        //   });
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide(); // <-- hide static image
            Object(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_timer__["timer"])(3000).subscribe(function () { return _this.showSplash = false; }); // <-- hide animation after 3s
        });
    };
    MyApp.prototype.openHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.openMapas = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_mapas_mapas__["a" /* MapasPage */]);
    };
    MyApp.prototype.opentelefonos = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_telefonos_telefonos__["a" /* TelefonosPage */]);
    };
    MyApp.prototype.opengraficos = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_11__pages_graficos_graficos__["a" /* GraficosPage */]);
        //this.navCtrl.push(GraficosPage);
    };
    MyApp.prototype.openPage = function (page) {
        var _this = this;
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        //this.nav.setRoot(page.component);
        var confirm = this.alertCtrl.create({
            title: 'Términos y Condiciones',
            cssClass: 'alertDanger',
            message: 'Señor usuario, le damos la bienvenida al Sistema Nacional de Denuncia Virtual. Le informamos que para dar trámite a las diferentes solicitudes que pueden realizarse en este Sistema, se requiere del registro de toda la información requerida. A esta información por usted brindada, se le dará el tratamiento de la "Ley 1581 de 2012. Ley de Protección de Datos Personales".',
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        console.log('Disagree clicked');
                        //this.navCtrl.push(HomePage);
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.nav.setRoot(page.component);
                    }
                }
            ]
        });
        confirm.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\app\app.html"*/'<div *ngIf="showSplash" class="splash">\n    <div class="spinner">\n        <div class="cube1"></div>\n        <div class="cube2"></div>\n    </div>\n  </div>\n<ion-menu [content]="content" color="primary">\n    <ion-header >\n      <!-- <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar> -->\n    </ion-header>\n    \n    <ion-content class="ion-content">\n      \n      <img src="assets/imgs/my_logo.png" alt="">\n      \n\n      <ion-list>\n       \n        <button class="ion-content" color="primary" menuClose ion-item (click)="openHome()">Inicio</button>\n        <!-- <div padding class="divcolor">\n            <h1>Denuncias <ion-icon name="bookmarks"></ion-icon></h1>\n        </div> -->\n        <button class="ion-content" color="secondary" menuClose ion-item >Denuncias <ion-icon name="bookmarks"></ion-icon></button>\n       \n        <button class="ion-content" color="primary" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          {{p.title}} <ion-icon name="bookmark"></ion-icon> \n        </button>   \n        <button class="ion-content" color="primary" menuClose ion-item (click)="openMapas()">Mapa de Delito <ion-icon name="globe"></ion-icon></button>\n        <button class="ion-content" color="primary" menuClose ion-item (click)="opengraficos()">Estadísticas <ion-icon name="stats"></ion-icon></button>\n        <button class="ion-content" color="primary" menuClose ion-item (click)="opentelefonos()">Teléfonos De Emergencia <ion-icon name="call"></ion-icon> </button>       \n        \n      </ion-list>\n\n     \n    </ion-content>\n\n  </ion-menu>\n  \n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n<!-- <ion-nav [root]="rootPage"></ion-nav> -->\n'/*ion-inline-end:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaseshurtoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hurtotransporte_hurtotransporte__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hurtocomercio_hurtocomercio__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hurtopersonas_hurtopersonas__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hurtoresidencias_hurtoresidencias__ = __webpack_require__(260);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClaseshurtoPage = (function () {
    function ClaseshurtoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ClaseshurtoPage.prototype.denunciatransporte = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__hurtotransporte_hurtotransporte__["a" /* HurtotransportePage */]);
    };
    ClaseshurtoPage.prototype.denunciacomercio = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__hurtocomercio_hurtocomercio__["a" /* HurtocomercioPage */]);
    };
    ClaseshurtoPage.prototype.denunciapersonas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__hurtopersonas_hurtopersonas__["a" /* HurtopersonasPage */]);
    };
    ClaseshurtoPage.prototype.denunciaresidencias = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__hurtoresidencias_hurtoresidencias__["a" /* HurtoresidenciasPage */]);
    };
    ClaseshurtoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-claseshurto',template:/*ion-inline-start:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\claseshurto\claseshurto.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>Tipos de hurto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="ion-content">\n    \n    <ion-card class="ion-content">\n    <ion-card-header  class="home">\n      Seleccione Tipo De Hurto\n    </ion-card-header>\n  \n    <ion-list>\n      <button class="ion-content" ion-item (click)="denunciapersonas()">\n        <ion-icon name="people" item-start></ion-icon>\n        Hurto a Personas\n        <ion-icon name="arrow-dropright" item-end></ion-icon>\n      </button>\n  \n      <button class="ion-content" ion-item (click)="denunciacomercio()">\n        <ion-icon name="cart" item-start></ion-icon>\n        Hurto a Comercio\n        <ion-icon name="arrow-dropright" item-end></ion-icon>\n      </button>\n  \n      <button class="ion-content" ion-item (click)="denunciatransporte()">\n        <ion-icon name="bus" item-start></ion-icon>\n        Hurto Transporte Público\n        <ion-icon name="arrow-dropright" item-end></ion-icon>\n      </button>\n  \n      <button class="ion-content" ion-item (click)="denunciaresidencias()">\n        <ion-icon name="home" item-start></ion-icon>\n        Hurto a Residencias\n        <ion-icon name="arrow-dropright" item-end></ion-icon>\n      </button>     \n  \n    </ion-list>\n  </ion-card>\n\n\n  <!-- <ion-card (click)="denunciatransporte()">\n    <img src="assets/imgs/publicbus.png"/>\n    <ion-card-content>\n      <ion-card-title>\n        Hurto en transporte publico\n        </ion-card-title>\n      <p>\n        The most popular industrial group ever, and largely\n        responsible for bringing the music to a mass audience.\n      </p>\n    </ion-card-content>\n  </ion-card>\n  <ion-card (click)="denunciacomercio()">\n      <img src="assets/imgs/market.png"/>\n      <ion-card-content>\n        <ion-card-title>\n          Hurto a comercio\n          </ion-card-title>\n        <p>\n          The most popular industrial group ever, and largely\n          responsible for bringing the music to a mass audience.\n        </p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card (click)="denunciapersonas()">\n        <img src="assets/imgs/people.png"/>\n        <ion-card-content>\n          <ion-card-title>\n            Hurto a personas\n            </ion-card-title>\n          <p>\n            The most popular industrial group ever, and largely\n            responsible for bringing the music to a mass audience.\n          </p>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card (click)="denunciaresidencias()">\n          <img src="assets/imgs/home.png"/>\n          <ion-card-content>\n            <ion-card-title>\n              Hurto a residencias\n              </ion-card-title>\n            <p>\n              The most popular industrial group ever, and largely\n              responsible for bringing the music to a mass audience.\n            </p>\n          </ion-card-content>\n        </ion-card> -->\n</ion-content>\n'/*ion-inline-end:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\claseshurto\claseshurto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ClaseshurtoPage);
    return ClaseshurtoPage;
}());

//# sourceMappingURL=claseshurto.js.map

/***/ })

},[435]);
//# sourceMappingURL=main.js.map