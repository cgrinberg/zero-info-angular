import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class HierarchyService {

  private BASE_DOMAIN = environment.MEMBERS_API_BASE_DOMAIN;
  private HIERARCHY_RESOURCE_PATH = this.BASE_DOMAIN + '/hierarchy';

  constructor(private http: HttpClient) {
  }

  getHierarchyById(id) {
    return this.http.get(this.HIERARCHY_RESOURCE_PATH + `/${id}`);
  }

}
