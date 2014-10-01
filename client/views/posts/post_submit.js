Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();


    var cover = $(e.target).find('[name=poster]').get(0).files[0];
    var posterObj = Posters.insert(cover);

    var post = {
      title: $(e.target).find('[name=title]').val(),
      year: $(e.target).find('[name=year]').val(),
      director: $(e.target).find('[name=director]').val(),
      poster: posterObj._id,
      description: $(e.target).find('[name=description]').val()
    };
    
    Meteor.call('post', post, function(error, id) {
      if (error) {
        // показываем ошибку пользователю
        throwError(error.reason);
        if (error.error === 302)
          Router.go('postPage', {_id: error.details})
      } else {
        Router.go('postPage', {_id: id});
      }
    });
  }
});