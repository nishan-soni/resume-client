const convertDate = (element) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let startString, endString = ""
    if (element.start !== null) {
        const newStart = new Date(element.start)
        startString = months[newStart.getMonth()]+ " " + newStart.getFullYear().toString()
        startString += " - "
    }
    else {
        startString = ""
    }
    if (element.end !== null) {
        const newEnd = new Date(element.end)
        endString = months[newEnd.getMonth()] + " " + newEnd.getFullYear().toString()
    }
    if (element.currentChecked === true) {
        endString = "CURRENT"
    }
    
    return startString + endString
}

export default convertDate