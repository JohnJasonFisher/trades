import React, {useState} from 'react'
import TradesTable from '../TradesTable/TradesTable'
import AggregatesTable from '../AggregatesTable/AggregatesTable'
import tradeJson from '../../trades.json'

function App() {

	const [fakeData] = useState(tradeJson.trades)

	return (
	<div className="App">
		<header className="App-header" style={{'textAlign': 'center'}}>
			<h1>Trades Project</h1>
		</header>
		<TradesTable trades={fakeData}/>
		<AggregatesTable trades={fakeData}/>
	</div>
	)
}

export default App