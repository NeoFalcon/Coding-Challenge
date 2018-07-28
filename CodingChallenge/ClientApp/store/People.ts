import { addTask } from "domain-task";
import { RouterAction, push } from "react-router-redux";
import { AppThunkAction } from "ClientApp/store";
import { Action, Reducer } from "redux";
import { Person } from 'ClientApp/store/Person';

export interface PeopleState {
    isLoading: boolean;
	people: Person[];
}

interface RequestPeopleAction {
    type: 'REQUEST_PEOPLE';
}

interface EditPersonAction {
	type: RouterAction;
}

interface DeletePersonAction {
	type: 'DELETE_PERSON';
	personId?: number;
}

interface ReceivePeopleAction {
    type: 'RECEIVE_PEOPLE';
    people: Person[];
}

interface ReceiveGenericResultAction {
	type: 'RECEIVE_GENERIC_RESULT';
}

type KnownAction = RequestPeopleAction | DeletePersonAction | ReceivePeopleAction | ReceiveGenericResultAction;
type ImportedAction = RouterAction;

export const actionCreators = {
    requestPeople: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
		let fetchTask = fetch('api/Person/Index', {
				method: 'get'
			})
			.then(response => response.json() as Promise<Person[]>)
			.then(data => {
				dispatch({ type: 'RECEIVE_PEOPLE', people: data });
			});

        addTask(fetchTask);
        dispatch({ type: 'REQUEST_PEOPLE' });
	},
	addPerson: (): AppThunkAction<ImportedAction> => (dispatch, getState) => {
		dispatch(push(`/person/add`));
	},
	editPerson: (person: Person): AppThunkAction<ImportedAction> => (dispatch, getState) => {
		dispatch(push(`/person/edit/${ person.id }`));
	},
	deletePerson: (personId?: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
		let fetchTask = fetch(`api/Person/Delete?personId=${ personId }`, {
				method: 'delete'
			})
			.then(data => {
				dispatch({ type: 'RECEIVE_GENERIC_RESULT' });
			});
		
		addTask(fetchTask);
		dispatch({ type: 'DELETE_PERSON', personId: personId });
	},
};

const unloadedState: PeopleState = { people: [], isLoading: false };

export const reducer: Reducer<PeopleState> = (state: PeopleState, incomingAction: Action) => {
    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_PEOPLE':
            return {
                people: state.people,
				isLoading: true
			};
		case 'DELETE_PERSON':
			const newState = Object.assign({}, state);
			const indexOfPersonToDelete = state.people.findIndex(person => {
				return person.id == action.personId
			})

			newState.isLoading = true;
			newState.people.splice(indexOfPersonToDelete, 1);
			return newState;
		case 'RECEIVE_PEOPLE':
            return {
                people: action.people,
				isLoading: false
			};
		case 'RECEIVE_GENERIC_RESULT':
			return {
				people: state.people,
				isLoading: false
			};
        default:
            const exhaustiveCheck: never = action;
    }

    return state || unloadedState;
};
