import React from 'react'
import TableComp from '../TableComp/TableComp'
import 'bootstrap/dist/css/bootstrap.css'

function TradesTable(props) {

	return (
		<div className="TradesTable">
			<TableComp tableName='Trades Data' fields={["Symbol", "Price", "Shares", "Action"]} tableData={props.trades}/>
		</div>
	)
}

export default TradesTable