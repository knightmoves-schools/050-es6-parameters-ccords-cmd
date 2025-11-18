const shipping = 2.50;
const subtotal = 1.50;
function calculateTotal(subtotal, shipping) {
  return subtotal + shipping;
};
function printTopThreeHeadlines(...value) {
  return `value[0] \n value[1] \n value[2]`;
}
const value = (`firstheadline \n secondheadline \n thirdheadline`);
const result = printTopThreeHeadlines(value);
document.getElementById('result').innerHTML = result;