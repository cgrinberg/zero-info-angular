import {Component, OnDestroy, OnInit} from '@angular/core';
import {ListItem} from '../../common/models/list-item';
import {Observable, Subscription} from 'rxjs';
import { MembersState} from "../../ngrx/state/members.state";
import {FetchMembers} from "../../ngrx/action/members.actions";
import {Store} from "@ngrx/store";
import {HierarchyState} from "../../ngrx/state/hierarchy.state";
import {FetchHierarchy} from "../../ngrx/action/hierarchy.actions";


@Component({
  selector: 'zi-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit, OnDestroy {

  listItems$: Observable<ListItem[]>;
  subscriptions: Subscription = new Subscription();
  selectedMember: ListItem;
  isLoading: boolean;


  constructor(private membersStore: Store<MembersState>, private hierarchyStore: Store<HierarchyState>) {
  }

  ngOnInit() {
    this.membersStore.dispatch(FetchMembers());
  }

  memberSelected(member) {
    this.hierarchyStore.dispatch(FetchHierarchy({reqId: member.id}));
    this.selectedMember = member;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }


}
