const btn = document.querySelector('.btn')

function onSubmit(e) {
  const passErr = document.querySelector('.passError')
  const pass = document.querySelector('#password').value
  const passConf = document.querySelector('#confirm-password').value

  if (pass !== passConf) {
    passErr.classList.add('error')
    e.preventDefault()
  }
}

btn.addEventListener('click', onSubmit)
