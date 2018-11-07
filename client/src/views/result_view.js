const PubSub = require('../helpers/pub_sub.js');
const Highcharts = require('highcharts');
// require('highcharts/modules/exporting')(Highcharts);

const ResultView = function (container) {
  this.container = container;
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PublishView:final-result', (event) => {
    const result = event.detail;
    console.log(result);
  });
};

// subscribe to PublishView:final-result
// subscribe to FoodInfo
// subscribe to LifestyleView:result
// subscribe to TravelForm:display-results

ResultView.prototype.render = function (data) {
  this.container.innerHTML = "";
  const resultView = document.createElement('p');
  resultView.textContent = data.result;
  this.container.appendChild(resultView);
};

// Highcharts.chart('container', {
//   chart: {
//     plotBackgroundColor: null,
//     plotBorderWidth: null,
//     plotShadow: false,
//     type: 'pie'
//   },
//   title: {
//     text: 'CO2 results'
//   },
//   tooltip: {
//     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//   },
//   plotOptions: {
//     pie: {
//       allowPointSelect: true,
//       cursor: 'pointer',
//       dataLabels: {
//         enabled: true,
//         format: '<b>{point.name}</b>: {point.percentage:.1f} %',
//         style: {
//           color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
//         }
//       }
//     }
//   },
//   series: [{
//     name: 'CO2 calculator',
//     colorByPoint: true,
//     data: [{
//       name: 'Food',
//       y: 61.41,
//       sliced: true,
//       selected: true
//     }, {
//       name: 'Travel',
//       y: 11.84
//     }, {
//       name: 'Lifestyle',
//       y: 10.85
//     }]
//   }]
// });

// random messages need to be added here for results
//
// Transport:
// flights to be added **
// “Why not walk or cycle today?”
// “You could car share with someone”
// “Run more errands in your next trip?”
// “It might be best to take the bus this week!”
// “Get some fresh air, take a walk today”
//
// Lifestyle:
//
// “Find another product that is reduced in CO2 emissions”
// “Donate your unused clothes to another to help keep CO2 emissions down”
// “If your not using it, turn it off”
// “Do you know where your garmet was made?”
//
// Food:
//
// “Cook a homemade meal for tomorrow to reduce your CO2!”
// “Check the label next time you buy food, look for local produce.”
// “Try a delicious vegetarian meal this week”
// “Why not mix up the recipe and add more vegetables than meat”


module.exports = ResultView;
