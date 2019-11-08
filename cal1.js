



window.onload=function(){
/////////////////////////////////////////// for popmotion	
 				
	
const contnr = popmotion.styler(document.querySelector('.container'));

		popmotion.tween({
 
    	from: {
 
        	scale: 0,

		opacity: 0,

		x: -500
,
   	 	},

   	 to: {	
 
    	    	scale: 1,

		opacity: 1,
		x:00
 ,rotate: 180
   		},

    	duration: 1000
,
	}).start(contnr.set);

////////////////////////////////////////////////////////////////////////////
	

start();

answer = document.querySelector('.result');
var hold="0",hold1="0",operation="";

function back(){
	var str= answer.innerText.substring(0,(answer.innerText.length-1));
	answer.innerText= str;
	if(operation==="")
	hold= str;
	else
	hold1= str;
}


function clear(){
	
	hold="0";
	answer.innerText= "0";
	hold1="0";
	operation="";
}


function equal(){

	var num1=parseInt(hold);
	var num2=parseInt(hold1);

	if(operation==="+") 
	hold=""+(num1+num2);
	else if(operation==="-")
	hold=""+(num1-num2);
	else if(operation==="x")
	hold=""+(num1*num2);
	else if(operation==="/")
	hold=""+(num1/num2);
	
	answer.innerText = hold;
	hold1="0";
	operation="";
}


function Symbol(symbol){
	
	if(symbol==="=")
	equal();
	else if(symbol==="<-")
	back();
	else if(symbol==="C")
	clear();
	else
	operation= symbol;	
}

function Number(num){

	if(operation==="") {
	hold=hold+num;
	answer.innerText = hold;
	}
	else {
	hold1=hold1+num;
	answer.innerText = hold1;
	}	
}

function presentdiv(value){
	const doc= document.querySelector('.present');
	doc.innerText=value;
	const press = popmotion.styler(doc);


	

	popmotion.tween({
 
    	from: {
 
        	
		opacity: 1,

		y: 00,


   	 	},

   	 to: {
 
    	    	

		opacity: 0,

		y:100
   		},

    	duration: 2000
	}).start(press.set);
}

function differtype(value){

	presentdiv(value);
	const num= parseInt(value);
	
	if(isNaN(num))
	Symbol(value);
	else 
	Number(num);
}

function start() {
 	document.querySelector(".body").addEventListener("click", function(event) {
		
		differtype(event.target.innerText);
	});
}

}
