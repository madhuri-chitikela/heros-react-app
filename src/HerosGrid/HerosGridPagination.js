export default function HerosGridPagination(props) {
    const { recordsPerPage, totalRecords } = props
    const totalPages = Math.floor(totalRecords / recordsPerPage) + 1
    const pageLinks = []
    for (let i = 0; i < totalPages; i++) {
        pageLinks.push({
            pageNumber: i + 1,
            label: `${(i * recordsPerPage) + 1} to ${(i + 1) * recordsPerPage}`
        })
    }
    console.log("page links:", pageLinks)
    return (
        <ul className="list-inline pagination-sm">
            <li className="list-inline-item">
                <a className="" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            {
                pageLinks.map(e => {
                    return (
                        <li
                            key={`page-link-${e.pageNumber}`}
                            className="list-inline-item"
                            title={e.label}
                        >
                            <a className="" href="#">
                                {e.pageNumber}
                            </a>
                        </li>
                    )
                })
            }

            <li className="list-inline-item">
                <a className="" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    )
}