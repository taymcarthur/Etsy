$(document).ready(function(){
	$.getJSON('https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop&callback=?', function(data){
	console.log(data)
	})
	$("#right").on("click",function(){
		var ansYes = confirm("are you sure?") 
		if (ansYes === true) {
			alert("Too Bad So Sad")
		} else {
			alert("Good")
		}
	}) 
	
})
