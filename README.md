# block-trace

Figure out if your node process is blocked because the CPU is spinning and exit the program with a stack trace if that is the case.

Useful for debugging unresponsive servers.

```
npm install -g block-trace
```

## Usage

Giving the following example program

``` js
console.log('Waiting 1s ...')

setTimeout(function () {
  console.log('Spinning the CPU now!')
  while (1) {}
}, 1000)
```

If you run this with `block-trace` by doing the following

``` sh
block-trace node example.js
```

After 1s the program will exit with the following output

```
Waiting 1s ...
Spinning the CPU now!
Error: CPU is blocked
    at /Users/maf/dev/node_modules/block-trace/example.js:5:10
    at Timer.listOnTimeout (timers.js:92:15)
```

## License

MIT
