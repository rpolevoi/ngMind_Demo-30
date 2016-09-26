import { Member } from './member';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class MemberService {
  

  selected: Member;

  constructor(private http: Http) { } 
  
  getMembers(): Promise<Member[]> {
    return this.http.get('app/members')
               .toPromise()
               .then(response => response.json().data)
               .catch(err => console.log(err));
  }
    
  getMember(id: number) {
    return this.http.get('app/members/' + id)
               .toPromise()
               .then(response => response.json().data)
               .catch(err => console.log(err) );
  }


}
