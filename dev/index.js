import Naf from '../dist/naf.common';



let app = new Naf({
    model:{
        msg:'Hello World'
    }
});
app.init();
app.mount('app');
console.log(app);




