def balatro(cards):

    dp = [-float('inf')] * (len(cards) + 1)
    dp[0] = 0  # base case

    for i in range(len(cards)):
        card_type, value = cards[i]

        for size in range(len(cards), 0, -1):
            if dp[size - 1] != -float('inf'):
                if card_type == 'a':
                    dp[size] = max(dp[size], dp[size - 1] + value)
                elif card_type == 'm':

                    dp[size] = max(dp[size], dp[size - 1] * value)

    return dp[1:]  


