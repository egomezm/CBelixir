/*
This file will IMPORT and CONFIGURE all vendors libraries
*/

// Import libraries

// Configure Entry Points
window.$ = require('jquery'); // Makes $, jquery, jQuery variables globally available
window.jquery = require('jquery');  // Makes jquery variable globally available
window.jQuery = require('jquery');  // Makes jquery variable globally available
window.Popper = require('popper.js'); // Makes popper js variables globally available
window.bootstrap = require('bootstrap');  // Makes bootstrap variable globally available
// window.buttons = require('datatables-buttons');  // Makes datatables variable globally available
// window.highcharts = require('highcharts');  // Makes highcharts variable globally available

window.Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);	// Load module after Highcharts is loaded

window.DataTable = require('datatables.net-bs4');  // Makes datatables variable globally available
window.dt = require('datatables.net-bs4');  // Makes datatables variable globally available
