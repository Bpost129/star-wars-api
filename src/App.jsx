
import { Route, Routes } from 'react-router-dom'

import StarshipList from './pages/StarshipList/StarshipList'
import StarshipDetails from './pages/StarshipDetails/StarshipDetails'



import './App.css'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/starships' element={<StarshipList />} />
        <Route path='/starships/:starshipId' element={<StarshipDetails />} />
      </Routes>
    </>
  )
}

export default App
