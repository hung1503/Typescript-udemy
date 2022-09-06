const profile = {
  name: 'Hung',
  age: 22,
  coords: {
    lat: 2,
    lng: 3,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
