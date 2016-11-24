import 'angular';
import { FakeDB } from './FakeDB';

const MODULE_NAME = 'fakedb.service';

angular.module(MODULE_NAME, [])
    .factory('db', () => {
        return new FakeDB('passwords')
    });

export { IFakeDB } from './FakeDB';
export { MODULE_NAME as FakeDB };
