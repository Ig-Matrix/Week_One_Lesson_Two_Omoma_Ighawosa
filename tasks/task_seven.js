const dayOfTheWeek = 'Sunday'

switch (dayOfTheWeek) {
  case 'Monday':
    console.log(`${dayOfTheWeek}: Start of the week`) // @logs Monday: Start of the week
    break
  case 'Tuesday':
    console.log(`${dayOfTheWeek}: Second day of the week`) // @logs Tuesday: Second day of the week
    break
  case 'Wednesday':
    console.log(`${dayOfTheWeek}: Third day of the week`) // @logs Wednesday: Third day of the week
    break
  case 'Thursday':
    console.log(`${dayOfTheWeek}: Fourth day of the week`) // @logs Thursday: Fourth day of the week
    break
  case 'Friday':
    console.log(`${dayOfTheWeek}: Fifth day of the week`) // @logs Friday: Fifth day of the week
    break
  case 'Saturday':
    console.log(`${dayOfTheWeek}: Sixth day of the week`) // @logs Saturday: Sixth day of the week
    break
  case 'Sunday':
    console.log(`${dayOfTheWeek}: End of the week`) // @logs Sunday: End of the week
    break
  default:
    console.log(`${dayOfTheWeek} is not a valid day of the week`) // @logs error message
    break
}
