
const regex = /\{\{((?:.|\n)+?)\}\}/g;

var render = function(){
    if(!this.$el.innerHTML) return;
    const myHTML = this.$el.innerHTML;
    let model = this.model;
    if(console){console.log(model);} //prevent tree shaking
    let html = myHTML.replace(regex,function(match){

        const strippedMatch = match.replace('{{','').replace('}}','');
        let result = '';
        eval('with(model){result = eval( strippedMatch );}');
        return result;
    });

    this.$el.innerHTML = html;
};

function createReactiveProperty(obj, prop, val){
    let oldValue = val;
    
    Object.defineProperty(obj, prop,{
      get:function(){
        return oldValue;
      },
      set:function(newVal){
        if(newVal !== oldValue){
          oldValue = newVal;
          if(obj.render){obj.render();}
        }
      }
    });
}

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

    createReactiveProperty(naf, '$el');
    for(let key in naf.model){
      createReactiveProperty(naf.model, key, naf.model[key]);
    }
    
}

module.exports = Naf;
