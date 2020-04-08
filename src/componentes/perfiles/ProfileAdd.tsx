import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Producto } from './modelo/Perfil';

export interface AgregarProductoProps {
  onClickAgregarProducto: (producto: Producto) => void;
}

export const AgregarProducto: React.FC<AgregarProductoProps> = (props) => {

  const onClicAgregarProducto = () => {

    // props.onClickAgregarProducto({
    //   title: 'nuevo',
    //   slug: 'Juan Pablo Botero',
    //   body: 'posting the article accessing using constant',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // });
  };

  return (
      <button onClick={onClicAgregarProducto}>
        Agregar
      </button>
  );

};

AgregarProducto.propTypes = {
  onClickAgregarProducto: PropTypes.func.isRequired,
};
