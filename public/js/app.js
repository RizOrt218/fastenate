

window.onload = function () {
  $.getJSON( './api/random.json', function(data) {
    console.log(data);

//================ data ===========================
 for ( var i = 0; i < 6; i++ ) {

  var randomButton = Math.floor(Math.random()*50);
  var dataChild = data.data.children;
  var thumbnail = dataChild[randomButton].data.thumbnail;
  var title = dataChild[randomButton].data.title;
  var author = dataChild[randomButton].data.author;
  var score = dataChild[randomButton].data.score;
  var description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quos nostrum itaque, quae ipsa, obcaecati, nemo rerum facere eos veritatis iure accusantium esse aut illo iste eligendi tempora natus consectetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor enim expedita harum alias repudiandae maiores fugit nemo libero odit sequi, consequatur mollitia cupiditate, dignissimos commodi a, cum aut accusamus culpa.";
//================= main/block wrapper ========


  var contentBlock = $('<div>'); //div for one whole block
    contentBlock
      .addClass('contentBlock')
    ;
    $(document.body).append(contentBlock);

//================= image =====================

  var conImage = $('<div>');
    conImage
      .addClass( 'conImage' )
    ;
    contentBlock.append(conImage);
    conImage.append('<img src="'+thumbnail+'" />');

//================== title ====================

  var conTitle = $('<div>');
    conTitle
      .addClass( 'conTitle' )
    ;
    contentBlock.append(conTitle);
    conTitle.append(title);

//========= ul for author/create/views =======

  var infoBar = $('<ul>');
    infoBar
      .addClass('infoBar')
    ;
    contentBlock.append(infoBar);

//================== author ===================

  var conAuthor = $('<li>'); //div for author
    conAuthor
      .addClass('conAuthor')
    ;
    infoBar.append(conAuthor);
    conAuthor.append('by ' + author);

//================== created ==================

  var conCreated = $('<li>');
    conCreated
      .addClass('conCreated').text('PINK')
    ;
    infoBar.append(conCreated);

//================== views ====================

  var conViews = $('<li>');
    conViews
      .addClass('conViews')
    ;
    infoBar.append(conViews);
    conViews.append(score + " views");

//============= div for textBox ================

  var textBlock = $('<div>');
    textBlock
      .addClass('textBlock')
    ;
    contentBlock.append(textBlock);

//=============== description =================

  var conDescription = $('<div>'); // div for description
    conDescription
      .addClass('conDescription')
    ;
    textBlock.append(conDescription);
    conDescription.append(description);

  $('.mainContent').append(contentBlock); //appending whole block in main
}

});

};