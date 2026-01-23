import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Wavify from 'react-wavify'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className = "home">
      <Wavify 
        className = "bg1"
        fill = "#7C606B"
        
        options = {{height: 15, amplitude: 30, speed: 0.17, points: 4}}
      />
      <Wavify 
        className = "bg2"
        fill = "#C46BAE"
        
        options = {{height: 15, amplitude: 30, speed: 0.20, points: 5}}
      />
      <Wavify 
        className = "bg3"
        fill = "#EB7BC0"
        
        options = {{height: 15, amplitude: 30, speed: 0.23, points: 6}}
      />
      <Wavify 
        className = "bg4"
        fill = "#EDA4BD"
        
        options = {{height: 15, amplitude: 30, speed: 0.26, points: 8}}
      />
      
      <div>
        <h1>
          hi, i'm hazel!
        </h1>
        
      </div>

      <div className = "buttons">
        <button>
          projects
        </button>
        <button>
          skills
        </button>
        <button>
          about
        </button>
        <button>
          contact
        </button>
      </div>
    </div>
  )
}

export default App
