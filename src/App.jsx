import './App.css'
import { Accordion } from './components/Accordion'
import { accordionData } from './accordionData'

function App() {
  
  return (
    <>
      <Accordion accordionData={accordionData} />
    </>
  )
}

export default App
