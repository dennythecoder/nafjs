
import render from './render'
import createReactiveProperty from './createReactiveProperty'
import mount from './mount'


function Naf(options){
    let naf = {};
    this.$el = naf.$el = {};
    this.model = naf.model = options.model || {};
    this.render = naf.render = render.bind(naf);
    this.mount = naf.mount = mount;
    
    this.init = naf.init = function(){
        createReactiveProperty(this, '$el');
      for(let key in this.model){
        createReactiveProperty(this.model, key, this.model[key]);
      }
    };

    
}


export default Naf;