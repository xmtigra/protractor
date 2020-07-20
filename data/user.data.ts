import { generatorData } from './generator.data';

export class User implements InterfaceUser {
    public firstName: string = generatorData.generateUserFirstName();
    public lastName: string = generatorData.generateUserLastName();
    public email: string = generatorData.generateUserEmail();
    public password: string = generatorData.generateUserPassword();
    public position: string = 'Apple Creative';
    public companyName: string = generatorData.generateName();
    public zipCode: string = generatorData.generateZipCode();
    public location: string = 'New York, NY, United States';

    public fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

export interface InterfaceUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    location: string;
    position: string;
    companyName: string;
    zipCode: string;
    fullName: () => string;
}
