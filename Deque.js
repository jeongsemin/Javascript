// Dobule-Ended Queue의 약자, 삽입과 삭제가 양쪽 끝에서 모두 발생

function Deque(array = []) {
  this.array = array;
}

Deque.prototype.getBuffer = function () {
  return this.array.slice();
};

Deque.prototype.isEmpty = function () {
  return this.array.length == 0;
};

// let dq = new Deque([1, 2, 3]);

// console.log(dq);

// let data = dq.getBuffer();
// console.log(data === dq.array);
// console.log(data);

// console.log(dq.isEmpty());
// console.log(Object.getOwnPropertyDescriptors(Deque.prototype));

// pushFront, popFront : 앞쪽 데이터 추가, 삭제
Deque.prototype.pushFront = function (element) {
  return this.array.unshift(element);
};

Deque.prototype.popFront = function () {
  return this.array.shift();
};

// pushBack, popBack : 뒤쪽 데이터 추가, 삭제
Deque.prototype.pushBack = function (element) {
  return this.array.push(element);
};
Deque.prototype.popBack = function () {
  return this.array.pop();
};

// let dq = new Deque([1, 2, 3]);
// console.log(dq);

// dq.pushFront(0);
// dq.pushBack(4);
// console.log(dq);

// console.log(dq.popFront());
// console.log(dq.popBack());
// console.log(dq);

Deque.prototype.front = function () {
  return this.array.length == 0 ? undefined : this.array[0];
};

Deque.prototype.back = function () {
  return this.array.length == 0 ? undefined : this.array[this.array.length - 1];
};

Deque.prototype.size = function () {
  return this.array.length;
};

Deque.prototype.clear = function () {
  this.array = [];
};

let dq = new Deque([1, 2, 3]);
console.log(dq);

console.log(dq.front());
console.log(dq.back());
console.log(dq.size());

dq.clear();
console.log(dq);
