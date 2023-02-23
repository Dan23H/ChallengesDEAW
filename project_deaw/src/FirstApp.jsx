import PropTypes from 'prop-types';
const title = 'First App'
export const FirstApp = () => {
    return (
        <>
            <h1> { title } </h1>
            <span>10</span>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    sum: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
    title: 'No hay título',
    sum: 300
}
