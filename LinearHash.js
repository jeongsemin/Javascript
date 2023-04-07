// Hash충돌이 발생했을 때 그 다음 주소를 확인하고 비어있다면 그자리에 대신 저장하는 해시테이블 기반 자료구조

const HASH_SIZE = 5;

function Element(key, value) {
  this.key = key;
  this.value = value;
}

function LinearHashTable() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

LinearHashTable.prototype.hashCode = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % HASH_SIZE;
};

LinearHashTable.prototype.clear = function () {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
};

LinearHashTable.prototype.size = function () {
  return this.length;
};

LinearHashTable.prototype.getBuffer = function () {
  let array = [];
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      array.push(this.table[i]);
    }
  }

  return array;
};

LinearHashTable.prototype.print = function () {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      console.log(i + " -> " + this.table[i].key + ": " + this.table[i].value);
    }
  }
};

// let lht = new LinearHashTable();
// console.log(lht);

LinearHashTable.prototype.put = function (key, value) {
  let index = this.hashCode(key);
  let stratIndex = index;
  console.log(`key: ${key} -> index: ${index}`);

  do {
    if (this.table[index] === undefined) {
      this.table[index] = new Element(key, value);

      this.length++;

      return true;
    }
    index = (index + 1) % HASH_SIZE;
  } while (index !== stratIndex);

  return false;
};

// let lht = new LinearHashTable();

// lht.put("Ana", 172);
// lht.put("John", 179);
// lht.put("Donnie", 183);
// lht.put("Mindy", 190);
// console.log(lht.put("Paul", 168));
// console.log(lht.put("Sue", 163));
// console.log("");

// lht.print();
// console.log(lht.getBuffer());
// console.log(lht);

// lht.clear();
// console.log(lht);

LinearHashTable.prototype.get = function (key) {
  let index = this.hashCode(key);
  let startIndex = index;

  do {
    if (this.table[index] !== undefined && this.table[index].key === key) {
      return this.table[index].value;
    }

    index = (index + 1) % HASH_SIZE;
  } while (index !== startIndex);

  return undefined;
};

// let cht = new LinearHashTable();

// cht.put("Ana", 172);
// cht.put("John", 179);
// cht.put("Donnie", 183);
// cht.put("Mindy", 190);
// cht.put("Paul", 168);

// console.log("");
// console.log(cht.get("Ana"));
// console.log(cht.get("Paul"));
// console.log(cht.get("Kim"));

LinearHashTable.prototype.remove = function (key) {
  let index = this.hashCode(key);
  let startIndex = index;

  do {
    if (this.table[index] !== undefined && this.table[index].key === key) {
      let element = this.table[index];
      delete this.table[index];
      this.length--;

      return element;
    }

    index = (index + 1) % HASH_SIZE;
  } while (index !== startIndex);

  return undefined;
};

let lht = new LinearHashTable();

lht.put("Ana", 172);
lht.put("John", 179);
lht.put("Donnie", 183);
lht.put("Mindy", 190);
lht.put("Paul", 168);
console.log("");

console.log(lht.remove("Ana"));
console.log(lht.get("Paul"));
console.log(lht.remove("Paul"));
console.log(lht.get("Paul"));
console.log(lht.remove("Paul"));
console.log(lht.size());
console.log("");

lht.print();
console.log(lht);
