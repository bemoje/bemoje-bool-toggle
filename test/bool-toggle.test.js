import boolToggle from '../src/bool-toggle'

describe('boolToggle', () => {
	test('works', () => {
		let b = true
		b = boolToggle(b)
		expect(b).toBe(false)
		b = boolToggle(b)
		expect(b).toBe(true)
	})
})
