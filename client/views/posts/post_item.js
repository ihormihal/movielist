var POST_HEIGHT = 300;
var Positions = new Meteor.Collection(null);

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
	upvotedClass: function() {
	    var userId = Meteor.userId();
	    if (userId && !_.include(this.upvoters, userId)) {
	      return 'btn-primary upvotable';
	    } else {
	      return 'disabled';
	    }
	},
	attributes: function() {
		var post = _.extend({}, Positions.findOne({postId: this._id}), this);
		var newPosition = post._rank * POST_HEIGHT;
		var attributes = {};
		if (! _.isUndefined(post.position)) {
		  var offset = post.position - newPosition;
		  attributes.style = "top: " + offset + "px";
		  if (offset === 0)
		    attributes.class = "post animate"
		}
		Meteor.setTimeout(function() {
		  Positions.upsert({postId: post._id}, {$set: {position: newPosition}})
		});
		return attributes;
	}
});
Template.postItem.events({
  'click .upvotable': function(e) {
    e.preventDefault();
    Meteor.call('upvote', this._id);
  }
});