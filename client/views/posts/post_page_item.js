Template.postPageItem.helpers({
    ownPost: function() {
      return this.author_id == Meteor.userId();
    },
    'click .upvotable': function(e) {
		e.preventDefault();
		Meteor.call('upvote', this._id);
	}
});