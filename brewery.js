// strict Mode
'use strict';


//1.1 JS - Question

// Arrow Function
const jsQuestionOne = () =>{
  //Axios used to get data from REST API providing breweries data
  var axios = require('axios');
  var config = {
    method: 'get',
    url: 'https://api.openbrewerydb.org/breweries',
    headers: { }
  };
  axios(config)
  .then(function (response) {
    getBreweryData(JSON.stringify(response.data));  
  })
  .catch(function (error) {
    console.log(error);
  });

  //1.1.1 Arrow Function
  const getBreweryData = breweryData => {
    
    //1.1.7 JSON.parse
    let breweryDataArray = JSON.parse(breweryData);
    console.log("1.1.7 -> JSON Parse \n");
    console.log(breweryDataArray);

    //1.1.6 JSON.stringify
    let breweryDataStringified = JSON.stringify(breweryDataArray);
    console.log("1.1.6 -> JSON Stringify \n");
    console.log(breweryDataStringified);

    //Used Slice
    const breweryDataZipArray = breweryDataArray.map(getBreweryZipcode);
    console.log("1.1.3 -> Slice \n");
    console.log(breweryDataZipArray);

    //Used Split
    const breweryDataSplitIdArray = breweryDataZipArray.map(splitBreweryObdbId);
    console.log("1.1.2 -> Split \n");
    console.log(breweryDataSplitIdArray);

    //Used Includes
    const breweryStates = breweryDataZipArray.map(getBreweryStates);
    const breweriesInTexas = checkBreweriesinTexas(breweryStates);
    console.log("1.1.4 -> Includes \n");
    console.log("Are there any breweries in Texas? ",breweriesInTexas);

    //Used Typeof
    checkTypeOfData(breweryDataArray, breweryDataStringified, breweriesInTexas);
  }

  //1.1.2 Split 
  const splitBreweryObdbId = (breweryData) => {
    breweryData.obdb_id = breweryData.obdb_id.split("-");
    return breweryData;
  }

  //1.1.3 Slice 
  const getBreweryZipcode = (breweryData) => {
    breweryData.postal_code = breweryData.postal_code.slice(0,5);
    return breweryData;
  }

  //1.1.4 Includes 
  const checkBreweriesinTexas = (breweryData) => {
    return breweryData.includes('Texas');
  }

  //1.1.5 TypeOf
  const checkTypeOfData = (breweryDataArray, breweryDataString, breweriesinTexas) => {
    console.log("1.1.5 -> typeof \n");
    console.log(typeof(breweryDataArray));
    console.log(typeof(breweryDataString));
    console.log(typeof(breweriesinTexas));
  }

  // Preparing Data for Array of States.
  const getBreweryStates = (breweryData) => {
    return breweryData.state;
  }
} 



//1.2 Js Question
const jsQuestionTwo = () => {
  //Axios used to get data from REST API providing breweries data
  var axios = require('axios');
  var config = {
    method: 'get',
    url: 'https://api.openbrewerydb.org/breweries',
    headers: { }
  };
  axios(config)
  .then(function (response) {
    getBreweryDataForQuestionTwo(response.data);  
  })
  .catch(function (error) {
    console.log(error);
  });
  const getBreweryDataForQuestionTwo = (data) => {
    //Destructuring Object
    destructuringObject(data[0]);

    //Spread Operator
    spreadOperator(data[0]);

    //Rest Operator 
    restOperator(data[0]);

    //1.2.5 Closure Functions
    const callClosureFunc = closureFunc(data[0].name, data[0].state)
    console.log("1.2.5 -> Closure Functions");
    console.log(callClosureFunc());
  }

  //1.2.1 Destructuring Array
  //1.2.2 Destructuring Object
  const destructuringObject = (data) => {
    const {name, brewery_type} = data;
    console.log("1.2.1/2 -> Destructuring Object");
    console.log("The Name of Brewery is " + name + " and is of type " + brewery_type);
  }
  //1.2.3 Spread Operator
  const spreadOperator = (data) => {
    const additionalInfo = {
      owner : "John Ranchester",
      annualProduction : 110
    };
    const finalBreweryInfo = {...data, ...additionalInfo};
    console.log("1.2.3 -> Spread Operator");
    console.log(finalBreweryInfo);
  }
  //1.2.4 Rest Operator
  const restOperator = (data) => {
    const {id, name, city, state, ...other} = data;
    console.log("1.2.4 -> Rest Operator");
    console.log(other);
  }
  //1.2.5 Closure
  const closureFunc = (breweryName, breweryState) => {
    return () => {
      return 'The '+ breweryName + ' is located in ' + breweryState; 
    }
  }
}



