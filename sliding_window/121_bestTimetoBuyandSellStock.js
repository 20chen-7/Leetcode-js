/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let ans = 0;
    for(let i = 1; i < prices.length; i++){
        ans = Math.max(ans, prices[i]-minPrice);
        minPrice = Math.min(minPrice, prices[i]);
    }
    return ans;
};