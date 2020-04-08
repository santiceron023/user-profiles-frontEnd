import * as React from 'react';

export class ProfileAdd extends React.Component {
  state = { perfil: []};

  render() {
    return (<form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Description:
        <input type="text" name="name" />
      </label>
    </form>);
  }

};
