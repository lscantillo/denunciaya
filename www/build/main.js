webpackJsonp([9],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomicidioformPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(116);
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
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geo = geo;
        this.fdb = fdb;
        // arrDenuncias=[];
        this.arrDenuncias = {};
        // this.fdb.list("/Denuncias/").valueChanges().subscribe(_data=>{
        // this.arrDenuncias=_data;
        // console.log(this.arrDenuncias);
        // });
        this.showMap();
    }
    HomicidioformPage.prototype.EnviarHom = function () {
        this.showMap();
        if (this.ubicacion == true) {
            //this.showMap();
            console.log("True_toggle_gps");
            this.arrDenuncias[0] = { Latitud: this.lat, Longitud: this.lng };
            this.fdb.list("/Denuncias/Homicidio").push(this.arrDenuncias);
            // this.fdb.list("/Denuncias/Homicidio").push({Latitud:this.lat})
            // this.fdb.list("/Denuncias/Homicidio").push({Latitud:this.lng})
            console.log("Latitud", this.lat);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            //this.nav.setRoot(HomePage);
        }
        else {
            this.fdb.list("/Denuncias/Homicidio").push(this.arrDenuncias);
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
            selector: 'page-homicidioform',template:/*ion-inline-start:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\homicidioform\homicidioform.html"*/'<!--\n  Generated template for the HomicidioformPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title class="center">Formulario Homicidio</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    \n    <h4 class="center">Digite los siguientes campos</h4>\n    <ion-item>\n      <ion-label required stacked>Nombres</ion-label>\n      <ion-input required [(ngModel)]="arrDenuncias.Nombres" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Apellidos</ion-label>\n      <ion-input required [(ngModel)]="arrDenuncias.Apellidos" type="text" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label required stacked>Género</ion-label>\n        <ion-select [(ngModel)]="arrDenuncias.Genero">\n            <ion-option value="Masculino">Masculino</ion-option>\n            <ion-option value="Femenino">Femenino</ion-option>                   \n          </ion-select>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>Tipo de Documento</ion-label>\n      <ion-select required [(ngModel)]="arrDenuncias.TipoDocumento">\n        <ion-option value="CC">Cédula de ciudadanía</ion-option>\n        <ion-option value="CE">Cédula de Extranjeria</ion-option>\n        <ion-option value="TI">Tarjeta de Identidad</ion-option>        \n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Número de Documento</ion-label>\n      <ion-input required [(ngModel)]="arrDenuncias.NumDoc" type="number"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Telefono</ion-label>\n      <ion-input required [(ngModel)]="arrDenuncias.Telefono" type="number"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Correo Electrónico</ion-label>\n      <ion-input [(ngModel)]="arrDenuncias.Email" type="email"></ion-input>\n    </ion-item>\n\n    <h4 class="center">Información de la denuncia</h4>\n\n    <ion-item>\n        <ion-label stacked>Describa la denuncia</ion-label>\n        <ion-input required [(ngModel)]="arrDenuncias.Denuncia" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked>Dirección de la denuncia</ion-label>\n        <ion-input [(ngModel)]="arrDenuncias.DireccionDenuncia" type="text"></ion-input>\n    </ion-item>\n\n    <!-- <ion-item>\n        <ion-label>Ubicación Actual</ion-label>\n        <ion-toggle checked="false"></ion-toggle>\n    </ion-item>  -->\n    \n    \n    <ion-item>\n      <ion-label>Ubicación Actual</ion-label>\n      <ion-toggle [(ngModel)]="ubicacion" checked="false"></ion-toggle>\n    </ion-item>\n  \n  </ion-list>\n\n    \n    <div padding>\n      <button (click)="EnviarHom()" ion-button block>Enviar Denuncia</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\homicidioform\homicidioform.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], HomicidioformPage);
    return HomicidioformPage;
}());

