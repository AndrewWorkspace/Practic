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

const b = {
	...a,
	b: {
		...a.b,
		now: 2020
	}
}


const {y: {v: getV}} = b
console.log(getV)
