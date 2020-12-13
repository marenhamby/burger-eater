//add handlers to indicate what needs to happen when the different buttons are clicked
$(function() {
    
    //add function behind the button to submit the new burger, add it to the table to be rendered on screen
    $(".form-class").on("submit", function(event) {
        event.preventDefault();
        console.log("adding new one")
        //new object to hold new information that will be added to the table in the database
        var newBurger = {
            burger_name: $("#new").val().trim(),
            devoured: 0
        };
    
        //send ajax call to add the burger, then reload the page to show the new burger
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("new burger added");
            location.reload();
        });
    });
    //add function behind the button to devour the burger so the devoured setting changes to true and it will move to the second table
    $(".eatMe").on("click", function(event) {
        var id = $(this).data("id");

        var newConsumedState = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newConsumedState
        }).then(function() {
            console.log("changed consumed state");
            location.reload();
        });
    });
    //add function behind the delete button to remove the burger from the table
    $(".delete").on("click", function(event) {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE",
        }).then(function() {
            console.log("deleted");
            location.reload();
        });
    });

});