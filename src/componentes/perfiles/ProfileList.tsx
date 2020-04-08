import * as React from 'react';
import { ProfilesRepository } from '../../api/profiles.repository';
import { Profile } from './modelo/profile';
import './profile-list.css';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {
}

export default class ProfileList extends React.Component<Props, any> {

  
  constructor(props: Props) {
    super(props);
    this.state = { perfiles: [] };
  }


  componentDidMount() {
    ProfilesRepository.getAll().then((response) => {
      this.setState({ perfiles: response.data })
    });
  }

  render() {

    return (
      <div className="card-columns card-container"> {
        this.state.perfiles.map(
          ({ photo, name, description,id }: Profile) => {

            photo = photo ? `data:image/jpeg;base64,${photo}` :
              "https://movecopenhagen.com/RegistrationForms/public/export/2019/images/teacher-217.png";

            return (
              <div className="card card-profile-list" key={id}>
                <img className="card-img-top" src={photo} alt="User without Photo"
                  style={{ width: '200px', height: '200px' }} />
                <div className="card-body">
                  <h4 className="card-title">{name}</h4>
                  <p className="card-text">{description}</p>
                  <a href={`/add/${id}`} className="btn btn-primary">Update Profile</a>
                </div>
              </div>
            );

          })
      }
      </div>
    );
  }

};