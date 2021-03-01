const currency_fromEl = document.getElementById('currency_from');
const amount_fromEl = document.getElementById('from');
const currency_toEl = document.getElementById('currency_to');
const amount_toEl = document.getElementById('to');
const rateEl = document.getElementById('rate');
const ex = document.getElementById('exchange');

currency_fromEl.addEventListener('change', convert);
amount_fromEl.addEventListener('input', convert);
currency_toEl.addEventListener('change', convert);
amount_toEl.addEventListener('input', convert);

ex.addEventListener('click', () => {
  const val = currency_fromEl.value;
  currency_fromEl.value = currency_toEl.value;
  currency_toEl.value = val;
  convert();
});

function convert() {
  const from_cr = currency_fromEl.value;
  const to_cr = currency_toEl.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${from_cr}`)
    .then((res) => res.json())
    .then((res) => {
      const rate = res.rates[to_currency];
      rateEl.innerText = `1 ${from_cr} = ${rate} ${to_cr}`;
      amount_toEl.value = (amount_fromEl.value * rate).toFixed(2);
    });
}

convert();
