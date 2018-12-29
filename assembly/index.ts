import 'allocator/arena'

import { Packer } from './Packer'
import { Unpacker } from './Unpacker'
import { Zone } from './Zone'
import { SBuffer } from './SBuffer'

function add(a: i32, b: i32): i32 {
  trace('add', 2, a, b)
  return a + b
}

export { Packer, Unpacker, add, Zone, SBuffer }
