import { axiosIntance } from '../config/axios.config';
import { Profile } from '../componentes/perfiles/modelo/profile';


export const ProfilesRepository = {

    getAll: () => axiosIntance.get(`/usuarios`),
    create: (profile: Profile) => axiosIntance.post(`/usuarios`, profile)
};
