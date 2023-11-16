import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('when 6pm', () => {
  console.log('Stop work and close your laptop!');
  setTimeout(()=>{
    console.log('please stop your work and go home!!');
  },5000)
});
myEmitter.emit('when 6pm');