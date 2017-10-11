
const regex = /\{\{((?:.|\n)+?)\}\}/g;

export default function(){
    const myHTML = this.$el.innerHTML;
    let html = myHTML.replace(regex,function(match){

        const strippedMatch = match.replace('{{','').replace('}}','');
        console.log(this.model);
        eval(
        ` with(this.model){
            return eval( strippedMatch );
        `);
      
    });

    this.$el.innerHTML = html;
}

