const connects = document.querySelectorAll('.connect')

connects.forEach((item) => {
  const input = item.querySelector('.connect__form')
  input.addEventListener('input', inputLogic)
})

function inputLogic(e) {
  const currentInput = e.target
  const text = currentInput.parentNode.querySelector('.connect__btnText')
  const emoji = currentInput.parentNode.querySelector('.connect__emoji ')
  if (currentInput.validity.valid) {
    text.textContent = 'Круто, спасибо за доверие!'
    emoji.style.display = 'none'
  } else {
    text.textContent = 'Отремонтируйте камеру'
    emoji.style.display = 'inline'
  }
}
