// 우선순위 큐는 FIFO기반의 선형 자료구조

// 정렬 방식은 배열 기반, 연결리스트 기반, 힙 기반 등의 정렬 방식이 존재한다.

// element() : 데어터와 우선순위를 저장하기 위한 생성자 함수
function Element(data, priority) {
  this.data = data;
  this.priority = priority;
}
// PriorityQueue() : Element 관리를 위한 생성자 함수
function PriorityQueue() {
  this.array = [];
}
// getBuffer() : 객체 내 데이터 셋 반환
PriorityQueue.prototype.getBuffer = function () {
  return this.array.map((element) => element.data);
};
// isEmpty() : 객체 내 데이터 존재 여부 파악
PriorityQueue.prototype.isEmpty = function () {
  return this.array.length == 0;
};

// console.log(Object.getOwnPropertyDescriptors(Element.prototype));
// console.log(Object.getOwnPropertyDescriptors(PriorityQueue.prototype));

PriorityQueue.prototype.enqueue = function (data, priority) {
  let element = new Element(data, priority);
  let added = false;

  for (let i = 0; i < this.array.length; i++) {
    if (element.priority < this.array[i].priority) {
      this.array.slice(i, 0, element);
      added = true;
      break;
    }
  }
  if (!added) {
    this.array.push(element);
  }
  return this.array.length;
};

PriorityQueue.prototype.dequeue = function () {
  return this.array.shift();
};

// let pq = new PriorityQueue();

// pq.enqueue("Alice", 1);
// pq.enqueue("Bob", 1);
// console.log(pq);

// pq.enqueue("Tom", 1);
// pq.enqueue("John", 1);
// console.log(pq);

// console.log(pq.dequeue());
// console.log(pq.dequeue());
// console.log(pq);

PriorityQueue.prototype.front = function () {
  return this.array.length == 0 ? undefined : this.array[0].data;
};

PriorityQueue.prototype.size = function () {
  return this.array.length;
};

PriorityQueue.prototype.clear = function () {
  this.array = [];
};

let pq = new PriorityQueue();

pq.enqueue("Alice", 1);
pq.enqueue("Bob", 1);
pq.enqueue("Tom", 1);
pq.enqueue("John", 1);

console.log(pq.getBuffer());

console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq);

console.log(pq.front());
console.log(pq.size());
