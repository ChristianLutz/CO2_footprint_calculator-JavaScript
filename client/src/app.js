
const TravelForm = require("./views/form_views/travel/create_form.js")
const TravelFormView = require("./views/form_views/travel/travel_form_view.js");
const TravelCalculator = require("./models/travel.js")
const LifestyleView = require('./views/lifestyle_form_view.js');
const LifestyleModel = require('./models/lifestyle.js');

document.addEventListener("DOMContentLoaded", () => {

  const formContainer = document.querySelector("div#travel-form-placement")
  const newForm = new TravelForm(formContainer);
  newForm.createForm();
  newForm.getResults();

  const form = document.querySelector("form#travel-form");
  const formView = new TravelFormView(form);
  formView.setupEventListeners();

  const travelCalculator = new TravelCalculator();
  travelCalculator.bindEvents();
<<<<<<< HEAD
=======
=======
const PubSub = require('./helpers/pub_sub.js');
const LifestyleView = require('./views/lifestyle_form_view.js');
const LifestyleModel = require('./models/lifestyle.js');
<<<<<<< HEAD
const FoodView = require('./views/food_form_view.js');
const FoodModel = require('./models/food.js');
const FoodFinalView = require('./views/food_final_view.js');

=======
// const GridView = require('./views/grid_view.js');
>>>>>>> develop
>>>>>>> 2e61ba38d1103adf3b6943491070cb234a8531c9

// const GridView = require('./views/grid_view.js');

  const container = document.querySelector('#forms-window');
  const lifestyleForm = new LifestyleView(container);
  lifestyleForm.bindEvents();

  const lifestyleValues = new LifestyleModel();
  lifestyleValues.getValues();
<<<<<<< HEAD
=======
<<<<<<< HEAD

// FOOD FORM
  const form = document.querySelector('#food-form-div')
  const newForm = new FoodView(form);
  const food = newForm.bindEvents();
  console.log(food);


  const foodValues = new FoodModel()
  console.log(foodValues);
  foodValues.getFormValues();

  const infoFood = document.querySelector("div#forms-window")
  const infoFoodInfo = new FoodFinalView(infoFood);
  infoFoodInfo.foodCarbon();



=======
<<<<<<< HEAD
>>>>>>> 277847eb4471575141a4acdf2a9429eb3a2cc24e
=======

// -----------
>>>>>>> 2e61ba38d1103adf3b6943491070cb234a8531c9

  // const gridContainer = document.querySelector('div#results');
  // const gridView = new GridView(gridcontainer);
  // gridView.bindEvents();
<<<<<<< HEAD
=======

>>>>>>> 4414aa2a04d52ebe7ef046e4656763f36186963b
>>>>>>> develop
>>>>>>> 2e61ba38d1103adf3b6943491070cb234a8531c9
});
