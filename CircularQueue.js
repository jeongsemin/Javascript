// 원형 형태를 가지며 FIFO 기반의 선형 자료 구조

function CircularQueue(array = [], size = 5) {
  this.array = array;
  this.size = array.length > size ? array.length : size;
  this.length = array.length;
  this.head = 0;
  this.tail = array.length;
}

CircularQueue.prototype.getBuffer = function () {
  return this.array.slice();
};

CircularQueue.prototype.isEmpty = function () {
  return this.length == 0;
};
CircularQueue.prototype.isFull = function () {
  return this.length == this.size;
};

// let cq = new CircularQueue([1, 2, 3]);
// console.log(cq);

// console.log(cq.isEmpty());
// console.log(cq.isFull());
// console.log(Object.getOwnPropertyDescriptors(CircularQueue.prototype));

CircularQueue.prototype.enqueue = function (element) {
  if (this.isFull()) return false;

  this.array[this.tail % this.size] = element;
  this.tail++;
  this.length++;

  return true;
};

CircularQueue.prototype.dequeue = function () {
  if (this.isEmpty()) return undefined;

  let element = this.array[this.head % this.size];
  delete this.array[this.head % this.size];
  this.head++;
  this.length--;

  return element;
};

// let cq = new CircularQueue([1, 2, 3, 4]);
// console.log(cq);

// cq.enqueue(5);
// cq.enqueue(6);
// console.log(cq);

// console.log(cq.dequeue());
// console.log(cq.dequeue());
// console.log(cq);

// cq.enqueue(6);
// console.log(cq);

CircularQueue.prototype.front = function () {
  return this.length == 0 ? undefined : this.array[this.head];
};

CircularQueue.prototype.dataSize = function () {
  return this.length;
};

CircularQueue.prototype.clear = function (size = DEFAULT_SIZE) {
  this.array = [];
  this.size = size;
  this.length = 0;
  this.head = 0;
  this.tail = 0;
};

let cq = new CircularQueue([1, 2, 3, 4]);
console.log(cq);

cq.enqueue(5);
cq.enqueue(6);
console.log(cq.dequeue());
console.log(cq.dequeue());
console.log(cq);

cq.enqueue(6);
console.log(cq);
console.log(cq.front());
console.log(cq.dataSize());

cq.clear(10);
console.log(cq);
