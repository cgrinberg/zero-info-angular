import {Member} from '../../common/models/member';
import {createFeatureSelector, createSelector} from '@ngrx/store';


export interface MembersState {
  loading: boolean;
  loaded: boolean;
  total: number;
  members: Member[];
  activeMemberDetails: Member;
  selectedMember: Member;
  isAuthorized: boolean;

}

export const initialMembersState: MembersState = {
  loading: false,
  loaded: false,
  total: 0,
  members: [],
  activeMemberDetails: null,
  selectedMember: null,
  isAuthorized: false
};

export const membersFeatureSelector = createFeatureSelector<MembersState>('members');

export const getMembersSelector = createSelector(membersFeatureSelector, state => state.members);



