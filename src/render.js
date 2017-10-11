
const regex = /\{\{((?:.|\n)+?)\}\}/g;

export default function(){
    if(!this.$el.innerHTML) return;
    const myHTML = this.$el.innerHTML;
    let model = this.model;
    if(console){console.log(model);} //prevent tree shaking
    let html = myHTML.replace(regex,function(match){

        const strippedMatch = match.replace('{{','').replace('}}','');
        let result = '';
        eval('with(model){result = eval( strippedMatch );}');
        return result;
    });

    this.$el.innerHTML = html;
}

