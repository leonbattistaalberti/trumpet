import React, { Component } from 'react';
import axios from 'axios';

const API_URL = ' https://api.whatdoestrumpthink.com/api/v1/quotes/random';

export default class QuoteList extends Component {
	static defaultProps = {
		numOfQuotes: 10
	};
	constructor(props) {
		super(props);
		this.state = { quoteText: [] };
	}

	async componentDidMount() {
		let quoteText = [];
		while (quoteText.length < this.props.numOfQuotes) {
			let response = await axios.get(API_URL);
			quoteText.push(response.data.message);
		}
		this.setState({ quoteText: quoteText });
		console.log(this.state);
	}
	render() {
		let trumpet = this.state.quoteText.map((q) => <div>{q}</div>);
		return <div>{trumpet}</div>;
	}
}
