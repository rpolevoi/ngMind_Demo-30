import { Member } from './member';

import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class MemberData implements InMemoryDbService {
  createDb() {
    let members = [
        new Member(1, 'Sam', 'San Francisco', 'USA'),
        new Member(2, 'Francoise', 'Paris', 'France'),
        new Member(3, 'Pedro', 'Barcelona', 'Spain'),
        new Member(4, 'Sophia', 'Moscow', 'Russia'),
        new Member(5, 'Hartmut', 'Heidelberg', 'Germany')
    ];
    return {members};
  }
}
