Template.postPageItem.helpers({
    ownPost: function() {
      return this.userId == Meteor.userId();
    }
});