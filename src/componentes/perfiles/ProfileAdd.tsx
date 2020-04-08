import * as React from 'react';
import { ProfilesRepository } from '../../api/profiles.repository';
import { Profile } from './modelo/profile';

interface Props {}

export default class ProfileAdd extends React.Component<Props, any> {
  
  static propTypes = {};

  constructor(props: Props) {
    super(props);
    this.state = {
      id: null,
      name: '',
      description: '',
      selectedPhoto: null,
      photo: null,
      errors: ''
    }
  }

  onChangeName = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({name: event.currentTarget.value, errors: ''});
  }

  onChangeDescription = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({description: event.currentTarget.value, errors: ''});
  }

  onChangeSelectedPhoto = (event: React.FormEvent<HTMLInputElement>) => {
    if(event.currentTarget.files !== null) {
      this.setState({selectedPhoto: event.currentTarget.files[0], errors: ''});
    }
  }

  onSaveProfile = () => {
    const { id, name, description } = this.state;

    if(name === null || name === undefined || name.trim() === '') {
      this.setState({errors: 'You must write a name'});
      return;
    }
    if(description === null || description === undefined || description.trim() === '') {
      this.setState({errors: 'You must write a description'});
      return;
    }
    
    console.log('save');
    let newProfile: Profile = {
      id: id,
      name: name.trim(),
      description: description.trim(),
      photo: null
    }
    ProfilesRepository.create(newProfile)
      .then((response: any) => {
        console.log('saved!!');
      })
      .catch(error => {
        console.log(error.response.data);
        this.setState({errors: error.response.data});
      })
  }

  render() {

    const { id, name, description, selectedPhoto, photo, errors } = this.state;

    return (
      <form className="form-profile-add">
        <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <div className="form-group row">
                    <div className="col">
                      <label htmlFor="name">Name</label>
                      <input type="text" id="name" 
                        className='form-control'
                        value={name || ''} onChange={(e) => this.onChangeName(e)}/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col">
                      <label htmlFor="description">Description</label>
                      <input type="text" id="description"
                        className='form-control'
                        value={description || ''} onChange={(e) => this.onChangeDescription(e)}/>
                    </div>
                  </div>
                  <button type="button" className="btn btn-primary"
                    onClick={() => this.onSaveProfile()}>Register</button>
                </div>
                <div className="col-6">
                  <div className="form-group row">
                    <div className="col">
                      <img alt='this is for your profile' className='profile-picture' src="https://movecopenhagen.com/RegistrationForms/public/export/2019/images/teacher-217.png"/>
                    </div>
                    <div className="col">
                      <div className="form-group row">
                        <input type="file" className="form-control-file" id="photo"
                          onChange={(e) => this.onChangeSelectedPhoto(e)}/>
                      </div>
                      <div className="form-group row">
                        <button type="button" className="btn btn-primary">Upload photo</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              { errors && 
                <div className="row">
                  <div className="col-12">
                    <div className="alert alert-danger" role="alert">{errors}</div>
                  </div>
                </div>
              }
            </div>
        </div>
      </form>
    );
  }

};
