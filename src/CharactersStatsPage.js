import { useEffect, useState } from "react";
import config from "./config.json";
import csv from "csvtojson";
import CharactersStatsGrid from "./CharactersStatsGrid";

export default function CharactersStatsPage(props) {
    const [data, setData] = useState([])
    const { dataHostName } = config

    useEffect(() => {
        fetch(`${dataHostName}/charcters_stats.csv`)
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
                <h1>CharactersStatsPage</h1>
            </div>
            <CharactersStatsGrid
                data={data}
            />
        </div>
    )
}
