
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, user_id: 99901, url: 'user1@yo.com', profilePicture: 'https://i.pinimg.com/originals/40/68/d8/4068d87569f11fb44069a70aa2ac5e99.jpg'},
        {id: 2, user_id: 99902, url: 'user1@yo.com', profilePicture: 'https://shechive.files.wordpress.com/2013/05/no-pants-51.jpg?w=500&h=359'},
        {id: 3, user_id: 99903, url: 'user1@yo.com', profilePicture: 'https://img.purch.com/h/1000/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA0OC84NTAvb3JpZ2luYWwvY2FweWJhcmEtMDIuanBn'},
        {id: 4, user_id: 99904, url: 'user1@yo.com', profilePicture: 'https://images-production.global.ssl.fastly.net/uploads/photos/file/65090/donald-duck-mad.gif?auto=compress&crop=top&fit=clip&h=500&q=55&w=698'},
        {id: 5, user_id: 99905, url: 'user1@yo.com', profilePicture: 'https://i.ytimg.com/vi/6HXUyP308vo/maxresdefault.jpg'},
        {id: 6, user_id: 99906, url: 'user1@yo.com', profilePicture: 'https://vignette1.wikia.nocookie.net/fantasticmrfox/images/e/ed/MrFox.jpg/revision/latest?cb=20140512194259'},
        {id: 7, user_id: 99907, url: 'user1@yo.com', profilePicture: 'https://media-cdn.tripadvisor.com/media/photo-s/02/74/73/a3/gila-monster-resident.jpg'},
        {id: 8, user_id: 99908, url: 'user1@yo.com', profilePicture: 'https://pbs.twimg.com/media/Cs-DajpW8AAiZeI.jpg'},
        {id: 9, user_id: 99909, url: 'user1@yo.com', profilePicture: 'https://assets.hemmings.com/uimage/58415578-770-0@2X.jpg?rev=2'},
        {id: 10, user_id: 99910, url: 'user1@yo.com', profilePicture: 'http://www.australia.com/etc/designs/tourismaustralia/clientlibs/imgs/fallback/kangaroo_800_600.jpg'},
        {id: 11, user_id: 99911, url: 'user1@yo.com', profilePicture: 'https://vignette4.wikia.nocookie.net/penguinsofmadagascar/images/b/bb/King_Julien_%28All_Hail_King_Julien%29.png/revision/latest?cb=20151125110328'},
        {id: 12, user_id: 99912, url: 'user1@yo.com', profilePicture: 'https://openclipart.org/image/2400px/svg_to_png/28708/Martouf-Cartoon-kudu.png'},
        {id: 13, user_id: 99913, url: 'user1@yo.com', profilePicture: 'https://i.pinimg.com/600x315/84/55/72/84557293c938b802aa45ed556656ef04.jpg'},
        {id: 14, user_id: 99914, url: 'user1@yo.com', profilePicture: 'http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/4b/22/p04b224h.jpg'},
        {id: 15, user_id: 99915, url: 'user1@yo.com', profilePicture: 'https://aos.iacpublishinglabs.com/question/aq/1400px-788px/animals-names-beginning-letter-q_3570bf3638916674.jpg?domain=cx.aos.ask.com'},
        {id: 16, user_id: 99916, url: 'user1@yo.com', profilePicture: 'http://www.worldatlas.com/r/w728-h425-c728x425/upload/ed/e9/1f/tapir.jpg'},
        {id: 17, user_id: 99917, url: 'user1@yo.com', profilePicture: 'http://1.bp.blogspot.com/_Dan11Nil7Vs/SdJdtY0PWMI/AAAAAAAAcG4/8NlHV_PCWzQ/s400/sea-snail-animal-plastic-f1143.jpg'},
        {id: 18, user_id: 99918, url: 'user1@yo.com', profilePicture: 'https://photographicdictionary.com/sites/photographicdictionary.com/files/photos/t/tiger.jpg'},
        {id: 19, user_id: 99919, url: 'user1@yo.com', profilePicture: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjvg8ev-MPWAhUDzbwKHVFIAuYQjRwIBw&url=http%3A%2F%2Fwww.alltheanimalsintheworld.com%2Fanimals-that-start-with-u%2F&psig=AFQjCNHIgPlE_4ARPYCw76EaHxMmFoRQLA&ust=1506552712943259'},
        {id: 20, user_id: 99920, url: 'user1@yo.com', profilePicture: 'http://slicktiger.co.za/wp-content/uploads/2013/08/Aye-Aye-8x6.jpg'},
        {id: 21, user_id: 99921, url: 'user1@yo.com', profilePicture: 'https://photographicdictionary.com/sites/photographicdictionary.com/files/photos/y/yeti.jpg'},
        {id: 22, user_id: 99922, url: 'user1@yo.com', profilePicture: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj766_h-MPWAhWFgbwKHQXjDeIQjRwIBw&url=http%3A%2F%2Fwww.skyenimals.com%2Falph_index.cgi%3Fletter%3DZ&psig=AFQjCNEXtWczEL6-HnelnKibVLAnOicUfA&ust=1506552823049865'},
        {id: 23, user_id: 99923, url: 'user1@yo.com', profilePicture: 'http://3.bp.blogspot.com/-FxSb_R6aHE8/VjIu2UviCAI/AAAAAAAAGjk/ESjfAcAt48Q/s1600/Jellyfish%2BAnimal%2BPictures.jpg'},
        {id: 24, user_id: 99924, url: 'user1@yo.com', profilePicture: 'http://1.bp.blogspot.com/-S_lITReQP0Q/VjOrYZpIGGI/AAAAAAAAGwQ/4IKMrom0Q88/s1600/mole-pictures.jpg '},
        {id: 25, user_id: 99925, url: 'user1@yo.com', profilePicture: 'https://animalsfacts.net/wp-content/uploads/2017/04/dog.jpg'},
        {id: 26, user_id: 99926, url: 'user1@yo.com', profilePicture: 'https://i.ytimg.com/vi/aN-18g5aH-o/maxresdefault.jpg'}
      ])
    })
};
