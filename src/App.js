import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Heroes from './components/Heroes';
import Modal from './components/Modal';
import HeroModal from './components/HeroModal';
import RaceModal from './components/RaceModal';
import ClassModal from './components/ClassModal';
import CourierModal from './components/CourierModal';

import heroes from './heroes.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      modalType: null,
      activeIndex: null
    };
  }

  toggleModal = index => {
    this.setState(prevState => ({
      modalType: !prevState.showModal,
      activeIndex: !prevState.showModal ? index : null
    }));
  };

  showHeroModal = index => {
    this.setState({
      modalType: 'hero',
      activeIndex: index
    });
  };

  showRaceModal = () => {
    this.setState({
      modalType: 'race-card'
    });
  };

  showClassModal = () => {
    this.setState({
      modalType: 'hero-class-card'
    });
  };

  showCourierModal = () => {
    this.setState({
      modalType: 'courier-card'
    });
  };

  hideModal = () => {
    this.setState({
      modalType: null,
      activeIndex: null
    });
  };

  renderModal = () => {
    // switch for modalType
    switch (this.state.modalType) {
      case 'hero':
        const activeHero = heroes[this.state.activeIndex];
        return <HeroModal activeHero={activeHero} />;
      case 'race-card':
        return <RaceModal />;
      case 'hero-class-card':
        return <ClassModal />;
      case 'courier-card':
        return <CourierModal />;
      default:
        return null;
    }
  };

  render() {
    return (
      <div id='outer'>
        <Navbar />
        <div className='container-fluid'>
          <div className='row'>
            <div className='col d-flex justify-content-center' align='center'>
              <div className='card race-card justify-content-center' onClick={this.showRaceModal}>
                Race Synergy
              </div>
              <div className='card hero-class-card justify-content-center' onClick={this.showClassModal}>
                Class Synergy
              </div>
              <div className='card courier-card justify-content-center' onClick={this.showCourierModal}>
                Couriers
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <hr />
            </div>
          </div>
          <Modal show={this.state.modalType !== null} closeCallback={this.hideModal}>
            {this.renderModal()}
          </Modal>
        </div>
        <Heroes heroes={heroes} showHeroModal={this.showHeroModal} />
      </div>
    );
  }
}
export default App;
