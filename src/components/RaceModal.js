import React from 'react';
import heroes from '../heroes';

const RaceModal = props => (
  <div className='container card-modal'>
    <div className='row'>
      <div className='col-4' align='center'>
        <div className='row'>
          <div className='col mb-4'>
            <h3>
              <font color='#2c8900'>Beast</font>
            </h3>
            <span>
              <img src='https://i.imgur.com/3RmiT5T.png' title='Enchantress' alt='Enchantress' />
              <img src='https://i.imgur.com/Uite3vC.png' title='Tusk' alt='Tusk' />
              <img src='https://i.imgur.com/chfzgxE.png' title='Lycan' alt='Lycan' />
              <img src='https://i.imgur.com/8cgYQhE.png' title='Sand King' alt='Sand King' />
              <img src='https://i.imgur.com/jwJmwp7.png' title='Venomancer' alt='Venomancer' />
              <img src='https://i.imgur.com/5idBYqL.png' title='Lone Druid' alt='Lone Druid' />
            </span>
          </div>
        </div>
        <div className='row'>
          <div className='col mb-4'>
            <h3>
              <font color='#a200ff'>Demon </font>
            </h3>
            <span>
              <img src='https://i.imgur.com/jNzyxso.png' title='Chaos Knight' alt='Chaos Knight' />
              <img src='https://i.imgur.com/CFUU9qp.png' title='Queen of Pain' alt='Queen of Pain' />
              <img src='https://i.imgur.com/jb9cdtw.png' title='Shadow Fiend' alt='Shadow Fiend' />
              <img src='https://i.imgur.com/3m1jmhz.png' title='Terrorblade' alt='Terrorblade' />
              <img src='https://i.imgur.com/419uRut.png' title='Doom' alt='Doom' />
            </span>
          </div>
        </div>
        <div className='row'>
          <div className='col mb-4'>
            <h3>
              <font color='#d20003'>Dragon </font>
            </h3>
            <span>
              <img src='https://i.imgur.com/A04SJYo.png' title='Puck' alt='Puck' />
              <img src='https://i.imgur.com/q9Muu1X.png' title='Viper' alt='Viper' />
              <img src='https://i.imgur.com/sL0XOym.png' title='Dragon Knight' alt='Dragon Knight' />
            </span>
          </div>
        </div>
        <div className='row'>
          <div className='col mb-4'>
            <h3>
              <font color='#ad6046'>Dwarf </font>
            </h3>
            <span>
              <img src='https://i.imgur.com/GlkKZ78.png' title='Sniper' alt='Sniper' />
              <img src='https://i.imgur.com/tpCL4HZ.png' title='Gyrocopter' alt='Gyrocopter' />
            </span>
          </div>
        </div>
      </div>
      <div className='col-4' align='center'>
        <div className='row'>
          <div className='col mb-4'>
            <h3>
              <font color='#f7f700'>Elemental </font>
            </h3>
            <span>
              <img src='https://i.imgur.com/S0MIrek.png' title='Tiny' alt='Tiny' />
              <img src='https://i.imgur.com/X4NqHqR.png' title='Morphling' alt='Morphling' />
              <img src='https://i.imgur.com/5tM6BEB.png' title='Razor' alt='Razor' />
              <img src='https://i.imgur.com/VUFYOSD.png' title='Enigma' alt='Enigma' />
            </span>
          </div>
        </div>
        <div className='row'>
          <div className='col mb-4'>
            <h3>
              <font color='#007eed'>Elf </font>
            </h3>
            <span>
              <img src='https://i.imgur.com/wxQV8Yq.png' title='Anti Mage' alt='Anti Mage' />
              <img src='https://i.imgur.com/x2XpPUY.png' title='Furion' alt='Furion' />
              <img src='https://i.imgur.com/AQsxZZ6.png' title='Luna' alt='Luna' />
              <img src='https://i.imgur.com/iEV7rZq.png' title='Treant Protector' alt='Treant Protector' />
              <img src='https://i.imgur.com/fDtfXiY.png' title='Phantom Assassin' alt='Phantom Assassin' />
              <img src='https://i.imgur.com/A04SJYo.png' title='Puck' alt='Puck' />
              <img src='https://i.imgur.com/jxtC2gq.png' title='Windranger' alt='Windranger' />
              <img src='https://i.imgur.com/du3GF7B.png' title='Templar Assassin' alt='Templar Assassin' />
            </span>
          </div>
        </div>
        <div className='row'>
          <div className='col mb-4'>
            <h3>
              <font color='#ca3117'>Goblin </font>
            </h3>
            <span>
              <img src='https://i.imgur.com/QGHGZwz.png' title='Bounty Hunter' alt='Bounty Hunter' />
              <img src='https://i.imgur.com/I1aKjCz.png' title='Clockwerk' alt='Clockwerk' />
              <img src='https://i.imgur.com/7hc1ZMX.png' title='Tinker' alt='Tinker' />
              <img src='https://i.imgur.com/JrC14Af.png' title='Timbersaw' alt='Timbersaw' />
              <img src='https://i.imgur.com/ea5F00H.png' title='Alchemist' alt='Alchemist' />
              <img src='https://i.imgur.com/mtCuUQF.png' title='Techies' alt='Techies' />
            </span>
          </div>
        </div>
        <div className='row'>
          <div className='col mb-4'>
            <h3>
              <font color='#f8f8f8'>Human </font>
            </h3>
            <span>
              <img src='https://i.imgur.com/UIiMQBZ.png' title='Crystal Maiden' alt='Crystal Maiden' />
              <img src='https://i.imgur.com/B5kjDvK.png' title='Lina' alt='Lina' />
              <img src='https://i.imgur.com/chfzgxE.png' title='Lycan' alt='Lycan' />
              <img src='https://i.imgur.com/r9exAkp.png' title='Omniknight' alt='Omniknight' />
              <img src='https://i.imgur.com/sL0XOym.png' title='Dragon Knight' alt='Dragon Knight' />
              <img src='https://i.imgur.com/jJ8EV13.png' title='Keeper of the Light' alt='Keeper of the Light' />
              <img src='https://i.imgur.com/E7J0ZA7.png' title='Kunkka' alt='Kunkka' />
            </span>
          </div>
        </div>
        <div className='row'>
          <div className='col mb-4'>
            <h3>
              <font color='#4949cc'>Naga </font>
            </h3>
            <span>
              <img src='https://i.imgur.com/ldKR7Kc.png' title='Slardar' alt='Slardar' />
              <img src='https://i.imgur.com/PDCdau2.png' title='Slark' alt='Slark' />
              <img src='https://i.imgur.com/pLGa05x.png' title='Medusa' alt='Medusa' />
              <img src='https://i.imgur.com/8oXYZyJ.png' title='Tidehunter' alt='Tidehunter' />
            </span>
          </div>
        </div>
      </div>
      <div className='col-4' align='center'>
        <div className='row'>
          <div className='col mb-4'>
            <h3>
              <font color='00bddf'>Ogre</font>
            </h3>
            <span>
              <img src='https://i.imgur.com/9vwmTnW.png' title='Ogre Magi' alt='Ogre Magi' />
            </span>
          </div>
        </div>
        <div className='row'>
          <div className='col mb-4'>
            <h3>
              <font color='#fe0030'>Orc </font>
            </h3>
            <span>
              <img src='https://i.imgur.com/BDzvVFD.png' title='Axe' alt='Axe' />
              <img src='https://i.imgur.com/4un0RfH.png' title='Beastmaster' alt='Beastmaster' />
              <img src='https://i.imgur.com/8w8Yebh.png' title='Juggernaut' alt='Juggernaut' />
              <img src='https://i.imgur.com/ROoPggj.png' title='Disruptor' alt='Disruptor' />
            </span>
          </div>
        </div>
        <div className='row'>
          <div className='col mb-4'>
            <h3>
              <font color='#919265'>Troll </font>
            </h3>
            <span>
              <img src='https://i.imgur.com/fx5IkLV.png' title='' alt='Batrider' />
              <img src='https://i.imgur.com/1A5N2pJ.png' title='' alt='Shadow Shaman' />
              <img src='https://i.imgur.com/LnmvaBK.png' title='' alt='Witch Doctor' />
              <img src='https://i.imgur.com/oPGJuvm.png' title='' alt='Troll Warlord' />
            </span>
          </div>
        </div>
        <div className='row'>
          <div className='col mb-4'>
            <h3>
              <font color='#4d4d4d'>Undead </font>
            </h3>
            <span>
              <img src='https://i.imgur.com/09JLXJR.png' title='Drow Ranger' alt='Drow Ranger' />
              <img src='https://i.imgur.com/4K0ku5o.png' title='Abaddon' alt='Abaddon' />
              <img src='https://i.imgur.com/ZUsQSIN.png' title='Necrophos' alt='Necrophos' />
              <img src='https://i.imgur.com/YI0QoSt.png' title='Lich' alt='Lich' />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RaceModal;
