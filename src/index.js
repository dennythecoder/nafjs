


const regex = /\{\{((?:.|\n)+?)\}\}/g;

let el = document.getElementById('app');
const myHTML = el.innerHTML;

function createPersonHTML(person){
  return '<div onclick="' + function(){person.name = "Hi, " + person.name; alert('hi');} + '">' + person.name +'</div>';
}

let data = {
  msg:'Hello World',
  people:[
    {name:'John'},
    {name:'Peyton'},
    {name:'Craig'}
  ]
};

let app = {
  data:data
};

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

function render(){

  let html = myHTML.replace(regex,function(match){

    const strippedMatch = match.replace('{{','').replace('}}','');
    eval(
     ` with(app){
        return eval( strippedMatch );
      }`);
      
  });

  el.innerHTML = html;
}
render();














export default{

    init:function(){
        console.log('yolo');
    }
}