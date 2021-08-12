import columns from "./PowerMatrixColumns.json";
import PowerMatrixGridRow from "./PowerMatrixGridRow";

export default function PowerMatrixGrid(props) {
    const { data } = props
    const filteredData = [...data]
    if (filteredData.length > 100) {
        filteredData.length = 100;
    }
    return (
        <div>
            <div className="alert alert-primary" role="alert">
                Displaying {filteredData.length} records!
            </div>

            <table className="table">
                <thead>
                    <tr>
                        {
                            columns.map(columnsName => {
                                return (
                                    <th
                                        key={`columns-header:${columnsName}`}
                                        scope="col">
                                        {columnsName}
                                    </th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredData.map(row => {
                            return (
                                <PowerMatrixGridRow
                                    row={row}
                                />
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}