//1.3 JS question
const jsQuestionThree = () => {
  //Axios used to get data from REST API providing breweries data
  var axios = require('axios');
  var config = {
    method: 'get',
    url: 'https://api.openbrewerydb.org/breweries',
    headers: { }
  };
  axios(config)
  .then(function (response) {
    // console.log((response.data[3]));
    getBreweryDataForQuestionThree(response.data[3]);  
  })
  .catch(function (error) {
    console.log(error);
  });
  //1.3.1 Export - Require
  console.log("\n 1.3.1 -> Require-Export");
  const checkExport = require('./exportdata');
  checkExport.expFunc();

  // 1.3.2 Class Static Method
  class Subway {
    constructor(subName) {
      this.subName = subName;
    }
    static topping() {
      return "Olives, Jalepeneos & Tofu";
    }
  }
  const newSub = new Subway("Panner Tikka");
  console.log("\n 1.3.2 -> Class Static Method");
  console.log(Subway.topping());
  //1.3.3  Regular Expression & Default Arguments 
  const getBreweryDataForQuestionThree = (data) => {
    checkUrlValidation(data.website_url);
  }
  const checkUrlValidation = (inputURI, regExPattern = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/)) => {
    const match = regExPattern.test(inputURI);
  console.log("\n 1.3.3 -> Regular Expression & Default Expression");
    console.log("The URL matches ?"+match);
  }
}
// 1.4 JS Question
const jsQuestionFour = () => {
  //1.4.1 Object.assign
  const objectAssignFunc = () => {
  const order = { orderId: 2, coffee: 'Mocha Frappachino' };
  const bakery = { orderId: 2, bread: 'Sour Bread' };
  const brunchOrder = Object.assign(order, bakery);
  console.log("\n1.4.1 -> Object Assign");
  console.log(order);
  console.log(brunchOrder);
  }
  objectAssignFunc();
  //1.4.2 Inheritance
  class Store {
    constructor(item) {
      this.item = item;
    }
    order(food) {
      this.food = food;
      console.log('You have ordered '+this.item+' with '+ this.food);
    }
  }
  let storeObj = new Store("Coffee");
  class Cafe extends Store {
    hide() {
      this.storeObj = storeObj;
      console.log(this.storeObj);
    }
  }
  let CafeStore = new Cafe("Bread");
  console.log("\n1.4.2 -> Inheritance");
  CafeStore.order("Pizza");
  CafeStore.hide();

  //1.4.3 Overriding  
  class canteen extends Store {
    order(food){
      console.log('You have ordered',food);
    }
  }
  let canteenStore = new canteen();
  console.log("\n1.4.3 -> Overridding");
  canteenStore.order("Pasta");
  // console.log("Question Four");
}


