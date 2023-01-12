const button = $(".saveBtn")

//Shows date in header
$(document).ready(function (){
    var currentDate = moment().format('dddd, MMMM, YYYY');
    $("#currentDay").text(currentDate)

    var now = moment().hour()
    var timeBlock = $(".time-block")
    timeBlock.each(function(){
        var hourValue = parseInt($(this).attr("id"))
        if (hourValue === now){
            $(this).children(".col-md-10").attr("class", "col-8 col-md-10 description present")
        } else if (hourValue < now) {
            $(this).children(".col-md-10").attr("class", "col-8 col-md-10 description past")
        } else {
            $(this).children(".col-md-10").attr("class", "col-8 col-md-10 description future")
        }
    })
    button.on("click", function(event){
        event.preventDefault()
        var textArea = $(this).siblings(".col-md-10").val().replace(key)
        var key = $(this).parent().attr("id")
        localStorage.setItem(key, JSON.stringify (textArea))
    })

    for(let i = 9; i <= 17; i++) {
        $(`#${i} textarea`).val(JSON.parse(localStorage.getItem(`${i}`)))
        console.log(i)
    }
})