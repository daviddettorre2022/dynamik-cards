export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)

  const reset = document.querySelector('#reset');

  reset.addEventListener('click', () => {
    setCounter(0);
  });

  reset.innerText = 'R.A.Z';
}


