
var viewWidth = 500;
var viewHeight = 500;

var margin = {top: 20, right: 20, bottom: 30, left: 40};
var width = viewWidth - margin.left - margin.right;
var height = viewHeight - margin.top - margin.bottom;


function pageElements(){



}

function resize() {

    viewWidth = window.innerWidth;
    viewHeight = window.innerHeight-50;
  
    width = viewWidth - margin.left - margin.right;
    height = viewHeight - margin.top - margin.bottom;
  

    
  
    pageElements();
  }