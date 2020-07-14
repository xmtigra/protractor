import { generatorData } from './generator.data';

export class User implements InterfaceUser {
    public firstName = generatorData.generateUserFirstName();
    public lastName = generatorData.generateUserLastName();
    public email = generatorData.generateUserEmail();
    public password = generatorData.generateUserPassword();
    public position = 'Apple Creative';
    public companyName = generatorData.generateName();
    public zipCode = generatorData.generateZipCode();
    public location = 'New York, NY, United States';

    public withFirstName(value: string) {
        this.firstName = value;
        return this;
    }

    public withLastName(value: string) {
        this.lastName = value;
        return this;
    }

    public withEmail(value: string) {
        this.email = value;
        return this;
    }

    public withPassword(value: string) {
        this.password = value;
        return this;
    }

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
