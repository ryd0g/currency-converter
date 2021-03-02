// creating variables for each value needed
const currency_fromEl = document.getElementById('currency_from');
const amount_fromEl = document.getElementById('from');
const currency_toEl = document.getElementById('currency_to');
const amount_toEl = document.getElementById('to');
const rateEl = document.getElementById('rate');
const ex = document.getElementById('exchange');

// adding event listeners for currency values
currency_fromEl.addEventListener('change', convert);
amount_fromEl.addEventListener('input', convert);
currency_toEl.addEventListener('change', convert);
amount_toEl.addEventListener('input', convert);

// function event listener on click for button
// on click switches currency type
ex.addEventListener('click', () => {
  const val = currency_fromEl.value;
  currency_fromEl.value = currency_toEl.value;
  currency_toEl.value = val;
  convert();
});

// function for conversion process
function convert() {
  // 2 variables for the 'from' and 'to' value
  const from_cr = currency_fromEl.value;
  const to_cr = currency_toEl.value;

  // fetching api with link and calling json
  fetch(`https://api.exchangerate-api.com/v4/latest/${from_cr}`)
    .then((res) => res.json())
    .then((res) => {
      // shows exchange rate from 'from' currency to 'to' currency
      const rate = res.rates[to_cr];
      rateEl.innerText = `1 ${from_cr} = ${rate} ${to_cr}`;
      amount_toEl.value = (amount_fromEl.value * rate).toFixed(2);
    });
}

// function call
convert();
