import './App.css'
import Wave from 'react-wavify'

function App() {
  return (
    
    <main className = "home">
      <h1>hi, i'm hazel!</h1>
      
      <div className = "buttons">
        <button>projects</button>
        <button>skills</button>
        <button>about</button>
        <button>contact</button>
      </div>

      <Wave 
        className = "wave bg1"
        fill = "#7C606B"
        paused = {false}
        options = {{height: 15, amplitude: 30, speed: 0.17, points: 4}}
      />
      <Wave 
        className = "wave bg2"
        fill = "#C46BAE"
        paused = {false}
        options = {{height: 15, amplitude: 30, speed: 0.20, points: 5}}
      />
      <Wave 
        className = "wave bg3"
        fill = "#EB7BC0"
        paused = {false}
        options = {{height: 15, amplitude: 30, speed: 0.23, points: 6}}
      />
      <Wave 
        className = "wave bg4"
        fill = "#EDA4BD"
        paused = {false}
        options = {{height: 15, amplitude: 30, speed: 0.26, points: 8}}
      />

    </main>
  )
}

export default App
