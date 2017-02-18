import React, {Component} from 'react'
import Key from './key'
import './app.css'
/* https://es.wikipedia.org/wiki/Frecuencias_de_afinaci%C3%B3n_del_piano */
class App extends Component {
  render () {
    return (
      <div>
        <h1>Sound API</h1>
        <div className='app'>
          <Key frequency={261.626} label='C4' />
          <Key frequency={277.183} label='C#4' sharp />
          <Key frequency={293.665} label='D4' />
          <Key frequency={311.127} label='D#4' sharp />
          <Key frequency={329.628} label='E4' />
          <Key frequency={349.228} label='F4' />
          <Key frequency={369.994} label='F#4' sharp />
          <Key frequency={391.995} label='G4' />
          <Key frequency={415.305} label='G#4' sharp />
          <Key frequency={440} label='A4' />
          <Key frequency={466.164} label='A#4' sharp />
          <Key frequency={493.883} label='B4' />
        </div>
      </div>
    )
  }
}

export default App
