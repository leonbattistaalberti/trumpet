import React, { Component } from 'react';
import axios from 'axios';
import Quote from './Quote';
import './QuoteList.css';
import TwitterFeed from './TwitterFeed';

const API_URL = ' https://api.whatdoestrumpthink.com/api/v1/quotes/random';

export default class QuoteList extends Component {
	static defaultProps = {
		numOfQuotes : 10
	};
	constructor (props) {
		super(props);
		this.state = { quoteText: [] };
	}

	async componentDidMount () {
		let quoteText = [];
		while (quoteText.length < this.props.numOfQuotes) {
			let response = await axios.get(API_URL);
			quoteText.push(response.data.message);
		}
		this.setState({ quoteText: quoteText });
		console.log(this.state);
	}
	render () {
		let trumpet = this.state.quoteText.map((quote) => <Quote quote={quote} />);
		return (
			<div className='QuoteList'>
				<div className='QuoteList-sideBar'>
					<h1 className='QuoteList-title'>
						<span>The Indomitable Genius of</span> Donald J. Trump
					</h1>
					<img
						src='https://www.seekpng.com/png/detail/24-249156_donaldtrump-donald-trump-svg.png'
						alt='Trump svg'
					/>
					<button className='QuoteList-moreGenius'> More Genius </button>
				</div>

				<div className='QuoteLists-quotes'>{trumpet}</div>
			</div>
		);
	}
}
