function factory_movie(title) { // 외부함수
  return {
    get_title: function () { // 내부함수
      return title;
    },
    set_title: function (_title) { // 내부함수
      title = _title;
    }
  }
}
// factory_movie 통해 두개의 객체 생성 ( 각기 자신들이실행된 그 시점에서의 외부함수의 지역변수(인자)에 접근할 수 있다)
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');

console.log(ghost.get_title()); // Ghost in the shell 출력
console.log(matrix.get_title()); // Matrix 출력
// ghost, matrix 는 똑같은 객체이지만 그 객체가 갖고있는 get_title이라는 메소드가 접근하는 "title"이라는외부함수의 변수에 담긴앖은 서로 다르다..!

ghost.set_title("공각기동대");
console.log(ghost.get_title()); // Ghost in the shell 출력
console.log(matrix.get_title()); // Matrix 출력


// 장점?
// factory_movie의 지역변수인 인자를 비밀변수로 묶어놓고 get_title,set_title통해서만 접근 가능할수있게 하면 훨씬 더 안전하게 저장 및 수정이 가능.


function outer() {
  let number = 5;

  function inner() {
    return number
  }
  return inner();
}
outer();