// const { test, expect } = require('@jest/globals')
const {returnTwo, greeting, add} = require('./functions')



test('should return the number two', () => {
    expect(returnTwo()).toBe(2)
})

test('should return greeting', ()=> {
    // expect(greeting('James')).toEqual(`Hello, James`)
    expect(greeting('Jill')).toEqual(`Hello, Jill`)
})

test('should add the two numbers', ()=> {
    expect(add(1,2)).toEqual(3)
    expect(add(5,9)).toEqual(14)
})