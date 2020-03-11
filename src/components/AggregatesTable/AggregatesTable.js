import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function AggregatesTable(props) {

	let headerKey = 0

	let rowKey = 0

	const [fields] = useState(
		[
			"symbol",
			"pnl",
			"total_trades"
		]
	)

	const [aggregateTrades] = useState(sortTradesBySymbol(props.trades))

	let tableDetails = trade => {
		const rows = []
		for (let tradeDetail in trade) {
			rows.push(<td key={trade[tradeDetail]}>{trade[tradeDetail]}</td>)
		}
		return rows
	}

	const tableRows = aggregateTrades.map(agTrade => {
		return <tr key={rowKey++}>{tableDetails(agTrade)}</tr>
	})

	const tableHeaders = fields.map(fields => {
		return <th key={headerKey++}>{fields}</th>
	})

	return (
		<div className="AggregatesTable">

			<table className="table table-striped">
				<caption style={{'captionSide': 'top', 'textAlign': 'center'}}>Aggregate Trades Data</caption>
				<thead>
					<tr>
						{tableHeaders}
					</tr>
				</thead>
				<tbody>
					{tableRows}
				</tbody>
			</table>
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