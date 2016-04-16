console.log("Javascript online")

function createGrid(){
	var gridWidthInBoxes = prompt("How many rows and columns?")
	$('.unitIn, .unitOut').remove()
	for (var i = 0; i < (gridWidthInBoxes * gridWidthInBoxes); i++) {
		$("#container").append("<div class='unitIn'></div>")
	}
	restyle(gridWidthInBoxes)

	$(".unitIn").hover(function(){
		$(this).addClass("unitOut").removeClass("unitIn")
	})
}

function createGridRandomColor(){
	var gridWidthInBoxes = prompt("How many rows and columns?")
	$('.unitIn, .unitOut').remove()
	for (var i = 0; i < (gridWidthInBoxes * gridWidthInBoxes); i++) {
		$("#container").append("<div class='unitIn'></div>")
	}
	restyle(gridWidthInBoxes)

	$(".unitIn").hover(function(){
		var randomColorChange = '#' + (Math.random()*0xFFFFFF<<0).toString(16)
		$(this).css('background-color', randomColorChange)
	})
}
function createGradient(){
	var gridWidthInBoxes = prompt("How many rows and columns?")
	$('.unitIn, .unitOut').remove()
	for (var i = 0; i < (gridWidthInBoxes * gridWidthInBoxes); i++) {
		$("#container").append("<div class='unitIn'></div>")
	}
	$(".unitIn").css('background-color', "#000000")
	$("#container").css('background-color', "#ffffff")
	$(".unitIn").css('opacity', 0.1)
	//$("#container").css('opacity', 0.1)
	restyle(gridWidthInBoxes)
	$(".unitIn").mouseenter(function(){
		var opa = $(this).css("opacity")
		if (opa < 1) {
			$(this).css("opacity", opa*2)
		}
		
	})
}

function createGridOG(){
	var gridWidthInBoxes = 16
	$('.unitIn').remove()
	for (var i = 0; i < (gridWidthInBoxes * gridWidthInBoxes); i++) {
		$("#container").append("<div class='unitIn'></div>")
	}
	restyle(gridWidthInBoxes)

	$(".unitIn").hover(function(){
		$(this).addClass("unitOut").removeClass("unitIn")
	})

}

function restyle(numberofBoxes){
	$('.unitIn').css('width', (100/numberofBoxes)+'%')
	$('.unitIn').css('height', (100/numberofBoxes)+'%')
}

$(document).ready(function(){
	createGridOG()
})

//Buttons yo
$(function(){
	$("#moreDiv").click(function(){
		createGrid();
	})
});

$(function(){
	$("#randomColor").click(function(){
		createGridRandomColor()
	})
})

$(function(){
	$("#gradient").click(function(){
		 createGradient()
	})
})
//How hover works

