// setInterval to request /textRefresher
// embed this javascript into the indext.html

// looks kind of like, which is a callback
//a callback is for the asynchronicity of querying the server
// $.ajax(location/textRefresher, function(newText){put into div})

//timing stuff setTimeout, based on comparing previous string to current newtext


$(function worker() {
    $.ajax({
      //below means the relative location and then the specified route
      url: window.location.href+'textRefresher', 
      success: function(textMessage) {
        $('#text').html(textMessage);
        //the above is how you fill a div in jquery
        //select the element with the id text and set its html to the return of the textrefresher function in python
      },
      complete: function() {
        setTimeout(worker, 1000);
      }
    });
  });