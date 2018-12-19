declare module ASModule {
  type i8 = number;
  type i16 = number;
  type i32 = number;
  type u8 = number;
  type u16 = number;
  type u32 = number;
  type f32 = number;
  type f64 = number;
  type bool = any;
  function add(a: i32, b: i32): i32;
  class Unpacker {
    constructor();
    unpack(buffer: u32): void;
    dispose(): void;
  }
  class Zone {
    constructor();
    dispose(): void;
  }
  class SimpleBuffer {
    constructor();
    append(data: u32): void;
    grow(): bool;
    dispose(): void;
  }
}
export default ASModule;
