import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Heroes extends Component {
  static propTypes = {
    heroes: PropTypes.array,
    toggleModal: PropTypes.func
  };

  render() {
    return (
      <div>
        <div className='row justify-content-center'>
          {this.props.heroes.map((hero, index) => (
            <div className='card mb-5 mx-3' key={hero.number} onClick={() => this.props.toggleModal(index)}>
              <img src={hero.portrait} />
              <div className='card-body mb-2'>
                <span>{hero.heroName} </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Heroes;
