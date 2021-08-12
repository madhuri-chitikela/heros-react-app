import PropTypes from 'prop-types'
export default function ColorCellFormatter(props) {
    const { color } = props
    const className = `text-${color.toLowerCase()}`
    return (
        <b>
            <span className={className}>{color}</span>
        </b>
    )
}
ColorCellFormatter.propTypes = {
    color: PropTypes.string
}
ColorCellFormatter.defaultProps = {
    color: ""
}