class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    // to generate hash code
    hash(key) {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i);
        }

        return hashValue % this.size;
    }

    // insert ket-value pair into the hash table
    insert(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push({key, value});
    }

    // get value
    get(key) {
        const index = this.hash(key);
        if(!this.table[index]){
            return undefined;
        }
        const bucket = this.table[index];
        for (const item of bucket)
        {
            if (item.key === key) {
                return item.value;
            }
        }
        return undefined;
    }

    // remove a key-value pair
    remove(key) {
        const index = this.hash(key);
        if (!this.table[index]) {
            return false;
        }

        const bucket = this.table[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    gteKeys(){
        const keys = [];
        for(const bucket of this.value){
            if(bucket){
                for(const  item of bucket){
                    keys.push(item.key);
                }
            }
        }
        return keys;
    }

    getValues(){
        const values = [];
        for(const bucket of this.table){
            if(bucket){
                for(const item of bucket){
                    values.push(item.value);
                }
            }
        }
        return values;
    }

    hasKey(key){
        const index = this.hash(key);
        if(!this.table[index]){
            return false;
        }
        for(const item of this.table[index]){
            if(item.key === key){
                return true
            }
        }
        return false;
    }

}


const myHash = new HashTable(2);
myHash.insert("name","John");
myHash.insert("age","20");

console.log(myHash.get("name")); // John
console.log(myHash.get("age")); // 20
myHash.remove("name");
console.log(myHash.get("name")); // undefined