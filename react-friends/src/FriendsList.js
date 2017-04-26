import React, { Component } from 'react';
import Friend from './Friend'
import friends from './friends'

export default class FriendsLists extends Component {
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
      <div>
				<form className="form-inline searchForm" role="form">
					<div className="form-group">

						<input 
							value={this.state.searchText} 
							onChange={ this.handleChange.bind( this, "searchText" )}
							className="form-control" 
							placeholder="Search For Friends" />

			            <select 
			            	value={this.state.orderBy} 
			            	onChange={ this.handleChange.bind( this, "orderBy" )}
			            	className="input-medium">
			                <option value='name'>Name</option>
			                <option value='friend_count'>#Friends</option>
			            </select>

			            <select 
			            	value={this.state.order} 
			            	onChange={ this.handleChange.bind( this, "order" )}
			            	className="input-medium">
			                <option value="descending">Descending</option>
			                <option value="ascending">Ascending</option>
			            </select>

					</div>
				</form>

				<ul>
					{friends.map(friend => {
						return <Friend
						currentLocation={ friend.current_location || {} }
						friendCount={ friend.friend_count }
						key={ friend.$$hashKey }
						name={ friend.name }
						pictureUrl={ friend.pic_square }
						status={ friend.status ? friend.status.message : "" } />
					})}
				</ul>
			</div>
    )
  }
}