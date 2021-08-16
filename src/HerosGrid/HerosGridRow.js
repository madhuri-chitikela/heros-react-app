import columns from "./HerosColumns.json";
import AlignmentCellFormatter from "../gridCellFormatters/AlignmentCellFormatter";
import GenderCellFormatter from "../gridCellFormatters/GenderCellFormatter";
import ColorCellFormatter from "../gridCellFormatters/ColorCellFormatter";

export default function HerosGridRow(props) {
    const { row, sNo } = props
    return (
        <tr>
            {
                columns.map((columnName) => {
                    let content = row[columnName]
                    if (columnName === "Sno") {
                        content = sNo
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
                            key={`row-${row.ID}-cell-${columnName}`}
                            className={`hero-grid-column-${columnName.toLowerCase()}`}
                        >
                            {content}
                        </td>
                    )
                })
            }
        </tr >

    )
}