
// // test('adds 1 + 2 to equal 3', () => {
// //     expect(2 + 2).toBe(4);
// // });

// // test('object assignment', () => {
// //     const data = { one: 1 };
// //     data['two'] = 2;
// //     expect(data).toEqual({ one: 1, two: 2 });
// // });
// // test('array assignment', () => {
// //     const data = [1];
// //     data.push(2);
// //     expect(data).toEqual([1, 2]);
// // });
// // test('adding positive numbers is not zero', () => {
// //     for (let a = 1; a < 10; a++) {
// //         for (let b = 1; b < 10; b++) {
// //             expect(a + b).not.toBe(0);
// //         }
// //     }
// // });
// // test('null', () => {
// //     const n = null;
// //     expect(n).toBeNull();
// //     expect(n).toBeDefined();
// //     expect(n).not.toBeUndefined();
// //     expect(n).not.toBeTruthy();
// //     expect(n).toBeFalsy();
// // });

// // test('zero', () => {
// //     const z = 0;
// //     expect(z).not.toBeNull();
// //     expect(z).toBeDefined();
// //     expect(z).not.toBeUndefined();
// //     expect(z).not.toBeTruthy();
// //     expect(z).toBeFalsy();
// // });

// // test('there is no I in team', () => {
// //     expect('team').not.toMatch(/I/);
// // });

// // // function fetchData(callback) {
// // //     setTimeout(() => { callback('peanut butter'); }, 3000)
// // // }
// // function fetchDataPromise() {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => { resolve('peanut butter'); }, 100)
// //     })
// // }
// // // // Don't do this!
// // // test('the data is peanut butter', done => {
// // //     function callback(data) {
// // //         expect(data).toBe('peanut butter');
// // //         done();
// // //     }
// // //     fetchData(callback);
// // // });

// // // test('the data is peanut butter', () => {
// // //     return fetchDataPromise().then(data => {
// // //         expect(data).toBe('peanut butter');
// // //     });
// // // });
// // // test('the fetch fails with an error', () => {
// // //     expect.assertions(1);
// // //     return fetchDataPromise().catch(e => expect(e).toMatch('error'));
// // // });
// // test('the data is peanut butter', () => {
// //     return expect(fetchDataPromise()).resolves.toBe('peanut butter');
// // });






// // test('the data is peanut butter', async () => {
// //     const data = await fetchData();
// //     expect(data).toBe('peanut butter');
// // });

// // test('the fetch fails with an error', async () => {
// //     expect.assertions(1);
// //     try {
// //         await fetchData();
// //     } catch (e) {
// //         expect(e).toMatch('error');
// //     }
// // });


function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}
test('mock function', () => {
    const mockCallback = jest.fn(x => 42 + x);
    forEach([0, 1], mockCallback);

    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42);
})





// const myMock = jest.fn();
// console.log(myMock());
// // > undefined

// myMock.mockReturnValueOnce(true).mockReturnValueOnce('x').mockReturnValue(10);

// console.log(myMock(), myMock(), myMock(), myMock());
// // > 10, 'x', true, true


