export class User {
    #password; 

    constructor(name, email, password) {
        this.id = Math.random().toString(36).substring(2, 11);
        this.name = name;
        this.email = email;
        this.#password = password;
        this.role = 'User';
    }

    getInfo() {
        return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Role: ${this.role}`;
    }

    checkPassword(input) {
        return this.#password === input;
    }

    getRole() {
        return this.role;
    }
}


export class Admin extends User {
    constructor(name, email, password) {
        super(name, email, password); 
        this.role = 'Admin';
    }

    deleteUser(user) {
        console.log(`[Admin]: Користувач ${user.name} видалений.`);
    }

    resetPassword(user, newPassword) {
        console.log(`[Admin]: Пароль для ${user.name} скинуто.`);
    }
}


export class Moderator extends User {
    constructor(name, email, password) {
        super(name, email, password);
        this.role = 'Moderator';
    }

    warnUser(user) {
        console.log(`[Moderator]: Попередження для ${user.name}.`);
    }

    muteUser(user, duration) {
        console.log(`[Moderator]: ${user.name} заблокований на ${duration} хв.`);
    }
}


export class SuperAdmin extends Admin {
    constructor(name, email, password) {
        super(name, email, password);
        this.role = 'SuperAdmin';
    }

    createAdmin(name, email, password) {
        console.log(`[SuperAdmin]: Створення нового адміна: ${name}.`);
        return new Admin(name, email, password);
    }
}