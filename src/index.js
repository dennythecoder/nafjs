
import render from './render'
import createReactiveProperty from './createReactiveProperty'


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


export default Naf;