//# sourceMappingURL=homicidioform.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HurtotransportePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(30);
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
 * Generated class for the HurtotransportePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HurtotransportePage = (function () {
    function HurtotransportePage(navCtrl, navParams, fdb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fdb = fdb;
        this.arrDenuncias = {};
    }
    HurtotransportePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HurtotransportePage');
    };
    HurtotransportePage.prototype.EnviarHurtoTransporte = function () {
        this.fdb.list("/Denuncias/Hurto/Transporte").push(this.arrDenuncias);
        // this.fdb.list<'items'>("/Denuncias/Homicidio/Apellidos").push(this.Apellidos)
        // this.fdb.list<'items'>("/Denuncias/Homicidio/Telefono").push(this.Telefono)
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    HurtotransportePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hurtotransporte',template:/*ion-inline-start:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\hurtotransporte\hurtotransporte.html"*/'<!--\n  Generated template for the HurtotransportePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color= "primary">\n    <ion-title>Hurto Transporte</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list>\n    \n        <h4 class="center">Digite los siguientes campos</h4>\n        <ion-item>\n          <ion-label required stacked>Nombres</ion-label>\n          <ion-input required [(ngModel)]="arrDenuncias.Nombres" type="text"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label stacked>Apellidos</ion-label>\n          <ion-input required [(ngModel)]="arrDenuncias.Apellidos" type="text" required></ion-input>\n        </ion-item>\n    \n        <ion-item>\n            <ion-label required stacked>Género</ion-label>\n            <ion-select [(ngModel)]="arrDenuncias.Genero">\n                <ion-option value="Masculino">Masculino</ion-option>\n                <ion-option value="Femenino">Femenino</ion-option>                   \n              </ion-select>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label>Tipo de Documento</ion-label>\n          <ion-select required [(ngModel)]="arrDenuncias.TipoDocumento">\n            <ion-option value="CC">Cédula de ciudadanía</ion-option>\n            <ion-option value="CE">Cédula de Extranjeria</ion-option>\n            <ion-option value="TI">Tarjeta de Identidad</ion-option>        \n          </ion-select>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label stacked>Número de Documento</ion-label>\n          <ion-input required [(ngModel)]="arrDenuncias.NumDoc" type="number"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label stacked>Telefono</ion-label>\n          <ion-input required [(ngModel)]="arrDenuncias.Telefono" type="number"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label stacked>Correo Electrónico</ion-label>\n          <ion-input [(ngModel)]="arrDenuncias.Email" type="email"></ion-input>\n        </ion-item>\n    \n        <h4 class="center">Información de la denuncia</h4>\n    \n        <ion-item>\n            <ion-label stacked>Describa la denuncia</ion-label>\n            <ion-input required [(ngModel)]="arrDenuncias.Denuncia" type="text"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n            <ion-label stacked>Dirección de la denuncia</ion-label>\n            <ion-input [(ngModel)]="arrDenuncias.DireccionDenuncia" type="text"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n            <ion-label>Ubicación Actual</ion-label>\n            <ion-toggle checked="false"></ion-toggle>\n        </ion-item>  \n      \n      </ion-list>\n      \n      <div padding>\n        <button (click)="EnviarHurtoTransporte()" ion-button block>Enviar Denuncia</button>\n      </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\hurtotransporte\hurtotransporte.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], HurtotransportePage);
    return HurtotransportePage;
}());

