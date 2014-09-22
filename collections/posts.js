Posts = new Meteor.Collection('posts');
Posts.allow({
  update: ownsDocument,
  remove: ownsDocument
});

Posts.deny({
  update: function(userId,post,fieldNames){
    // may only edit the following fields:
      return (_.without(fieldNames, 'year', 'producer','rate','poster','description').length > 0);
  }
});

Meteor.methods({
  post: function(postAttributes) {
    var user = Meteor.user();
      postWithSameTitle = Posts.findOne({title: postAttributes.title});

    // Удостоверимся что пользователь залогинен
    if (!user){
      throw new Meteor.Error(401, "You need to login to post new stories");
    }

    // Проверим что у поста есть заголовок
    if (!postAttributes.title){
      throw new Meteor.Error(422, 'Please fill in a headline');
    }

    // Проверим что нет других постов с таким же title
    if (postAttributes.title && postWithSameTitle) {
      throw new Meteor.Error(302,
        'This title has already been posted',
        postWithSameTitle._id);
    }

    // Выберем поля разрешенные для публикации
    var post = _.extend(_.pick(postAttributes, 'title', 'year', 'producer', 'rate', 'poster', 'description'), {
      userId: user._id,
      author: user.username,
      submitted: new Date().getTime(),
      commentsCount: 0,
      upvoters: [], votes: 0
    });

    var postId = Posts.insert(post);

    return postId;
  },
  upvote: function(postId) {
    var user = Meteor.user();
    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to upvote");
    
    Posts.update({
      _id: postId, 
      upvoters: {$ne: user._id}
    }, {
      $addToSet: {upvoters: user._id},
      $inc: {votes: 1}
    });
  }
});