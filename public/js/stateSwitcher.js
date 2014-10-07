$('.spot-creation-exit-button').on('click', function(){
  $('.spot-creation-panel').css('visibility', 'hidden')
})

$('.spot-display-exit-button').on('click', function(){
  $('.spot-display-panel').css('visibility', 'hidden')
})

$('.exit-button').on('click', function(){
  spotBrowser();
  marker.setVisible(false)
})











// ok so the client-side app will be in a state, like 'spot creator','spot editor', 'spot browser(in a collection)', or 'collection browser/creator/editor'; each one represents a set of css classes and event handlers applied to all the dom elements. so to switch states you have something like:










transitionTo = {
  "spotCreator": spotCreator
  //essentially that's a function that looks like:
  // function(){
  //   applySpotCreatorCSS();
  //wipe old event handlers!!!
  //   applySpotCreatorEventHandlers();
  // }
  ,
  "spotEditor": function(){
    // applySpotEditorCSS();
    //wipe old event handlers!!!
    // applySpotEditorEventHandlers();
  },
  "collectionBrowser": function(){
    //wipe old event handlers!!!
    // applyCollectionBrowserCSS();
    // applyCollectionBrowser();
  }
}

// transitionTo[statename](args);



