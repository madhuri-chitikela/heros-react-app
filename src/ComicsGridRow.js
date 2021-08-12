import columns from "./ComicsColumns.json";

export default function ComicsGridRow(props) {
    const { row } = props
    return (
        <tr>
            {
                columns.map(columnsName => {
                    return (
                        <td
                            key={`row:${row.ID}-cell:${columnsName}`}
                        >
                            {row[columnsName]}
                        </td>
                    )
                })
            }
        </tr >

    )
}