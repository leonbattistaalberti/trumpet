import React, { Component } from 'react';
import './Quote.css';

export default class Quote extends Component {
	static defaultProps = {
		confused   : 'em em-confused',
		blowMyMind : 'em em-exploding_head'
	};

	getColor () {
		if (this.props.votes === 0) {
			return '#b8bcc2';
		}
		else if (this.props.votes > 0 && this.props.votes < 5) {
			return '#e0d20d';
		}
		else if (this.props.votes >= 5) {
			return '#1fcc7e';
		}
		else if (this.props.votes < 0) {
			return '#e31414';
		}
	}
	getEmoji () {
		const { votes } = this.props;
		if (votes >= 15) {
			return 'em em-exploding_head';
		}
		else if (votes < 0) {
			return 'em em-face_with_symbols_on_mouth';
		}
		else if (votes >= 5) {
			return 'em em-smiley';
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
					<span
						className='Quote-votes'
						style={{ border: `2px solid ${this.getColor()}` }}>
						{this.props.votes}
					</span>
					<i
						className='fas fa-arrow-down'
						style={{ color: 'red' }}
						onClick={this.props.downVote}
					/>
				</div>
				<div className='Quote-text'>{this.props.quote}</div>
				<i class={`${this.getEmoji()} emoji`} />
			</div>
		);
	}
}
