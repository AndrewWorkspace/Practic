const a = {
    b: {
        c: 25,
        m: {
            k: 'asd',
            p: 10
        }
    },
    t: 'm',
    y: {
        v: 5
    }
};

const b = a;
b.b.m.now = 2020;
console.log(b);

const {y} = b
console.log(y)
