import { axiosIntance } from '../config/axios.config';


const limit = (count: number, p:number) => `limit=${count}&offset=${p ? p * count : 0}`;


export const ProductoRepositorio = {
    consultarPorPagina: (page: number) => axiosIntance.get(`/articles?${limit(10, page)}`)
};
