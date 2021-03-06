if (Posts.find().count() === 0) {
    //users
    var now = new Date().getTime();
    if ( Meteor.users.find().count() === 0 ) {
        var ihormihal_id = Accounts.createUser({
            username: 'ihormihal',
            email: 'ihor.mihal@gmail.com',
            password: 'password'
        });
    }
    var ihormihal = Meteor.users.findOne(ihormihal_id);

    var film_01_id = Posts.insert({
        title: 'Грань будущего',
        director: 'Даг Лайман',
        country: ['США', 'Австралия'],
        genre: ['фантастика', 'боевик'],
        year: '2014',
        imdb: '8.1',
        commentsCount: 1,
        upvoters: [],
        votes: 0,
        poster: 'http://st.kp.yandex.net/images/film_iphone/iphone360_505851.jpg',
        description: 'В недалёком будущем раса инопланетян вторгается на Землю. Никакая армия в мире не может противостоять им. Майор Уильям Кейдж умирает в бою, но случается невозможное — он оказывается во временной петле. Раз за разом он попадает в один и тот же бой, сражается и умирает… снова и снова. И каждое повторяющееся сражение приближает его к разгадке того, как победить врага.',
        author: ihormihal.username,
        author_id: ihormihal_id,
        submitted: now - 7 * 3600 * 1000
    });

    var film_02_id = Posts.insert({
        title: 'Люди Икс: Дни минувшего будущего',
        director: 'Брайан Сингер',
        country: ['США', 'Великобритания'],
        genre: ['фантастика', 'боевик', 'триллер', 'приключения'],
        year: '2014',
        imdb: '8.2',
        commentsCount: 1,
        upvoters: [],
        votes: 0,
        poster: 'http://st.kp.yandex.net/images/film_iphone/iphone360_597687.jpg',
        description: 'В недалёком будущем мутанты близки к истреблению роботами-охотниками на мутантов Стражами. Единственная надежда для мутантов выжить — предотвратить череду роковых событий, приведших к появлению Стражей. С помощью своих способностей, Китти Прайд перемещает сознание Росомахи в его молодое тело в 1973 год. В прошлом всё оказывается не так радужно: молодой Профессор Икс окончательно разочарован в своих идеях, Магнето содержится в тюрьме глубоко под землёй, а человечество не знает как реагировать на широкое появление мутантов…',
        author: ihormihal.username,
        author_id: ihormihal_id,
        submitted: now - 5 * 3600 * 1000
    });
    var film_03_id = Posts.insert({
        title: 'Отель «Гранд Будапешт»',
        director: 'Уэс Андерсон',
        country: ['США', 'Германия', 'Великобритания'],
        genre: ['комедия', 'детектив', 'приключения', 'криминал'],
        year: '2014',
        imdb: '8.2',
        commentsCount: 0,
        upvoters: [],
        votes: 0,
        poster: 'http://st.kp.yandex.net/images/film_big/683999.jpg',
        description: 'Фильм рассказывает об увлекательных приключениях легендарного консьержа Густава и его юного друга, портье Зеро Мустафы. Сотрудники гостиницы становятся свидетелями кражи и поисков бесценных картин эпохи Возрождения, борьбы за огромное состояние богатой семьи и… драматических изменений в Европе между двумя кровопролитными войнами XX века.',
        author: ihormihal.username,
        author_id: ihormihal_id,
        submitted: now - 5 * 3600 * 1000
    });
    var film_04_id = Posts.insert({
        title: 'Люси',
        director: 'Люк Бессон',
        country: ['Франция'],
        genre: ['боевик', 'фантастика'],
        year: '2014',
        imdb: '6.6',
        commentsCount: 0,
        upvoters: [],
        votes: 0,
        poster: 'http://st.kp.yandex.net/images/film_big/760326.jpg',
        description: "Еще вчера она была просто сексапильной блондинкой, а сегодня — самое опасное и смертоносное создание на планете со сверхъестественными способностями и интеллектом. То, что совсем недавно лучшие умы мира считали фантастической теорией, для нее стало реальностью. И теперь из добычи она превратится в охотницу.",
        author: ihormihal.username,
        author_id: ihormihal_id,
        submitted: now - 5 * 3600 * 1000
    });
    var film_05_id = Posts.insert({
        title: 'Невероятная жизнь Уолтера Митти',
        director: 'Бен Стиллер',
        country: ['США'],
        genre: ['приключения', 'мелодрама', 'драма', 'комедия', 'фэнтези'],
        year: '2013',
        imdb: '7.4',
        commentsCount: 0,
        upvoters: [],
        votes: 0,
        poster: 'http://www.kinopoisk.ru/images/film_big/6034.jpg',
        description: "Кто сказал, что в сердце маленького человека не могут жить великие мечты? Даже скромному и незаметному служащему хочется иногда совершить пусть безумные, но геройские поступки, поверить в свою силу и мужество. Почему всех спасать должны исключительно супермены?",
        author: ihormihal.username,
        author_id: ihormihal_id,
        submitted: now - 5 * 3600 * 1000
    });
    var film_06_id = Posts.insert({
        title: 'Первый мститель: Другая война',
        director: 'Энтони Руссо, Джо Руссо',
        country: ['США'],
        genre: ['фантастика', 'боевик', 'приключения'],
        year: '2014',
        imdb: '7.9',
        commentsCount: 0,
        upvoters: [],
        votes: 0,
        poster: 'http://www.kinopoisk.ru/images/film_big/676266.jpg',
        description: "После беспрецедентных событий, впервые собравших вместе команду Мстителей, Стив Роджерс, известный также как Капитан Америка, оседает в Вашингтоне и пытается приспособиться к жизни в современном мире. Но покой этому герою только снится — пытаясь помочь коллеге из агентства Щ. И. Т, Стив оказывается в центре событий, грозящих катастрофой мирового масштаба. Для того, чтобы разоблачить злодейский заговор, Капитан Америка объединяется с Черной вдовой. К ним также присоединяется новый соратник, известный как Сокол, однако никто из них даже не подозревает, на что способен новый враг.",
        author: ihormihal.username,
        author_id: ihormihal_id,
        submitted: now - 5 * 3600 * 1000
    });
    var film_07_id = Posts.insert({
        title: 'Годзилла',
        director: 'Гарет Эдвардс',
        country: ['США', 'Япония'],
        genre: ['фантастика', 'боевик', 'триллер'],
        year: '2014',
        imdb: '6.8',
        commentsCount: 0,
        upvoters: [],
        votes: 0,
        poster: 'http://www.kinopoisk.ru/images/film_big/260991.jpg',
        description: "Человечество случайно разбудило гигантское древнее существо, что повлекло за собой ужасающие последствия…",
        author: ihormihal.username,
        author_id: ihormihal_id,
        submitted: now - 5 * 3600 * 1000
    });
    var film_08_id = Posts.insert({
        title: 'Превосходство',
        director: 'Уолли Пфистер',
        country: ['Великобритания', 'Китай', 'США'],
        genre: ['фантастика','драма','триллер'],
        year: '2014',
        imdb: '6.3',
        commentsCount: 0,
        upvoters: [],
        votes: 0,
        poster: 'http://www.kinopoisk.ru/images/film_big/687670.jpg',
        description: "Выдающийся исследователь в области изучения искусственного интеллекта доктор Уилл Кастер работает над созданием компьютера, который сможет собрать в себе все знания и опыт, накопленные человечеством. Достаточно спорные эксперименты, проводимые Уиллом, прославили его и в то же время сделали основной целью радикальной анти-технологической группировки. Экстремисты делают всё возможное, чтобы остановить учёного. Однако в своих попытках уничтожить Уилла они добиваются обратного и становятся невольными участниками становления его абсолютного превосходства. Для его жены Эвелин и лучшего друга Макса Вотерса, тоже учёных-исследователей, встаёт вопрос, должны ли они продолжать этот эксперимент. Их худшие опасения претворяются в жизнь, когда жажда знаний Уилла переходит в неконтролируемую жажду власти…",
        author: ihormihal.username,
        author_id: ihormihal_id,
        submitted: now - 5 * 3600 * 1000
    });

    Comments.insert({
        postId: film_01_id,
        userId: ihormihal._id,
        author: ihormihal.username,
        author_id: ihormihal_id,
        submitted: now - 5 * 3600 * 1000,
        body: 'Very interesting plot!'
    });

    Comments.insert({
        postId: film_02_id,
        userId: ihormihal._id,
        author: ihormihal.username,
        author_id: ihormihal_id,
        submitted: now - 3 * 3600 * 1000,
        body: 'Best part of the X-Men Movies!'
    });
}
