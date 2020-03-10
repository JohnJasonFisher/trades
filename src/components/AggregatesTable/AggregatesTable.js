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

	let aggData = props.trades

	let tableDetails = trade => {
		const rows = []
		for (let tradeDetail in trade) {
			rows.push(<td key={trade[tradeDetail]}>{trade[tradeDetail]}</td>)
		}
		return rows
	}

	const tableRows = props.trades.map(trade => {
		return <tr key={rowKey++}>{tableDetails(trade)}</tr>
	})

	const tableHeaders = fields.map(fields => {
		return <th key={headerKey++}>{fields}</th>
	})

	return (
		<div className="AggregatesTable">

			<table className="table table-striped">
				<caption style={{'caption-side': 'top', 'text-align': 'center'}}>Aggregate Trades Data</caption>
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

function sortTradesBySymbol(trades) {
	
}

export default AggregatesTable