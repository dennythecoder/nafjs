export default function createReactiveProperty(obj, prop){

    let handler = {
      get:function(obj, prop){
        return obj[prop];
      },
      set:function(obj, prop, val){
        if(obj[prop] !== val){
          obj[prop] = val;
          if(obj.render) {obj.render();}
        }else{

        }
        return true;
      }
    }
    


}