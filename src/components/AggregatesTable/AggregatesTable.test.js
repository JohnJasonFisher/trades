import {sortTradesBySymbol} from './AggregatesTable'

describe('sortTradesBySymbol', () => {

	let testTrades = [
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
		},
		{
			"symbol": "SPY",
			"price": 277,
			"shares": 4,
			"action": "BUY"
		}
	]

	test('sortTradesBySymbol returns 1 symbol', () => {
		let list_with_one_trade = testTrades.slice(0, 1)
		const expected_aggregate = [{symbol: 'SPX', pnl: 2780, total_trades: 1}]
		expect(sortTradesBySymbol(list_with_one_trade)).toEqual(expected_aggregate)
	})

	test('sortTradesBySymbol returns 1 unique symbol', () => {
		const list_with_one_unique_trade = testTrades.slice(0, -1)
		const expected_aggregate = [{symbol: 'SPX', pnl: 5550, total_trades: 2}]
		expect(sortTradesBySymbol(list_with_one_unique_trade)).toEqual(expected_aggregate)
	})

	test('sortTradesBySymbol returns 2 unique symbols', () => {
		const list_with_one_unique_trade = testTrades
		const expected_aggregate = [{symbol: 'SPX', pnl: 5550, total_trades: 2},
			{symbol: 'SPY', pnl: 277, total_trades: 1}
		]
		expect(sortTradesBySymbol(list_with_one_unique_trade)).toEqual(expected_aggregate)
	})

})
