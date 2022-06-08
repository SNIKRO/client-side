export default async function dataLoader() {
  const results = await fetch("http://localhost:4200/backlawr")
  const json = await results.json()
  return json
}
