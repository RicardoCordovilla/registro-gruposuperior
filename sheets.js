
// const btn_submit = document.getElementById('btn_enviar')


const scriptURL = 'https://script.google.com/macros/s/AKfycbzXwkChKNJJgGTyQFn63tr7-zAH3KhwbzLtGM2GPRVZBma4EAdZuNCP-Qp-ILrYtJMP/exec'

// const scriptURL = 'https://script.google.com/macros/s/AKfycbwxgM62rxYbekf2wZizihjnbCQp5-KHbQgtXdg9tm42z3Hp7gGxjS45IdxW3wuWill1/exec'
// const form = document.forms['Reservas']

const form = document.getElementById('formulario')



form.addEventListener('submit', (e) => {
    e.preventDefault()

    console.log('first')

    btn_enviar.innerHTML = '🕒Registrando...'
    btn_enviar.disabled = true

    setTimeout(() => {
        form.btn_enviar.innerHTML = 'Datos guardados correctamente'
    }, 500)


    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            form.reset()
            btn_enviar.innerHTML = 'GUARDAR'
            btn_enviar.disabled = false
        })

})