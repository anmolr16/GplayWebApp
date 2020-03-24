import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', age: 20 },
      { id: 12, name: 'Narco', age: 25 },
      { id: 13, name: 'Bombasto', age: 28 },
      { id: 14, name: 'Celeritas', age: 24 },
      { id: 15, name: 'Magneta', age: 30 },
      { id: 16, name: 'RubberMan', age: 35 },
      { id: 17, name: 'Dynama', age: 89 },
      { id: 18, name: 'Dr IQ', age: 30 },
      { id: 19, name: 'Magma', age: 70 },
      { id: 20, name: 'Tornado', age: 29 }
    ];
    return {heroes};
  }
}
