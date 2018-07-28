import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as PeopleState from '../store/People';
import { Person } from 'ClientApp/store/Person';

type PersonProps =
	PeopleState.PeopleState
	& typeof PeopleState.actionCreators;

class FetchPeople extends React.Component<PersonProps, {}> {
	componentWillMount() {
		this.props.requestPeople();
	}

	//componentWillReceiveProps(nextProps: PersonProps) {
	//	this.props.requestPeople();
	//}

	private confirmDelete(person: Person) {
		if (confirm(`Are you sure you want to delete ${ person.firstName } ${ person.lastName }?`)) {
			this.props.deletePerson(person.id);
		}
	}

	public render() {
		const contents = this.props.isLoading
			? <p><em>Loading...</em></p>  
			: this.renderPeopleTable()

		return <div>
			<h1>People</h1>
			<p>This component is part of the Coding Challenge by Upstack.</p>
			{contents}
		</div>;
	}

	private renderPeopleTable() {
		return <div>
		<button className="btn" onClick={this.props.addPerson}>Add</button>
			<table className="table">
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Phone Number</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{this.props.people.map(person =>
						<tr key={person.id}>
							<td>{person.firstName}</td>
							<td>{person.lastName}</td>
							<td>{person.phoneNumber}</td>
							<td>
								<button className="btn" onClick={(e) => this.props.editPerson(person)}>Edit</button>
								<button className="btn" onClick={(e) => this.confirmDelete(person)}>Delete</button>
							</td>  
						</tr>
					)}
				</tbody>
			</table>
		</div>;
	}
}

export default connect(
	(state: ApplicationState) => state.people,
	PeopleState.actionCreators
)(FetchPeople) as typeof FetchPeople;
