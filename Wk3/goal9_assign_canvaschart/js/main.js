/**
 * Created by:
 * Class: PWA1
 * Goal: Goal9
 * Name:  Tara Thorne
 * Date: Wednesday, December 14, 2013
 */

console.log("start canvas");
(function(){
    // create canvas
    var canvas = document.createElement("canvas");

    // add canvas
    document.body.appendChild(canvas);

    // call canvas
    var ctx = canvas.getContext("2d");

    // size of canvas
    canvas.width = 400;
    canvas.height = 400;

    // student grades
    var chartData = [70,84,90,97];

    // max bar height
    var maxBarHeight = 200;
	
    // background image
	var img = new Image();
	img.src = 'images/bg.jpg';
	      img.onload = function() {
	        ctx.drawImage(img, 0, 0, 400, 400);
	      };	      

 function drawBars(){
    // graph setup
    ctx.font = "14px Georgia";

    // graph setup
    for (var i=0,len=chartData.length; i<len; i++){

    // begins graph
    ctx.beginPath();

    // bar color
    ctx.fillStyle = 'rgba(100, 200, 200, 0.75)';

    // size of bars
    var height = maxBarHeight*chartData[i]/100;

    ctx.rect(i*80+90, 270-height, 50, height);

    // fill in bars
    ctx.fill();

    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.fillText(chartData[i],i*85+95, 270-height, 52, height);
 };
     drawChartText();
 };
    function drawChartText(){
        ctx.font = '20px Georgia';
        ctx.fillStyle = 'rgb(255, 255, 255)';
        ctx.fillText('TEST GRADES', 30, 30);

        var xAxisData = ['Quiz 1', 'Quiz 2', 'Quiz 3', 'Quiz 4'];
        ctx.font = '14px Georgia';
        ctx.fillStyle = 'rgb(0, 0, 0)';

        for (var i=0,len=xAxisData.length; i<len; i++){
          ctx.fillText(xAxisData[i],i*80+95, 290);

        };
    };
    window.onload = drawBars;
})();