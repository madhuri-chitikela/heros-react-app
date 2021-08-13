import { useEffect, useState } from "react"
import config from "./config.json"
import csv from "csvtojson"
import HerosGrid from "./HerosGrid/HerosGrid"

export default function MarvelDCPage() {
    const [data, setData] = useState([])
    const { dataHostName } = config

    useEffect(() => {
        fetch(`${dataHostName}/marvel_dc_characters.csv`)
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
                <h4>MarvelDCCharactersPage</h4>
            </div>
            <HerosGrid
                data={data}
            />
        </div>
    )
}