/// <reference path="../../../../typings/index.d.ts" />
import 'angular';
import 'angular-mocks/ngMock';
import { FakeDB, IFakeDB } from './index';

describe('FakeDB', () => {
  beforeEach(angular.mock.module(FakeDB));

  let db: IFakeDB;
  beforeEach(inject((_db_: IFakeDB)=> {
    db = _db_;
  }));

   it('db service exist', () => {
     expect(db).toBeDefined()
   });

   it('db write method is function', () => {
     expect(typeof db.write).toBe('function')
   });

   it('db read method is function', () => {
     expect(typeof db.read).toBe('function')
   });
});