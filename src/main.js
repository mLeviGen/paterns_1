import { User, Admin, Moderator, SuperAdmin } from './classes.js';

const superAdmin = new SuperAdmin('Олександр', 'root@dev.ua', 'secure123');
const newAdmin = superAdmin.createAdmin('Дмитро', 'admin@dev.ua', 'pass456');
const user = new User('Іван', 'ivan@test.com', 'userpass');

const moderator = new Moderator('Олена', 'mod@dev.ua', 'modpass');
moderator.warnUser(user);
moderator.muteUser(user, 30);

console.log(superAdmin.getInfo());
console.log(newAdmin.getInfo());
