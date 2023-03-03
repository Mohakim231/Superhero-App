import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Hero = () => {
  const { id } = useParams()

  const [loading, setLoading] = useState(false)
  const [superhero, setSuperhero] = useState({})

  useEffect(() => {
    setLoading(true)
    async function loadSuperhero() {
      const response = await fetch(`https://superheroapi.com/api/access-token/${id}`, {mode: "cors"});
      const data = await response.json();
      setSuperhero(data)
      setLoading(false)
    }

    loadSuperhero()

  }, [])

  function displaySuperhero() {
    return <main>
      <h2>{superhero.name}</h2>
      <img src={superhero.image["url"]} />
      <h3>Power scaling</h3>
      <ul>
        <li>Intelligence: {superhero.powerstats["intelligence"]}</li>
        <li>Strength: {superhero.powerstats["strength"]}</li>
        <li>Speed: {superhero.powerstats["speed"]}</li>
        <li>Durability: {superhero.powerstats["durability"]}</li>
        <li>Power: {superhero.powerstats["power"]}</li>
        <li>Combat: {superhero.powerstats["combat"]}</li>
      </ul>
      <h3>Biography</h3>
      <ul>
        <li>Full name: {superhero.biography["full-name"]}</li>
        <li>Place of birth: {superhero.biography["place-of-birth"]}</li>
        <li>First appearance: {superhero.biography["first-appearance"]}</li>
        <li>Publisher: {superhero.biography["publisher"]}</li>
        <li>Alignment: {superhero.biography["alignment"]}</li>
      </ul>
      <h3>Appearance</h3>
      <ul>
        <li>Gender: {superhero.appearance["gender"]}</li>
        <li>Race: {superhero.appearance["race"]}</li>
        <li>Height: {superhero.appearance["height"][0]} / {superhero.appearance["height"][1]}</li>
        <li>Weight: {superhero.appearance["weight"][0]} / {superhero.appearance["weight"][1]}</li>
        <li>Eye colour: {superhero.appearance["eye-color"]}</li>
        <li>Hair colour: {superhero.appearance["hair-color"]}</li>
      </ul>

    </main>
  }

  return loading ? <h2>Loading...</h2> : displaySuperhero()
}

export default Hero