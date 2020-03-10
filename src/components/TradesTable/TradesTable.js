import React, {useState} from 'react'

function TradesTable() {

	const [fields] = useState(["symbol",
	"price",
	"shares",
	"action"])

	const [fakeData] = useState([
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
	])

	let headerKey = 0

	let rowKey = 0

	let tableDetails = data => {
		const rows = []
		for (let field in data) {
			rows.push(<td key={data[field]}>{data[field]}</td>)
		}
		return rows
	}

	const tableRows = fakeData.map(data => {
		return <tr key={rowKey++}>{tableDetails(data)}</tr>
	})

	const tableHeaders = fields.map(fields => {
		return <th key={headerKey++}>{fields}</th>
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