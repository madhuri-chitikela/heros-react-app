export default function AlignmentCellFormatter(props) {
    const { data } = props
    if (data === "good") {
        return (
            <b className="text-success">Good</b>
        )
    }
    return (
        <b className="text-danger">Bad</b>
    )
}