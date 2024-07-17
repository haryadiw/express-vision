// TBD testing websockets using native node testing

const { describe, it, before, after, beforeEach } = require('node:test')
const assert = require('node:assert')

const httpMocks = require('node-mocks-http')
const newCategory = require('../mock-data/new-category.json')
const path = require('path')

let services
let createdCategoryId
let CategoryController
let req, res, next

beforeEach(() => {
  req = httpMocks.createRequest()
  res = httpMocks.createResponse()
  next = null // jest.fn()
})

// beforeAll
before(async () => {
  await require(path.join(process.cwd(), 'env'))
  await require('@es-labs/node/config')(process.cwd())
  services = require(`@es-labs/node/services`)
  await services.start()
  CategoryController = require('../../controllers/category')
})
// afterAll
after(async () => {
  await services.stop()
})

/*
describe('CategoryController.create', () => {
  beforeEach(() => {
    req.body = newCategory
  })
  it('should have CategoryController.create()', () => {
    expect(typeof CategoryController.create).toBe('function')
  })
  it('should return 201 response code and created data JSON in body', async () => {
    await CategoryController.create(req, res)
    expect(res.statusCode).toBe(201)
    expect(res._isEndCalled()).toBeTruthy()
    try {
      createdCategoryId = res._getJSONData().id
    } catch (e) { console.log(e.toString()) }
  })
  // it('should return JSON body in response', async () => {
  //   TodoModel.create.mockReturnValue(newTodo)
  //   await TodoController.createTodo(req, res)
  //   expect(res._getJSONData()).toStrictEqual(newTodo)
  // })
  // it('should handle JSON body error', async () => {
  //   const errorMessage = 'create todo error'
  //   const rejectedPromise = Promise.reject(errorMessage)
  //   TodoModel.create.mockReturnValue(rejectedPromise)
  //   await TodoController.createTodo(req, res)
  //   expect(next).toBeCalledWith(errorMessage)
  // })
})

describe('CategoryController.findOne', () => {
  it('Always Pass', async () => expect(1).toBe(1))

  it('should have CategoryController.findOne()', () => { // function exists
    expect(typeof CategoryController.findOne).toBe('function')
  })
  // cannot test Model
  it('should return status 200 and JSON body', async () => { // 200
    req.params.id = createdCategoryId
    await CategoryController.findOne(req, res)
    expect(res.statusCode).toBe(200)
    // expect(res._isEndCalled()).toBeTruthy()
    // expect(typeof res._getJSONData()).toBe('object')
  })
  it('should return 404 if id does not exist', async () => { // 404
    req.params.id = 0
    await CategoryController.findOne(req, res)
    // expect(res._isEndCalled()).toBeTruthy()
    expect(res.statusCode).toBe(404)
  })
  // 500 error not able to cover?
})

describe('CategoryController.update', () => {
  it('should have CategoryController.update()', () => {
    expect(typeof CategoryController.update).toBe('function')
  })
  it('should return a response with json data and http code 200', async () => {
    req.params.id = createdCategoryId
    req.body = { name: 'CatA' }
    await CategoryController.update(req, res)
    expect(res.statusCode).toBe(200)
    // expect(res._isEndCalled()).toBeTruthy()
    // expect(res._getJSONData().name).toBe('abc')
  })
  it('should return 404 if id does not exist', async () => {
    req.params.id = 0
    req.body = { name: 'CatB' }
    await CategoryController.update(req, res)
    expect(res.statusCode).toBe(404)
    // expect(res._isEndCalled()).toBeTruthy()
  })
  // 500 error not able to cover?
})

describe('CategoryController.remove', () => {
  it('should have a CategoryController.remove function', () => {
    expect(typeof CategoryController.remove).toBe('function')
  })
  it('should return status 200', async () => {
    req.params.id = createdCategoryId
    await CategoryController.remove(req, res)
    expect(res.statusCode).toBe(200)
    // expect(res._isEndCalled()).toBeTruthy()
  })
  it('should return 404 if id does not exist', async () => { // 404
    req.params.id = 0
    await CategoryController.remove(req, res)
    expect(res.statusCode).toBe(404)
    // expect(res._isEndCalled()).toBeTruthy()
  })
  // 500 error not able to cover?
})
*/

describe.only('CategoryController.find', () => {
  it.only('should have a get function', () => {
    // expect(typeof CategoryController.find).toBe('function')
    assert.strictEqual(typeof CategoryController.find, 'function')
  })
  it.only('should return status 200 and authors', async () => {
    await CategoryController.find(req, res)
    assert.strictEqual(res.statusCode, 200)
    //   // expect(res.statusCode).toBe(200)
    //   // expect(res._isEndCalled()).toBeTruthy()
    //   // expect(res._getJSONData().total).toBeDefined
    //   // console.log(res._getJSONData())
  })
  // 500 error not able to cover?
})

describe.only('Category Unit Test', () => {
  it.only('should pass', () => {
    assert.strictEqual(true, true)
  })
})
