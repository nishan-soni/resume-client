import './Popup.css'
const Popup = (props) => {
    const {confirmFunction, message, setShowPopup} = props
    return (
        <div className="Popup_parent">
            {message}
            <div className="popup_buttons">
                <button className='confirm_button' onClick={() => {confirmFunction()}}>
                    Confirm
                </button>
                <button  className='cancel_button' onClick={() => {setShowPopup(false)}}>
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default Popup;