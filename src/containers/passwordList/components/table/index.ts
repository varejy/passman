import 'angular';

const MODULE_NAMES = {
    head: 'head.component',
    body: 'body.component',
    row : 'row.component'
};
const styles = require('./table.css');

angular.module(MODULE_NAMES.head, [])
    .component('tableHead', {
        bindings: {
            headStyle: '<'
        },
        template  : require('./head.html'),
        controller: Table
    });

angular.module(MODULE_NAMES.body, [])
    .component('tableBody', {
        bindings: {
            bodyStyle: '<'
        },
        template  : require('./body.html'),
        transclude: true,
        controller: Table
    });

angular.module(MODULE_NAMES.row, [])
    .component('tableRow', {
        bindings: {
            rowStyle: '<',
            data    : '<',
            editLink: '@',
            remove  : '&'
        },
        template  : require('./row.html'),
        controller: Table
    });

function Table() {
    const vm = this;
    vm.$onInit = () => {
        vm.styles = styles;
    }
}

export const TableHead = MODULE_NAMES.head;
export const TableBody = MODULE_NAMES.body;
export const TableRow  = MODULE_NAMES.row;