/*
  node module 'bridge', usage:
  var bridge = require('./bridge-eventHandler.js')
  bridge.News.output = bridge.Printer | bridge.News.output = bridge.Alerter
  bridge.News.events.click(bridge.News.articles[0])
  bridge.News.events.click(bridge.News.articles[1])
*/

var News = {
 articles: [
    {
      id: 0,
      name: 'they voted to leave',
      href: 'www.euronews.com'
    },
    {
      id: 1,
      name: 'people shot in the USA',
      href: 'www.cnn.com'
    }
  ],

  output: null,

  clickHandler: function(Event) {
    var targetId = Event.target.id

    this.output.click(targetId)
  },

  events: {
    click: function (article) {
      var Event = {target: article}
      News.clickHandler(Event)
    } 
  },

  render: () => News.articles.map((article) => '<a id="' + article.id + '" href="' + article.href+ '">' + article.name + '</a>').join('')
}




var Printer = {
  click: id => console.log('clicked', id)
}

var Alerter = {
  click: id => {console.log('-----------------'); console.log('ALERT:', id); console.log('------------------')}
}

var Audio = {
  click: id => {console.log('-----------------'); console.log('PLAY SOUND: CLICK'); console.log('------------------')}
}


module.exports = {
  News: News,
  Printer: Printer,
  Alerter: Alerter,
  Audio: Audio
}


