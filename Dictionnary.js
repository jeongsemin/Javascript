function Dictionary(items = {}) {
  this.items = items;
}

Dictionary.prototype.getBuffer = function () {
  return { ...this.items };
};

Dictionary.prototype.clear = function () {
  this.items = {};
};

Dictionary.prototype.size = function () {
  return Object.keys(this.items).length;
};

// let dict = new Dictionary({ age: 19, name: "alice" });
// console.log(dict);

// console.log(dict.getBuffer());
// console.log(dict.size());
// dict.clear();
// console.log(dict);

Dictionary.prototype.has = function (key) {
  //   return value in this.items;
  return this.items.hasOwnProperty(key);
};

Dictionary.prototype.set = function (key, value) {
  this.items[key] = value;
};

Dictionary.prototype.get = function (key) {
  return this.has(key) ? this.items[key] : undefined;
};

Dictionary.prototype.remove = function (key) {
  if (this.has(key)) {
    delete this.items[key];
    return true;
  }
  return false;
};

// let dict = new Dictionary();
// dict.set("age", 19);
// dict.set("name", "alice");
// dict.set("height", 172);
// console.log(dict);

// dict.remove("age");
// console.log(dict);

// console.log(dict.has("age"));
// console.log(dict.has("name"));
// console.log(dict.get("age"));
// console.log(dict.get("name"));

Dictionary.prototype.keys = function () {
  return Object.keys(this.items);
};

Dictionary.prototype.values = function () {
  // let values = [];
  // for(let k in this.items){
  //     if(this.has(k)){
  //         values.push(this.items[k]);
  //     }
  // }
  // return values;
  return Object.values(this.items);
};

Dictionary.prototype.each = function (fn) {
  for (let k in this.items) {
    fn(k, this.items[k]);
  }
};

function printDictionary(key, value) {
  console.log(`key: ${key}`);
  console.log(`value: ${value}`);
}

let dict = new Dictionary();
dict.set("age", 19);
dict.set("name", "alice");
dict.set("height", 172);
console.log(dict);

console.log(dict.keys());
console.log(dict.values());
dict.each(printDictionary);
