import { useEffect, useState } from "react";
import config from "./config.json";
import csv from "csvtojson";
import ComicsGrid from "./ComicsGrid";

export default function ComicsPage(props) {
    const [data, setData] = useState([])
    const { dataHostName } = config

    useEffect(() => {
        fetch(`${dataHostName}/comics.csv`)
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
                <h1>ComicsPage</h1>
            </div>
            <ComicsGrid
                data={data}
            />
        </div>
    )
}
