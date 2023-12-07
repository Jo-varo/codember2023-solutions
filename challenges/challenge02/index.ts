const toBeSolved =
  '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&';

// "#" Incrementa el valor numérico en 1.
// "@" Decrementa el valor numérico en 1.
// "*" Multiplica el valor numérico por sí mismo.
// "&" Imprime el valor numérico actual.

type OpsType = { [index: string]: (i: number) => number };

export function compiler(code: string) {
  let init = 0;
  let res = '';

  const ops: OpsType = {
    '#': (i: number) => i + 1,
    '@': (i: number) => i - 1,
    '*': (i: number) => i * i,
    '&': (i: number) => {
      res = res + i;
      return i;
    },
  };

  code.split('').map((e) => {
    if (ops[e]) {
      init = ops[e](init);
    }
  });

  return res;
}

console.log(compiler(toBeSolved));
