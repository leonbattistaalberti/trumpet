import React, { Component } from 'react';
import axios from 'axios';
import Quote from './Quote';
import './QuoteList.css';
import TwitterFeed from './TwitterFeed';
import { v4 as uuidv4 } from 'uuid';

const API_URL = 'http://tronalddump.io/random/quote';

export default class QuoteList extends Component {
	static defaultProps = {
		numOfQuotes : 10
	};
	constructor (props) {
		super(props);
		this.state = { quoteText: [] };
	}

	// call API
	async componentDidMount () {
		let quoteText = [];
		while (quoteText.length < this.props.numOfQuotes) {
			let response = await axios.get(API_URL);
			quoteText.push({ id: uuidv4(), quote: response.data.value, votes: 0 });
		}
		// Add 10 random quotes to state
		this.setState({ quoteText: quoteText });
		//console.log(this.state);
	}

	handleVote (id, delta) {
		this.setState((prevState) => ({
			quoteText : prevState.quoteText.map(
				(q) => (q.id === id ? { ...q, votes: q.votes + delta } : q)
			)
		}));
	}
	render () {
		// Create 5 Quotes components
		return (
			<div className='QuoteList'>
				<div className='QuoteList-sideBar'>
					<h3 className='QuoteList-title'>
						<span>The Indomitable Genius of</span> Donald J. Trump
					</h3>
					<img
						id='dancingTrump'
						src='https://i.pinimg.com/originals/5a/c5/50/5ac550d16dc31f593fd3b316eaf47d42.gif'
						alt='Trump svg'
					/>
					<button className='QuoteList-moreGenius'> More Genius </button>
				</div>
				<div className='QuoteList-background'>
					<div>
						{this.state.quoteText.map((quote) => (
							<Quote
								key={quote.id}
								quote={quote.quote}
								votes={quote.votes}
								id={quote.id}
								upVote={() => this.handleVote(quote.id, 1)}
								downVote={() => this.handleVote(quote.id, -1)}
							/>
						))}
					</div>
				</div>
				{/* <TwitterFeed /> */}
			</div>
		);
	}
}
