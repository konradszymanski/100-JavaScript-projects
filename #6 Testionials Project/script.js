var opinions = [
  { name: "Carol",
    text: "Roomy and hard wearing inside, solid build quality that disguises miles well, still has class especially in estate and coupe form",
    img:  "https://images.generated.photos/z19zw__hkFyITHgyssYzvMg6BPFKzqa8Oe0fMRdqmDs/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwNDI4ODQuanBn.jpg"
  },{ 
    name: "Alex",
    text: "Strong, reliable, comfortable, well-built, safe. Bigger, more modern car than W123.",
    img:  "https://images.generated.photos/UqfEutU09eiT8Z9jqe238V8s6R-d3dNaEbR1FPU1H9U/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzMTU1ODQuanBn.jpg"
  },{ 
    name: "Jordan",
    text: "Extremely good looking coupe and convertible, with nice pillarless side window arrangement,solid build quality that disguises miles well, good ones are still capable of turning heads",
    img:  "https://images.generated.photos/zt2ubnzsJaYpn_HYz1NZrDlDO8MzRVgUEF_WqKyNZpM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAyMzI5ODYuanBn.jpg"
  }];

var element = document.getElementById("img");
// var = -1 will take Carol as first,var=0-Alex, 
var i = 1;
function next(direction) {
 if(direction === 'right'){
     i = i < opinions.length -1 ? i + 1 : 0
    element.style.backgroundImage  ="url('"+ opinions[i].img +"')";
    document.getElementById("names").innerHTML = opinions[i].name;
    document.getElementById("texts").innerHTML =  opinions[i].text;
 } else {
      i = 1 > 0 ? i - 1 : opinions.length - 1
    element.style.backgroundImage  ="url('"+ opinions[i].img +"')";
    document.getElementById("names").innerHTML = opinions[i].name;
    document.getElementById("texts").innerHTML =  opinions[i].text;
    }
};
// shows opinions on browser load 
	(function() {
		next('right');
  })();


//this version stops on last element of Array
/*
function next(direction) {
 if(direction === 'right'){
   if(opinions [i+1]){
     i++;
    element.style.backgroundImage  ="url('"+ opinions[i].img +"')";
    document.getElementById("names").innerHTML = opinions[i].name;
    document.getElementById("texts").innerHTML =  opinions[i].text;
   }
 } else {
   if (opinions[i-1])
     i--;
    element.style.backgroundImage  ="url('"+ opinions[i].img +"')";
    document.getElementById("names").innerHTML = opinions[i].name;
    document.getElementById("texts").innerHTML =  opinions[i].text;
    }
};

	(function() {
		next('right');
  })();
  */