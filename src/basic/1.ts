type UserInfo = {
  age: number;
  name: string;
  toggle: boolean;
  empty: null;
  callback(a: number): number;
};

const user: UserInfo = {
  age: 50,
  name: "Max",
  toggle: true,
  empty: null,
  callback(a: number) {
    return 100 + a;
  },
};
