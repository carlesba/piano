import React from 'react'
import './key.css'

class Key extends React.Component {
  static defaultProps = {
    frequency: 440
  }
  static propTypes = {
    frequency: React.PropTypes.number,
    label: React.PropTypes.string,
    sharp: React.PropTypes.bool
  }
  handleMouseDown = () => {
    const context = new window.AudioContext()
    this.oscillator = context.createOscillator()
    this.oscillator.frequency.value = this.props.frequency
    this.oscillator.connect(context.destination)
    this.oscillator.start()
  }
  handleMouseUp = () => {
    this.oscillator && this.oscillator.stop()
  }
  render () {
    const {label, sharp} = this.props
    const classes = sharp
      ? 'key sharp'
      : 'key'
    return (
      <div
        className={classes}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}>
        <span className='label'>{label}</span>
      </div>
    )
  }
}

export default Key
