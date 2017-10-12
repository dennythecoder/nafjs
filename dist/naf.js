var Naf = (function () {

//prevent tree shaking
var preserve = function(arg){
    if(arg){
        let context = window || global;
        context[Symbol()] = arg;
    }
};

const regex = /\{\{((?:.|\n)+?)\}\}/g;

var render = function(){
    if(!this.$el.innerHTML) return;
    const myHTML = this.$el.innerHTML;
    let model = this.model;
    preserve(model);
    let html = myHTML.replace(regex,function(match){

        const strippedMatch = match.replace('{{','').replace('}}','');
        let result = '';
        eval('with(model){result = eval( strippedMatch );}');
        return result;
    });

    this.$el.innerHTML = html;
};

var mount = function(id){
    const el = document.querySelector(id);
    if(el){
      this.$el = el;
      this.render();
    }else{
      console.warn('Element selector not valid');
    }
};

function Naf(options){
    let naf = {};
    this.$el = naf.$el = {};
    this.model = naf.model = options.model || {};
    this.render = naf.render = render.bind(this);
    this.mount = naf.mount = mount;

    
    
}

return Naf;

}());
