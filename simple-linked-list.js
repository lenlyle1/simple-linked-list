//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Element {
  constructor(value, next = null) {
    this._value = value;
    this._next = next;
  }

  set value(value) {
    this._value = value;
  }

  set next(value) {
    this._next = value;
  }

  get value() {
    return this._value
  }

  get next() {
    return this._next;
  } 
}
 
export class List {
  constructor(values = null) {    
    this._head = null;
    this._length = 0;

    if(Array.isArray(values)) {
      this.addFromArray(values);
    }
  }

  addFromArray(values){
    values.forEach(function (value) {
      const newNode = new Element(value);
      this.add(newNode);
    }.bind(this));
  }

  add(item) {
    item._next = this._head;
    this._head = item;
    this._length++;
  }

  set head(element) {
    this._head = element;
    this._length = this.length;
  }

  get length() {
    return this._length;
  }

  get head() {
    return this._head
  }

  toArray(list) {
    const arr = new Array();

    while(this._head !== null){ 
      arr.push(this._head._value);
      this._head = this._head._next;
    }
    
    return arr;
  }

  reverse() {
    const reverse = new List;
    
    while(this._head !== null){ 
      reverse.add(new Element(this._head._value));
      this._head = this._head._next;
    }
    
    return reverse;
  }
}

