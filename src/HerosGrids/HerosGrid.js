import columns from "./HerosColumns.json"
import HerosGridRow from "./HerosGridRow";
import "./HerosGrids.css";
import HerosGridPagination from "./HerosGridPagination";

export default function HerosGrid(props) {
    const { data } = props
    const filteredData = [...data]
    const recordsPerPage = 10

    if (filteredData.length > recordsPerPage) {
        filteredData.length = recordsPerPage;
    }

    return (
        <div>
            <div className="alert alert-primary" role="alert">
                Displaying {filteredData.length} / {data.length} records!
            </div>

            <div className="w-100 overflow-auto">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            {
                                columns.map(columnsName => {
                                    return (
                                        <th
                                            key={`columns-header:${columnsName}`}
                                            scope="col"
                                            className={`heros-grid-column-${columnsName}`}
                                        >
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
                                    <HerosGridRow
                                        row={row}
                                    />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

            <HerosGridPagination
                recordsPerPage={recordsPerPage}
                totalRecords={data.length}
            />

        </div>
    )
}