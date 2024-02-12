const phoneMask = document.getElementById('phone-mask')
const progressLine = document.querySelector('.progress-line')

new IMask (
    phoneMask,
    {mask : '+{7} (000) 000-00-00'}
)

phoneMask.oninput = function () {
    console.log(this.value.length)  // 18
    const w = this.offsetWidth
    console.log(w)
    progressLine.style.width = ((w/18) * this.value.length) + 'px'
    // (255 - (255/19) * * this.value.length
    progressLine.style.backgroundColor = `rgb(${(255 - (255/19) * this.value.length)}, 137, 0)`
}
