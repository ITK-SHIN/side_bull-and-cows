function generateRandomNumber() {
  // 1 ~ 9까지 숫자를 이용
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // 랜덤하게 섞어서 4자리 숫자만 이용
  const pickedNumbers = shuffle(candidates).splice(0, 4); // 4자리 뽑음

  return pickedNumbers;
}

function shuffle(array) {
  // Math.random(), 0 ~ 1까지 랜덤하게 뽑아주는데
  // array.sort() => 첫번쨰 매개변수 함수에서  음수 반환시 내림차순 , 양수 반환시 오름차순

  return array.sort(() => Math.random() - 0.5);
}

export default generateRandomNumber;
