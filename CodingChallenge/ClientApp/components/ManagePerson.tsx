import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as PersonState from '../store/Person';
import { RouteComponentProps } from 'react-router';
import { FormEvent, ChangeEvent } from 'react';

type PersonProps =
	PersonState.PersonState
	& typeof PersonState.actionCreators
	& RouteComponentProps<{ personId: string }>;

class ManagePerson extends React.Component<PersonProps, {}> {
	componentWillMount() {
		let personId = parseInt(this.props.match.params.personId);
		if (personId) {
			this.props.requestPerson(personId);
		}
	}

	private onFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
		this.props.person.firstName = e.target.value;
	}

	private onLastNameChange(e: ChangeEvent<HTMLInputElement>) {
		this.props.person.lastName = e.target.value;
	}

	private onPhoneNumberChange(e: ChangeEvent<HTMLInputElement>) {
		this.props.person.phoneNumber = e.target.value;
	}

	public render() {
		const contents = this.props.isLoading
			? <p><em>Loading...</em></p>
			: this.renderPersonForm();

		return <div>
			<h1>Person</h1>
			<p>This component is part of the Coding Challenge by Upstack.</p>
			{contents}
		</div>;
	}

	private renderPersonForm() {
		return <div>
			<span style={{ color: "red" }}>{this.props.validationErrorMessage}</span>
			<form onSubmit={(e) => this.props.savePersonChanges(this.props.person)}>
				<div className="form-group row">
					<input type="hidden" name="id" value={this.props.person.id} />
				</div>
				<div className="form-group row">
					<label className=" control-label col-md-12" htmlFor="firstName">First Name</label>
					<div className="col-md-4">
						<input className="form-control" type="text" name="firstName" defaultValue={this.props.person.firstName} onChange={(e) => this.onFirstNameChange(e)} required maxLength={100} />
					</div>
				</div>
				<div className="form-group row">
					<label className="control-label col-md-12" htmlFor="lastName">Last Name</label>
					<div className="col-md-4">
						<input className="form-control" type="text" name="lastName" defaultValue={this.props.person.lastName} onChange={(e) => this.onLastNameChange(e)} maxLength={100} />
					</div>
				</div>
				<div className="form-group row">
					<label className="control-label col-md-12" htmlFor="phoneNumber">Phone Number</label>
					<div className="col-md-4">
						<input className="form-control" type="text" name="phoneNumber" defaultValue={this.props.person.phoneNumber} onChange={(e) => this.onPhoneNumberChange(e)} required maxLength={20} pattern="^[\+]?([0-9]+ ?)+$" />
					</div>
				</div>
				<div className="form-group">
					<button type="submit" className="btn btn-default">Save</button>
					<button className="btn" onClick={(e) => this.props.cancelManagePerson()}>Cancel</button>
				</div>
			</form>
		</div>
	}
}

export default connect(
	(state: ApplicationState) => state.person,
	PersonState.actionCreators
)(ManagePerson) as typeof ManagePerson;
