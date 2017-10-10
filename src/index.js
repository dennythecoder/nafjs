
import render from './render'

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
















export default function Naf(options){
    this.$el = {};
    this.model = options.model || {};
    this.init = function(){
        
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
    this.render = render;
}