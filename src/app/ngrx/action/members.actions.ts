import {createAction, props} from '@ngrx/store';
import {Member} from '../../common/models/member';

// Fetch Members
export const FetchMembers = createAction(
  '[Members] FETCH_MEMBERS'
);
export const FetchMembersSuccess = createAction(
  '[Members] FETCH_MEMBERS_SUCCESS',
  props<{ total: number, members: Array<Member> }>()
);
export const FetchMembersFailure = createAction('[Members] FETCH_MEMBERS_FAILURE');

export const FetchMemberById = createAction(
  'Member',
  props<{ memberId: number }>()
);
export const FetchMemberByIdSuccess = createAction(
  '[Members] FETCH_MEMBER_BY_ID_SUCCESS',
  props<{ activeMemberDetails: Member }>()
);

export const FetchMemberByIdFailure = createAction(
  '[Members] FETCH_MEMBER_BY_ID_FAILURE'
);

export const ResetActiveMember = createAction(
  `[Members] RESET_MEMBERS_SELECTION`
);

export const SelectMember = createAction(
  '[Members] SELECT_MEMBER',
  props<{ id: string }>()
);
