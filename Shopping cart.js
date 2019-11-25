var buttons = new Array(18);//creates an array of color buttons
var colors = ['Red','Purple','Black','White','Orange','Yellow','Navy','Teal','Khaki','Skyblue','Lime','DeepPink','Peru','LimeGreen','DimGray','DarkGoldenRod','Cyan','Gainsboro'];
var prices = ["$14.99","$13.99","$12.99","$12.99","$11.99","$10.99","$10.99","$14.99","$14.99","$16.99","$10.99","$11.99","$13.99","$13.99","$11.99","$17.99","$10.99","$12.99"];
 function printBtn() {
  for (var i = 0; i < buttons.length; i++) {
	var x = prices[i];
		buttons[i] = document.createElement("button");
		buttons[i].style.backgroundColor=colors[i];//assigns all the buttons created,different colors
		document.body.appendChild(buttons[i]);//adds the buttons to the html doc
		//function that ensures that once a button is clicked its name appears on the color label
		buttons[i].addEventListener("click",function colors(){document.getElementById("Colorname").innerHTML = event.target.style.backgroundColor;
		document.getElementById("COLOR").innerHTML = event.target.style.backgroundColor;
	});
	}
  }
 printBtn();// function call used to print a list of buttons
 var clicks = 0;
 function CheckOut()//function that changes the text on the add to cart button
 {
 if (clicks>0){
	document.getElementById("b2").innerHTML = "Check Out";
	}
 }
 function Increament()//function that increases the number of colors once the increament button is clicked
 {
	clicks+=1;
	document.getElementById("quantity").innerHTML =clicks;
	document.getElementById("b1").innerHTML =clicks;
 }
 function Decreament()//function that decreases the number of colors once the decreament button is clicked
 {
 if (clicks>0){
	clicks-=1;
 }
	document.getElementById("quantity").innerHTML =clicks;
	document.getElementById("b1").innerHTML =clicks;
 }