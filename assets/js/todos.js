//Check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Adding todos
$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		//getting new todo
		var todoText = $(this).val();
		$(this).val("");
		//create new li with the todo
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");
	}
});

//toggle todo input
$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});