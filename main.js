/*
$(document).ready(function(){
    $(".btn").click(function(){
        alert("The button was clicked.");
    })
})
*/

function getData(){
    var userInput = $("#searchdata").val()
    var xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=AzrNpbXJYtB7SmZ8FkP3evQRB2O2yPI2&limit=30`);
    xhr.done(function(response) {
        
        console.log("data acquired", response);

        var giffs = response.data
        
        for (i in giffs)
        {
            $('.results').append("<img src = '" + giffs[i].images.original.url+"'style='height:350px; width:350px;'/>")
        }

    });

}