//Header date
var currentDate = moment().format('dddd, MMMM, YYYY');
var nine = $("hour-9")
var ten = $("hour-10")
var eleven = $("hour-11")
var twelve = $("hour-12")
var one = $("hour-1")
var two = $("hour-2")
var three = $("hour-3")
var four = $("hour-4")
var five = $("hour-5")


//Shows date in header
$(function () {
    currentDate;
    $('#currentDay').text((currentDate));

}

function getiInfoFromStorage (){
    var info = local.Storage.getItem('info');
    if ('info') {
        projects = JSON.parse(info);
        
    } else {
        info = []
    }
    return info;
}



});