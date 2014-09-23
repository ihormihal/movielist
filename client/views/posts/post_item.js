Template.postItem.helpers({
    ownPost: function() {
      return this.userId == Meteor.userId();
    },
    indexInRow: function() {
	  	if( (this._index)%4 == 0 ){
	  		return 'first';
	  	}
	  	if( (this._index+1)%4 == 0 ){
	  		return 'last';
	  	}
	}
});