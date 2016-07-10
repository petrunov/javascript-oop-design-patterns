// Create TVs
var tvOne = {
  channel: 0,
  left: function() {this.channel--},
  right: function() {this.channel++},
}

var tvTwo = {
  channel: 0,
  down: function() {this.channel--},
  up: function() {this.channel++},
}


var tvThree = {
  channel: 0,
  prev: function() {this.channel--},
  next: function() {this.channel++},
}

// Create TV APIs
tvApiOne = {
  tv : tvOne,
  prev: function () {this.tv.left()},
  next: function () {this.tv.right()},
}

tvApiTwo = {
  tv : tvTwo,
  prev: function () {this.tv.down()},
  next: function () {this.tv.up()},
}

tvApiThree = {
  tv : tvThree,
  prev: function () {this.tv.prev()},
  next: function () {this.tv.next()},
}


// remote abstraction
var remote = {
  tvApi: null,
  init: function (tvApi) {this.tvApi = tvApi},
  nextChannel: function () {this.tvApi.next(); return this},
  prevChannel: function () {this.tvApi.prev(); return this}
}

// Create remotes
var remoteOne = Object.create(remote, {})
remoteOne.init(tvApiOne)

var remoteTwo = Object.create(remote, {})
remoteTwo.init(tvApiTwo)

var remoteThree = Object.create(remote, {})
remoteThree.init(tvApiThree)
  

remoteOne.nextChannel()
remoteTwo.nextChannel()
remoteThree.nextChannel()

console.log('Channel on tv one', tvOne.channel,'Channel on tv two',  tvTwo.channel, 'Channel on tv three', tvThree.channel)

module.exports = {
  remoteOne: remoteOne,
  remoteTwo: remoteTwo,
  remoteThree: remoteThree,
  tvOne: tvOne,
  tvTwo: tvTwo,
  tvThree: tvThree
}