//# sourceMappingURL=hurtotransporte.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HurtocomercioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(30);
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
 * Generated class for the HurtocomercioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HurtocomercioPage = (function () {
    function HurtocomercioPage(navCtrl, navParams, fdb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fdb = fdb;
        this.arrDenuncias = {};
    }
    HurtocomercioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HurtocomercioPage');
    };
    HurtocomercioPage.prototype.EnviarHurtoComercio = function () {
        this.fdb.list("/Denuncias/Hurto/Comercio").push(this.arrDenuncias);
        // this.fdb.list<'items'>("/Denuncias/Homicidio/Apellidos").push(this.Apellidos)
        // this.fdb.list<'items'>("/Denuncias/Homicidio/Telefono").push(this.Telefono)
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    HurtocomercioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hurtocomercio',template:/*ion-inline-start:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\hurtocomercio\hurtocomercio.html"*/'<!--\n  Generated template for the HurtocomercioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Hurto Comercio</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list>\n    \n        <h4 class="center">Digite los siguientes campos</h4>\n        <ion-item>\n          <ion-label required stacked>Nombres</ion-label>\n          <ion-input required [(ngModel)]="arrDenuncias.Nombres" type="text"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label stacked>Apellidos</ion-label>\n          <ion-input required [(ngModel)]="arrDenuncias.Apellidos" type="text" required></ion-input>\n        </ion-item>\n    \n        <ion-item>\n            <ion-label required stacked>Género</ion-label>\n            <ion-select [(ngModel)]="arrDenuncias.Genero">\n                <ion-option value="Masculino">Masculino</ion-option>\n                <ion-option value="Femenino">Femenino</ion-option>                   \n              </ion-select>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label>Tipo de Documento</ion-label>\n          <ion-select required [(ngModel)]="arrDenuncias.TipoDocumento">\n            <ion-option value="CC">Cédula de ciudadanía</ion-option>\n            <ion-option value="CE">Cédula de Extranjeria</ion-option>\n            <ion-option value="TI">Tarjeta de Identidad</ion-option>        \n          </ion-select>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label stacked>Número de Documento</ion-label>\n          <ion-input required [(ngModel)]="arrDenuncias.NumDoc" type="number"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label stacked>Telefono</ion-label>\n          <ion-input required [(ngModel)]="arrDenuncias.Telefono" type="number"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label stacked>Correo Electrónico</ion-label>\n          <ion-input [(ngModel)]="arrDenuncias.Email" type="email"></ion-input>\n        </ion-item>\n    \n        <h4 class="center">Información de la denuncia</h4>\n    \n        <ion-item>\n            <ion-label stacked>Describa la denuncia</ion-label>\n            <ion-input required [(ngModel)]="arrDenuncias.Denuncia" type="text"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n            <ion-label stacked>Dirección de la denuncia</ion-label>\n            <ion-input [(ngModel)]="arrDenuncias.DireccionDenuncia" type="text"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n            <ion-label>Ubicación Actual</ion-label>\n            <ion-toggle checked="false"></ion-toggle>\n        </ion-item>  \n      \n      </ion-list>\n      \n      <div padding>\n        <button (click)="EnviarHurtoComercio()" ion-button block>Enviar Denuncia</button>\n      </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\hurtocomercio\hurtocomercio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], HurtocomercioPage);
    return HurtocomercioPage;
}());

