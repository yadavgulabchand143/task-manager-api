const request = require('supertest');
const app = require('../src/app')
const User = require('../src/models/user')
const {userOneId,userOne,setupDatabase} = require('./fixtures/db')


// jest life cycle
beforeEach(setupDatabase)

afterEach(()=>{
    console.log("After Each");
})


test('Should signup a new user', async ()=>{
    const response = await request(app).post('/users').send({
        name:'jtest',
        email:'jtest@gmail.com',
        password:"jtest@123"
    }).expect(201)

    //// advance assertions

    // Assert that the database was changes correctly
    const user = await User.findById(response.body.user._id);
     expect(user).not.toBeNull();
     
     //Assertions abouth response
     expect(response.body.user.name).toBe('jtest');
     expect(response.body).toMatchObject({
         user:{
             name:'jtest',
             email:'jtest@gmail.com'
         },
         token:user.tokens[0].token
     }) 
     expect(user.password).not.toBe('jtest@gmail.com');
})

test('Should login existing user', async ()=>{
    const response = await request(app).post('/users/login').send({
        email:userOne.email,
        password:userOne.password
    }).expect(200);

    const user = await User.findById(response.body.user._id);
    expect(response.body.token).toBe(user.tokens[1].token);

})

test('Should not login nonexisting user', async ()=>{
    await request(app).post('/users/login').send({
        email:'abc@gmail.com',
        password:'abc@test.com'
    }).expect(400)

})

// auth test before run test
test('Should get profile for user', async ()=>{
    await request(app)
    .get('/users/me')
    .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200)

})

test('Should not get profile for unauthenticated user', async ()=>{
    await request(app)
    .get('/users/me')
    .send()
    .expect(401)

})

test('Should delete account for user', async ()=>{
    const response = await request(app)
    .delete('/users/me')
    .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
    const user = await User.findById(userOneId);
    expect(user).toBeNull();

})

test('Should not delete account for unauthnticated user', async ()=>{
    await request(app)
    .delete('/users/me')
    .send()
    .expect(401)

})

test('Should upload avatar image', async ()=>{
    await request(app)
    .post('/users/me/avatar')
    .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
    .attach('avatar', 'tests/fixtures/avatar.jpg')
    .expect(200);

    const user = await User.findById(userOneId);
    expect(user.avatar).toEqual(expect.any(Buffer));


})

test('Should update valid user fields', async ()=>{
    await request(app)
    .patch('/users/me')
    .send({
        name :'Jess'
    })
    .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
    .expect(200);
    const user = await User.findById(userOneId);
    expect(user.name).toEqual("Jess");
})


test('Should not update invalid user fields', async ()=>{
    await request(app)
    .patch('/users/me')
    .send({
        location :'thane'
    })
    .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
    .expect(400);
})

