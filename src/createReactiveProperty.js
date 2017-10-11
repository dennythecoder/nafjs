export default function createReactiveProperty(obj, prop, val){
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