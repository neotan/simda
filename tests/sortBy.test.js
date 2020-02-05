import { identity, prop, sortBy } from '../src'
import eq from './shared/eq'

const albums = [
  { title: 'Art of the Fugue', artist: 'Glenn Gould', genre: 'Baroque' },
  { title: 'A Farewell to Kings', artist: 'Rush', genre: 'Rock' },
  { title: 'Timeout', artist: 'Dave Brubeck Quartet', genre: 'Jazz' },
  { title: 'Fly By Night', artist: 'Rush', genre: 'Rock' },
  {
    title: 'Goldberg Variations',
    artist: 'Daniel Barenboim',
    genre: 'Baroque',
  },
  {
    title: 'New World Symphony',
    artist: 'Leonard Bernstein',
    genre: 'Romantic',
  },
  { title: 'Romance with the Unseen', artist: 'Don Byron', genre: 'Jazz' },
  { title: 'Somewhere In Time', artist: 'Iron Maiden', genre: 'Metal' },
  { title: 'In Times of Desparation', artist: 'Danny Holt', genre: 'Modern' },
  { title: 'Evita', artist: 'Various', genre: 'Broadway' },
  { title: 'Five Leaves Left', artist: 'Nick Drake', genre: 'Folk' },
  {
    title: 'The Magic Flute',
    artist: 'John Eliot Gardiner',
    genre: 'Classical',
  },
]

describe('sortBy', function() {
  it('sorts by a simple property of the objects', function() {
    const sortedAlbums = sortBy(prop('title'), albums)
    eq(sortedAlbums.length, albums.length)
    eq(sortedAlbums[0].title, 'A Farewell to Kings')
    eq(sortedAlbums[11].title, 'Timeout')
  })

  it('preserves object identity', function() {
    const a = { value: 'a' }
    const b = { value: 'b' }
    const result = sortBy(prop('value'), [b, a])
    eq(result[0], a)
    eq(result[1], b)
  })

  it('sorts array-like object', function() {
    const args = (function() {
      return arguments
    })('c', 'a', 'b')
    const result = sortBy(identity, args)
    eq(result[0], 'a')
    eq(result[1], 'b')
    eq(result[2], 'c')
  })
})
