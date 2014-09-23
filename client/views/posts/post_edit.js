Template.postEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentPostId = this._id;

    var postProperties = {
      year: $(e.target).find('[name=year]').val(),
      director: $(e.target).find('[name=director]').val(),
      poster: $(e.target).find('[name=poster]').val(),
      description: $(e.target).find('[name=description]').val()
    }


    Posts.update(currentPostId, {$set: postProperties}, function(error){
      if(error){
        // display the error to the user
        throwError(error.reason);
      }else{
        Router.go('postPage',{_id: currentPostId});
      }
    });
  },

  'click .delete': function(e){
    e.preventDefault();

    if(confirm('Delete this post?')){
      Posts.remove(this._id);
      Router.go('postsList');
    }
  }
});