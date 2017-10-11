
const regex = /\{\{((?:.|\n)+?)\}\}/g;

export default function(){
    const myHTML = this.$el.innerHTML;
    let model = this.model;
    let html = myHTML.replace(regex,function(match){

        const strippedMatch = match.replace('{{','').replace('}}','');
        let result = '';
        eval('with(model){result = eval( strippedMatch );}');
        return result;
    });

    this.$el.innerHTML = html;
}

