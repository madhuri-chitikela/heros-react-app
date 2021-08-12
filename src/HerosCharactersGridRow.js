import columns from "./HerosCharactersColumns.json";

export default function HerosCharactersGridRow(props) {
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