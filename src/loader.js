export async function infoLoader(path){
  const results = await fetch(`http://localhost:4200/${path}`)
  const data = await results.json()
  return data
}