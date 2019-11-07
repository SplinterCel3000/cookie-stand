'use strict';
// Math.random() *(max - min)+min

var hours = [ '','6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',]

function Store(name, min, max, averageCookies, cookiesperhour) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.averageCookies = averageCookies;
    this.cookiesperhour = cookiesperhour;

    this.render = function() {
        var tr = document.createElement('tr');
        var nameTd = document.createElement('td');
        nameTd.textContent = this.name;
        tr.append(nameTd);
        for(var data =0; data < this.cookiesperhour.length; data++){
        var td = document.createElement('td');
       
        td.textContent = this.cookiesperhour[data];
     
        tr.append(td);
       
        }
        tabledata.append(tr);
        }

         
    this.math = function(){

            var customeramounts = function(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min)) + min;
}
            var sum = 0;
            for(var index = 0; index < hours.length - 1; index++){
               var customers = customeramounts(min, max)
            //    console.log(customers);
                
           
               var randomCookie = Math.ceil(customers * this.averageCookies);
            //    console.log(randomCookie);
               
               this.cookiesperhour.push(` ${randomCookie}`);
           
               sum += randomCookie;

               
           
            }
            this.cookiesperhour.push(`Total cookies are ${sum} `);
        }
    }

   function renderhours(){
        var tr = document.createElement('tr');
        for(var time =0; time < hours.length; time++){
            var th = document.createElement('th');
            th.textContent = hours[time];
            tr.append(th);
        }
        tabledata.append(tr);
   }

renderhours();



var seattle = new Store('Seattle', 23, 65, 6.3, []);
var tokoyo = new Store('Tokoyo', 3, 24, 1.2, []);
var dubai = new Store('Dubai', 11, 38, 3.7, []);
var paris = new Store('Paris', 20, 38, 3.2, []);
var lima = new Store('Lima', 2, 16, 4.6, []);
var stores = [seattle, tokoyo, dubai, paris, lima];


function renderstores(){
    var storeCreate = document.createElement('tr');
    for(var storeIndex = 0; storeIndex < stores.length; storeIndex++){ 
        var currentStore = document.createElement('td');
        var makeStore = document.createElement('td');

        stores[storeIndex].cookiesperhour = [];
        stores[storeIndex].math();
        stores[storeIndex].render();
        storeCreate.append(currentStore, makeStore);
       
}
    tabledata.append(storeCreate);
}
renderstores();
// seattle.math();
// // console.log(seattle);
// // console.log(seattle);
// seattle.render();
// tokoyo.math();
// tokoyo.render();
// dubai.math();
// dubai.render();
// paris.math();
// paris.render();
// lima.math();
// lima.render();



 function cleanAndRender(){
    event.preventDefault();

     var tableRef = document.getElementById('tabledata');
     event.preventDefault();
    tableRef.innerHTML = "";
    event.preventDefault(); 
    renderhours();
    renderstores()
    
//     // for(var storeIndex = 0; storeIndex < stores.length; storeIndex++){
//     //     var currentStore1 = stores[storeIndex];

        
        

//     //}
    
    
 }

 

var form = document.getElementById('cookieform');

form.addEventListener('submit', function(event){
    event.preventDefault();
    var newStore = new Store(event.target.name.value, event.target.min.value, event.target.max.value, event.target.average.value,[]);
    stores.push(newStore);
    cleanAndRender();
    
});

// cleanAndRender();
// function timeTotals(){
//     for(var cookieIndex = 0; cookieIndex < stores[0].averageCookies.lenght; cookieIndex++){
//         var total = 0;
//         for(var storeIndex = 0; storeIndex < storeIndex.lenght; storeIndex++) {
//             total += stores[storeIndex].averageCookies[cookieIndex];
//         }
//         console.log(`total ${total}`);
//     }
// }

// timeTotals();

//  var seattlerow = document.getElementById('tabledata');
//  //renderhours(seattlerow);

// // var seattlerow = document.getElementById('seattlerow');
// for(var listIndex = 0; listIndex < seattle.length; listIndex++){
//     var currentcity = seattle[listIndex];

//     //currentcity.render('seattlerow');


    
//      var seattleHoursRow = document.createElement('td');
//      seattleHoursRow.textContent = seattleCookies[listIndex];
//    seattlerow.append(seattleHoursRow);
//  } 
 


//  var sum = 0;
//  for(var tokoyoIndex = 0; tokoyoIndex < hours.length - 1; tokoyoIndex++){
//     var tokoyoCustomers = customeramounts(tokoyo.min, tokoyo.max)
//     //console.log(tokoyoCustomers);
     

