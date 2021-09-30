import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {FetchMemberById, ResetActiveMember} from "../../ngrx/action/members.actions";
import {Store} from "@ngrx/store";
import {membersFeatureSelector, MembersState} from "../../ngrx/state/members.state";
import {ActivatedRoute, Router} from "@angular/router";
import {Member} from "../../common/models/member";
import {Location} from '@angular/common';


@Component({
  selector: 'zi-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit, OnDestroy {

  subscriptions: Subscription = new Subscription();
  activeMemberDetails: Member;
  showLoader: boolean;
  isAuthorized: boolean;

  constructor(private membersStore: Store<MembersState>, private location: Location, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.isAuthorized = true;
    this.activatedRoute.paramMap.subscribe(params => {
      this.membersStore.dispatch(FetchMemberById({memberId: Number(params.get('id'))}));
    });

    this.membersStore.select(membersFeatureSelector).subscribe(({activeMemberDetails, loading, isAuthorized}) => {
      this.activeMemberDetails = activeMemberDetails;
      this.showLoader = loading;
      this.isAuthorized = isAuthorized;
    });
  }

  backButtonClick() {
    this.location.back();
  }

  ngOnDestroy() {
    this.membersStore.dispatch(ResetActiveMember());
    this.subscriptions.unsubscribe();
  }

  resolveImageSrc() {
    if (this.activeMemberDetails?.imageUrl || this.activeMemberDetails?.imageUrl?.length > 0) {
      return this.activeMemberDetails.imageUrl;
    }
    return '../../../assets/images/person-placeholder-portrait.png';
  }


}
