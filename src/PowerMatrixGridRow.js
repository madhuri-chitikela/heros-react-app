import columns from "./PowerMatrixColumns.json";

export default function PowerMatrixGridRow(props) {
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