import columns from "./ComicsColumns.json";
import ComicsGridRow from "./ComicsGridRow";

export default function ComicsGrid(props) {
    const { data } = props
    const filteredData = [...data]
    if (filteredData.length > 10) {
        filteredData.length = 10;
    }

    return (
        <div>
            <div className="alert alert-primary" role="alert">
                Displaying {filteredData.length} records!
            </div>
            <table className="table table-striped">
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
                                <ComicsGridRow
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