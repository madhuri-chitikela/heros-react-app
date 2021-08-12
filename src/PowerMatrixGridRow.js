import columns from "./PowerMatrixColumns.json";
import PowerGridFormattedCell from "./PowerGridFormattedCell";

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
                            {
                                columnsName === "Name" ?
                                    row[columnsName] :
                                    <PowerGridFormattedCell data={row[columnsName]} />
                            }
                        </td>
                    )
                })
            }
        </tr >

    )
}