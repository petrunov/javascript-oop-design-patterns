
var News = {
 articles: [
    {
      id: 0,
      name: 'they voted to leave',
      href: 'www.euronews.com'
    }
  ],


  printArticleId: (id) => console.log('clicked', id),

  clickHandler: (Event) => {
    var targetId = Event.target.id

    News.printArticleId(targetId)
  },

  events: {
    click: function (article) {
      var Event = {target: article}
      News.clickHandler(Event)
    } 
  },

  render: () => News.articles.map((article) => '<a id="' + article.id + '" href="' + article.href+ '">' + article.name + '</a>').join('')
}


module.exports = {
  News: News
}


