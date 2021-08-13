
export default function GenderCellFormatter(props) {
    const { data } = props
    if (data === "Male") {
        return (
            <b>♂️ M</b>
        )
    }
    return (
        <b>♀️ F</b>
    )
}
