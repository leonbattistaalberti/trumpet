import React, { Component } from 'react';
import './Quote.css';

export default class Quote extends Component {
	static defaultProps = {
		confused   : 'em em-confused',
		blowMyMind : 'em em-exploding_head'
	};

	getEmoji () {
		if (this.props.votes >= 15) {
			return 'em em-exploding_head';
		}
		else if (this.props.votes < 0) {
			return 'em em-face_with_symbols_on_mouth';
		}
		else {
			return 'em em-confused';
		}
	}
	render () {
		return (
			<div className='Quote'>
				<div className='container'>
					<i
						className='fas fa-arrow-up'
						style={{ color: 'green' }}
						onClick={this.props.upVote}
					/>
					<span className='Quote-votes'>{this.props.votes}</span>
					<i
						className='fas fa-arrow-down'
						style={{ color: 'red' }}
						onClick={this.props.downVote}
					/>
				</div>
				<div className='Quote-text'>{this.props.quote}</div>
				{console.log(this.props.confused)}
				<i class={`${this.getEmoji()} emoji`} />
			</div>
		);
	}
}
