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
      <div className="card-deck"> {
      this.state.perfiles.map(
        (perfil: Profile) => {
          console.log(perfil);

          return (
            <div className="card" key={perfil.id} style={{width: '200px'}}>
              <div className="image">
                <img src={`data:image/jpeg;base64,${perfil.photo}`} style={{width: '200px',height: '200px'}} alt="usuario sin Foto" />
              </div>
              <div className="content">
                <div className="header">{}</div>
                <div className="meta">
                  <a>{perfil.name}</a>
                </div>
                <div className="description">
                  <a>{perfil.description}</a>
                </div>
              </div>
            </div>
          );

        })
      }
      </div>
    )
  }

};