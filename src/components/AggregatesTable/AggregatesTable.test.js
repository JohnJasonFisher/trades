import {sortTradesBySymbol} from './AggregatesTable'

describe('sortTradesBySymbol', () => {

	const testTrades = [
		{
			"symbol": "SPX",
			"price": 2780,
			"shares": 2,
			"action": "BUY"
		},
		{
			"symbol": "SPX",
			"price": 2770,
			"shares": 2,
			"action": "SELL"
		}
	]

	test('sortTradesBySymbol returns 1 unique symbol', () => {
		
		expect(sortTradesBySymbol(testTrades)).toEqual(['SPX'])
	})

})
