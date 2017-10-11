export default function(id){
    const el = document.querySelector(id);
    if(el){
      this.$el = el;
      this.render();
    }else{
      console.warn('Element selector not valid');
    }
}