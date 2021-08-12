import { useEffect, useState } from "react";
import config from "./config.json";
//import columns from "./PowerMatrixColumns.json";
import csv from "csvtojson";
import PowerMatrixGrid from "./PowerMatrixGrid";

export default function PowerMatrixPage(props) {
    const [data, setData] = useState([])
    const { dataHostName } = config;

    useEffect(() => {
        fetch(`${dataHostName}/superheroes_power_matrix.csv`)
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
                <h1>PowerMatrixPage</h1>
            </div>
            <PowerMatrixGrid
                data={data}
            />
        </div>
    )
}
