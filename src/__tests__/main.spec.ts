import {describe, it, expect, vitest} from 'vitest'
import {hello} from '../main.js'

describe('TS configured successfully', async () => {
  it('should print "Hello, world!"', () => {
    const spy = vitest.spyOn(console, 'log')
    hello()
    expect(spy).toHaveBeenCalledWith('Hello, world!')
  })
})
