import React, {useState} from 'react'
import TradesTable from '../TradesTable/TradesTable'
import AggregatesTable from '../AggregatesTable/AggregatesTable'

function App() {

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