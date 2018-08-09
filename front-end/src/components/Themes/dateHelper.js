export function dateHelper(date) {
  let newDate = new Date(date)
  console.log('date',newDate)
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  console.log('months',months)
  let year = newDate.getFullYear()
  console.log('year',year)
  let month = months[newDate.getMonth()]
  console.log('month',month)
  return `${month} ${year}`
}
