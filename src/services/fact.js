const CAT_ENDPOINT_RANDMON_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  const resp = await fetch(CAT_ENDPOINT_RANDMON_FACT)
  const data = await resp.json()
  const { fact } = data
  return fact
}
