// 고정된 길이의 데이터로 매핑하는 함수
// 평균 O(1) 시간 복잡도로 특정 값을 신속하게 찾는 자료구조
// 압축성, 효울성, 저항성을 특징으로 가지고 있다.

// const HASH_SIZE = 37;
const HASH_SIZE = 1013;

function Element(key, value) {
  this.key = key;
  this.value = value;
}

function HashTable() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

HashTable.prototype.hashCode = function (key) {
  let hash = 5381;
  for (let i = 0; i < key.length; i++) {
    hash = hash * 33 + key.charCodeAt(i);
    // hash += key.charCodeAt(i);
  }
  return hash % HASH_SIZE;
};

// let ht = new HashTable();
// console.log(ht);

// console.log(ht.hashCode("Ana"));
// console.log(ht.hashCode("Sue"));
// console.log(ht.hashCode("Paul"));

HashTable.prototype.put = function (key, value) {
  let index = this.hashCode(key);
  console.log(`key: ${key} -> index: ${index}`);

  if (this.table[index] !== undefined) {
    return false;
  }

  this.table[index] = new Element(key, value);
  this.length++;

  return true;
};

HashTable.prototype.get = function (key) {
  return this.table[this.hashCode(key)];
};

HashTable.prototype.remove = function (key) {
  let element = this.table[this.hashCode(key)];

  if (element !== undefined) {
    delete this.table[this.hashCode(key)];
    this.length--;
  }

  return element;
};

// let ht = new HashTable();

// ht.put("Ana", 172);
// ht.put("Sue", 163);
// ht.put("Paul", 190);
// console.log(ht);

// console.log(ht.remove("Paul"));
// console.log(ht.remove("Paul"));
// console.log(ht);

HashTable.prototype.clear = function () {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
};

HashTable.prototype.size = function () {
  return this.length;
};

HashTable.prototype.getBuffer = function () {
  let array = [];
  for (let i = 0; i < this.length; i++) {
    if (this.table[i]) {
      array.push(this.table[i]);
    }
  }

  return array;
};

HashTable.prototype.print = function () {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      console.log(i + " -> " + this.table[i].key + ": " + this.table[i].value);
    }
  }
};

// let ht = new HashTable();
// ht.put("Ana", 172);
// ht.put("Sue", 163);
// ht.put("Paul", 190);

// ht.print();
// console.log(ht.getBuffer());

// console.log(ht.size());
// ht.clear();
// console.log(ht);

// 해쉬 충돌 경우와 문제 해결
// HASH_SIZE 를 1013으로 변경 및 hash = hash * 33 + key.charCodeAt(i);
let ht = new HashTable();
ht.put("Ana", 172);
ht.put("Donnie", 183);
ht.put("Sue", 163);
ht.put("Jamie", 168);
ht.put("Paul", 190);

console.log("");
console.log(ht.size());
ht.print();