//# sourceMappingURL=hurtocomercio.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HurtopersonasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(30);
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
 * Generated class for the HurtopersonasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HurtopersonasPage = (function () {
    function HurtopersonasPage(navCtrl, navParams, fdb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fdb = fdb;
        this.arrDenuncias = {};
    }
    HurtopersonasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HurtopersonasPage');
    };
    HurtopersonasPage.prototype.EnviarHurtoPersonas = function () {
        this.fdb.list("/Denuncias/Hurto/Personas").push(this.arrDenuncias);
        // this.fdb.list<'items'>("/Denuncias/Homicidio/Apellidos").push(this.Apellidos)
        // this.fdb.list<'items'>("/Denuncias/Homicidio/Telefono").push(this.Telefono)
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    HurtopersonasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hurtopersonas',template:/*ion-inline-start:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\hurtopersonas\hurtopersonas.html"*/'<!--\n  Generated template for the HurtopersonasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Hurto a Personas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list>\n    \n        <h4 class="center">Digite los siguientes campos</h4>\n        <ion-item>\n          <ion-label required stacked>Nombres</ion-label>\n          <ion-input required [(ngModel)]="arrDenuncias.Nombres" type="text"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label stacked>Apellidos</ion-label>\n          <ion-input required [(ngModel)]="arrDenuncias.Apellidos" type="text" required></ion-input>\n        </ion-item>\n    \n        <ion-item>\n            <ion-label required stacked>Género</ion-label>\n            <ion-select [(ngModel)]="arrDenuncias.Genero">\n                <ion-option value="Masculino">Masculino</ion-option>\n                <ion-option value="Femenino">Femenino</ion-option>                   \n              </ion-select>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label>Tipo de Documento</ion-label>\n          <ion-select required [(ngModel)]="arrDenuncias.TipoDocumento">\n            <ion-option value="CC">Cédula de ciudadanía</ion-option>\n            <ion-option value="CE">Cédula de Extranjeria</ion-option>\n            <ion-option value="TI">Tarjeta de Identidad</ion-option>        \n          </ion-select>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label stacked>Número de Documento</ion-label>\n          <ion-input required [(ngModel)]="arrDenuncias.NumDoc" type="number"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label stacked>Telefono</ion-label>\n          <ion-input required [(ngModel)]="arrDenuncias.Telefono" type="number"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label stacked>Correo Electrónico</ion-label>\n          <ion-input [(ngModel)]="arrDenuncias.Email" type="email"></ion-input>\n        </ion-item>\n    \n        <h4 class="center">Información de la denuncia</h4>\n    \n        <ion-item>\n            <ion-label stacked>Describa la denuncia</ion-label>\n            <ion-input required [(ngModel)]="arrDenuncias.Denuncia" type="text"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n            <ion-label stacked>Dirección de la denuncia</ion-label>\n            <ion-input [(ngModel)]="arrDenuncias.DireccionDenuncia" type="text"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n            <ion-label>Ubicación Actual</ion-label>\n            <ion-toggle checked="false"></ion-toggle>\n        </ion-item>  \n      \n      </ion-list>\n      \n      <div padding>\n        <button (click)="EnviarHurtoPersonas()" ion-button block>Enviar Denuncia</button>\n      </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\hurtopersonas\hurtopersonas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], HurtopersonasPage);
    return HurtopersonasPage;
}());

//# sourceMappingURL=hurtopersonas.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HurtoresidenciasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(30);
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
 * Generated class for the HurtoresidenciasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HurtoresidenciasPage = (function () {
    function HurtoresidenciasPage(navCtrl, navParams, fdb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fdb = fdb;
        this.arrDenuncias = {};
    }
    HurtoresidenciasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HurtoresidenciasPage');
    };
    HurtoresidenciasPage.prototype.EnviarHurtoResidencia = function () {
        this.fdb.list("/Denuncias/Hurto/Residencias").push(this.arrDenuncias);
        // this.fdb.list<'items'>("/Denuncias/Homicidio/Apellidos").push(this.Apellidos)
        // this.fdb.list<'items'>("/Denuncias/Homicidio/Telefono").push(this.Telefono)
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    HurtoresidenciasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hurtoresidencias',template:/*ion-inline-start:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\hurtoresidencias\hurtoresidencias.html"*/'<!--\n  Generated template for the HurtoresidenciasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Hurto a Residencias</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list>\n    \n        <h4 class="center">Digite los siguientes campos</h4>\n        <ion-item>\n          <ion-label required stacked>Nombres</ion-label>\n          <ion-input required [(ngModel)]="arrDenuncias.Nombres" type="text"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label stacked>Apellidos</ion-label>\n          <ion-input required [(ngModel)]="arrDenuncias.Apellidos" type="text" required></ion-input>\n        </ion-item>\n    \n        <ion-item>\n            <ion-label required stacked>Género</ion-label>\n            <ion-select [(ngModel)]="arrDenuncias.Genero">\n                <ion-option value="Masculino">Masculino</ion-option>\n                <ion-option value="Femenino">Femenino</ion-option>                   \n              </ion-select>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label>Tipo de Documento</ion-label>\n          <ion-select required [(ngModel)]="arrDenuncias.TipoDocumento">\n            <ion-option value="CC">Cédula de ciudadanía</ion-option>\n            <ion-option value="CE">Cédula de Extranjeria</ion-option>\n            <ion-option value="TI">Tarjeta de Identidad</ion-option>        \n          </ion-select>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label stacked>Número de Documento</ion-label>\n          <ion-input required [(ngModel)]="arrDenuncias.NumDoc" type="number"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label stacked>Telefono</ion-label>\n          <ion-input required [(ngModel)]="arrDenuncias.Telefono" type="number"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label stacked>Correo Electrónico</ion-label>\n          <ion-input [(ngModel)]="arrDenuncias.Email" type="email"></ion-input>\n        </ion-item>\n    \n        <h4 class="center">Información de la denuncia</h4>\n    \n        <ion-item>\n            <ion-label stacked>Describa la denuncia</ion-label>\n            <ion-input required [(ngModel)]="arrDenuncias.Denuncia" type="text"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n            <ion-label stacked>Dirección de la denuncia</ion-label>\n            <ion-input [(ngModel)]="arrDenuncias.DireccionDenuncia" type="text"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n            <ion-label>Ubicación Actual</ion-label>\n            <ion-toggle checked="false"></ion-toggle>\n        </ion-item>  \n      \n      </ion-list>\n      \n      <div padding>\n        <button (click)="EnviarHurtoResidencia()" ion-button block>Enviar Denuncia</button>\n      </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\hurtoresidencias\hurtoresidencias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], HurtoresidenciasPage);
    return HurtoresidenciasPage;
}());

