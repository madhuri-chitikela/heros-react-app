import PropTypes from 'prop-types'
export default function HerosGridPagination(props) {
    const {
        recordsPerPage,
        totalRecords,
        handlePageClick,
        currentPageNo,
    } = props
    const totalPages = Math.floor(totalRecords / recordsPerPage) + 1
    const pageLinks = []

    let startPageNo = currentPageNo - (currentPageNo % recordsPerPage) + 1
    if (currentPageNo % recordsPerPage === 0) {
        startPageNo = currentPageNo - recordsPerPage + 1
    }
    let endPageNo = startPageNo + recordsPerPage - 1
    for (let i = startPageNo; i <= endPageNo; i++) {
        pageLinks.push({
            pageNumber: i,
            label: `${((i - 1) * recordsPerPage + 1)} to ${i * recordsPerPage}`
        })
    }
    return (
        <ul className="list-inline pagination-sm">
            <li className="list-inline-item">
                <button
                    className="btn btn-link btn-sm"
                    disabled={currentPageNo <= 1}
                    onClick={
                        () => {
                            handlePageClick(currentPageNo - 1)
                        }
                    }
                >
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
                            key={`page-link-${e.pageNumber}`}
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
                <button
                    className="btn btn-link btn-sm"
                    disabled={currentPageNo >= totalPages}
                    onClick={
                        () => {
                            handlePageClick(currentPageNo + 1)
                        }
                    }
                >
                    <span aria-hidden="true">&raquo;</span>
                </button>
            </li>
        </ul>
    )
}

HerosGridPagination.propTypes = {
    recordsPerPage: PropTypes.number.isRequired,
    totalRecords: PropTypes.number.isRequired,
    currentPageNo: PropTypes.number.isRequired,
    handlePageClick: PropTypes.func.isRequired,
}