// a simple calculator

//http://localhost:8080/calc?method=mod&v1=10&v2=2
module.exports=obj={};
    
obj.add=function (a,b){
        if(a !==null && b!==null){
          return parseFloat(a)+parseFloat(b);
        }else{
                 throw "wrong input";
        }
}
 
obj.sub=function (a,b){
        if(!isNaN(a) && !isNaN(b)){
          return parseFloat(a)-parseFloat(b);
        }else{
                 throw "wrong input";
        }
}
 
obj.mult=function (a,b){
        if(!isNaN(a) && !isNaN(b)){
          return parseFloat(a)*parseFloat(b);
        }else{
                 throw "wrong input";
        }
}
 
obj.mod=function (a,b){
        if(!isNaN(a) && !isNaN(b)){
          return parseFloat(a)%parseFloat(b);
        }else{
                 throw "wrong input";
        }
}
 
obj.div=function (a,b){
        if(!isNaN(a) && !isNaN(b)){
          return parseFloat(parseFloat(a)+parseFloat(b));
        }else{
                 throw "wrong input";
        }
}

