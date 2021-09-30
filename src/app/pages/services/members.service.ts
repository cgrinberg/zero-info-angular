import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class MembersService {

  private BASE_DOMAIN = environment.MEMBERS_API_BASE_DOMAIN;
  private MEMBERS_RESOURCE_PATH = this.BASE_DOMAIN + '/members';

  constructor(private http: HttpClient) {
  }


  getMembers() {
    return this.http.get(this.MEMBERS_RESOURCE_PATH);
  }

  getMemberById(memberId) {
    return this.http.get(this.MEMBERS_RESOURCE_PATH + `/${memberId}`);
  }

}
