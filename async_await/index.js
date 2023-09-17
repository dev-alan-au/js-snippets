const promise1 = new Promise(res => {
    let i = 0;
    while (i < 100000) i++;
    // moved to macro task queue
    setTimeout(() => {
        console.log('3 done');
        res(i);
    }, 1)
});

const promise2 = new Promise((res) => {
    let i = 0;
    while (i < 10000) i++;
    // executed in main thread
    console.log('1 done');
    res(i);
}).then((i) => {
    //only this part is moved to micro task queue
    console.log('2 then done');
    return i;
});

async function resolvePromises() {
    const vals = await Promise.all([promise1, promise2]);
    // vals promises unwrapped
    console.log(vals);
}

console.log('before resolve');
// runs async
resolvePromises();
console.log('after resolve');
