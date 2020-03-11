import React, {useState, useEffect } from 'react'
import TradesTable from '../TradesTable/TradesTable'
import AggregatesTable from '../AggregatesTable/AggregatesTable'
import axios from 'axios'

function App() {

	const [tradeData, setTradeData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(
				{
					baseURL: `https://${process.env.REACT_APP_TRADES_URL}`,
					headers: {[process.env.REACT_APP_API_KEY]: process.env.REACT_APP_API_KEY_VALUE}
				}
			)
			setTradeData(result.data)
		}
		fetchData()
	}, [])

	return (
	<div className="App">
		<header className="App-header" style={{'textAlign': 'center'}}>
			<h1>Trades Project</h1>
		</header>
		<TradesTable trades={tradeData}/>
		<AggregatesTable trades={tradeData}/>
	</div>
	)
}

export default App