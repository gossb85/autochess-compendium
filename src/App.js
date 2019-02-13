import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Heroes from './components/Heroes';
import Modal from './components/Modal';
import HeroModal from './components/HeroModal';
import CardModal from './components/CardModal';

import heroes from './heroes.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      modalType: null, // null for hide modal, 'hero' for hero modal, 'card' for card modal.
      activeIndex: null
    };
  }

  toggleModal = index => {
    this.setState(prevState => ({
      modalType: !prevState.showModal,
      activeIndex: !prevState.showModal ? index : null
    }));
  };

  showHeroModal = index => { // Specific function to show hero modal
    this.setState({
      modalType: 'hero',
      activeIndex: index
    })
  }

  showCardModal = () => { // Specific function to show card modal
    this.setState({
      modalType: 'card',
    })
  }

  hideModal = () => { // general hide modal which makes everything null.
    this.setState({
      modalType: null,
      activeIndex: null
    })
  }

  renderModal = () => { // switch for modalType
    switch (this.state.modalType) {
        case 'hero':
          const activeHero = heroes[this.state.activeIndex];
          return <HeroModal activeHero={activeHero}/>
        case 'card':
          return <CardModal />
        default:
          return null;
    }
  }

  render() {
    

    return (
      <div id='outer'>
        <Navbar />
        <div className='container-fluid'>
          <div className='row'>
            <div className='col d-flex justify-content-center' align='center'>
              <img src='https://i.imgur.com/asbwsu0.png' alt='' className='card' onClick={this.showCardModal}/>
              <img src='https://i.imgur.com/asbwsu0.png' alt='' className='card' onClick={this.showCardModal}/>
              <img src='https://i.imgur.com/asbwsu0.png' alt='' className='card' onClick={this.showCardModal}/>
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
