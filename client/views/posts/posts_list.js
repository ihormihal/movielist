Template.postsList.helpers({
  postsWithIndex: function() {
    this.posts.rewind();
    return this.posts.map(function(post, index, cursor) {
      post._index = index;
      return post;
    });
  }
});