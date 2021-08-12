import columns from "./HerosColumns.json";

export default function HerosGridRow(props) {
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