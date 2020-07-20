import faker from 'faker';

class GeneratorData {

    public generateUserFirstName(): string {
        return faker.name.firstName();
    }

    public generateLocation(): string {
        return faker.address.county();
    }

    public generateUserLastName(): string {
        return faker.name.lastName();
    }

    public generateUrl(): string {
        return faker.internet.url();
    }

    public generateZipCode(): string {
        return faker.address.zipCode();
    }

    public generateUserEmail(): string {
        return 'test2-' + this.generateRandomHash() + '@yopmail.com';
    }

    public generateUserPassword(length = 8): string {
        let password = faker.internet.password(length, false, '[a-zA-Z0-9]');
        if (password.match(/^[0-9]+$/) !== null) {
            password = this.generateUserPassword(length);
        }
        return password;
    }

    public generateName(): string {
        return faker.company.companyName(0);
    }

    public generateRandomHash(): string {
        return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    }

    public generateNumber(): number {
        return faker.random.number({ min: 10 });
    }

}

export const generatorData = new GeneratorData();
