$(function() {
    $(".devourButton").on("click", function(event){
        var id = $(this).data("id");

        var devouredState = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function(){
            location.reload();
        });
    });

    $(".newBurgerform").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#newBurgerName").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            location.reload();
        });
    });
});