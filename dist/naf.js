var Naf = (function () {

const regex = /\{\{((?:.|\n)+?)\}\}/g;

var render = function(){
    const myHTML = this.$el.innerHTML;
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
      }
    }
  });

  
}

function Naf(options){
    let naf = {};
    this.$el = naf.$el = {};
    this.model = naf.model = options.model || {};
    this.render = naf.render = render;
    
    this.init = naf.init = function(){
        createReactiveProperty(this, '$el');
        for(let key in this.model){
          createReactiveProperty(this.model, key, this.model[key]);
        }
    };

    this.mount=function(id){
      const el = document.getElementById(id);
      if(el){
        this.$el = el;
        this.render();
        
      }else{
        console.warn('Element selector not valid');
      }
    };
    
}

return Naf;

}());
