import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function TradesTable(props) {

	let headerKey = 0

	let rowKey = 0

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

	const tableHeaders = props.fields.map(fields => {
		return <th key={headerKey++}>{fields}</th>
	})

	return (
		<div className="TradesTable">

			<table className="table table-striped">
				<caption style={{'caption-side': 'top', 'text-align': 'center'}}>Student Data</caption>
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

export default TradesTable