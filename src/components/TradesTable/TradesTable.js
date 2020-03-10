import React from 'react'

function TradesTable() {

	let rowNum = 0

	const fields = ["symbol",
	"price",
	"shares",
	"action"]

	const fakeData = [
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

	let tableDetails = data => {
		const rows = []
		for (let field in data) {
			rows.push(<td key={data[field]}>{data[field]}</td>)
		}
		return rows
	}

	let tableRows = fakeData.map(data => {
		return <tr key={rowNum++}>{tableDetails(data)}</tr>
	})

	const tableHeaders = fields.map(fields => {
		return <th key={rowNum++}>{fields}</th>
	})

	return (
		<div className="TradesTable">

			<table className="table table-striped">
				<caption>Student Data</caption>
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