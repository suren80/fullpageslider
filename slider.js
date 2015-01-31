$(document).ready(function(){
/*Slider Code*/
function createList(SliderObject){
	var Len=SliderObject.imgArray.length
	var ul=$("<ul/>",{"class":"sliderlist"}).appendTo("body");
	for(i=0;i<Len;i++){
		var listitem=$("<li/>",{"class":"listitem"}).appendTo(ul);
		var img=$("<img/>",{"class":"imgclass","src":SliderObject.imgArray[i],"width":screen.availWidth,"height":screen.availHeight}).appendTo(listitem);
	}
}
function sliderMove(SliderObject){
	var preLi=$('li.listitem:first');
	var nextLi=$('li.listitem:first').next();                                                                       
	var imgWidth=preLi.width();
	nextLi.css("display","inline-block").css("left",imgWidth);
	slidePos=imgWidth;
	preLi.animate({
	left: -imgWidth
	},SliderObject.animationDuration,function(){
	});
	nextLi.animate({
	left: 0
	},SliderObject.animationDuration,function(){
	preLi.insertAfter('li.listitem:last');
	});
}

function invokeSlider(options){
	var SliderObject={
	imgArray: ["img/a.jpg","img/b.jpg","img/c.jpg"],
	startDuration : 7000,
	animationDuration: 3000
	};
	$.extend(SliderObject,options);
	createList(SliderObject);
	setInterval(function(){ sliderMove(SliderObject); }, SliderObject.startDuration);
}
/*Slider Code Ends*/
var SliderObject={
	imgArray: ["animal.jpg","elephant.jpg","lion.jpg"], // List Of Images
	startDuration : 7000,
	animationDuration: 3000
};
invokeSlider(SliderObject);
});
