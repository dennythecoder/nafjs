




let el = document.getElementById('app');
const myHTML = el.innerHTML;


for(let key in app.data){
  Object.defineProperty(app, key,{
    get:function(){
      return app.data[key];
    },
    set:function(val){
      app.data[key];
      render();
    }
  }); 
}




















export default{

    init:function(){
        console.log('yolo');
    }
}