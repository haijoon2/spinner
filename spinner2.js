process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinners = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
const delay = 100;

for (let i = 0; i < spinners.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinners[i]}   `);
  }, delay + i * 200);
}

setTimeout(() => {
  process.stdout.write('\n');
}, delay + spinners.length * 200);