const faker = require('faker');

class GeneratorData {

    public generateUserFirstName() {
        return faker.name.firstName();
    }

    public generateLocation() {
        return faker.address.county();
    }

    public generateUserLastName() {
        return faker.name.lastName();
    }

    public generateUrl() {
        return faker.internet.url();
    }

    public generateZipCode() {
        return faker.address.zipCode();
    }

    public generateUserEmail() {
        return 'test2-' + this.generateRandomHash() + '@yopmail.com';
    }

    public generateUserPassword(length = 8) {
        let password = faker.internet.password(length, false, '[a-zA-Z0-9]');
        if (password.match(/^[0-9]+$/) !== null) {
            password = this.generateUserPassword(length);
        }
        return password;
    }

    public generateName() {
        return faker.company.companyName(0);
    }

    public generateDescription(wordCount = 4) {
        return faker.lorem.sentence(wordCount);
    }

    public generateRandomHash() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    }

    public generateNumber(): number {
        return faker.random.number({ min: 10 });
    }

}

export const generatorData = new GeneratorData();
