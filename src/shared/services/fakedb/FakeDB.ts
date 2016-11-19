import * as _ from 'lodash';

interface IPasswords {
    id: number;
    password: string;
    label: string;
    description: string;
}

export interface IFakeDB {
    write(v: Array<IPasswords>): void;
    read(): Array<IPasswords>;
    removeItem(id: number): void;
    updateItem(v: IPasswords): void;
    getItem(id: number): IPasswords;
    saveItem(v: IPasswords): void;
}

export class FakeDB implements IFakeDB {
    constructor(private key: string) {}
    write(v: Array<IPasswords>): void {
        try {
            sessionStorage.setItem(this.key, JSON.stringify(v))
        } catch (error) {
            console.log(error)
        }
    }
    read(): Array<IPasswords> {
        try {
            return JSON.parse(sessionStorage.getItem(this.key))
        } catch (error) {
            console.log(error);
            return []
        }
    }
    removeItem(id: number): void {
        const passwords = this.read();
        const idx = _.findIndex(passwords, (item) => item.id === id);
        passwords.splice(idx, 1);
        this.write(passwords)
    }
    updateItem(v: IPasswords): void {
        const passwords = this.read();
        const idx = _.findIndex(passwords, (item) => item.id === v.id);
        passwords[idx] = v;
        this.write(passwords)
    }
    getItem(id: number): IPasswords {
        return _.find(this.read(), (item) => item.id === id)
    }
    saveItem(v: IPasswords): void {
        const passwords = this.read();
        passwords.unshift(v);
        this.write(passwords)
    }
}

