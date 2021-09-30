import {createReducer, on} from '@ngrx/store';
import {initialMembersState} from '../state/members.state';
import {
  FetchMemberById, FetchMemberByIdFailure, FetchMemberByIdSuccess,
  FetchMembers,
  FetchMembersFailure,
  FetchMembersSuccess, ResetActiveMember, SelectMember

} from '../action/members.actions';

export const MembersReducer = createReducer(
  initialMembersState,

  on(FetchMembers, state => ({...state, loading: true, loaded: false})),
  on(FetchMembersSuccess, (state, {total, members}) => ({...state, total, members, loaded: true, loading: false})),
  on(FetchMembersFailure, state => ({...state, loading: false, loaded: true})),

  on(FetchMemberById, state => ({...state, loading: true, loaded: false})),
  on(FetchMemberByIdSuccess, (state, {activeMemberDetails}) => ({...state, activeMemberDetails, loading: false, loaded: true, isAuthorized: true})),
  on(FetchMemberByIdFailure, state => ({...state, loading: false, loaded: true, isAuthorized: false})),
  on(ResetActiveMember, state => ({...state, activeMemberDetails: null})),

  on(SelectMember, (state, {id}) => ({
    ...state, selectedMember: state.members.find(({id: memberId}) => {
      return memberId === id;
    })
  }))
  )
;

//


