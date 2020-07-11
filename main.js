/*
    Search Trigger on Submit
*/

$(document).ready(() => {
    $("#submit").click(() => { let userInput = $("#search").val() /* alert(userInput) */
    $.ajax({url: 'https:://api.giphy.com/v1/gifs/search?q='{userInput}'&api_key=AzrNpbXJYtB7SmZ8FkP3evQRB2O2yPI2'
    })

    .done((res)=> {
        console.log
    })

    })

    

})