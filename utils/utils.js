const findSeparator = (str) => {
  const match = str.match(/(\/|\\|:|;)/)
  return match ? match[0] : null
}
  
module.exports = findSeparator