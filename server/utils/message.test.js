const expect = require('expect')

const {generateMessage, generateLocationMessage} = require('./message')

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'John'
    var text = 'This is awesome'
    var message = generateMessage(from, text)

    expect(typeof message.createdAt).toBe('number')
    expect(message.from).toBe(from)
    expect(message.text).toBe(text)
  })
})

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'John'
    var latitude = 38
    var longitude = -77
    var url = 'https://www.google.com/maps?q=38,-77'
    var message = generateLocationMessage(from, latitude, longitude)

    expect(typeof message.createdAt).toBe('number')
    expect(message.from).toBe(from)
    expect(message.url).toBe(url)
  })
})
