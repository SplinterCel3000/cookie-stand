'use strict';
// Math.random() *(max - min)+min

var hours = ['6am   ', '7am   ', '8am   ', '9am   ', '10am   ', '11am   ', '12am   ', '1pm   ', '2pm   ', '3pm   ', '4pm   ', '5pm   ', '6pm   ', '7pm   ']



var Seattle = {
    name: 'Seattle',
     min: 23,
     max: 65,
     averageCookies:6.3,
     cookiesperhour:[],
    customeramounts: function(min, max) {
        min = Math.ceil(this.min);
        max = Math.floor(this.max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
}
 var sum = 0;
 for(var seattleIndex = 0; seattleIndex < hours.length; seattleIndex++){

    // Seattle.customeramounts();
    
   var averageCustomerAmount = Seattle.customeramounts();
    var randomCookie = Math.ceil(averageCustomerAmount * Seattle.averageCookies);
    
    Seattle.cookiesperhour.push(`${hours[seattleIndex]} ${randomCookie} cookies`);

    sum += randomCookie;

 }
Seattle.cookiesperhour.push(`Total Seattle cookies are ${sum}`);
// console.log(Seattle.cookiesperhour);

var seattleCookies = Seattle.cookiesperhour;
// console.log(seattleCookies);

var cookieDataDiv = document.getElementById('seattleCookieData');
for(var listIndex = 0; listIndex < seattleCookies.length; listIndex++){

    
    var seattleHoursRow = document.createElement('li');
    seattleHoursRow.textContent = seattleCookies[listIndex];
    seattleCookieData.append(seattleHoursRow);
} 


var Tokoyo = {
    name: 'Tokoyo',
     minT: 3,
     maxT: 24,
     averageCookiesT:1.2,
     cookiesperhourT:[],
    customeramounts: function(min, max) {
        min = Math.ceil(this.minT);
        max = Math.floor(this.maxT);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}
var sum = 0;
for(var tokoyoIndex = 0; tokoyoIndex < hours.length; tokoyoIndex++){

   
   
  var averageCustomerAmount = Tokoyo.customeramounts();
   var randomCookie = Math.ceil(averageCustomerAmount * Tokoyo.averageCookiesT);
   
   Tokoyo.cookiesperhourT.push(`${hours[tokoyoIndex]} ${randomCookie} cookies`);

   sum += randomCookie;

}

Tokoyo.cookiesperhourT.push(`Total Tokyo cookies are ${sum}`);
console.log(Tokoyo.cookiesperhourT);

var tokoyoCookies = Tokoyo.cookiesperhourT;
console.log(tokoyoCookies);

var cookieDataDiv = document.getElementById('tokoyoCookieData');
for(var listIndex = 0; listIndex < tokoyoCookies.length; listIndex++){

    
    var tokoyoHoursRow = document.createElement('li');
    tokoyoHoursRow.textContent = tokoyoCookies[listIndex];
    tokoyoCookieData.append(tokoyoHoursRow);
} 
// console.log(averageCustomerAmount);
 //console.log(Seattle.cookiesperhour);
//console.log(sum);

var Dubai = {
    name: 'Dubai',
     minD: 11,
     maxD: 38,
     averageCookiesD:3.7,
     cookiesperhourD:[],
    customeramounts: function(min, max) {
        min = Math.ceil(this.minD);
        max = Math.floor(this.maxD);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}
var sum = 0;
for(var dubaiIndex = 0; dubaiIndex < hours.length; dubaiIndex++){

   
   
  var averageCustomerAmount = Dubai.customeramounts();
   var randomCookie = Math.ceil(averageCustomerAmount * Dubai.averageCookiesD);
   
   Dubai.cookiesperhourD.push(`${hours[dubaiIndex]} ${randomCookie} cookies`);

   sum += randomCookie;

}
Dubai.cookiesperhourD.push(`Total Dubai cookies are ${sum}`);
console.log(Dubai.cookiesperhourD);

var dubaiCookies = Dubai.cookiesperhourD;
console.log(dubaiCookies);

var cookieDataDiv = document.getElementById('dubaiCookieData');
for(var listIndex = 0; listIndex < dubaiCookies.length; listIndex++){

    
    var dubaiHoursRow = document.createElement('li');
    dubaiHoursRow.textContent = dubaiCookies[listIndex];
    dubaiCookieData.append(dubaiHoursRow);
}

var Paris = {
    name: 'Paris',
     minP: 20,
     maxP: 38,
     averageCookiesP:2.3,
     cookiesperhourP:[],
    customeramounts: function(min, max) {
        min = Math.ceil(this.minP);
        max = Math.floor(this.maxP);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}
var sum = 0;
for(var parisIndex = 0; parisIndex < hours.length; parisIndex++){

   // paris.customeramounts();
   
  var averageCustomerAmount = Paris.customeramounts();
   var randomCookie = Math.ceil(averageCustomerAmount * Paris.averageCookiesP);
   
   Paris.cookiesperhourP.push(`${hours[parisIndex]} ${randomCookie} cookies`);

   sum += randomCookie;

}
Paris.cookiesperhourP.push(`Total Paris cookies are ${sum}`);
console.log(Paris.cookiesperhourP);

var parisCookies = Paris.cookiesperhourP;
console.log(parisCookies);

var cookieDataDiv = document.getElementById('parisCookieData');
for(var listIndex = 0; listIndex < parisCookies.length; listIndex++){

    
    var parisHoursRow = document.createElement('li');
    parisHoursRow.textContent = parisCookies[listIndex];
    parisCookieData.append(parisHoursRow);
} 

var Lima = {
    name: 'Lima',
     minL: 2,
     maxL: 16,
     averageCookiesL:4.6,
     cookiesperhourL:[],
    customeramounts: function(min, max) {
        min = Math.ceil(this.minL);
        max = Math.floor(this.maxL);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}
var sum = 0;
for(var limaIndex = 0; limaIndex < hours.length; limaIndex++){

   // lima.customeramounts();
   
  var averageCustomerAmount = Lima.customeramounts();
   var randomCookie = Math.ceil(averageCustomerAmount * Lima.averageCookiesL);
   
   Lima.cookiesperhourL.push(`${hours[limaIndex]} ${randomCookie} cookies`);

   sum += randomCookie;
}
Lima.cookiesperhourL.push(`Total Lima cookies are ${sum}`);
console.log(Lima.cookiesperhourL);

var limaCookies = Lima.cookiesperhourL;
console.log(parisCookies);

var cookieDataDiv = document.getElementById('limaCookieData');
for(var listIndex = 0; listIndex <limaCookies.length; listIndex++){

    
    var limaHoursRow = document.createElement('li');
   limaHoursRow.textContent =limaCookies[listIndex];
   limaCookieData.append(limaHoursRow);
} 