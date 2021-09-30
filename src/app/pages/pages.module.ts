import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './components/list/list.component';
import {MembersComponent} from './members/members.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {PagesComponent} from './pages.component';
import {ZiCommonModule} from '../common/common.module';
import {EffectsModule} from '@ngrx/effects';
import {MembersEffects} from '../ngrx/effect/members.effects';
import {MembersService} from './services/members.service';
import {ContentComponent} from './components/content/content.component';
import {HierarchyService} from "./services/hierarchy.service";
import {HierarchyEffects} from "../ngrx/effect/hierarchy.effects";
import {MemberComponent} from "./member/member.component";


@NgModule({
  imports: [
    CommonModule,
    ZiCommonModule,
    EffectsModule.forRoot([MembersEffects, HierarchyEffects]),
  ],
  declarations: [
    ListComponent,
    MembersComponent,
    MemberComponent,
    NavBarComponent,
    PagesComponent,
    ContentComponent
  ],
  providers: [
    MembersService,
    HierarchyService
  ]
})
export class PagesModule {
}
