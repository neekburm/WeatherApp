import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
	renderWeather(cityData) {
		function toFahrenheit(kelvinTemp) {
			return kelvinTemp * (9/5) - 459.67;
		}
		const name = cityData.city.name;
		const temperatures = cityData.list.map(weather => toFahrenheit(weather.main.temp));
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		console.log(temperatures.length);
		console.log(temperatures.length);
		console.log(temperatures.length);
				
		return (
			<tr key={name}>
				<td>{name}</td>
				<td><Chart data={temperatures} color="orange" /></td>
				<td><Chart data={pressures} color="green" /></td>
				<td><Chart data={humidities} color="black" /></td>
				
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({ weather }) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);