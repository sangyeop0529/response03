함수 -> 이름 -> function 이름(){}
                선언 이름 = function(){}
                선언 이름 = (매개변수) => {실행문}
                            매개변수 => {실행문}
                            () => {실행문}
                            (매개변수, 매개변수) => {실행문}

객체 -> 기본객체
        리터널객체
        생성자함수 객체
        선언 이름 = new Object()
        이름.속성 = '데이터'
        이름.매서드이름 = function(){}
        선언 이름 = {
            속성:데이터,
            속성:데이터,
            매서드: function(}{}
        }
        선언이름 = {
            a = a,
            b = b,
            c = c
        }

생성자 함수
function 이름(){
    this.속성: 데이터,
    this.속성: 데이터,
    this.속성: function(){},
}

이름.prototype.속성매서드 = function(){}
인스턴스 -> 선언이름 = new 객체이름(데이터)

선언이름 = [new 객체이름(),new 객체이름()]

class 클래스명 {
    constructor(매개변수){
        this.속성 = 매개변수
        this.속성 = 매개변수
    }
}

JSON

기본자료형 -> JSON
              key : value
              ****.json -> 자료형(string, number, boolean, null, object, 배열) *undefined가 없음

1. import
2. 실행, fetch()

이름 필요x -> css
이름 필요o -> json, img

함수
객체
class -> 형식
할당
전개연산자
json
import, export
정규표현식

front-end
back-end

웹개발

웹브라우져-> 요청:request 조회, 추가, 수정, 삭제                                              
                                                        응답:response  <- 서버

fetch().then()
요청 시작점 . 이어서 들어가는 작업

fetch(요청의시작점) -> .then(         ) -> then(        )

동기실행 : 순차적으로 작동
비동기실행 : setTimeout(), setInterval(), fetch()

fetch() -> 값을 받고 -> 값을 주고 -> then() -> 값을 받고 -> 값을 주고 -> then() ......
          (promise 객체)

url -> http://www.이름.com/경로/경로/width=100 & size=small
      Scheme | host       | path    | query, filter

프로토콜
쌍방에대한 규
브라우저 <-> 서버
http:// -> Hyper Text transfer protocol secure(보안)