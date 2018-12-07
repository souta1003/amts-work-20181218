const _exp3n = 'Fizz';
const _exp5n = 'Buzz';
const _ng = 'NG';

const _cases = [
  { arg: 1, expect: 1 },
  { arg: 2, expect: 2 },
  { arg: 3, expect: _exp3n },
  { arg: 4, expect: 4 },
  { arg: 5, expect: _exp5n },
  { arg: 6, expect: _exp3n },
  { arg: 7, expect: 7 },
  { arg: 8, expect: 8 },
  { arg: 9, expect: _exp3n },
  { arg: 10, expect: _exp5n },
  { arg: 11, expect: 11 },
  { arg: 12, expect: _exp3n },
  { arg: 13, expect: 13 },
  { arg: 14, expect: 14 },
  { arg: 15, expect: _exp3n + _exp5n },
  { arg: -1, expect: -1 },
  { arg: -2, expect: -2 },
  { arg: -3, expect: _exp3n },
  { arg: -4, expect: -4 },
  { arg: -5, expect: _exp5n },
  { arg: -6, expect: _exp3n },
  { arg: -7, expect: -7 },
  { arg: -8, expect: -8 },
  { arg: -9, expect: _exp3n },
  { arg: -10, expect: _exp5n },
  { arg: -11, expect: -11 },
  { arg: -12, expect: _exp3n },
  { arg: -13, expect: -13 },
  { arg: -14, expect: -14 },
  { arg: -15, expect: _exp3n + _exp5n },
  { arg: -16, expect: -16 },
  { arg: 0, expect: 0 },
  { arg: 1.5, expect: 1.5 },
  { arg: -1.5, expect: -1.5 },
  { arg: null, expect: _ng },
  { arg: undefined, expect: _ng },
  { arg: '', expect: _ng },
  { arg: 'hoge', expect: _ng },
];

function runAmdsTest() {
  if (typeof fizzbuzz === 'undefined') {
    console.log('fizzbuzz is not defined.');
    return -1;
  }
  let ngCnt = 0;
  for (let i = 0; i < _cases.length; i++) {
    const arg = _cases[i].arg;
    const exp = _cases[i].expect;
    const act = fizzbuzz(arg);
    if (act !== exp) {
      console.log('arg = ' + arg + ': expect "' + exp + '" vs actual "' + act + '"');
      ngCnt++;
    }
  }
  return ngCnt;
}

const failedCnt = runAmdsTest();
if (failedCnt === 0) {
  console.log('OK');
  document.getElementById('amts-title').style.color = 'rgb(0, 91, 172)';
} else if (failedCnt > 0) {
  console.log('failed: ' + failedCnt);
}
