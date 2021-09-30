import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ListItem} from '../../../common/models/list-item';
import {Subscription} from 'rxjs';
import {Store} from "@ngrx/store";
import {membersFeatureSelector, MembersState} from "../../../ngrx/state/members.state";
import {SelectMember} from "../../../ngrx/action/members.actions";


@Component({
  selector: 'zi-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  @Input() items: Array<ListItem> = [];
  @Input() selectedItem: ListItem;
  @Input() showLoader: boolean;
  @Input() headerText: string;
  @Output() itemSelected = new EventEmitter<ListItem>();
  subscriptions: Subscription = new Subscription();

  constructor(private membersStore: Store<MembersState>) {

  }

  ngOnInit(): void {
    this.membersStore.select(membersFeatureSelector).subscribe(({members, loading}) => {
      this.items = members.map(({id, name: label, selected}) => {
        return {
          id, label, selected
        };
      });
      this.showLoader = loading;
    });

    this.membersStore.select(membersFeatureSelector).subscribe(({selectedMember}) => {
      this.selectedItem = selectedMember ? {id: selectedMember.id, label: selectedMember.name} : {} as ListItem;
    });

  }

  selectItem(item: ListItem) {
    this.selectedItem = item;
    this.membersStore.dispatch(SelectMember({id: item.id}));
    this.itemSelected.emit(item);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
