export const handleBoolean = (bool) => {
    if (bool === true) {
      return "Yes"
    } else if (bool === false){
      return "No"
    }else {
      return ""
    }
}

export const handleDateTwoDigits = (num) => {
    if (num < 10) {
      return '0' + num
    } else {
      return num
    }
}
  
export const handleDateOutput = (unix) => {
    let aDate = Math.floor(unix)
    let a = new Date(aDate),
      year = a.getFullYear(),
      months = ['1','2','3','4','5','6','7','8','9','10','11','12'],
      month = months[a.getMonth()],
      date = a.getDate()
  
    const dateFormat = `${year}-${handleDateTwoDigits(month)}-${handleDateTwoDigits(date)}` 
    return dateFormat
}
  
export const handleMoneyDisplay = (amount) => {
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
        });
    return formatter.format(amount)
}