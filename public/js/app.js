

window.onload = function () {
  $.getJSON( './api/get_the_app.json', function(data) { //retrieve jSon file. created fn to load data
    var title = data.data.children[0].data.title; //the title of the JSON fil.

    var feed = $( 'body' ).append( '<div>' ); //creates div before closing body tag
    $(feed).append(title); //takes div


  });

};