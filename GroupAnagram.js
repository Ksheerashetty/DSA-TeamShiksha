Optimal
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = new Map()
    for (let str of strs) {
        let freq = new Array(26).fill(0)
        //freq = [0,0,0,0,0,...0]   // 26 zeros

        for (let char of str)
            freq[char.charCodeAt(0) - 97]++
        //freq = [
        //  1,0,0,0,
        //  1,0,0,0,
        //  0,0,0,0,0,0,0,0,
        //  0,0,0,
        //  1,
        //  0,0,0,0,0,0
        // ]

        let key = freq.join("#")
        //key = "1#0#0#0#1#0#0#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#0"
//again for tea "1#0#0#0#1#0#0#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#0"


        if (!map.has(key))
            map.set(key, []) //map[key] = []


        map.get(key).push(str) //map[key] = ["eat"] will be added here
    }
    return Array.from(map.values())
};
