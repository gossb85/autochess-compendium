import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Heroes from './components/Heroes';
import Modal from './components/Modal';

import heroes from './heroes.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      activeIndex: null
    };
  }

  toggleModal = index => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      activeIndex: !prevState.showModal ? index : null
    }));
  };

  render() {
    const activeHero = heroes[this.state.activeIndex];

    return (
      <div id='outer'>
        <Navbar />
        <div className='container-fluid'>
          <div className='row'>
            <div className='col d-flex justify-content-center' align='center'>
              <img src='https://i.imgur.com/asbwsu0.png' alt='' className='card' />
              <img src='https://i.imgur.com/asbwsu0.png' alt='' className='card' />
              <img src='https://i.imgur.com/asbwsu0.png' alt='' className='card' />
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <hr />
            </div>
          </div>
          <Modal show={this.state.showModal} closeCallback={this.toggleModal}>
            {activeHero && (
              <React.Fragment>
                <div className='row'>
                  <div className='col-md-8'>
                    <div>
                      <div className='row card-formatting-top'>
                        <div className='col ml-5'>{activeHero.race1}</div>
                        <div className='col'>{activeHero.race1Ability}</div>
                      </div>
                      <div className='row card-formatting-bottom py-1 mb-3'>
                        <div className='col-3'>
                          <img className='image-responsive mx-auto my-1 d-block' width='80px' height='80px' src={activeHero.race1Icon} alt='' />
                        </div>
                        <div className='col-9'>
                          <p>{activeHero.race1lvl1}</p>
                          <p>{activeHero.race1lvl2}</p>
                          <p>{activeHero.race1lvl3}</p>
                        </div>
                      </div>
                    </div>
                    {activeHero.race2 && (
                      <div>
                        <div className='row card-formatting-top'>
                          <div className='col ml-5'>{activeHero.race2}</div>
                          <div className='col'>{activeHero.race2Ability}</div>
                        </div>
                        <div className='row card-formatting-bottom py-1 mb-3'>
                          <div className='col-3'>
                            <img className='image-responsive mx-auto my-1 d-block' width='80px' height='80px' src={activeHero.race2Icon} alt='' />
                          </div>
                          <div className='col-9'>
                            <p>{activeHero.race2lvl1}</p>
                            <p>{activeHero.race2lvl2}</p>
                            <p>{activeHero.race2lvl3}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    <div>
                      <div className='row card-formatting-top'>
                        <div className='col ml-5'>{activeHero.heroClass1}</div>
                        <div className='col'>{activeHero.heroClass1Ability}</div>
                      </div>
                      <div className='row card-formatting-bottom py-1 mb-3'>
                        <div className='col-3'>
                          <img className='image-responsive mx-auto my-1 d-block' width='80px' height='80px' src={activeHero.heroClass1Icon} alt='' />
                        </div>
                        <div className='col-9'>
                          <p>{activeHero.heroClasslvl1}</p>
                          <p>{activeHero.heroClasslvl2}</p>
                          <p>{activeHero.heroClasslvl3}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='row card-formatting-top'>
                        <div className='col ml-5'>{activeHero.ability1Name}</div>
                        {activeHero.ability1DmgType && <div className='col'>{activeHero.ability1DmgType}</div>}
                        {activeHero.ability1Target && <div className='col'>{activeHero.ability1Target}</div>}
                        {activeHero.ability1Duration && <div className='col'>{activeHero.ability1Duration}</div>}
                      </div>
                      <div className='row card-formatting-bottom py-1 mb-3'>
                        <div className='col-3'>
                          <img className='image-responsive mx-auto my-1 d-block' width='80px' height='80px' src={activeHero.ability1Icon} alt='' />
                        </div>
                        <div className='col-9'>
                          <p>{activeHero.ability1Description}</p>
                          {activeHero.ability1Damage && <span className='float-left'>{activeHero.ability1Damage}</span>}
                          {activeHero.ability1Cooldown && <span className='float-right'>{activeHero.ability1Cooldown}</span>}
                        </div>
                      </div>
                    </div>
                    {activeHero.ability2Name && (
                      <div>
                        <div className='row card-formatting-top'>
                          <div className='col ml-5'>{activeHero.ability2Name}</div>
                          {activeHero.ability2DmgType && <div className='col'>{activeHero.ability2DmgType}</div>}
                          {activeHero.ability2Target && <div className='col'>{activeHero.ability2Target}</div>}
                          {activeHero.ability2Duration && <div className='col'>{activeHero.ability2Duration}</div>}
                        </div>
                        <div className='row card-formatting-bottom py-1 mb-3'>
                          <div className='col-3'>
                            <img className='image-responsive mx-auto my-1 d-block' width='80px' height='80px' src={activeHero.ability2Icon} alt='' />
                          </div>
                          <div className='col-9'>
                            <p>{activeHero.ability2Description}</p>
                            {activeHero.ability2Damage && <span className='float-left'>{activeHero.ability2Damage}</span>}
                            {activeHero.ability2Cooldown && <span className='float-right'>{activeHero.ability2Cooldown}</span>}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className='col-md-4'>
                    <img src={activeHero.rank1} alt='' className='img-fluid mb-3' id='portrait' />
                    <span>
                      <h3 className='hero-info'>{activeHero.heroName}</h3>
                      <h4 className='hero-info'>
                        <i className='fas fa-dollar-sign'> {activeHero.cost}</i>
                      </h4>
                    </span>
                  </div>
                </div>
              </React.Fragment>
            )}
          </Modal>
        </div>

        <Heroes heroes={heroes} toggleModal={this.toggleModal} />
      </div>
    );
  }
}

export default App;
