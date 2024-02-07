export default function convertCorrectFormat (number) {
  let correctNumber = number.replaceAll(/[\s()-]+/g, '')
  if (/^8/.test(number)) {
    correctNumber = correctNumber.replace(/^8/, '+7')
  }
  return correctNumber
}