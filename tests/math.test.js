const {calculateTip,celsiusToFahrenheit,fahrenheitToCelsius,add} = require('../src/math')

test('Should calculate total with tip',()=>{
const total = calculateTip(10,.3);
expect(total).toBe(13)
// if(total !== 13){
//     throw new Error('Total should be 13. Got '+total);
//     }
})
test('Should calculate total with default tip',()=>{
    const total = calculateTip(10);
    expect(total).toBe(12.5)
})
test('Should convert 32 F to 0 C',()=>{
    const temp = fahrenheitToCelsius(32);
    expect(temp).toBe(0)
    })

test('Should convert 0 C to 32 F',()=>{
        const temp = celsiusToFahrenheit(0);
        expect(temp).toBe(32)
 })

 //Asynchronous code test

//  test('Async test demo',(done)=>{
//     setTimeout(() => {
//         expect(1).toBe(2);
//         done();
//     }, 2000);
//  })

 test('Should add two number',(done)=>{
   add(2,3).then((sum)=>{
       expect(sum).toBe(5);
       done();
   })
 })
   
 test('Should add two numbers async/await ', async()=>{
     const sum = await add(7,3);
     expect(sum).toBe(10);
  })
// Why Test

// saves times
// create reliable software
// gives flexibility to developers
// Refactoring
// collaborating
// profiling
// peace of mind

// jest life cycle
// Mocking node js module

//
// User Test Ideas
//
// Should not signup user with invalid name/email/password
// Should not update user if unauthenticated
// Should not update user with invalid name/email/password
// Should not delete user if unauthenticated

//
// Task Test Ideas
//
// Should not create task with invalid description/completed
// Should not update task with invalid description/completed
// Should delete user task
// Should not delete task if unauthenticated
// Should not update other users task
// Should fetch user task by id
// Should not fetch user task by id if unauthenticated
// Should not fetch other users task by id
// Should fetch only completed tasks
// Should fetch only incomplete tasks
// Should sort tasks by description/completed/createdAt/updatedAt
// Should fetch page of tasks
