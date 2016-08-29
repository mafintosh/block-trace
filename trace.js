var net = require('net')
var fs = require('fs')

var socket = unref(net.connect(process.env.BLOCK_TRACE_PORT))
unref(setInterval(ping, 500))
ping()

function unref (obj) {
  if (obj.unref) obj.unref()
  return obj
}

function ping () {
  socket.write('ping\n')
}

global.WRITE_BLOCK_TRACE_FILE = function () {
  fs.writeFileSync(process.env.BLOCK_TRACE_FILE, new Error('noop').stack.toString())
  process.exit(1)
}
