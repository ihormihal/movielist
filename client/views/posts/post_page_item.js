Template.postPageItem.helpers({
  ownPost: function() {
    return this.author_id == Meteor.userId();
  },
  posterImg: function () {
    return Posters.findOne().url('posters');
  },
  upvotedClass: function() {
    var userId = Meteor.userId();
    if (userId && !_.include(this.upvoters, userId)) {
      return 'btn-primary upvotable';
    } else {
      return 'disabled';
    }
  }
});
Template.postPageItem.events({
  'click .upvotable': function(e) {
    e.preventDefault();
    Meteor.call('upvote', this._id);
  }
});