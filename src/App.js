import React from 'react';
import Folder from './components/Folder'
import File from './components/File'

function App() {
    return (
      <div>
        <Folder name="Desktop">
          <Folder name="Music">
          <File name="Linkin park.mp3"/>
          <File name="Queen.wav"/>
          <Folder name="Retro"/>
          </Folder>
          <File name="dogs.jpeg"/>
          <File name="cats.png"/>
        </Folder>
      </div>
    )
}

export default App;
