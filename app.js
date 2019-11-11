'use strict';
// Math.random() *(max - min)+min

var hours = [ 'City','6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',]

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

 function cleanAndRender(){
    

     var tableRef = document.getElementById('tabledata');
     event.preventDefault();
    tableRef.innerHTML = "";
    event.preventDefault(); 
    renderhours();
    renderstores()
 }

var form = document.getElementById('cookieform');

form.addEventListener('submit', function(event){
    event.preventDefault();
    var newStore = new Store(event.target.name.value, event.target.min.value, event.target.max.value, event.target.average.value,[]);
    stores.push(newStore);
    cleanAndRender();
    
});
