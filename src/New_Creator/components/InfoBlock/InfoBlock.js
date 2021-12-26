import './InfoBlock.css'
import convertDate from '../../convertDate'

const InfoBlock = (props) => {
    const {title, date, onClick} = props
    return (
        <div className='InfoBlock_div' onClick={onClick}>
            <h3>{title}</h3>
            <div className='Date_div'>{convertDate(date)}</div>
        </div>
    )
}

export default InfoBlock;