import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Member} from "../../../common/models/member";
import {Store} from "@ngrx/store";
import {hierarchyFeatureSelector, HierarchyState} from "../../../ngrx/state/hierarchy.state";
import {Router} from "@angular/router";

@Component({
  selector: 'zi-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, OnDestroy {

  @Input() hierarchyList: Array<Member> = [];
  @Input() showLoader: boolean;
  subscriptions: Subscription = new Subscription();

  constructor(private hierarchyStateStore: Store<HierarchyState>, private router: Router) {

  }

  ngOnInit(): void {
    this.showLoader = true;
    this.hierarchyStateStore.select(hierarchyFeatureSelector).subscribe(({members, loading}) => {
      this.hierarchyList = members;
      this.showLoader = loading;
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  itemClicked(item): void {
    this.router.navigate([`./member/${item.id}`]);

  }

}
