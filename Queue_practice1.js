function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function (element) {
  this.array.push(element);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

function answer(n) {
  let result = [];

  let queue = new Queue();
  for (let i = 1; i <= n; i++) {
    queue.enqueue(i);
  }

  while (queue.array.length != 0) {
    result.push(queue.dequeue());
    if (queue.array.length != 0) {
      queue.enqueue(queue.dequeue());
    }
  }
  return result;
}

let input = [4, 7, 10];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}
