// const { test, expect } = require('@jest/globals')
const {returnTwo, greeting, add,multiply,divide,subtract} = require('./functions')



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

describe("Math functions", ()=> {
    test('should multiply the two numbers', ()=> {
        expect(multiply(2,2)).toEqual(4)
    })
    test('should divide the two numbers', ()=> {
        expect(divide(2,2)).toEqual(1)
    })
    test('should subtract the two numbers', ()=> {
        expect(subtract(2,2)).toEqual(0)
    })
})