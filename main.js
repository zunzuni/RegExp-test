const str = `
010-1234-1231
zunzuni@git.com
https://www.naver.com
The time is it now.
http://localhost:1234
htt
dddd frozen,fox
안녕하시렵니까?
`

const regexp = new RegExp('the', 'gi') 

const regexp = /the/gi
console.log (regexp.test(str))
console.log (str.replace(regexp,"sex"))

const regexp = /the/gi

console.log (str.match(regexp))
console.log (str.match(/\.$/gi))
console.log (str.match(/^t/gim))
console.log(str.match(/h../g))
console.log(str.match(/time|cook/g)) //또는
console.log(str.match(/http?s?/g))
console.log(str.match(/\b\w{2,3}\b/g))
console.log(str.match(/[the]/g))
console.log(str.match(/[0-9]/g))
console.log(str.match(/[0-9]{1,}/g))
console.log(str.match(/[가-힣]{1,}/g))
console.log(str.match(/\w/g))
console.log(str.match(/\bf\w{1,}\b/g))
console.log(str.match(/\d/g))
console.log(str.match(/\s/g))

const h = `  the hello  world   !


`
console.log(h.replace(/\s/g,''))
console.log(str.match(/.{1,}(?=\@)/g))
console.log(str.match(/(?<=\@).{1,}/g))


//정규표현식을 다루는 메소드
// 정규식.exec(문자열) 일치하는 하나의 정보(array) 반환
// 정규식.test(문자열) 일치여부(boolean)반환
// 문자열.match(정규식) 일치하는 문자열의 배열 반환
// 문자열.search(정규식) 일치하는 문자열의 인덱스반환
// 문자열.replace(정규식,대체문자) 일치하는 문자열을 대체하고 대체된 문자열 반환
// 문자열.split(정규식) 일치하는 문자열을 분할하여 배열로 반환
// 생성자_정규식.toSrting() 생성자 함수 방식의 정규식을 리터럴 방식의 문자열로 반환