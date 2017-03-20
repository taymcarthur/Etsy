$(document).ready(function(){
	$.getJSON('https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop&callback=?', function(data){
	console.log(data)
	}).then(function(items){
		var imgs = items.results.map(function(img){
			return {
				title: img.title.substring(0, 30) + "....",
				price: img.price,
				shopname: img.Shop.shop_name,
				image: img.Images[0].url_170x135
			}
		})
		var htmlStr = `<ul class="imgData">`
		imgs.forEach(function(val) {
			htmlStr += `
			<li>
			<img src="${val.image}"/>
			<p>${val.title}</p>
			<p>${val.shopname}</p>
			<p>${val.price}</p>
			</li>`
		})
		$("#apiShit").html(htmlStr)
	})

	$("#right").on("click",function(){
		var ansYes = confirm("are you sure?") 
		if (ansYes === true) {
			alert("Too Bad So Sad")
		} else {
			alert("Bye Felicia")
		}
	}) //this is for the triangle button @ Price ($)


	//img, description, shop name, price (just map it)
	
})
