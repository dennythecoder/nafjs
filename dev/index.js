import Naf from '../dist/naf.common';

let app = new Naf({
    model:{
        msg:'Hello World'
    }
});
app.init();
app.mount('#app');

let app2 = new Naf({
    model:{
        msg:'What is going on?'
    }
});
app2.init();
app2.mount('#app2');