import 'angular';
import { FakeDB, IFakeDB } from '../../shared/services/fakedb';

const MODULE_NAME = 'layout.container';
const styles      = require('./layout.css');

angular.module(MODULE_NAME, [FakeDB])
    .component('layout', {
        template  : require('./layout.html'),
        controller: Layout
    });

function Layout(db: IFakeDB) {
    const vm = this;
    vm.$onInit = () => {
        vm.styles = styles;
        db.write(passwords)
    }
}
Layout.$inject = ['db']

export default MODULE_NAME;

const passwords = [
            {
                id: 1,
                label: 'Facebook',
                password: '23ss3423',
                description: `From my secret page.`
            },
            {
                id: 2,
                label: 'Google pass',
                password: 'dfsdf345345',
                description: ``
            },
            {
                id: 3,
                label: 'VK PASSWORD',
                password: '23343423',
                description: `The best social network.`
            },
            {
                id: 4,
                label: 'Twitter',
                password: '234vbn3423',
                description: `Just twitter pass`
            },
            {
                id: 5,
                label: 'First bank account',
                password: '23ss3423',
                description: 'Secret'
            },
            {
                id: 6,
                label: 'Second bank account',
                password: 'dfsdf345345',
                description: ``
            },
            {
                id: 7,
                label: 'Work pass',
                password: '23343423',
                description: `Remote access`
            },
            {
                id: 8,
                label: 'Remote server pass',
                password: '234vbn3423',
                description: `localhost:4000`
            },
             {
                id: 9,
                label: 'github password',
                password: 'dfsdf345345',
                description: `My projects`
            },
            {
                id: 10,
                label: 'soundcloud pass',
                password: '23343423',
                description: `Music`
            },
            {
                id: 11,
                label: 'Secret pass',
                password: '234vbn3423',
                description: ``
            }
];