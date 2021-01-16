export const bestTimeToBuySellStocks = (days) => {
  let profit = 0;

  for (let i = days.length - 1; i > 0; i--) {
    if (days[i] > days[i - 1]) {
      profit += days[i] - days[i - 1];
    }
  }

  return profit;
};
