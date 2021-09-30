import {createReducer, on} from '@ngrx/store';
import {initialHierarchyState} from '../state/hierarchy.state';
import {
  FetchHierarchyFailure, FetchHierarchySuccess, FetchHierarchy
} from '../action/hierarchy.actions';

export const HierarchyReducer = createReducer(
  initialHierarchyState,

  on(FetchHierarchy, state => ({...state, loading: true, loaded: false})),

  on(FetchHierarchySuccess, (state, {members}) => ({...state, members, loaded: true, loading: false})),

  on(FetchHierarchyFailure, state => ({...state, loading: false, loaded: true}))
);
