console.trace('[console.trace]');
console.debug('[console.debug]');
console.log('[console.log]');
console.info('[console.info]');
console.warn('[console.warn]');
console.error('[console.error]');

document.getElementById('main').innerHTML = [
  console.trace,
  console.debug,
  console.log,
  console.info,
  console.warn,
  console.error,
];
