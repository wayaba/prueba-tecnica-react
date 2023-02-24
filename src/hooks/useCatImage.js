import { useEffect, useState } from 'react'
export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState(null)
  useEffect(() => {
    if (!fact) return
    const word = fact.split(' ')[0]
    setImageUrl(`https://cataas.com/cat/says/${word}`)
  }, [fact])
  return { imageUrl }
}
