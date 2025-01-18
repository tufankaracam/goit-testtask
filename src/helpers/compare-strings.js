export function compareStrings(input1, input2) {
  const arr = input1.replace(',', '').split(' ');

  return arr.some(word => input2.toLowerCase().includes(word.toLowerCase()));
}
