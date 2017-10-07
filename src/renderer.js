
const regex = /\{\{((?:.|\n)+?)\}\}/g;

export default{


 render(){

    let html = myHTML.replace(regex,function(match){

        const strippedMatch = match.replace('{{','').replace('}}','');

        eval(
        ` with(this){
            return eval( strippedMatch );
        }`);
      
    });

    this.el.innerHTML = html;
}

}