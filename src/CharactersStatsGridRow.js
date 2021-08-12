import columns from "./CharactersStatsColumns.json";

export default function CharactersStatsGridRow(props) {
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