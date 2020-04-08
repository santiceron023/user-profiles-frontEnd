import { axiosIntance } from '../config/axios.config';
import { Profile } from '../componentes/perfiles/modelo/profile';


export const ProfilesRepository = {

    getAll: () => axiosIntance.get(`/usuarios`),
    create: (profile: Profile) => axiosIntance.post(`/usuarios`, profile),
    find: (id: string) => axiosIntance.get(`/usuarios/${id}`),
    update: (id: string, profile: Profile) => axiosIntance.put(`/usuarios/${id}`, profile),
    uploadPhoto: (id: string, photo: any) => axiosIntance.post(`/usuarios/image/${id}`, photo)
};
