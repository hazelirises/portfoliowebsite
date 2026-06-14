import './App.css'
import Wave from 'react-wavify'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className = "home">
      
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

      <Wave 
        className = "bg1"
        fill = "#7C606B"
        
        options = {{height: 15, amplitude: 30, speed: 0.17, points: 4}}
      />
      <Wave 
        className = "bg2"
        fill = "#C46BAE"
        
        options = {{height: 15, amplitude: 30, speed: 0.20, points: 5}}
      />
      <Wave 
        className = "bg3"
        fill = "#EB7BC0"
        
        options = {{height: 15, amplitude: 30, speed: 0.23, points: 6}}
      />
      <Wave 
        className = "bg4"
        fill = "#EDA4BD"
        
        options = {{height: 15, amplitude: 30, speed: 0.26, points: 8}}
      />

    </div>
  )
}

export default App
