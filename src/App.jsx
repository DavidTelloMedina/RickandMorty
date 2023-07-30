import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './assets/components/LocationInfo'
import ResidentCard from './assets/components/ResidentCard'
import FormLocation from './assets/components/FormLocation'

function App() {
  const [location, setLocation] = useState()
  const [idLocation, setIdLocation] = useState(getRandomNumber(126))
  const [hasError, sethasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`
    //https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638
    setIsLoading(true)
    axios
      .get(url)
      .then((res) => {
        setLocation(res.data)
        sethasError(false)
      })
      .catch((err) => {
        console.error(err)
        sethasError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [idLocation])

  console.log(idLocation)
  return (
    <div>
      <header className="header__container">
        <div className="header__image"></div>
        <div className="header__info">
          <FormLocation setIdLocation={setIdLocation} />
          <LocationInfo  location={location} />
        </div>
      </header>

      {isLoading ? (
        <h1>Loading...</h1>
      ) : hasError ? (
        <h1> Hey! You must provide an Id from 1 to 126</h1>
      ) : (
        <div>
          <div className="resident-container">
            {location?.residents.map((url) => (
              <ResidentCard key={url} url={url} />
            ))}
          </div>
          )
        </div>
      )}
    </div>
  )
}
export default App
