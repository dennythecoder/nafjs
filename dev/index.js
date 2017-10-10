import naf from '../src/index.js';

let app = new naf({
    model:{
        msg:'Hello World'
    }
});
app.init();
app.mount('app');
console.log(app);




