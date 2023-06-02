import React from 'react'
import ReactAudioPlayer from 'react-audio-player'

export const AudioPlayer = () => {
  return (
    <ReactAudioPlayer
      src='/solvidi-lone-wolf.mp3'
      autoPlay={false}
      controls
      title='Solvidi - Lone Wolf'
    />
  )
}
