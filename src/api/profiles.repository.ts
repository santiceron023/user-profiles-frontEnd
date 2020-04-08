import { axiosIntance } from '../config/axios.config';


export const ProfilesRepository = {

    getAll: () => 
    axiosIntance.get(`/usuarios`)
};
