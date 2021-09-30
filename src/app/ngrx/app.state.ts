import {MembersState} from './state/members.state';
import {ActionReducerMap} from '@ngrx/store';
import {MembersReducer} from './reducer/members.reducer';
import {AccountState} from './state/account.state';
import {AccountReducer} from './reducer/account.reducer';
import {HierarchyState} from "./state/hierarchy.state";
import {HierarchyReducer} from "./reducer/hierarchy.reducer";


export class AppState {
  members: MembersState;
  account: AccountState;
  hierarchy: HierarchyState;
}

export const appStateReducer: ActionReducerMap<AppState> = {
  members: MembersReducer,
  account: AccountReducer,
  hierarchy: HierarchyReducer
};
