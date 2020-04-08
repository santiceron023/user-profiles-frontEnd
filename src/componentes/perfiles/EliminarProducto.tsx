import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Producto } from './modelo/Perfil';

interface EliminarProductoProps {
  producto: Producto,
  onClickEliminarProducto: (productos: Producto) => void
}

export const EliminarProducto: React.FC<EliminarProductoProps> = (props) => {

  const {onClickEliminarProducto, producto} = props;

  return (
      <button onClick={() => onClickEliminarProducto(producto)}>
        X
      </button>

  );
};

EliminarProducto.propTypes = {
  producto: PropTypes.object.isRequired as PropTypes.Validator<Producto>,
  onClickEliminarProducto: PropTypes.func.isRequired,
};
