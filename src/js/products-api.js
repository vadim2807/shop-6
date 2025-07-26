import axios from 'axios';
import { API_BASE_URL } from './constants';

axios.defaults.baseURL = API_BASE_URL;

export async function getProducts(endPoint) {
    const results = await axios(endPoint);

    return results.data;
}

export async function getCategories() {
    const currentPage = 1;
    // const url = `https://dummyjson.com/products?limit=12&skip=${(currentPage - 1) * 12}`;

    const results = await axios({
        params: {
            limit: 12,
            skip: (currentPage - 1) * 12
        }
    })
    console.log(results.data);
    return results.data.products;
}

