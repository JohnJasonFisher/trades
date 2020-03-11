import React from 'react'
import TableComp from '../TableComp/TableComp'
import 'bootstrap/dist/css/bootstrap.css'

function AggregatesTable(props) {

	return (
		<div className="AggregatesTable">
			<TableComp tableName='Aggregate Trades Data' fields={["symbol", "pnl", "total_trades"]} tableData={sortTradesBySymbol(props.trades)}/>
		</div>
	)
}

export function sortTradesBySymbol(trades) {
	const tradesBySymbol = {}
	const Symbols = []

	trades.forEach(trade => {
		if (!Symbols.includes(trade.symbol)) {
			Symbols.push(trade.symbol)
			tradesBySymbol[trade.symbol] = {
				symbol: trade.symbol,
				pnl: trade.price,
				total_trades: 1
			}
		} else {
			tradesBySymbol[trade.symbol] = {
				symbol: trade.symbol,
				pnl: tradesBySymbol[trade.symbol].pnl + trade.price,
				total_trades: tradesBySymbol[trade.symbol].total_trades + 1
			}
		}
	});

	return Object.values(tradesBySymbol)
}

export default AggregatesTable