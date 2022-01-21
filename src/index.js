module.exports = function reverse (n) {
    let s = String(Math.abs(n))
    let reverseS = s.split('').reverse().join('')
    return Number(reverseS)
}
