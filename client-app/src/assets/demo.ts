export interface Duck {
  name: string;
  numLegs: number;
  makeSound: (sound: string) => void;
}

const duck1: Duck = {
  name: "huey",
  numLegs: 0,
  makeSound: function (sound: string): void {
    console.log(sound);
  },
};

const duck2: Duck = {
  name: "duey",
  numLegs: 0,
  makeSound: function (sound: string): void {
    console.log(sound);
  },
};

duck1.makeSound("quack");
duck2.makeSound("sound");

export const ducks = [duck1, duck2];
