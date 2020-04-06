import React, { Component } from 'react';
import './Quote.css';

export default class Quote extends Component {
	render () {
		return (
			<div>
				<i class='fas fa-thumbs-up' />
				<div className='Quote'> {this.props.quote}</div>
			</div>
		);
	}
}
