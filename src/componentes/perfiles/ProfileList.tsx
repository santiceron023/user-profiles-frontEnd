import * as React from 'react';
import { ProfilesRepository } from '../../api/profiles.repository';
import { Profile } from './modelo/profile';
import './profile-list.css';


export default class ProfileList extends React.Component {
  state = { perfiles: [] };

  componentDidMount() {

    ProfilesRepository.getAll().then((response) => {
      this.setState({ perfiles: response.data })
    });
  }

  render() {

    return (
      <div className="card-columns card-container"> {
        this.state.perfiles.map(
          (perfil: Profile) => {
            console.log(perfil);

            return (
              <div className="card" key={perfil.id} style={{ width: '200px' ,backgroundColor: '#ecfbfc'}}>
                <img className="card-img-top" src={`data:image/jpeg;base64,${perfil.photo}`} style={{ width: '200px', height: '200px' }} alt="User without Photo" />
                <div className="card-body">
                  <h5 className="card-title">{perfil.name}</h5>
                  <p className="card-text">{perfil.description}</p>
                </div>
              </div>
            );

          })
      }
      </div>
    )
  }

};