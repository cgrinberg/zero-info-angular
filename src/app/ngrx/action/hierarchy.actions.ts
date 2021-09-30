import {createAction, props} from '@ngrx/store';
import {Member} from "../../common/models/member";

// Fetch Members
export const FetchHierarchy = createAction(
  '[Hierarchy] FETCH_Hierarchy',
  props<{ reqId: number }>()
);
export const FetchHierarchySuccess = createAction(
  '[Hierarchy] FETCH_MEMBERS_SUCCESS',
  props<{ members: Member[] }>()
);
export const FetchHierarchyFailure = createAction('[Hierarchy] FETCH_MEMBERS_FAILURE');
