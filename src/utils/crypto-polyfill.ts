import crypto from 'crypto';

if (typeof window !== 'undefined' && !window.crypto) {
  (window as any).crypto = {
    getRandomValues: (array: any) => {
      if (array instanceof Uint8Array) {
        crypto.randomFillSync(array);
      } else if (array instanceof Uint32Array) {
        const buffer = Buffer.from(array.buffer);
        crypto.randomFillSync(buffer);
        array.set(new Uint32Array(buffer.buffer));
      }
      return array;
    }
  };
} 