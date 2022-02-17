let raceNumber = Math.floor(Math.random() * 1000)
const registeredEarly = Math.random() >= 0.5
const age = Math.floor(Math.random() * 35)

if (registeredEarly === true && age > 18) {
  raceNumber += 1000
}

if (registeredEarly && age > 18) {
  console.log(`Runner number ${raceNumber}, your race starts at 9:30 am.`)
} else if (!registeredEarly && age > 18) {
  console.log(`Runner number ${raceNumber}, your race starts at 11:00 am.`)
} else if (age < 18) {
  console.log(`Runner number ${raceNumber}, your race starts at 12:30 am.`)
} else {
  console.log('Go to the registration desk!')
}
