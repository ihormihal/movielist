if (Posts.find().count() === 0) {
  //users
  var now = new Date().getTime();
  var tomId = Meteor.users.insert({
    profile: { name: 'Tom Coleman' }
  });
  var tom = Meteor.users.findOne(tomId);
  var sachaId = Meteor.users.insert({
    profile: { name: 'Sacha Greif' }
  });
  var sacha = Meteor.users.findOne(sachaId);

  var Edge_of_Tomorrow  = Posts.insert({
    title: 'Грань будущего',
    producer: 'Даг Лайман',
    year: '2014',
    rate: '8.4',
    commentsCount: 1,
    upvoters: [], votes: 0,
    poster: 'http://st.kp.yandex.net/images/film_iphone/iphone360_505851.jpg',
    description: 'В недалёком будущем раса инопланетян вторгается на Землю. Никакая армия в мире не может противостоять им. Майор Уильям Кейдж умирает в бою, но случается невозможное — он оказывается во временной петле. Раз за разом он попадает в один и тот же бой, сражается и умирает… снова и снова. И каждое повторяющееся сражение приближает его к разгадке того, как победить врага.'
    ,author: tom.profile.name
    ,submitted: now - 7 * 3600 * 1000
  });

  var X_MEN = Posts.insert({
    title: 'Люди Икс: Дни минувшего будущего',
    producer: 'Брайан Сингер',
    year: '2014',
    rate: '8.2',
    commentsCount: 1,
    upvoters: [], votes: 0,
    poster: 'http://st.kp.yandex.net/images/film_iphone/iphone360_597687.jpg',
    description: 'В недалёком будущем мутанты близки к истреблению роботами-охотниками на мутантов Стражами. Единственная надежда для мутантов выжить — предотвратить череду роковых событий, приведших к появлению Стражей. С помощью своих способностей, Китти Прайд перемещает сознание Росомахи в его молодое тело в 1973 год. В прошлом всё оказывается не так радужно: молодой Профессор Икс окончательно разочарован в своих идеях, Магнето содержится в тюрьме глубоко под землёй, а человечество не знает как реагировать на широкое появление мутантов…'
    ,author: sacha.profile.name
    ,submitted: now - 5 * 3600 * 1000
  });

  Comments.insert({
    postId: Edge_of_Tomorrow,
    userId: tom._id,
    author: tom.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'Lorem Ipsum DOLOR!'
  });

  Comments.insert({
    postId: X_MEN,
    userId: sacha._id,
    author: sacha.profile.name,
    submitted: now - 3 * 3600 * 1000,
    body: 'Lorem ipsum dolor.'
  });
}