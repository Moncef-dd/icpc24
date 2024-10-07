//console.log("Hello world "); 


const batatro = (cards) => {

    let dp = Array(cards.length + 1).fill(-Infinity); 
    dp[0] = 0;  // base case ya basha! 

    for (let i = 0; i < cards.length; i++) {
        const [type, value] = cards[i]; 


        for (let size = cards.length; size > 0; size--) {
            if (dp[size - 1] !== -Infinity) {
                if (type === 'add') {
                    dp[size] = Math.max(dp[size], dp[size - 1] + value);
                } else if (type === 'multiply') {
                    dp[size] = Math.max(dp[size], dp[size - 1] * value);
                }
            }
        }
    }

    return dp.slice(1); // return max scores for subsequences of size
}


