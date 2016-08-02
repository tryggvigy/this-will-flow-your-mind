// @flow

type User = { fistName: string, lastName: string, age: number }

const getUser = (): Promise<User> => new Promise((resolve, reject) => {
  resolve({ fistName: 'John', lastName: 'Doe', age: 23 })
})
const ensureOldEnough = (user: User): Promise<User> => new Promise((resolve, reject) => {
  if (user.age >= 18) resolve(user)
  else reject('User is too young')
})

function getUserPromise() {
  return getUser().then(user => ensureOldEnough(user))
}
async function getUserAsync() {
  const user = await getUser()
  return user
}

const a = getUserPromise()
const b = getUserAsync()
