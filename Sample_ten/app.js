function printFormat() {
  var formatInput = document.getElementById("formatInput");
  var output = document.getElementById("output");
  var format = formatInput.value;
  var result = "";
  // 형식에 따라 결과를 생성하는 로직을 작성해주세요.
  // 여기서는 간단한 예제로 형식에 입력된 숫자만큼 *을 출력하는 예제를 사용하겠습니다.
  for (var i = 0; i < format; i++) {
    result += "*";
  }
  output.innerHTML = result;
}