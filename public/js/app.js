
  var populatePage = function( data ){
    console.log("consoleLogging", data);
    for( var i = 0; i < data.data.children.length; i++ ) {

      var randomButton = Math.floor(Math.random()*50);
      var dataInfo = data.data.children[i].data;

      var contentDiv = $( "<div/>");
        contentDiv.attr( 'id', 'block' + i );
        contentDiv.attr( 'class', 'blockContent' );

      var image = $('<img/>');
        image.attr( 'src', dataInfo.url );
      var title = '<h1>' + dataInfo.title + '</h1>';

      // info content
      var author = '<li>' + 'by ' + dataInfo.author + '</li>';
      var age    = '<li>' + '•&nbsp&nbsp' + moment(dataInfo.created, 'X').fromNow() + '</li>';
      var views  = '<li>' + '•&nbsp&nbsp' + dataInfo.score + ' views' + '</li>';

      var infoBar = $('<ul>');
        infoBar.addClass('infoBar');
        infoBar.append( author, age, views );

      var descPar = '<p>' + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis cursus augue, a consectetur tellus. Sed placerat urna ac orci egestas, eget malesuada ex malesuada...' + '</p>' ;

      var description = $('<div/>');
        description.addClass('description');
        description.append( descPar );

      $( mainContent ).append( contentDiv );
      $( '#block' + i ).append( image, title, infoBar, description );
    }
  };
window.onload = function() {

  $.getJSON( 'https://www.reddit.com/r/funny.json', populatePage );

  document.getElementById( 'random' ).addEventListener( 'click', function(){
    document.getElementById( 'mainContent' ).innerHTML = '';
    $.getJSON( "http://www.reddit.com/r/funny/.json", populatePage );
  });

  document.getElementById( 'myBoards' ).addEventListener( 'click', function(){
    document.getElementById( 'mainContent' ).innerHTML = '';
    $.getJSON( "/api/my_boards.json", populatePage);
  });

  document.getElementById( 'getTheApp' ).addEventListener( 'click', function(){
    document.getElementById( 'mainContent' ).innerHTML = '';
    $.getJSON( "http://www.reddit.com/r/videos/.json", populatePage );
  });

};
