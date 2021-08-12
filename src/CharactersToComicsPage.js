import { useEffect, useState } from "react";
import config from "./config.json";
import csv from "csvtojson";
import HerosCharactersGrid from "./HerosCharactersGrid";

export default function CharactersToComicsPage(props) {
    const [data, setData] = useState([])
    const { dataHostName } = config

    useEffect(() => {
        fetch(`${dataHostName}/charactersToComics.csv`)
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
                <h1>CharactersToComicsPage</h1>
            </div>
            <HerosCharactersGrid
                data={data}
            />
        </div>
    )
}
