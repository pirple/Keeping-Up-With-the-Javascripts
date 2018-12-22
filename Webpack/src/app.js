import Person from './person';
import whatever from './hello';
import api from './fakeApi';

const billyBob = new Person('Billy', 24);

console.log(billyBob);

document.body.appendChild(whatever('wds is awesome :D'));

api.greet(billyBob.name);
api.sayBye();

