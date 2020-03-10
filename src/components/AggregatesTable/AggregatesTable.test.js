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
		const list_with_one_trade = [testTrades[0]]
		const expected_aggregate = {SPX: {symbol: 'SPX', pnl: 2780, total_trades: 1}}
		expect(sortTradesBySymbol(list_with_one_trade)).toEqual(expected_aggregate)
	})

})
