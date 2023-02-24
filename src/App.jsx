import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

const App = () => {
  const { fact, refreshRandomFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = () => {
    refreshRandomFact()
  }
  return (
    <main>
      <h1>Prueba técnica</h1>
      <button onClick={handleClick}>Obtener otro random</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`image for ${fact}`}></img>}
    </main>
  )
}

export default App
