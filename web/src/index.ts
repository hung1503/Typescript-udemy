import { User } from './models/User';

const user = new User({ name: 'Other Name', age: 20 });

user.events.on('change', () => {
  console.log('change #1');
});

user.events.trigger('change');
