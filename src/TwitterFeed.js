import React, { Component } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import './TwitterFeed.css';

export default class TwitterFeed extends Component {
	render () {
		return (
			<div className='TwitterFeed'>
				<a
					class='twitter-timeline'
					href='https://twitter.com/realDonaldTrump?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'>
					National Park Tweets - Curated tweets by TwitterDev
				</a>{' '}
				<script
					async
					src='https://platform.twitter.com/widgets.js'
					charset='utf-8'
				/>
				<TwitterTimelineEmbed
					sourceType='profile'
					screenName='@realDonaldTrump'
					options={{ height: 400 }}
				/>
			</div>
		);
	}
}

//
