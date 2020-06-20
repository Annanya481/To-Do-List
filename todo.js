$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
})

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stoppropagation();
})

$("input[type='text']").keypress(function(){
    if(event.which === 13){
        let todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
    }
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});