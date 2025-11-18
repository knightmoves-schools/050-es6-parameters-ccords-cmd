function calculateTotal(subtotal, shipping = 2.50) {
  return subtotal + shipping;
};
function printTopThreeHeadlines(...headlines) {
  return headlines.slice(0, 3).join('\n');
};

let total = calculateTotal(10);
let headlinesOutput = printTopThreeHeadlines(
  "Breaking News: Market Hits Record Highs",
  "Sports Update: Local Team Wins Championship",
  "Weather Alert: Heavy Rain Expected Tomorrow",
  "Tech News: New Smartphone Released"
);

document.getElementById("result").innerHTML = result;