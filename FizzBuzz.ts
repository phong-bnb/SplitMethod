export class FizzBuzz {
    message: string;

    constructor(n: number) {
        let Fizz = n % 3 == 0;
        let Buzz = n % 5 == 0;
        if (Fizz && Buzz) {
            this.message = 'FizzBuzz';
        } else if (Buzz) {
            this.message = 'Fizz';
        } else if(Fizz) {
            this.message = 'Buzz';
        } else {
            this.message = n + ''
        }
    }
}
//tổ hoợp phím CTRL+ALT+V