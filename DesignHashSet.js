// Design a HashSet without using any built-in hash table libraries.
//Problem Link: https://leetcode.com/explore/learn/card/hash-table/182/practical-applications/1139/
// Implement MyHashSet class:
// void add(key) Inserts the value key into the HashSet.
// bool contains(key) Returns whether the value key exists in the HashSet or not.
// void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.
 
// Example 1:

// Input
// ["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
// [[], [1], [2], [1], [3], [2], [2], [2], [2]]
// Output
// [null, null, null, true, false, null, true, null, false]

// Explanation
// MyHashSet myHashSet = new MyHashSet();
// myHashSet.add(1);      // set = [1]
// myHashSet.add(2);      // set = [1, 2]
// myHashSet.contains(1); // return True
// myHashSet.contains(3); // return False, (not found)
// myHashSet.add(2);      // set = [1, 2]
// myHashSet.contains(2); // return True
// myHashSet.remove(2);   // set = [1]
// myHashSet.contains(2); // return False, (already removed)

// Constraints:
// 0 <= key <= 106
// At most 104 calls will be made to add, remove, and contains.

---TypeScript---

class MyHashSet {
    data:Array<boolean>
    constructor() {
        this.data=new Array(10**6+1).fill(false)   
    }

    add(key: number): void {
        this.data[key]=true        
    }

    remove(key: number): void {
    this.data[key]=false     
    }

    contains(key: number): boolean {
    return this.data[key]     
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

---JavaScript---

var MyHashSet = function() {
    this.data=new Array(100001).fill(false)
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    this.data[key]=true
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    this.data[key]=false 
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    return this.data[key]
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

Complexity:
Operation	Time	Space
add	      O(1)	O(100000)
remove  	O(1)	O(100000)
contains	O(1)	O(100000)

Using Chaining Approach

---JavaScript---

var MyHashSet = function() {
    this.buckets=new Array(1000).fill(null).map(()=>[])
};

MyHashSet.prototype.hash = function(key) {
    return key%1000
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    const index=this.hash(key)
    const bucket=this.buckets[index]
    if(!bucket.includes(key))
    bucket.push(key)
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    const index=this.hash(key)
    const bucket=this.buckets[index]
    if(bucket.indexOf(key)!==-1)
        bucket.splice(bucket.indexOf(key),1)
    
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    const index=this.hash(key)
    const bucket=this.buckets[index]
    return bucket.includes(key)
    
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

Complexity
Operation	 Avg 	Worst  Space
add      	O(1)	O(n)   O(n)
remove  	O(1)	O(n)   O(n)
contains	O(1)	O(n)   O(n)
