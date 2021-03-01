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
