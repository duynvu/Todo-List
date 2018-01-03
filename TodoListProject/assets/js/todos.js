//Check Off To-Do items
$("ul").on("click","li",function() {
	$(this).toggleClass("selected");
})

//Delete Item
$("ul").on("click","span",function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	})
	event.stopPropagation();
})

$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		var todoText = $("input").val();
		$("input").val("");

		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todoText+"</li>");
	}
})

$(".fa-plus").click(function() {
	$("input").fadeToggle();
})