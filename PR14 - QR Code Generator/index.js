function generate(params) {
    

    let img=document.querySelector('img')
    let input=document.querySelector('input')

    let value=input.value

    if (value=="") {
        alert("ENTER TEXT")
        return
    }

    img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`

    img.style.height='180px'

    
}

