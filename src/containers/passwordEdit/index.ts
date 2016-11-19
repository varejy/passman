import * as angular        from 'angular';
import { FakeDB, IFakeDB } from '../../shared/services/fakedb';
import * as _              from 'lodash';

const MODULE_NAME = 'passwordEdit.container';
const styles      = require('./passwordEdit.css');
const template    = '<password-edit></password-edit>';

angular.module(MODULE_NAME, [
    'ngRoute',
    FakeDB
    ])
    .component('passwordEdit', {
        template  : require('./passwordEdit.html'),
        controller: PasswordEdit
    })
    .config(function ($routeProvider: ng.route.IRouteProvider) {
        $routeProvider
            .when('/edit', {
                template: template
            })
            .when('/edit/:passwordID', {
                template: template
            })
    });

    interface IRouteParams {
        passwordID: string;
    }

    function PasswordEdit(
        $routeParams: IRouteParams,
        $location: ng.ILocationService,
        db: IFakeDB
        ) {
        const vm = this;
        vm.$onInit = () => {
            vm.styles = styles;
            vm.item = {
                label      : '',
                password   : '',
                description: ''
            };

            const back = () => $location.path('#/');
            const saveNewItem = () => { 
                // TODO add cheking for label & pass
                vm.item.id = _.random(20, 1000);
                db.saveItem(vm.item);
                back()
            };
            const updateExistItem = () => {
                db.updateItem(vm.item);
                back()
            };

            if ($routeParams.passwordID !== undefined) {
                const item = db.getItem(parseInt($routeParams.passwordID));
                vm.item = JSON.parse(JSON.stringify(item));
                vm.save = updateExistItem;
            } else {
                vm.save = saveNewItem
            }
        };
    }
    PasswordEdit.$inject = ['$routeParams', '$location', 'db']

export default MODULE_NAME;

