import columns from "./HerosColumns.json"
import HerosGridRow from "./HerosGridRow";
import HerosGridPagination from "./HerosGridPagination";
import './HerosGrid.css'

export default function HerosGrid(props) {
    const { data } = props
    const recordsPerPage = 10

    const filteredData = [...data]
    if (filteredData.length > recordsPerPage) {
        filteredData.length = recordsPerPage;
    }



    return (
        <div>
            <div className="alert alert-primary p-1" role="alert">
                Displaying {filteredData.length} / {data.length} records!
            </div>

            <div className="w-100 overflow-auto">
                <table
                    className="hero-grid table table-sm table-hover table-borderless table-responsive"
                >
                    <thead>
                        <tr>
                            {
                                columns.map(columnsName => {
                                    return (
                                        <th
                                            key={`columns-header:${columnsName}`}
                                            scope="col"
                                            className={`hero-grid-column-${columnsName.toLowerCase()}`}
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