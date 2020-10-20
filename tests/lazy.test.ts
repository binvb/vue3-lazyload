import { ValueFormatterObject } from '../src/interface'
import Lazy from '../src/lazy'

describe('Vue3-lazyload Test', function () {
  let lazy: Lazy
  beforeEach(() => {
    lazy = new Lazy()
  })

  it('test _valueFormatter for string', function () {
    const result = lazy._valueFormatter('test')
    expect(result).toEqual({
      src: 'test',
      loading: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      error: ''
    })
  })

  it('test _valueFormatter for object', function () {
    const options: ValueFormatterObject = {
      src: 'test src',
      loading: 'test loading',
      error: 'test error'
    }
    const result = lazy._valueFormatter(options)
    expect(result).toEqual(options)
  })

})