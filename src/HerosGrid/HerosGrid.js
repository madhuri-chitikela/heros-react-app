import { useState } from "react";
import columns from "./HerosColumns.json"
import HerosGridRow from "./HerosGridRow";
import HerosGridPagination from "./HerosGridPagination";
import './HerosGrid.css'


export default function HerosGrid(props) {
    const { data } = props
    const recordsPerPage = 10
    const [currentPageNo, setCurrentPageNo] = useState(1)

    const handlePageClick = (pageNo) => {
        setCurrentPageNo(pageNo)
    }

    const startIndex = (currentPageNo - 1) * recordsPerPage
    const endIndex = startIndex + recordsPerPage - 1
    const filteredData = data.slice(startIndex, endIndex + 1)

    return (
        <div>
            <div className="alert alert-primary p-1" role="alert">
                <b>Page: {currentPageNo}</b>
                {': '}
                <i>
                    {startIndex + 1}
                    {'-'}
                    {endIndex + 1}
                    {' '}

                    of
                    {' '}
                    {data.length} records!
                </i>
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
                            filteredData.map((row, idx) => {
                                return (
                                    <HerosGridRow
                                        row={row}
                                        sNo={idx + 1}
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
                currentPageNo={currentPageNo}
                handlePageClick={handlePageClick}
            />
        </div>
    )
}