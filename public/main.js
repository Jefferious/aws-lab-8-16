const btn = document.querySelector('button')

const clickHandler = (event) => {
    event.preventDefault()
    alert('Hello!')
}

btn.addEventListener('click', clickHandler)