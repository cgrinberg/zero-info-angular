import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {HierarchyService} from "../../pages/services/hierarchy.service";
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {FetchHierarchy, FetchHierarchySuccess, FetchHierarchyFailure} from '../action/hierarchy.actions';


@Injectable()
export class HierarchyEffects {

  constructor(private actions$: Actions,
              private hierarchyService: HierarchyService) {
  }

  public fetchHierarchy$ = createEffect((): Observable<Action> =>
    this.actions$
      .pipe(
        ofType(FetchHierarchy),
        mergeMap(({reqId}) => {
          return this.hierarchyService.getHierarchyById(reqId)
            .pipe(
              map((resp) => FetchHierarchySuccess({members: HierarchyEffects.getAsMembers(resp)})),
              catchError((err) => of(FetchHierarchyFailure()))
            );
        })
      ));

  private static getAsMembers(membersArr) {
    if (Array.isArray(membersArr)) {
      return membersArr.map(({memberId, name}) => ({id: memberId, name}));
    }
    return [];
  }

}
