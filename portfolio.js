//JS Scripts for portfolio site GhZ:::


var pageTitle = document.title;

//IMAGE GALLERY JS!!!
if(pageTitle=='G.H.Z. Gallería de Arte') {

//initial img update
var imgUpdate = " ";
imgUpdate += '<img class="img-fluid img-responsive" style=" margin: auto; height: 200px; width: 200px;" src="images/art.jpg">';
document.getElementById('main-image').innerHTML = imgUpdate;

//pseudo code


//RRRRRRRRRRRRRRRRRRRRRRRRR
var thumbOne = document.getElementById('thumb-1')

function updateOne() {
imgUpdate = '<img class="img-fluid img-responsive" src="images/art_bc-1.png">';
document.getElementById('main-image').innerHTML = imgUpdate;
}
//if thumb 1 is clicked
thumbOne.addEventListener('click',updateOne, false);






//GGGGGGGGGGGGGGGGGGGGGGG
var thumbTwo = document.getElementById('thumb-2')

function updateTwo() {
  // document.getElementById('main-image').src = "images/art_bc-1.png";
  imgUpdate = '<img class="img-fluid img-responsive" src="images/art_bc-2.png">';

  document.getElementById('main-image').innerHTML = imgUpdate;
}
//if thumb 2 is clicked
thumbTwo.addEventListener('click',updateTwo, false);




//BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
var thumbThree = document.getElementById('thumb-3')

function updateThree() {
  // document.getElementById('main-image').src = "images/art_bc-1.png";
  imgUpdate = '<img class="img-fluid img-responsive" src="images/art_bc-3.png">';

  document.getElementById('main-image').innerHTML = imgUpdate;
}
//if thumb 3 is clicked
thumbThree.addEventListener('click',updateThree, false);
//inject to page



//BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
var thumbFour = document.getElementById('thumb-4')

function updateFour() {
  // document.getElementById('main-image').src = "images/art_bc-1.png";
  imgUpdate = '<img class="img-fluid img-responsive" src="images/impermanence.png">';

  document.getElementById('main-image').innerHTML = imgUpdate;
}
//if thumb 3 is clicked
thumbFour.addEventListener('click',updateFour, false);
//inject to page










// AAAAAAAAAAaa
var thumbZ = document.getElementById('thumb-Z')

function updateZ() {
  // document.getElementById('main-image').src = "images/art_bc-1.png";
imgUpdate = '<img class="img-fluid img-responsive" src="images/art.jpg" style="margin: auto; height: 390px; width: 390px;">';
document.getElementById('main-image').innerHTML = imgUpdate;
}
//if thumb 3 is clicked
thumbZ.addEventListener('click',updateZ, false);
//inject to page



}
else {}

















/* interactive display greeting depending on time of day */

// establish string var to use to inject via dom
 var greetingMsg = "";

// adds characters & markup to greetingMsg as string operators*/
greetingMsg += "<p>";

//calc day time
var day = new Date();
var hr = day.getHours();
hr = parseInt(hr);

// announce time of day

if (hr < 12) {
  greetingMsg += "Son las <span class='biggerNumber'>"+hr+"</span> a.m.:  ";
}
else if (hr>12) {
  greetingMsg += "Son las <span class='biggerNumber'>"+(hr-12)+"</span> p.m.:  ";
}
else if (hr == 12){
  greetingMsg += "Es medio dia!!";
}

// // targeted message update depending on time of day
 if (hr == 1) {
greetingMsg += "Z. . .";
}
else if (hr == 2) {
greetingMsg += "Zz. . .";
}
else if (hr == 3) {
greetingMsg += "Zzz. . .";
}
else if (hr == 4) {
greetingMsg = greetingMsg + "Zzzz. . .";
}
else if (hr == 5) {
greetingMsg += "Zzzzzzzzz. . .";
}
else if (hr == 6) {
greetingMsg += "Zzzzzzzzz. . .";
}
else if ( (hr == 7) || (hr == 8) || (hr == 9) || (hr == 10)) {
greetingMsg += 'Buenos Dias!';
}
else if (hr == 11) {
greetingMsg += "Ya es hora de comer?!";
}
else if (hr == 12) {
greetingMsg += "!";
}
else if ((hr == 13)  || (hr == 14) || ( hr==15)|| ( hr==16) || (hr == 17)) {
greetingMsg += "Buenas tardes!";
}
else if ((hr == 18) || (hr == 19) || (hr == 20) || (hr == 21) || (hr == 22)) {
greetingMsg += "Buenas noches!";
}
else if (hr == 23) {
greetingMsg += "Casi es media noche...";
}
else if(hr==0) {
greetingMsg += "Es media noche!";
}

