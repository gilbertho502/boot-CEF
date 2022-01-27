function getPrices(price){
    const original = price == 0 ? 2.99 : price;
    const sale = parseFloat((original - 2.0).toFixed(2));
    return {original,sale}
}
function getImage({path,extension}){
    return `${path}.${extension}`
}
function getFormat(format){
    return format == ''? "Comic" : format
}

const comicRender = (data) => {
    const obj = data[0]; 
   
    const comic = {
        id: obj.id,
        title: obj.title,
        price: getPrices(obj.prices[0].price), // {original,sale}
        description:obj.description,
        stock:obj.stories.available,
        creators: obj.creators.items,
        image: getImage(obj.thumbnail),
        format: getFormat(obj.format)
    }
    return comic;
}

export {comicRender}