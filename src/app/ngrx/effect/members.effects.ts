import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {MembersService} from '../../pages/services/members.service';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {
  FetchMemberById,
  FetchMemberByIdFailure,
  FetchMemberByIdSuccess,
  FetchMembers,
  FetchMembersFailure,
  FetchMembersSuccess
} from '../action/members.actions';

import * as _ from 'lodash';
import {Member} from "../../common/models/member";

@Injectable()
export class MembersEffects {

  constructor(private actions$: Actions,
              private membersService: MembersService) {
  }

  public fetchMembers$ = createEffect((): Observable<Action> =>
    this.actions$
      .pipe(
        ofType(FetchMembers),
        mergeMap(() => {
          return this.membersService.getMembers()
            .pipe(
              map((resp) => FetchMembersSuccess({total: _.get(resp, 'total'), members: _.get(resp, 'members')})),
              catchError((err) => of(FetchMembersFailure()))
            );
        })
      ));

  public fetchMemberById = createEffect((): Observable<Action> =>
    this.actions$
      .pipe(
        ofType(FetchMemberById),
        mergeMap(({memberId}) => {
          return this.membersService.getMemberById(memberId)
            .pipe(
              map((resp: Member) => FetchMemberByIdSuccess({activeMemberDetails: resp})),
              catchError((err) => of(FetchMemberByIdFailure()))
            );
        })
      ));
}
