usPlug = {
  pins: 3
}

usSocket = {
  wholes: 3
}

euPlug = {
  pins: 2
}

euSocket = {
  wholes: 2
}

function connect(plug, socket) {
  if (plug.pins === socket.wholes) {
    console.log('connected')
  } else {
    console.log('incompatible interfaces')
  }

  return socket
}

console.log('us plug & us socket')
connect(usPlug, usSocket)

console.log('eu plug & us socket')
connect(euPlug, euSocket)

console.log('us plug & eu socket')
connect(usPlug, euSocket)

var usPlugToEuSocketAdapter = {
  wholes: 3, // us socket for us plug
  pins: 2, // eu plug for eu socket
}


console.log('us plug & us plug to eu socket adapter')
var usPlugToEuPlug = connect(usPlug, usPlugToEuSocketAdapter)

console.log('us plug to eu plug & eu socket')
var usPlugToEuPlugToEuSocket = connect(usPlugToEuPlug, euSocket)


module.exports = {
  usPlug: usPlug,
  usSocket: usSocket,
  euPlug: euPlug,
  euSocket: euSocket,
  usPlugToEuSocketAdapter: usPlugToEuSocketAdapter,
  connect: connect
}