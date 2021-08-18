import PropTypes from "prop-types"
export default function HerosGridPagination(props) {
    const { recordsPerPage, totalRecords, handlePageClick, currentPageNo } = props
    const totalPages = Math.floor(totalRecords / recordsPerPage) + 1
    const pageLinks = []

    for (let i = 0; i < totalPages; i++) {
        pageLinks.push({
            pageNumber: i + 1,
            label: `${(i * recordsPerPage) + 1} to ${(i + 1) * recordsPerPage}`
        })
    }

    return (
        <div className="w-100">
            <ul className="list-inline pagination-sm">

                <li className="list-inline-item">
                    <button className="btn btn-sm">
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>

                {
                    pageLinks.map(e => {
                        let className = "btn btn-link btn-sm"
                        if (currentPageNo === e.pageNumber) {
                            className = "btn btn-primary btn-sm"
                        }
                        return (
                            <li
                                key={`pageNumber:${e.pageNumber}`}
                                className="list-inline-item"
                                title={e.label}
                            >
                                <button
                                    className={className}
                                    onClick={() => {
                                        handlePageClick(e.pageNumber)
                                    }}
                                >
                                    {e.pageNumber}
                                </button>

                            </li>
                        )
                    })
                }

                <li className="list-inline-item">

                    <button className="btn btn-sm">
                        <span aria-hidden="true">&raquo;</span>
                    </button>

                </li>

            </ul>
        </div>
    )
}

HerosGridPagination.propTypes = {
    recordsPerPage: PropTypes.number.isRequired,
    totalRecords: PropTypes.number.isRequired,
    currentPageNo: PropTypes.number.isRequired,
    handlePageClick: PropTypes.func.isRequired,
}