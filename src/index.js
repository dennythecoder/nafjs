
import render from './render'
import createReactiveProperty from './createReactiveProperty'
import mount from './mount'


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


export default Naf;