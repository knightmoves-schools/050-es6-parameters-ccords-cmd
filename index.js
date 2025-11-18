const shipping = 2.50;
function calculateTotal(subtotal, shipping) {
  return subtotal + shipping;
};
function printTopThreeHeadlines(...value) {
  return value[0] + value[1] + value[2];
}
const value = (`firstheadline \n secondheadline \n thirdheadline`);
let result = return printTopThreeHeadlines(...value);
document.getElementById('result').innerHTML = result;