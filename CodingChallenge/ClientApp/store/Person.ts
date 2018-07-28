import { addTask } from "domain-task";
import { RouterAction, push, routerActions } from "react-router-redux";
import { AppThunkAction } from "ClientApp/store";
import { Action, Reducer } from "redux";

export interface Person {
	id?: number;
	firstName: string;
	lastName: string;
	phoneNumber: string;
}

export interface PersonState {
	isLoading: boolean;
	person: Person;
	validationErrorMessage?: string;
}

interface RequestPersonAction {
	type: 'REQUEST_PERSON';
	personId: number;
}

interface SavePersonAction {
	type: 'SAVE_PERSON';
	person: Person;
}

interface ReceivePersonAction {
	type: 'RECEIVE_PERSON';
	person: Person;
}

interface ReceiveGenericResultAction {
	type: 'RECEIVE_GENERIC_RESULT';
}

interface CancelManageAction {
	type: 'CANCEL_MANAGE';
}

interface ValidationErrorAction {
	type: 'VALIDATION_ERROR';
	errorMessage: string;
}

type KnownAction = RequestPersonAction | SavePersonAction | ReceivePersonAction | ReceiveGenericResultAction | CancelManageAction | ValidationErrorAction;
type ImportedAction = RouterAction;

export const actionCreators = {
	requestPerson: (personId: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
		if (personId) {
			let fetchTask = fetch(`api/Person/Details?personId=${personId}`, {
					method: 'get'
				})
				.then(response => response.json() as Promise<Person>)
				.then(data => {
					dispatch({ type: 'RECEIVE_PERSON', person: data });
				});

			addTask(fetchTask);
			dispatch({ type: 'REQUEST_PERSON', personId: personId });
		}
	},
	savePersonChanges: (person: Person): AppThunkAction<any> => (dispatch, getState) => {
		var apiMethodUrl = `api/Person/Add`;
		var apiMethodType = `post`;
		if (person.id && person.id != -1) {
			apiMethodUrl = `api/Person/Update`;
			apiMethodType = `put`;
		}
		
		let fetchTask = fetch(apiMethodUrl, {
				method: apiMethodType,
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
				},
				body: JSON.stringify(person),
			})
			.then(response => response.json() as Promise<number>)
			.then(data => {
				if (data) {
					dispatch({ type: 'VALIDATION_ERROR', errorMessage: data });
				}
				else {
					dispatch({ type: 'RECEIVE_GENERIC_RESULT' });
					dispatch(push(`/fetchpeople`));
				}
			});

		addTask(fetchTask);
		dispatch({ type: 'SAVE_PERSON', person: person });
	},
	cancelManagePerson: (): AppThunkAction<any> => (dispatch, getState) => {
		dispatch({ type: 'CANCEL_MANAGE' });
		dispatch(push(`/fetchpeople`));
	},
};

const emptyPerson: Person = { firstName: '', lastName: '', phoneNumber: '' }
const unloadedState: PersonState = { isLoading: false, person: emptyPerson };

export const reducer: Reducer<PersonState> = (state: PersonState, incomingAction: Action) => {
	const action = incomingAction as KnownAction;
	switch (action.type) {
		case 'REQUEST_PERSON':
			return {
				person: state.person,
				isLoading: true
			};
		case 'RECEIVE_PERSON':
			return {
				person: action.person,
				isLoading: false
			};
		case 'SAVE_PERSON':
			return {
				person: action.person,
				isLoading: true
			};
		case 'RECEIVE_GENERIC_RESULT':
			return {
				person: emptyPerson,
				isLoading: false,
				validationErrorMessage: undefined
			};
		case 'CANCEL_MANAGE':
			return {
				person: emptyPerson,
				isLoading: false,
				validationErrorMessage: undefined
			};
		case 'VALIDATION_ERROR':
			return {
				person: state.person,
				isLoading: false,
				validationErrorMessage: action.errorMessage
			}
		default:
			const exhaustiveCheck: never = action;
	}

	return state || unloadedState;
};