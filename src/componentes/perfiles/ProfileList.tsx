import * as PropTypes from 'prop-types';
import * as React from 'react';
import { EliminarProducto } from './EliminarProducto';
import { Producto } from './modelo/Perfil';
import { ProfilesRepository } from '../../api/profiles.repository';

export interface ListaProductosProps {
  productos: Array<Producto>,
  onClickEliminarProducto: (productos: Producto) => void
}

export const ProfileList: React.FC<ListaProductosProps> = (props) => {

  const { productos, onClickEliminarProducto } = props;
  let holi : Array<any> = [''];

  ProfilesRepository.getAll().then((data:any) => {
    holi = data;
    console.log(data);
  });


  return (<div className="ui link cards">
    <div className="card">
      <div className="image">
        <img src="/images/avatar2/large/matthew.png"/>
      </div>
        <div className="content">
          <div className="header">{holi[0]['nombre']}</div>
          <div className="meta">
            <a>Friends</a>
          </div>
          <div className="description">
            Matthew is an interior designer living in New York.
      </div>
        </div>
        <div className="extra content">
          <span className="right floated">
            Joined in 2013
      </span>
          <span>
            <i className="user icon"></i>
        75 Friends
      </span>
        </div>
      </div>
    </div>
    );

};

// ProfilesList.propTypes = {
//   productos: PropTypes.array.isRequired,
//   onClickEliminarProducto: PropTypes.func.isRequired,
// };
