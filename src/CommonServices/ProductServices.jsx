const baseUrl = 'https://fakestoreapi.com/products';

const getCategories = async () => {
    const response = await fetch(`${baseUrl}/categories`);
    const data = await response.json();
    return data;
}
export default getCategories;

export const getProducts = async (category) => {
        const response = await fetch(`${baseUrl}/category/${category}`);
        const data = await response.json();   
        return data;
}

export const filterList = (txt, list) =>{
    let newList = list.filter((item) => {
        if(item ==="") {return item;}
        else if(item.toLowerCase().includes(txt)) 
            {return item;}
    });
    return newList;
}

