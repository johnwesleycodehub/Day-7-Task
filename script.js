//! using array functions on rest countries data (https://restcountries.com/v3.1/all)

//! Task 1: Get all the countries from Asia continent /region using Filter function
/*
const request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all","true")
request.send();
request.onload=function(){
    var data=request.response;
    var result= JSON.parse(data)
    var res= result.filter((ele)=>ele.region==="Asia")
    var final = res.map((ele)=>console.log((ele.name.common)))
 }
*/

//! Task 2: Get all the countries with a population of less than 2 lakhs using Filter function
/*const request = new XMLHttpRequest();
 request.open("GET","https://restcountries.com/v3.1/all","true")
 request.send();
 request.onload=function(){
     var data=request.response;
     var result= JSON.parse(data)
     var res=result.filter((ele)=>ele.population<200000 )
     var final = res.map((ele)=>console.log((ele.name.common)))
}
*/

//! Task 3: Print the following details name, capital, flag, using forEach function
/*const request = new XMLHttpRequest();
 request.open("GET","https://restcountries.com/v3.1/all","true")
 request.send();
 request.onload=function(){
     var data=request.response;
     var result= JSON.parse(data)
     var res=result.forEach((ele)=>console.log(ele.name,ele.capital,ele.flag))
 }
 */

//! Task 4: Print the total population of countries using reduce function
/*
const request = new XMLHttpRequest();
 request.open("GET","https://restcountries.com/v3.1/all","true")
 request.send();
 request.onload=function(){
     var data=request.response;
     var result= JSON.parse(data)
     var final = result.reduce((acc,element)=>{
        return acc+element.population;
     },0)
     console.log(final);
 }
 */

//! Task 5: Print the country that uses US dollars as currency.
const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", "true");
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  const countriesUSD = result.filter((country) => {
    return country.currencies && country.currencies.USD;
  });
  countriesUSD.forEach((country) => {
    console.log(country.name.common);
  });
};
