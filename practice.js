const obj = {
    name : "Ram",
    details : function(){
        console.log(this.name);
    }
}

const obj2 = {
    name : "Ajay"
};

Object.setPrototypeOf(obj2, obj);

obj2.details();