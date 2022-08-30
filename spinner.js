let delay = 0;
setTimeout(() => {
  process.stdout.write('\r|  ')
  delay += 150
}, 100)

setTimeout(() => {
  process.stdout.write('\r/  ')
  delay += 150
}, 300)

setTimeout(() => {
  process.stdout.write('\r-  ')
  delay += 150
}, 500)

setTimeout(() => {
  process.stdout.write('\r\\  ')
  delay += 150
}, 700)

setTimeout(() => {
  process.stdout.write('\r|  ')
  delay += 150
}, 900)

setTimeout(() => {
  process.stdout.write('\r/  ')
  delay += 150
}, 1100)

setTimeout(() => {
  process.stdout.write('\r-  ')
  delay += 150
}, 1300)

setTimeout(() => {
  process.stdout.write('\r\\  ')
  delay += 150
}, 1500)

setTimeout(() => {
  process.stdout.write('\r|  ')
  delay += 150
}, 1700)

setTimeout(() => {
  console.log('')
}, delay)

