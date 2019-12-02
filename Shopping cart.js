/**Items class has three instance variables for the background color,the price of the items and reviews*/
class Item{
constructor(color,price,review) {
  this.color = color;	
  this.price = price;
  this.review = review;
}
getPrice(){
return this.price;	
}
getColor(){
	return this.color;
}

}
//variables//
var buttons = new Array(18);
const reviews = ["1,293 reviews","1,200 reviews","1,000 reviews","1,203 reviews","1,005 reviews","293 reviews","103 reviews","100 reviews","1540 reviews","2,000 reviews","1,586 reviews","1,443 reviews","1,513 reviews","1,003 reviews","1,200 reviews","1,203 reviews","1,200 reviews","103 reviews",]
const Prices = ["14","13","12","12","11","10","10","14","14","16","10","11","13","13","11","17","10","12"];
var colors = ['Red','Purple','Black','White','Orange','Yellow','Navy','Teal','Khaki','Skyblue','Lime','DeepPink','Peru','LimeGreen','DimGray','DarkGoldenRod','Cyan','Gainsboro'];
var Items = [
      new Item("DarkRed",14,"1,293 reviews"),
      new Item("Purple",13,"1,200 reviews"),
      new Item("Black",12,"1,000 reviews"),
      new Item("White",12,"1,203 reviews"),
	  new Item("Orange",11,"1,005 reviews"),
	  new Item("Yellow",10,"293 reviews"),
	  new Item("Navy",10,"103 reviews"),
	  new Item("Teal",14,"100 reviews"),
	  new Item("Khaki",14,"1540 reviews"),
	  new Item("Skyblue",16,"2,000 reviews"),
	  new Item("Lime",10,"1,586 reviews",),
	  new Item("DeepPink",11,"1,443 reviews"),
	  new Item("Peru",13,"1,513 reviews"),
	  new Item("LimeGreen",13,"1,003 reviews"),
	  new Item("DimGray",11,"1,200 reviews"),
	  new Item("DarkGoldenRod",17,"1,203 reviews"),
	  new Item("Cyan",10,"1,200 reviews"),
	  new Item("Gainsboro",12,"103 reviews",)
    ];
	var clicks = 0;
	let total = 0;
	var Current;
	
	//Functions
function printBtn() {
	/*Creates the buttons used to display the different items using an array. Uses the getColor method to 
	set the background colors of the buttons. It also adds event listeners to each button that allows for the
	price, color and reviews label to change correspondingly*/
  for (var i = 0; i < buttons.length; i++) {
		buttons[i] = document.createElement("button");
		buttons[i].style.backgroundColor=Items[i].getColor();
		document.body.appendChild(buttons[i]);
		const price = Prices[i];
		const review = reviews[i];
		buttons[i].addEventListener("click",Colors);
		buttons[i].addEventListener("click", function() {
		document.getElementById("cost").innerHTML = "$"+price+".99";
		document.getElementById("reviw").innerHTML = review;
		});
		function Colors()
		{
		document.getElementById("Colorname").innerHTML = event.target.style.backgroundColor;
		document.getElementById("COLOR").innerHTML = event.target.style.backgroundColor;
		}
		buttons[i].addEventListener("click", function() {
		total  = total + parseInt(price);
		Current = event.target.style.backgroundColor;
		});
		buttons[i] = Items[i];
		
  }
  }
 function CheckOut()//function that changes the text on the add to cart button
 {
 if (clicks>0){
	document.getElementById("b2").innerHTML = "Check Out";
	document.getElementById("b2").dataset.target ='#Modal';
	}
 }
 function Increament()
 /*function that increases the number of colors once the increament button is clicked. It also diplays the selected number of items on the details section*/
 {
   if (clicks==0){
   document.getElementById("cost").innerHTML = "$"+0 + ".00";
 while (document.getElementById("page").hasChildNodes()) {
    document.getElementById("page").removeChild(document.getElementById("page").firstChild);
  }
 }
	clicks+=1;
	document.getElementById("quantity").innerHTML =clicks;
	document.getElementById("b1").innerHTML =clicks;
	document.getElementById("No").innerHTML =clicks;
	document.getElementById("N").innerHTML =clicks;
	for (let i = 0; i < clicks; i++) {
	btn = document.createElement("button");
	 btn.style.backgroundColor = Current;
	 //document.getElementById("page").appendChild(btn);
	}
	document.getElementById("page").appendChild(btn);
	document.getElementById("purchases").innerHTML ="$"+(total+1)*clicks + ".00";
	document.getElementById("cost").innerHTML = "$"+(total+1)*clicks + ".00";
 }
 function Decreament()//function that decreases the number of colors once the decreament button is clicked
 {
  if (clicks==0){
  document.getElementById("cost").innerHTML = "$"+0 + ".00";
 while (document.getElementById("page").hasChildNodes()) {
    document.getElementById("page").removeChild(document.getElementById("page").firstChild);
  }
 }
  if (clicks>0){
	clicks-=1;
 }
	document.getElementById("quantity").innerHTML =clicks;
	document.getElementById("b1").innerHTML =clicks;
	document.getElementById("No").innerHTML =clicks;
	document.getElementById("N").innerHTML =clicks;
	document.getElementById("page").removeChild(btn);
	document.getElementById("purchases").innerHTML = "$"+(total+1)*clicks + ".00";
	document.getElementById("cost").innerHTML = "$"+(total+1)*clicks + ".00";
 }
function Close(){
/*Function that refreshes the page once pay now is clicked*/
window.location.reload(true);
}
printBtn();