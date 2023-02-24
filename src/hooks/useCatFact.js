import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/fact'

export const useCatFact = () => {
  const [fact, setFact] = useState('algo que gato ok')

  const refreshRandomFact = () => {
    getRandomFact().then(setFact)
  }

  useEffect(refreshRandomFact, [])

  return { fact, refreshRandomFact }
}
