/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    return async function(...args) {
        const prom = new Promise((res,rej)=>{
            setTimeout(()=>{
               rej(new Error("Time Limited Exceeded"));

            },t);

        })

        return Promise.race([fn, prom])
    }
};


 const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
