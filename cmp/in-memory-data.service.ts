import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            { id: 11, name: 'Arnaud' },
            { id: 12, name: 'Yves' },
            { id: 13, name: 'oOlivia' },
            { id: 14, name: 'Jean-GG' },
            { id: 15, name: 'Eric' },
            { id: 16, name: 'Tarte au citron' },
            { id: 17, name: 'Caramel' },
            { id: 18, name: 'Alexandre' },
            { id: 19, name: 'Benoit' },
            { id: 20, name: 'Madia' }
        ];
        return { heroes };
    }
}