//# sourceMappingURL=hurtoresidencias.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TelefonosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(246);
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
            selector: 'page-telefonos',template:/*ion-inline-start:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\telefonos\telefonos.html"*/'<!--\n  Generated template for the TelefonosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>Teléfonos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="ion-content">\n\n  <ion-list>\n      <ion-list-header class="home">\n          Marcado Rápido\n        </ion-list-header>\n\n    <ion-card  class="ion-content" *ngFor="let p of pages" (click)="openPhone(p.number)">\n      <ion-card-content ion-item >\n          <ion-icon name="call"></ion-icon> {{p.number}}    {{p.text}}\n      </ion-card-content>\n    </ion-card>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\telefonos\telefonos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */]])
    ], TelefonosPage);
    return TelefonosPage;
}());

//# sourceMappingURL=telefonos.js.map

/***/ }),

/***/ 155:
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
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/alerta/alerta.module": [
		451,
		8
	],
	"../pages/claseshurto/claseshurto.module": [
		450,
		7
	],
	"../pages/hurtocomercio/hurtocomercio.module": [
		452,
		6
	],
	"../pages/hurtoform/hurtoform.module": [
		453,
		5
	],
	"../pages/hurtopersonas/hurtopersonas.module": [
		454,
		4
	],
	"../pages/hurtoresidencias/hurtoresidencias.module": [
		455,
		3
	],
	"../pages/hurtotransporte/hurtotransporte.module": [
		456,
		2
	],
	"../pages/telefonos/telefonos.module": [
		457,
		1
	],
	"../pages/violenciaform/violenciaform.module": [
		458,
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
webpackAsyncContext.id = 198;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(116);
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
        this.items = fdb.list('Mapa').valueChanges();
        // Sentencia para obtener los ultimos valores de las coordenadas de la base de datos
        // this.items = fdb.list('/Mapa', ref => ref.limitToLast(2)).valueChanges();  
        //this.showMap();
    }
    MapasPage.prototype.ionViewDidLoad = function () {
        // let loading = this.loadingCtrl.create({
        //   content: 'Please wait...'
        // });
        var _this = this;
        // loading.present();     
        setTimeout(function () {
            _this.showMap();
        }, 2000);
        //this.showMap();   
    };
    MapasPage.prototype.showMap = function () {
        var _this = this;
        this.geo.getCurrentPosition().then(function (pos) {
            _this.lat = pos.coords.latitude;
            _this.lng = pos.coords.longitude;
            var location = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
            var heatmapData = [];
            //   this.items.forEach(element => {
            //     const point = new google.maps.LatLng(obj.Latitud,obj.Longitud)
            //     heatmapData.push(point)
            //     console.log(heatmapData);
            // });
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
            //setTimeout(() => {
            var map = new google.maps.Map(_this.mapRef.nativeElement, options);
            _this.addMarker(location, map);
            // }, 2000);
            var heatmap = new google.maps.visualization.HeatmapLayer({
                data: heatmapData //json coordenadas
                //data: coord
            });
            // heatmap.setMap(map);
            setInterval(heatmap.setMap(map), 500);
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
            selector: 'page-mapas',template:/*ion-inline-start:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\mapas\mapas.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n     <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="center">Mapa Del Delito</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="ion-content">\n\n        <ion-refresher (ionRefresh)="doRefresh($event)">\n          <ion-refresher-content\n          pullingIcon="arrow-dropdown"\n          pullingText="Pull to refresh"\n          refreshingSpinner="circles"\n          refreshingText="Refreshing...">            \n          </ion-refresher-content>\n        </ion-refresher>\n      \n    <ion-card>\n        <ion-card-header ion-item color="primary">\n          Mapa de Calor:\n          Concentración Denuncias\n        </ion-card-header>        \n    </ion-card>\n<div #map id="map" > </div>\n\n<!-- <div  hidden></div> -->\n<div>\n  <ion-list>\n\n    <ion-item class="text" *ngFor="let item of items | async">\n      {{item | json}}\n    </ion-item>\n  \n  </ion-list>\n</div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\mapas\mapas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], MapasPage);
    return MapasPage;
}());

//# sourceMappingURL=mapas.js.map

/***/ }),

/***/ 290:
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

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HurtoformPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(30);
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

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(313);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_controller__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__homicidioform_homicidioform__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__violenciaform_violenciaform__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__claseshurto_claseshurto__ = __webpack_require__(78);
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
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n      <img class="titleicon" src="assets/imgs/headerapp.png" width="30px" style="display:inline-block" height="40px"/>\n      \n  </ion-navbar>  \n  </ion-header>\n\n<ion-content class="ion-content">\n\n   \n    <ion-list >\n        <ion-list-header  class="home">\n            Denuncias\n        </ion-list-header>\n      <ion-item (click)="alertahomicidio()" class="ion-content">\n          <ion-avatar item-start>\n              <img src="assets/imgs/crime.png">\n          </ion-avatar>\n        <!-- <ion-icon name="leaf" item-start></ion-icon> -->\n          Homicidio\n        <ion-icon name="arrow-dropright" item-end></ion-icon>\n      </ion-item>\n\n      <ion-item (click)="alertarobo()" class="ion-content">\n          <ion-avatar item-start>\n              <img src="assets/imgs/robo.png">\n          </ion-avatar>\n          Hurto\n        <ion-icon name="arrow-dropright" item-end></ion-icon>\n      </ion-item>\n\n      <ion-item (click)="alertaviolencia()" class="ion-content">\n          <ion-avatar item-start>\n              <img src="assets/imgs/acoso.png">\n          </ion-avatar>\n          Violencia Intrafamiliar\n        <ion-icon name="arrow-dropright" item-end></ion-icon>\n      </ion-item>\n\n      <ion-item class="ion-content">\n          <ion-avatar item-start>\n              <img src="assets/imgs/people.png">\n          </ion-avatar>\n          Otras Denuncias\n        <ion-icon name="arrow-dropright" item-end></ion-icon>\n      </ion-item>\n      \n    </ion-list>\n    \n    \n    \n    <ion-fab bottom right >\n        <button ion-fab><ion-icon name="share"></ion-icon></button>\n        <ion-fab-list side="top">\n          <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n          <button ion-fab action="https://twitter.com/denunciayageo"><ion-icon name="logo-twitter"></ion-icon></button>\n          <button ion-fab><ion-icon name="logo-youtube"></ion-icon></button>\n        </ion-fab-list>\n        <ion-fab-list side="left">\n          <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n        </ion-fab-list>\n      </ion-fab>\n  \n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_controller__["a" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_alerta_alerta__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_homicidioform_homicidioform__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_hurtoform_hurtoform__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_violenciaform_violenciaform__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_mapas_mapas__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_claseshurto_claseshurto__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_hurtotransporte_hurtotransporte__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_hurtocomercio_hurtocomercio__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_hurtopersonas_hurtopersonas__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_hurtoresidencias_hurtoresidencias__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_auth__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_geolocation__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_telefonos_telefonos__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_call_number__ = __webpack_require__(246);
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
                __WEBPACK_IMPORTED_MODULE_21__pages_telefonos_telefonos__["a" /* TelefonosPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/claseshurto/claseshurto.module#ClaseshurtoPageModule', name: 'ClaseshurtoPage', segment: 'claseshurto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/alerta/alerta.module#AlertaPageModule', name: 'AlertaPage', segment: 'alerta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hurtocomercio/hurtocomercio.module#HurtocomercioPageModule', name: 'HurtocomercioPage', segment: 'hurtocomercio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hurtoform/hurtoform.module#HurtoformPageModule', name: 'HurtoformPage', segment: 'hurtoform', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hurtopersonas/hurtopersonas.module#HurtopersonasPageModule', name: 'HurtopersonasPage', segment: 'hurtopersonas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hurtoresidencias/hurtoresidencias.module#HurtoresidenciasPageModule', name: 'HurtoresidenciasPage', segment: 'hurtoresidencias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hurtotransporte/hurtotransporte.module#HurtotransportePageModule', name: 'HurtotransportePage', segment: 'hurtotransporte', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/telefonos/telefonos.module#TelefonosPageModule', name: 'TelefonosPage', segment: 'telefonos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/violenciaform/violenciaform.module#ViolenciaformPageModule', name: 'ViolenciaformPage', segment: 'violenciaform', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_21__pages_telefonos_telefonos__["a" /* TelefonosPage */]
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

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_homicidioform_homicidioform__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_violenciaform_violenciaform__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_claseshurto_claseshurto__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_mapas_mapas__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_telefonos_telefonos__ = __webpack_require__(143);
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
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\app\app.html"*/'<ion-menu [content]="content" color="primary">\n    <ion-header >\n      <!-- <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar> -->\n    </ion-header>\n    \n    <ion-content class="ion-content">\n      \n      <img src="assets/imgs/my_logo.png" alt="">\n      \n\n      <ion-list>\n       \n        <button class="ion-content" color="primary" menuClose ion-item (click)="openHome()">Inicio</button>\n        <!-- <div padding class="divcolor">\n            <h1>Denuncias <ion-icon name="bookmarks"></ion-icon></h1>\n        </div> -->\n        <button class="ion-content" color="secondary" menuClose ion-item >Denuncias <ion-icon name="bookmarks"></ion-icon></button>\n       \n        <button class="ion-content" color="primary" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          {{p.title}} <ion-icon name="bookmark"></ion-icon> \n        </button>   \n        <button class="ion-content" color="primary" menuClose ion-item (click)="openMapas()">Mapa de Delito <ion-icon name="globe"></ion-icon></button>\n        <button class="ion-content" color="primary" menuClose ion-item (click)="opentelefonos()">Telefonos De Emergencia <ion-icon name="call"></ion-icon> </button>\n        \n        \n      </ion-list>\n\n      <!-- <div id=\'cssmenu\'>\n        <ul>\n           <li><a (click)="openHome()">Inicio</a></li>\n           <li class=\'active has-sub\'><a href=\'#\'>Denuncias</a>\n              <ul>\n                 <li class=\'has-sub\'><a href=\'#\'>Product 1</a>\n                    <ul>\n                       <li><a href=\'#\'>Sub Product</a></li>\n                       <li><a href=\'#\'>Sub Product</a></li>\n                    </ul>\n                 </li>\n                 <li class=\'has-sub\'><a href=\'#\'>Product 2</a>\n                    <ul>\n                       <li><a href=\'#\'>Sub Product</a></li>\n                       <li><a href=\'#\'>Sub Product</a></li>\n                    </ul>\n                 </li>\n              </ul>\n           </li>\n           <li><a href=\'#\'>About</a></li>\n           <li><a href=\'#\'>Contact</a></li>\n        </ul>\n        </div> -->\n    </ion-content>\n\n  </ion-menu>\n  \n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n<!-- <ion-nav [root]="rootPage"></ion-nav> -->\n'/*ion-inline-end:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaseshurtoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hurtotransporte_hurtotransporte__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hurtocomercio_hurtocomercio__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hurtopersonas_hurtopersonas__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hurtoresidencias_hurtoresidencias__ = __webpack_require__(142);
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

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViolenciaformPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(30);
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
 * Generated class for the ViolenciaformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViolenciaformPage = (function () {
    function ViolenciaformPage(platform, navCtrl, navParams, fdb) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fdb = fdb;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.arrDenuncias = {};
    }
    ViolenciaformPage.prototype.EnviarViolencia = function () {
        this.fdb.list("/Denuncias/Violencia").push(this.arrDenuncias);
        // this.fdb.list<'items'>("/Denuncias/Homicidio/Apellidos").push(this.Apellidos)
        // this.fdb.list<'items'>("/Denuncias/Homicidio/Telefono").push(this.Telefono)
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        //this.nav.setRoot(HomePage);
        //this.navCtrl.popTo(HomePage);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], ViolenciaformPage.prototype, "nav", void 0);
    ViolenciaformPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-violenciaform',template:/*ion-inline-start:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\violenciaform\violenciaform.html"*/'<!--\n  Generated template for the ViolenciaformPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title class="center">Formulario Violencia</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    \n    <h4 class="center">Digite los siguientes campos</h4>\n    <ion-item>\n      <ion-label required stacked>Nombres</ion-label>\n      <ion-input required [(ngModel)]="arrDenuncias.Nombres" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Apellidos</ion-label>\n      <ion-input required [(ngModel)]="arrDenuncias.Apellidos" type="text" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label required stacked>Género</ion-label>\n        <ion-select [(ngModel)]="arrDenuncias.Genero">\n            <ion-option value="Masculino">Masculino</ion-option>\n            <ion-option value="Femenino">Femenino</ion-option>                   \n          </ion-select>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>Tipo de Documento</ion-label>\n      <ion-select required [(ngModel)]="arrDenuncias.TipoDocumento">\n        <ion-option value="CC">Cédula de ciudadanía</ion-option>\n        <ion-option value="CE">Cédula de Extranjeria</ion-option>\n        <ion-option value="TI">Tarjeta de Identidad</ion-option>        \n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Número de Documento</ion-label>\n      <ion-input required [(ngModel)]="arrDenuncias.NumDoc" type="number"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Telefono</ion-label>\n      <ion-input required [(ngModel)]="arrDenuncias.Telefono" type="number"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Correo Electrónico</ion-label>\n      <ion-input [(ngModel)]="arrDenuncias.Email" type="email"></ion-input>\n    </ion-item>\n\n    <h4 class="center">Información de la denuncia</h4>\n\n    <ion-item>\n        <ion-label stacked>Describa la denuncia</ion-label>\n        <ion-input required [(ngModel)]="arrDenuncias.Denuncia" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked>Dirección de la denuncia</ion-label>\n        <ion-input [(ngModel)]="arrDenuncias.DireccionDenuncia" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Ubicación Actual</ion-label>\n        <ion-toggle checked="false"></ion-toggle>\n    </ion-item>  \n  \n  </ion-list>\n  \n  <div padding>\n    <button (click)="EnviarViolencia()" ion-button block>Enviar Denuncia</button>\n  </div>\n</ion-content>\n \n\n \n'/*ion-inline-end:"C:\Users\luise\Documents\Ionic\Pfdenuncias\src\pages\violenciaform\violenciaform.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ViolenciaformPage);
    return ViolenciaformPage;
}());

//# sourceMappingURL=violenciaform.js.map

/***/ })

},[292]);
//# sourceMappingURL=main.js.map