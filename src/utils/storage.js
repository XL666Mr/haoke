class Storage {
  set (tokenName, val) {
    if (typeof val === 'object') {
      val = JSON.stringify(val)
    }
    localStorage.setItem(tokenName, val)
  }

  get(tokenName) {
    const val = localStorage.getItem(tokenName)
    try {
      return JSON.parse(val)
    } catch (error) {
      return val
    }
  }

  remove(tokenName) {
    localStorage.removeItem(tokenName)
  }
}
const storage = new Storage()
export default storage
