import React, { Component } from 'react';

export default class Friends extends Component {
	constructor(){
		super()

		this.state = {
			searchText: '',
			orderBy: 'name',
			order: 'ascending'
		}
	}

	handleChange( field, event ) {
		this.setState( { [ field ]: event.target.value } );
	}

  render() {
    return (
      <li className='friend'>

					<h3>{ this.props.name }</h3>

					<div className="location">
						Location: { this.props.currentLocation.city }, { this.props.currentLocation.state }, { this.props.currentLocation.country }
					</div>

					<div className="status">
						{ this.props.status }
					</div>

					<div className="num-friends">
						{ this.props.friendCount }
					</div>
			</li>
    )
  }
}