let showMessage: (message: string) => void;

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(message: string): never {
  throw new Error(message);
}

showMessage = (message: string) => {
  console.log(message);
};

calc(2, 7);

customError("Error");
