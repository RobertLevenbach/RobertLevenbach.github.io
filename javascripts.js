
var viewWidth = window.innerWidth;
var viewHeight = window.innerHeight;

var marg=10
var margin = {top: marg, right: marg, bottom: marg, left: marg};
var width = viewWidth - margin.left - margin.right;
var height = viewHeight - margin.top - margin.bottom;

var ratiopf=0


function resizePF(width, height){

  var wrapper= document.getElementsByClassName("wrapper");
  wrapper.width=width
  wrapper.height=height


  var pf= document.getElementById("profile-picture");
  console.log(width)
  maxWidthPF= 100
  maxHeightPF= 100

    

  if(width>maxWidthPF){
    ratiopf = maxWidthPF / width; // get ratio for scaling image
    pf.width = width * ratiopf;    // Reset width to match scaled image
    pf.height = height * ratiopf;    // Reset height to match scaled image
  }
  if(height > maxHeightPF){
    ratiopf = maxHeightPF / height; // get ratio for scaling image
    pf.width = width * ratiopf;    // Reset width to match scaled image
    pf.height = height * ratiopf;    // Reset height to match scaled image
  }
    
}

function resize() {

    viewWidth = window.innerWidth;
    viewHeight = window.innerHeight-50;
  
    width = viewWidth - margin.left - margin.right;
    height = viewHeight - margin.top - margin.bottom;
  

    
  
    resizePF(width, height);
  }

  resize()
  d3.select(window).on("resize", resize);
