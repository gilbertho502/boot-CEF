const STORAGE = {
    get: (key) =>{
       return localStorage.getItem(key)
    },
    set: (key, value) => {
        localStorage.setItem(key,value)
    },
    setArray: (key, value) => {
        let array = JSON.parse(localStorage.getItem(key));  
        if(!array){
            array = [];
        }
        array.push(value);
        localStorage.setItem(key, JSON.stringify(array));
    }
};
export default STORAGE;