
export const getCategories = async () => {
    console.log(`${baseUrl}/categories`);
    const response = await fetch(`${baseUrl}/categories`);
    const data = await response.json().then(dat => console.log(dat));
    console.log(response);
    console.log(data);

    return data;
}

const baseUrl = 'https://fakestoreapi.com/products';
const getProducts = async (category) => {
        const response = await fetch(`${baseUrl}/category/${category}`);
        const data = await response.json();   
        return data;
}
export default getProducts;

// export getCategories;