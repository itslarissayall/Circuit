function TurnOn() {
    var imagem = document.getElementById('img');
    imagem.src = "./assets/lampon.png"
    document.body.style.background = "#c0bcbc"
    var mn = document.getElementById('menu') 
    mn.style.color = '#000000'
    var ft = document.getElementById('footer')
    ft.style.color = '#000000'
}
function TurnOff() {
    var imagem = document.getElementById('img');
    imagem.src = "./assets/lampoff.png"
    document.body.style.background = "#000000"
    var mn = document.getElementById('menu') 
    mn.style.color = '#ffff'
    var ft = document.getElementById('footer')
    ft.style.color = '#ffff'
}