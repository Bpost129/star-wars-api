import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

import { getAllStarships } from "../../services/sw-api"

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getAllStarships()
      console.log(starshipData.results)
      setStarshipList(starshipData.results)
    }

    fetchStarshipList()
  }, [])

  if (!starshipList.length) return <h1>Loading Starships...</h1>

  return (
    <main>
      <h1>STAR WARS STARSHIPS</h1>
      {starshipList.map(starship => 
        <Link to={`/starships/${starship.url.substring(32)}`} key={starship.url.substring(32)}>
          <button style={{margin: '10px'}}>{starship.name}</button>
        </Link>
      )}
    </main>
  )
}

export default StarshipList