// 1.5 JS Question
const jsQuestionFive = () => {
  var axios = require('axios');
  var config = {
    method: 'get',
    url: 'https://api.openbrewerydb.org/breweries',
    headers: { }
  };
  axios(config)
  .then(function (response) {
    console.log("\n1.5 -> External API call using Axios");
    console.log((response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
}

// 1.6 JS Question Six
const jsQuestionSix = () => {
  var axios = require('axios');
  var config = {
    method: 'get',
    url: 'https://api.openbrewerydb.org/breweries',
    headers: { }
  };
  axios(config)
  .then(function (response) {
    // console.log((response.data));
    getBreweryDataForQuestionSix(response.data[10]);  
  })
  .catch(function (error) {
    console.log(error);
  });
  const getBreweryDataForQuestionSix = (data) => {
    // use Call()
    callFunc(data);
    // use apply()
    applyFunc(data);
    // use bind()
    bindFunc(data);

    // let, var, const
    redeclaration();

    //Callback 
    callbackFunc(data);
    // Promises
    promiseFunc(data.website_url);
    // Async Await
    asyncFunc();
  }
  // 1.6.a Call, Apply, Bind
    // Call
    const callFunc = (data) => {
      const breweryTypeFunc = {
        breweryStatus: function (city, state) {
          return "The call() method \n" + this.name + " is under " + this.brewery_type + " status, will be build in " + city + ", " + state;
        }
      }
      console.log("\n1.6.a -> Call()");
      console.log(breweryTypeFunc.breweryStatus.call(data, data.city , data.state));
    }

    // Apply
    const applyFunc = (data) => {
      const breweryApplyFunc = {
        breweryApplyInfo: function (city, state) {
          return "The Apply() Method \n" + this.name + " is under" + this.brewery_type + " status, will be build in " + city + ", " + state;
        }
      }
      console.log("\n1.6.b -> Apply()");
      console.log(breweryApplyFunc.breweryApplyInfo.apply(data,[data.city,data.state]));
    }

    // Bind
    const bindFunc = () => {
    var wineSula = {nameOfBrewery: 'Sula', wineServed: 'Red Wine'};
    var wineJacob = {nameOfBrewery: 'Jacob', wineServed: 'White Wine'};

    function say(taste) {
      console.log("\n1.6.c -> Bind()");
      console.log('The ' + this.nameOfBrewery + ' Serves ' + this.wineServed + ' which tastes '+ taste);
    }

    var sulaWinery = say.bind(wineSula);
    var jabodWinery = say.bind(wineJacob);

    sulaWinery("sweet");
    jabodWinery("sour");
  }

  // 1.6.b let, var, const
    // Var can be redeclared, Let and Const will through error on redeclaration.
    // Var and Let declared variable values can be updated, Const will through error on value being updated.
    // Var Variables are either scoped functionally or globally, but the const and let declared variables are block scoped. 
    const redeclaration = () => {
      var city = "San Jose";
      city = "Chicago";
      let state = "california";
      state = "Illinoi";
      const country = "United States";
      console.log("\n1.6.2 -> let, var, const");
      console.log(city + ", "+state + ", "+country);
    }
  // 1.6.c Callbacks, Promises, Async & Await
  // Callback 
  const callbackFunc = (data) => {
    const getBreweryLocationForCallback = (name, zipLocation) => {
      console.log("\n1.6.3.a -> Callback Function");
      console.log("The name of the place is " + name + " is located in ZIP Code " +zipLocation);
    }
    const getBreweryDataForCallback = (data, getBreweryLocationForCallback) => {
      getBreweryLocationForCallback(data.name, data.postal_code);
    }
    getBreweryDataForCallback(data, getBreweryLocationForCallback);
  }

  //Promises
  const promiseFunc = (websiteUrl) => {
    const handlePromiseFunc = new Promise( (resolve, reject) => {
      // websiteUrl = null;
      if(websiteUrl!=null){
        resolve(websiteUrl);
      }else{
        reject('Website URL not found');
      }
    });
    handlePromiseFunc.then((resp)=>{
      console.log("\n1.6.3.b -> promise");
      console.log("we Found the URL -> "+resp);
    })
    .catch((resp)=>{
      console.log(resp);
    });
  }

  // Async Await
  const asyncFunc = async () => {
    const respBreweryDataAsync = await axios.get("https://api.openbrewerydb.org/breweries");
    console.log("\n1.6.3.c Async Await");
    console.log(respBreweryDataAsync.data[13]);
  }
}

// jsQuestionOne();
// jsQuestionTwo();
// jsQuestionThree();
// jsQuestionFour(); 
// jsQuestionFive();
// jsQuestionSix();