//     var randomCookie = Math.ceil(tokoyoCustomers * tokoyo.averageCookies);
//     //console.log(randomCookie);
    
//     tokoyo.cookiesperhour.push(` ${randomCookie}`);

//     sum += randomCookie;

//  }

//  tokoyo.cookiesperhour.push(`Total tokoyo cookies are ${sum} `);
//  //console.log(tokoyo.cookiesperhour);

// var tokoyoCookies = tokoyo.cookiesperhour;
//  console.log(tokoyoCookies);


//  var tokoyorow = document.getElementById('tabledata');
//  //renderhours(tokoyorow);

// // var tokoyorow = document.getElementById('tokoyorow');
// for(var listIndex = 0; listIndex < tokoyo.length; listIndex++){
//     var currentcity = tokoyo[listIndex];

//     //currentcity.render('tokoyorow');


    
//      var tokoyoHoursRow = document.createElement('td');
//      tokoyoHoursRow.textContent = tokoyoCookies[listIndex];
//    tokoyorow.append(tokoyoHoursRow);
//  } 
//  tokoyo.render();


//  var sum = 0;
//  for(var dubaiIndex = 0; dubaiIndex < hours.length - 1; dubaiIndex++){
//     var dubaiCustomers = customeramounts(dubai.min, dubai.max)
//     //console.log(dubaiCustomers);
     

//     var randomCookie = Math.ceil(dubaiCustomers * dubai.averageCookies);
//     //console.log(randomCookie);
    
//     dubai.cookiesperhour.push(` ${randomCookie}`);

//     sum += randomCookie;

//  }


//  dubai.cookiesperhour.push(`Total dubai cookies are ${sum} `);
//  //console.log(dubai.cookiesperhour);

// var dubaiCookies = dubai.cookiesperhour;
//  console.log(dubaiCookies);


//  var dubairow = document.getElementById('tabledata');
//  //renderhours(dubairow);

// // var dubairow = document.getElementById('dubairow');
// for(var listIndex = 0; listIndex < dubai.length; listIndex++){
//     var currentcity = dubai[listIndex];

//     //currentcity.render('dubairow');


    
//      var dubaiHoursRow = document.createElement('td');
//      dubaiHoursRow.textContent = dubaiCookies[listIndex];
//    dubairow.append(dubaiHoursRow);
//  } 
//  dubai.render();

//  var sum = 0;
//  for(var parisIndex = 0; parisIndex < hours.length - 1; parisIndex++){
//     var parisCustomers = customeramounts(paris.min, paris.max)
//     //console.log(parisCustomers);
     

//     var randomCookie = Math.ceil(parisCustomers * paris.averageCookies);
//     //console.log(randomCookie);
    
//     paris.cookiesperhour.push(` ${randomCookie}`);

//     sum += randomCookie;

//  }


//  paris.cookiesperhour.push(`Total paris cookies are ${sum} `);
//  //console.log(paris.cookiesperhour);

// var parisCookies = paris.cookiesperhour;
//  console.log(parisCookies);


//  var parisrow = document.getElementById('tabledata');
//  //renderhours(parisrow);

// // var parisrow = document.getElementById('parisrow');
// for(var listIndex = 0; listIndex < paris.length; listIndex++){
//     var currentcity = paris[listIndex];

//     //currentcity.render('parisrow');


    
//      var parisHoursRow = document.createElement('td');
//      parisHoursRow.textContent = parisCookies[listIndex];
//    parisrow.append(parisHoursRow);
//  } 
//  paris.render();

//  var sum = 0;
//  for(var limaIndex = 0; limaIndex < hours.length - 1; limaIndex++){
//     var limaCustomers = customeramounts(lima.min, lima.max)
//     //console.log(limaCustomers);
     

//     var randomCookie = Math.ceil(limaCustomers * lima.averageCookies);
//     //console.log(randomCookie);
    
//     lima.cookiesperhour.push(` ${randomCookie}`);

//     sum += randomCookie;

//  }


//  lima.cookiesperhour.push(`Total lima cookies are ${sum} `);
//  //console.log(lima.cookiesperhour);

// var limaCookies = lima.cookiesperhour;
//  console.log(limaCookies);


//  var limarow = document.getElementById('tabledata');
//  //renderhours(limarow);

// // var limarow = document.getElementById('limarow');
// for(var listIndex = 0; listIndex < lima.length; listIndex++){
//     var currentcity = lima[listIndex];

//     //currentcity.render('limarow');


    
//      var limaHoursRow = document.createElement('td');
//      limaHoursRow.textContent = limaCookies[listIndex];
//    limarow.append(limaHoursRow);
//  } 
//  lima.render();
