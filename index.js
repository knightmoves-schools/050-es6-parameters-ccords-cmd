function calculateTotal(subtotal, shipping) {
  return subtotal + shipping;
};
let result = calculateTotal(1.25, 2.25);
function printTopThreeHeadlines(...value) {
  return value[0] + value[1];
}
result = printTopThreeHeadlines(result, `first headline\n second headline\n third headline`);

  document.getElementById('result').innerHTML = result;

