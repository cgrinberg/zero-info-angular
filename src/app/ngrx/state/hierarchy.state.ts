import {createFeatureSelector} from '@ngrx/store';
import {Member} from "../../common/models/member";

export interface HierarchyState {
  loading: boolean;
  loaded: boolean;
  members: Member[];
}

export const initialHierarchyState: HierarchyState = {
  loading: false,
  loaded: false,
  members: []
};

export const hierarchyFeatureSelector = createFeatureSelector<HierarchyState>('hierarchy');




