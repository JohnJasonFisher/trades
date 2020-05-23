import React, {useState, useEffect } from 'react'
import TradesTable from '../TradesTable/TradesTable'
import AggregatesTable from '../AggregatesTable/AggregatesTable'
import axios from 'axios'
import testTradesData from '../../test-trades-data.json'

function App() {

	const [tradeData, setTradeData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			let response
			try {
				response = await axios(
					{
						baseURL: `https://${process.env.REACT_APP_TRADES_URL}`,
						headers: {[process.env.REACT_APP_API_KEY]: process.env.REACT_APP_API_KEY_VALUE}
					}
				)
			} catch (error) {
				console.error(error)
			}
			setTradeData(response?.data || testTradesData.trades)
		}
		fetchData()
	}, [])

	function showErrorNotification() {
		if (process.env.NODE_ENV === 'development' && !process.env.REACT_APP_TRADES_URL) {
			return <h2 style={{color: 'red'}}>Env is has not been configured, using test data!</h2>
		}
	} 

	return (
	<div className="App">
		<header className="App-header" style={{'textAlign': 'center'}}>
			<h1>Trades Project</h1>
			{showErrorNotification()}
		</header>
		<TradesTable trades={tradeData}/>
		<AggregatesTable trades={tradeData}/>
	</div>
	)
}

export default App