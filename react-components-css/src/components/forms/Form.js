import React, { Component, Fragment } from 'react';
import TitleH1 from '../titles/TitleH1';
import TitleH2 from '../titles/TitleH2';

class Form extends Component {
  state = {};

  render() {
    const head = this.props.head;
    const headColor = head ? '#f3055c' : 'midnightblue';
    const customHeadColor = head ? 'Bleue' : 'Verte';
    console.log(headColor);

    return (
      <Fragment>
        <TitleH1 style={{ color: `${headColor}` }}>Commentaire</TitleH1>
        <p>J'ai une couleur {customHeadColor}</p>
        <form action=''>
          <button className='btn btn-danger'>Valider</button>
        </form>
        <div>
          <TitleH2>Mon Deuxième titre de page</TitleH2>
        </div>
      </Fragment>
    );
  }
}

export default Form;
