import * as angular        from 'angular';
import { FakeDB, IFakeDB } from '../../shared/services/fakedb';
import { 
    TableHead,
    TableBody,
    TableRow 
} from './components/table';

const MODULE_NAME = 'passwordList.container';
const styles      = require('./passwordList.css');

angular.module(MODULE_NAME, [
    'ngRoute', 
    TableHead, 
    TableBody, 
    TableRow,
    FakeDB
    ])
    .component('passwordList', {
        template  : require('./passwordList.html'),
        controller: PasswordList
    })
    .config(function ($routeProvider: ng.route.IRouteProvider) {
        $routeProvider
            .when('/', {
                template: '<password-list></password-list>'
            })
            .otherwise({ redirectTo: '/' })
    });

function PasswordList(db: IFakeDB) {
    const vm = this;
    vm.$onInit = () => {
        vm.styles = styles;
        vm.search = {label: ''};
        
        vm.init = () => vm.passwords = db.read();
        vm.init()
    };
    vm.remove = (id: number) => {
        db.removeItem(id);
        vm.init()
    };
}
PasswordList.$inject = ['db']

export default MODULE_NAME;