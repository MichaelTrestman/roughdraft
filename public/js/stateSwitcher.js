// ok so the client-side app will be in a state, like 'spot creator','spot editor', 'spot browser(in a collection)', or 'collection browser/creator/editor'; each one represents a set of css classes and event handlers applied to all the dom elements. so to switch states you have something like:

transitionTo = {
  "spotCreator": spotCreator
  //essentially that's a function that looks like:
  // function(){
  //   applySpotCreatorCSS();
  //   applySpotCreatorEventHandlers();
  // }
  ,
  "spotEditor": function(){
    // applySpotEditorCSS();
    // applySpotEditorEventHandlers();
  },
  "collectionBrowser": function(){
    // applyCollectionBrowserCSS();
    // applyCollectionBrowser();
  }
}

// transitionTo[statename](args);



