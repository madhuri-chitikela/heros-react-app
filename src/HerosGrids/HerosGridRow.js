import columns from "./HerosColumns.json";
import AlignmentCellFormatter from "../heroGridCellFormatters/AlignmentCellFormatter";
import GenderCellFormatter from "../heroGridCellFormatters/GenderCellFormatter";
import ColorCellFormatter from "../heroGridCellFormatters/ColorCellFormatter";

export default function HerosGridRow(props) {
    const { row, Sno } = props
    return (
        <tr>
            {
                columns.map(columnName => {
                    let content = row[columnName]

                    if (columnName === "Sno") {
                        content = Sno + 1
                    }

                    if (columnName === "Alignment") {
                        content = <AlignmentCellFormatter data={content} />
                    }
                    if (columnName === "Gender") {
                        content = <GenderCellFormatter data={content} />
                    }
                    if (columnName === "EyeColor") {
                        content = <ColorCellFormatter color={content} />
                    }
                    if (columnName === "HairColor") {
                        content = <ColorCellFormatter color={content} />
                    }
                    if (columnName === "SkinColor") {
                        content = <ColorCellFormatter color={content} />
                    }

                    return (
                        <td
                            key={`row:${row.ID}-cell:${columnName}`}
                        >
                            {content}
                        </td>
                    )
                })
            }
        </tr >

    )
}