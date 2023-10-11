// USER의 인풋이 올바른지 확인하는 모듈
function alertInvalidInput(info) {
  if (info === "NaN") {
    alert("잘못 된 입력입니다! 숫자만 입력 가능합니다");
  } else if (info === "inValidLength") {
    alert("잘못 된 입력입니다! 숫자는 반드시 3개를 입력해야 합니다");
  } else if (info === "duplicate") {
    alert("잘못 된 입력입니다! 중복된 숫자는 입력할 수 없습니다");
  } else if (info === "inValidScope") {
    alert("잘못 된 입력입니다! 1 ~ 9 사이의 숫자만 입력할 수 있습니다");
  }
  return false;
}

function isNumber(text) {
  if (typeof text === "number") {
    return true;
  }
  return false;
}

function checkInputType(userInputNumbers) {
  if (userInputNumbers.every(isNumber)) {
    return true;
  }
  return false;
}
function checkValidLength(userInputNumbers) {
  if (userInputNumbers.length === 3) {
    return true;
  }
  return false;
}
function checkDuplicate(userInputNumbers) {
  if (userInputNumbers.length === [...new Set(userInputNumbers)].length) {
    return true;
  }
}
function checkValidScope(userInputNumbers) {
  if (1 <= userInputNumbers && userInputNumbers <= 9) {
    return true;
  }
  return false;
}

export default function checkValidInput(userInputNumbers) {
  if (!checkInputType(userInputNumbers)) {
    return alertInvalidInput("NaN");
  }
  if (!checkValidLength(userInputNumbers)) {
    return alertInvalidInput("inValidLength");
  }
  if (!checkDuplicate(userInputNumbers)) {
    return alertInvalidInput("duplicate");
    return alertInvalidInput("");
  }
  if (!checkValidScope(userInputNumbers)) {
    return alertInvalidInput("inValidScope");
  }
}
