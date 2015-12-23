

window.onload = function () {
  $.getJSON( './api/random.json', function(data) { //retrieve jSon file. created fn to load data
    console.log(data);

//================ data ===========================
    var dataChild = data.data.children;
    var thumbnail = dataChild[0].data.thumbnail;
    var title = dataChild[0].data.title;
    var description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quos nostrum itaque, quae ipsa, obcaecati, nemo rerum facere eos veritatis iure accusantium esse aut illo iste eligendi tempora natus consectetur.";
//=================================================
    var contentBlock = $('<div>'); //div for one whole block
      contentBlock
        .addClass('contentBlock')
      ;

    var conImage = $('<div><img src="'+thumbnail+'" /></div>');
      conImage
        .addClass( 'conImage' )
      ;
      contentBlock.append(conImage);

    var conTitle = $('<div><h3>conTitle</h3></div>');
      conTitle
        .addClass( 'conTitle' )
      ;
      contentBlock.append(title);

    var conAuthor = $('<div>');
      conAuthor
        .addClass('conAuthor')
      ;
      contentBlock.append(conAuthor, "just a placement");

    var conDescription = $('<div>');
      contentBlock.append(description);

    $('.mainContent').append(contentBlock); //appending whole block in main


  });

};