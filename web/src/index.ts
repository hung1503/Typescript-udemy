import { User } from './models/User';

const user = new User({ name: 'Other Name', age: 20 });

user.attributes.get('name');
user.sync.save()