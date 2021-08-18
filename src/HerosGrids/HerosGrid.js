import columns from "./HerosColumns.json"
import HerosGridRow from "./HerosGridRow";
import "./HerosGrids.css";
import HerosGridPagination from "./HerosGridPagination";
import { useState } from "react";

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
            <div className="alert alert-primary" role="alert">
                <b>
                    page:{currentPageNo}
                    {' : '}
                </b>
                <i>
                    {startIndex + 1}
                    {' -'}
                    {' '}
                    {endIndex + 1}
                    {' '}
                    of
                    {' '}
                    {data.length}
                    {" "}!
                </i>
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
                            filteredData.map((row, idx) => {
                                return (
                                    <HerosGridRow
                                        row={row}
                                        Sno={idx}
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
                handlePageClick={handlePageClick}
                currentPageNo={currentPageNo}
            />

        </div>
    )
}