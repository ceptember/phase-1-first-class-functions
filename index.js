function receivesAFunction(funct){
    funct();
};

function returnsANamedFunction(){
    function namedFunction(){
        return true;
    }
    return namedFunction;
};

function returnsAnAnonymousFunction(){
    return function(){
        return true;
    }
};