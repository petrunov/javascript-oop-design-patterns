// Create TV
var tvOne = {
  channel: 0,
  left: function() {this.channel--},
  right: function() {this.channel++},
}


// remote abstraction
var remote = {
  tvApi: null,
  init: function (tvApi) {this.tvApi = tvApi},
  nextChannel: function () {this.tvApi.right(); return this},
  prevChannel: function () {this.tvApi.left(); return this}
}

// Create remote
var remoteOne = Object.create(remote, {})
remoteOne.init(tvOne)


remoteOne.nextChannel()


console.log(tvOne.channel)