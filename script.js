(function(){
	for(i=1;i<=16;i++){
		var element=document.createElement("div");
		element.setAttribute("id",i);
		element.setAttribute("class","image-display");
		element.setAttribute("title","Seat No.:" + i + " | Price: INR " + data[i]);
		document.getElementById("seat-layout").appendChild(element);
	}
	var el=document.getElementById("seat-layout");

	for(i=0;i<el.children.length;i++){
		el.children[i].addEventListener("click",function(i){
			document.getElementById("details").style.display = "inline-block";
			document.getElementById("seatnumber").innerHTML = i.target.id;
			document.getElementById("price").innerHTML = data[i.target.id];
			document.getElementById("checkout").style.display = "inline-block";
		});
	}

}

)();
