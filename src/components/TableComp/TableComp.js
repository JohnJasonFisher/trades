import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './TableComp.css'

function TableComp(props) {

	let headerKey = 0

	let rowKey = 0

	let tableDetails = trade => {
		const rows = []
		for (let tradeDetail in trade) {
			rows.push(<td key={trade[tradeDetail]}>{trade[tradeDetail]}</td>)
		}
		return rows
	}

	const tableRows = props.tableData.map(trade => {
		return <tr key={rowKey++}>{tableDetails(trade)}</tr>
	})

	const tableHeaders = props.fields.map(fields => {
		return <th key={headerKey++}>{fields}</th>
	})

	return (
		<div className="TableComp">

			<table className="table table-striped" align="center" >
				<caption style={{'captionSide': 'top', 'textAlign': 'center'}}>{props.tableName} (length: {props.tableData.length})</caption>
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

export default TableComp