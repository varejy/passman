/// <reference path="../typings/index.d.ts" />

import * as angular from 'angular';
import Layout       from './containers/layout';
import PasswordList from './containers/passwordList';
import PasswordEdit from './containers/passwordEdit';
import './global.css';

angular.module('app', [
    Layout,
    PasswordList,
    PasswordEdit
]);