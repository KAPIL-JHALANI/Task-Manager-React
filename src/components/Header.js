import PropTypes from 'prop-types'
import Button from './Button'
import {useLocation} from 'react-router-dom'

const Header = ( {title,onAdd,showAdd} ) => {
    const location=useLocation()
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname==='/' &&(<Button onClick={onAdd} color={showAdd?'red':'green'} text={showAdd?'CLOSED':'ADD'} />)}
        </header>
    )
}

Header.defaultProps={
    title:'Task Tracker'
}

Header.propTypes={
    title:PropTypes.string.isRequired
}
// css in js style={headstyle}
// const headstyle={
//     color:'RED'
// }

export default Header


