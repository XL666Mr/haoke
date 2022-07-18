class Storage {
<<<<<<< HEAD
  set (tokenName, val) {
    if (typeof val === 'object') {
      val = JSON.stringify(val)
=======
  set(tokenName, val) {
    if (typeof val === 'object') {
      console.log(val)
      val = JSON.stringify(val)
      console.log(val)
>>>>>>> favorate
    }
    localStorage.setItem(tokenName, val)
  }

<<<<<<< HEAD
  get (tokenName) {
=======
  get(tokenName) {
>>>>>>> favorate
    const val = localStorage.getItem(tokenName)
    try {
      return JSON.parse(val)
    } catch (error) {
      return val
    }
  }

<<<<<<< HEAD
  remove (tokenName) {
=======
  remove(tokenName) {
>>>>>>> favorate
    localStorage.removeItem(tokenName)
  }
}
const storage = new Storage()
export default storage
