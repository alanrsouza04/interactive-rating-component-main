
const submit = document.getElementById("sub")
const m1 = document.querySelector('.m1')
const m2 = document.querySelector('.m2')
const btns = document.querySelectorAll('.btn')
const nu = document.querySelector(".num")

submit.addEventListener("click", dsc)

function dsc() {
    m2.classList.remove("dsc")
    m1.classList.add("dsc")
}

btns.forEach((btns) => {
    btns.addEventListener('click', () => {
        nu.innerHTML = btns.innerHTML
    })
})