// SCRIPT FOR ASSIGNMENT 1 //


// STAR SUPRISE
function star_suprise() {
  var s = document.getElementById("stars").style.visibility="visible";
}
function star_disappear() {
  var t = document.getElementById("stars").style.visibility="hidden";
} 


// CAT
function cat_action() {
  var a = document.getElementById("fun_button1").style.display="initial";
  var b = document.getElementById("fun_button2").style.display="none";
  var c = document.getElementById("fun_button3").style.display="none";   
  var d = document.getElementById("fun_span1a").style.display="none";
  var e = document.getElementById("fun_span1b").style.display="none";
  var f = document.getElementById("fun_span2a").style.display="none";
  var g = document.getElementById("fun_span2b").style.display="none";
  var h = document.getElementById("fun_span3a").style.display="none";
  var i = document.getElementById("fun_span3b").style.display="none";
    
  
  var v = document.getElementById("fun_button1");
  v.innerHTML = "Click to give the cat some food";

  var w = document.getElementById("my_textfield");
  w.value = "User clicks Cat";
  var x = document.getElementById("my_span");
  x.innerHTML = "Cat is clicked";
  var y = document.getElementById("my_image");
  y.src = "image/cat.jpeg";
}

// DOG
function dog_action() {      
  var a = document.getElementById("fun_button1").style.display="none";
  var b = document.getElementById("fun_button2").style.display="initial";
  var c = document.getElementById("fun_button3").style.display="none"; 
  var d = document.getElementById("fun_span1a").style.display="none";
  var e = document.getElementById("fun_span1b").style.display="none";
  var f = document.getElementById("fun_span2a").style.display="none";
  var g = document.getElementById("fun_span2b").style.display="none";
  var h = document.getElementById("fun_span3a").style.display="none";
  var i = document.getElementById("fun_span3b").style.display="none";

  var v = document.getElementById("fun_button2");
  v.innerHTML = "Click to give the dog a ball";      
  var w = document.getElementById("my_textfield");
  w.value = "User clicks Dog";
  var x = document.getElementById("my_span");
  x.innerHTML = "Dog is clicked";
  var y = document.getElementById("my_image");
  y.src = "image/dog_jr.jpeg";
  
}

// FROG
function frog_action() {
  var a = document.getElementById("fun_button1").style.display="none";
  var b = document.getElementById("fun_button2").style.display="none";
  var c = document.getElementById("fun_button3").style.display="initial";
  var d = document.getElementById("fun_span1a").style.display="none";
  var e = document.getElementById("fun_span1b").style.display="none";
  var f = document.getElementById("fun_span2a").style.display="none";
  var g = document.getElementById("fun_span2b").style.display="none";
  var h = document.getElementById("fun_span3a").style.display="none";
  var i = document.getElementById("fun_span3b").style.display="none";

  var v = document.getElementById("fun_button3");
  v.innerHTML = "Click to put the frog in some water"; 
  var w = document.getElementById("my_textfield");
  w.value = "User clicks Frog";
  var x = document.getElementById("my_span");
  x.innerHTML = "Frog is clicked";
  var y = document.getElementById("my_image");
  y.src = "image/spotted_frog.jpeg";  
}


//CAT CLICK ACTION
function fun_action1() {
  var a = document.getElementById("my_image");
  a.src = "image/feeding_cat.jpeg";
  var b = document.getElementById("fun_button1");
  b.innerHTML = "Meow!! Happy Cat";
  var c = document.getElementById("fun_span1a").style.display="initial";
  var d = document.getElementById("fun_span1b").style.display="initial";     
}

//DOG CLICK ACTION
function fun_action2() {
  var a = document.getElementById("my_image");
  a.src = "image/dog_red_ball.jpeg";
  var b = document.getElementById("fun_button2");
  b.innerHTML = "Woof!! Happy Dog";
  var c = document.getElementById("fun_span2a").style.display="initial";
  var d = document.getElementById("fun_span2b").style.display="initial"; 
}

//FROG CLICK ACTION
function fun_action3() {
  var a = document.getElementById("my_image");
  a.src = "image/frog_in_water.jpeg";
  var b = document.getElementById("fun_button3");
  b.innerHTML = "Ribbit!! Happy Frog";
  var c = document.getElementById("fun_span3a").style.display="initial";
  var d = document.getElementById("fun_span3b").style.display="initial"; 
}

/* Initially my code assigned a string (or number) to a variable, that would be 
referenced when the first function was run, keeping a track of where the script
stage was, and it would then present different options to the user. 

After some struggle, it was realised that variables declared in functions are held in
the block & do not apply in a global sense, and are in fact not recommended to. So the 
result is to set buttons to display=none and for this feature to switch as required*/
