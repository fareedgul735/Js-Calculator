const hcd = document.querySelector("#hardcoded-value");
function writeOperation(newValue) {
  const prevValue = hcd.innerHTML;
  if (prevValue.startsWith("0")) {
    hcd.innerHTML = newValue;
  } else {
    hcd.innerHTML = prevValue + newValue;
  }
}

function performCalculate() {
  const values = hcd.innerHTML;
  const result = eval(values);
  hcd.innerHTML = result;
}

function allClear() {
  const defaultValue = "0";
  hcd.innerHTML = defaultValue;
}

function clearOnText() {
  const currentValue = hcd.innerHTML;
  if (currentValue?.length > 0) {
    hcd.innerHTML = currentValue.slice(0, -1);
  }
}
