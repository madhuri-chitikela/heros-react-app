import { useEffect, useState } from "react"
import config from "./config.json"
import csv from "csvtojson"
import HerosGrid from "./HerosGrid/HerosGrid"

export default function MarvelCharactersPage(props) {
  const [data, setData] = useState([])
  const { dataHostName } = config

  useEffect(() => {
    fetch(`${dataHostName}/marvel_characters_info.csv`)
      .then(r => r.text())
      .then(r => csv().fromString(r))
      .then(res => {
        console.log(res)
        setData(res)
      })
  }, [dataHostName])

  return (
    <div>
      <div>
        <h3>MarvelCharactersPage</h3>
      </div>
      <HerosGrid
        data={data} />
    </div>
  )
}
