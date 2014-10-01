//FS Config
FS.debug = true;
FS.HTTP.setBaseUrl('/public');

Posters = new FS.Collection('posters', {
  stores: [
    new FS.Store.FileSystem('posters', {path: '~/movielist/uploads/posters'})
  ],
  filter: {
    allow: {
      contentTypes: ['image/*'] //allow only images in this FS.Collection
    }
  }
});
Posters.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  },
  download: function () {
    return true;
  }
});

/*Meteor.methods({
  poster: function(poster) {
    //return posterObj;
    var posterObj = PostPosters.insert(poster);
    //posterObj._id = "QwJpN9qEcQmTqnc7M";
    //posterObj.collectionName = "PostPosters";
    //posterObj.original.name = "300x400.gif"; /size/type
    console.log('Upload result: ', posterObj);
  }
});*/

//db.cfs.posters.filerecord.find();
