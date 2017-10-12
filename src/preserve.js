//prevent tree shaking
export default function(arg){
    if(arg){
        let context = window || global;
        context[Symbol()] = arg;
    }
}