// //calc weekDayName
var weekDay = day.getDay();
var weekDayName;
//
if(weekDay == 0){
  weekDayName = "Domingo";
}
else if(weekDay == 1){
  weekDayName = "Lunes";
}
else if(weekDay == 2){
  weekDayName = "Martes";
}
else if(weekDay == 3){
  weekDayName = "Miercoles";
}
else if(weekDay == 4){
  weekDayName = "Jueves";
}
else if(weekDay == 5){
  weekDayName = "Viernes";
}
else if(weekDay == 6){
  weekDayName = "Sabado";
}

// // calc month name
var month = day.getMonth();
month = (month+1);
var monthName;
//
if(month == 1){
monthName = "Enero";
}
else if(month == 2){
monthName = "Febrero";
}
else if(month == 3){
monthName = "Marzo";
}
else if(month == 4){
monthName = "Abril";
}
else if(month == 5){
monthName = "Mayo";
}
else if(month == 6){
monthName = "Junio";
}
else if(month == 7){
monthName = "Julio";
}
else if(month == 8){
monthName = "Agosto";
}
else if(month == 9){
monthName = "Septiembre";
}
else if(month == 10){
monthName = "Octubre";
}
else if(month == 11){
monthName = "Noviembre";
}
else if(month == 12){
monthName = "Deciembre";
}

//calc year
var year = day.getFullYear();
var dateNum = day.getDate();

// // update String
greetingMsg += '<br />Hoy es . . . <br />'+weekDayName+', '+monthName+' '+dateNum+', '+year;

/*this should go last, injects html into page, using dom object */
 greetingMsg += '</p>';
document.getElementById('timestamp').innerHTML = greetingMsg;

//NAV BAR JS SCRIPT

var navbarDynamicTitle = "";
var titleDisplay = '';


if( pageTitle=='G.H.Z. Portafolio Creativo') {
  titleDisplay += ":Navegaciòn : Portafolio: ";}

else if( pageTitle=='G.H.Z. Gallería de Arte') {
  titleDisplay += ":Sección de Arte:";}

else { titleDisplay += ":Navegación:";}

navbarDynamicTitle += titleDisplay;

document.getElementById('navbar-dynamic-title').innerHTML = navbarDynamicTitle;



// update url info to page on load!
if ( pageTitle == 'G.H.Z. Galleria de Arte') {

}

else {
var where = "";
where += document.URL;
document.getElementById('url').innerHTML = "<h6>Usted esta navegando el īnternet en el sitió: <span style='color: Indigo; font-size: 0.8em;'>"+where+"</span></h6>";
}
//
//
//
// var colorList; //this holds  color names in array
// var colorMarkUp = ''; // this stores the processed markup to be sent to html
//
//
// colorList = ['black',
//              'slateblue',
//              'cadetblue',
//              'peru',
//              'tomato',
//              'lightcoral',
//              'ghostwhite',
//              'azure']; //7
//
//
// // object constructor that takes in ordder # , color name
// function colorTile(order, color) {
//   this.order = order;
//   this.color = color;
//   return '<div class="col-3 order-'+order+' color"><div class="color-border" style="color: '+color+';"><h2 style = "color: '+color+'</h2><div id="colorRect" style="background-color: '+color+'"></div></div></div>';
// }
//
// var randNum
//
// for (i=0; i<=7; i++) {
//
// colorMarkUp += colorTile( ([i]+1), colorList[i]);
//
//
// }
//
//
//
// if ( pageTitle == 'G.H.Z. Creative Portfolio') {
// document.getElementById('colorSet').innerHTML = colorMarkup;
// }
//
// else {
// }
//
//
// var randCol = document.getElementById('randomize');
//
// function randomizeColors() {
//
// var generateColors
// document.getElementById('colorSet').innerHTML = colorMarkup;
// }
//
// randCol.addEventListener('click',randCol, false);



//
//
//
//
//
//
//
