export function dateHelper(date) {
  let newDate = new Date(date)
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let year = newDate.getFullYear()
  let month = months[newDate.getMonth()]
  return `${month} ${year}`
}
