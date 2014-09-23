Template.postItem.helpers({
    ownPost: function() {
      return this.author_id == Meteor.userId();
    },
    indexInRow: function() {
	  	if( (this._index)%4 == 0 ){
	  		return 'first';
	  	}
	  	if( (this._index+1)%4 == 0 ){
	  		return 'last';
	  	}
	},
	'click .upvotable': function(e) {
	    e.preventDefault();
	    Meteor.call('upvote', this._id);
	  }
});