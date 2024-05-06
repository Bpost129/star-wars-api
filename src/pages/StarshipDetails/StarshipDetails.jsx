import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

import { getStarship } from "../../services/sw-api"

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const { starshipId } = useParams()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getStarship(starshipId)
      setStarshipDetails(starshipData)
    }

    fetchDetails()
  }, [starshipId])

  return (
    <>
      <h1>Starship Details</h1>
      <h3>NAME: {starshipDetails.name}</h3>
      <h3>MODEL: {starshipDetails.model}</h3>
      <Link to={`/starships`}>RETURN</Link>
    </>
  )
}

export default StarshipDetails