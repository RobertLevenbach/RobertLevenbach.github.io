
var viewWidth = window.innerWidth;
var viewHeight = window.innerHeight;

var marg=10
var margin = {top: marg, right: marg, bottom: marg, left: marg};
var width = viewWidth - margin.left - margin.right;
var height = viewHeight - margin.top - margin.bottom;

var ratiopf=0


function resizePF(width, height){
  var body= document.getElementsByClassName("body")
  body.height=window.innerHeight

  var wrapper= document.getElementsByClassName("wrapper");
  wrapper.width=window.innerHeight
  wrapper.height=height

  var under= document.getElementsByClassName("under");
  under.width=window.innerHeight
  under.height=height

  console.log(wrapper)


  var pf= document.getElementById("profile-picture");
  maxWidthPF= 100
  maxHeightPF= 100

  pf.height=maxHeightPF
  pf.width=maxWidthPF

  if(wrapper.height/10<maxHeightPF){
    pf.width=height/4
    pf.height=height/4
  }
  if(wrapper.width/10<maxWidthPF){
    pf.width=width/4
    pf.height=width/4
  }

  
  var cv= document.getElementById("cv");

  cv.width=window.innerWidth;
  cv.style.height=window.innerHeight-height/3;
  cv.style.top= height/3  + 'px';
  
  console.log(cv)
    
}

function resize() {

    viewWidth = window.innerWidth;
    viewHeight = window.innerHeight;
  
    width = viewWidth - margin.left - margin.right;
    height = viewHeight - margin.top - margin.bottom;
  

    
  
    resizePF(width, height);
  }

  resize()
  d3.select(window).on("resize", resize);
