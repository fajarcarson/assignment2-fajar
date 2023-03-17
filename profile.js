const eProfile = document.getElementById('editProfile') //Div
const dMahasiswa = document.getElementById('dataMahasiswa') //Form
const yEdit = document.getElementById('xEdit') //Button

const iNama     = document.getElementById('oNama')
const iNim      = document.getElementById('oNim')
const iProdi    = document.getElementById('oProdi')
const iUniv     = document.getElementById('oUniv')
const iAngkatan = document.getElementById('oAngkatan')
const iDomisili = document.getElementById('oDomisili')
const iEmail    = document.getElementById('oEmail')

let tampilForm = true

eProfile.addEventListener('submit', (event) => {
    event.preventDefault()
    
    const curNama     = dMahasiswa.elements.iNama.value
    const curNim      = dMahasiswa.elements.iNim.value
    const curProdi    = dMahasiswa.elements.iProdi.value
    const curUniv     = dMahasiswa.elements.iUniv.value
    const curAngkatan = dMahasiswa.elements.iAngkatan.value
    const curDomisili = dMahasiswa.elements.iDomisili.value
    const curEmail    = dMahasiswa.elements.iEmail.value

    iNama.innerHTML = curNama
    iNim.innerHTML = curNim
    iProdi.innerHTML = curProdi
    iUniv.innerHTML = curUniv
    iAngkatan.innerHTML = curAngkatan
    iDomisili.innerHTML = curDomisili
    iEmail.innerHTML = curEmail

    toggleBox()
})

function toggleBox() {
    if(tampilForm){
        tampilForm = false
        eProfile.classList.remove('hide')
    } else {
        tampilForm = true
        eProfile.classList.add('hide')
    }
}

yEdit.addEventListener('click', (event) =>{
    event.preventDefault()
    toggleBox()
})



