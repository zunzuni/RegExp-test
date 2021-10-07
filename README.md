# 정규표현식 (RegExp)

정규식, Regular Expression

## 역할

-문자 검색
-문자 대체
-문자 추출

## 테스트 사이트
https://regexr.com/

## 정규식 생성

```js

//생성자
new RegExp('표현', '옵션')
new RegExp('[a-z]', 'gi')

//리터럴
/표현/옵션
/[a-z]/gi
```

## 예제 문자
```js
const str = `
010-1234-1231
zunzuni@git.com
https://www.naver.com
The time is it now.
dddd
`
```

## 메소드

메소드 | 문법 | 설명
--|--|--
 test | 정규식.test(문자열) | 일치여부(boolean 반환)
 match | 문자열.match(정규식) | 일치하는 문자의 배열(array)반환
 replace | 문자열.replace(정규식, 대체문자) | 일치하는 문자를 대체


 ## 플래그 (옵션)

 플래그 | 설명
 -- | --
 g | 모든 문자 일치 (global)
 i | 영어 대소문자 구분 않고 일치 (ignore case)
 m | 여러 줄 일치 (multi line)


 ## 패턴 (표현)
 패턴 | 설명
 -- | --
 ^ab | 줄 시작에 있는 ab와 일치
 ab$ | 줄 끝에 있는 ab와 일치
 . | 임의의 한 문자와 일치
 a&verbar;b | a 또는 b와 일치
 ab? | b가 없어나 b와 일치
 {3} | 3개 연속 일치
 {3,} | 3개 이상 연속 일치
 {3,5} | 3개 이상 5개 이하 연속일치
[abc] | a 또는 b 또는 c
[a-z] | a부터 z사이의 문자구간에 일치 (대소문자 구분)
[0-9] | 0부터 9사이의 문자구간에 일치
[가-힣] | 가부터 힣사이의 문자구간에 일치
\w | 63개 문자(word, 대소영문 52개 + 숫자 10개 + _)에 일치
\b | 63개 문자에 일치하지 않는 문자 경계 (boundary)
\d | 숫자(digit)에 일치
\s | 공백(space, tap)에 일치
(?=) | 앞쪽 일치
(?<=) | 뒤쪽 일치