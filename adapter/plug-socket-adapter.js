usPlug = {
  pins: 'flat',
  plugIn: socket => {(socket.wholes === usPlug.pins ? console.log('connected') : console.log('incompatible interface')); return socket}
}

usSocket = {
  wholes: 'flat'
}

euPlug = {
  pins: 'round',
  plugIn: socket => {(socket.wholes === usPlug.pins ? console.log('connected') : console.log('incompatible interface')); return socket}
}

euSocket = {
  wholes: 'round'
}


console.log('us plug & us socket')
usPlug.plugIn(usSocket)

console.log('eu plug & us socket')
euPlug.plugIn(usSocket)

console.log('us plug & eu socket')
usPlug.plugIn(euSocket)

var usPlugToEuSocketAdapter = {
  wholes: 'flat',
  pins: 'round',
  plugIn: socket => {(socket.wholes === usPlugToEuSocketAdapter.pins ? console.log('connected') : console.log('incompatible interface')); return socket}
}


console.log('us plug & us plug to eu socket adapter')
var usPlugToEuPlug = usPlug.plugIn(usPlugToEuSocketAdapter)

console.log('us plug to eu plug & eu socket')
usPlugToEuPlug.plugIn(euSocket)


module.exports = {
  usPlug: usPlug,
  usSocket: usSocket,
  euPlug: euPlug,
  euSocket: euSocket
}

// Exercise: Which pattern would you use in order to remove code repetition? Do it.