Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var post = {
      title: $(e.target).find('[name=title]').val(),
      year: $(e.target).find('[name=year]').val(),
      director: $(e.target).find('[name=director]').val(),
      poster: $(e.target).find('[name=poster]').val(),
      description: $(e.target).find('[name=description]').val()
    }

    
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