

window.onload = function () {
  $.getJSON( './api/get_the_app.json', function(data) { //retrieve jSon file. created fn to load data
    console.log(data);

    // var thumbnail = data.data.children[0].data.thumbnail;
    // $('.mainContent').append( '<img src=" '+ thumbnail +' " />' );

  });

};