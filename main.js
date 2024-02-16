const plus = document.querySelectorAll(".plus")
const min = document.querySelectorAll(".min")
const hasil = document.getElementsByClassName("hasil")
// const checkout = document.getElementById("checkout")
const divCheckout2 = document.getElementById("div-checkout2") 
const menuRandom = document.getElementById("menu-random")
const coffee = {
    nama : ["coffee 1", "coffee 2", "coffee 3"],
    gambar : ["coffee1.jpg", "coffee2.jpg", "coffee3.jpg"],
    harga : [50000, 50000, 50000]
}
const cake = {
    nama : ["cake 1", "cake 2", "cake 3"],
    gambar : ["cake1.jpg", "cake2.jpg", "cake3.jpg"],
    harga : [50000, 50000, 50000]
}

for(let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", () => {
        let temp = parseInt(hasil[i].innerHTML)
        temp++
        hasil[i].textContent = temp
    })
}

for(let i = 0; i < min.length; i++) {
    min[i].addEventListener("click", () => {
        let temp = parseInt(hasil[i].innerHTML)
        if(temp !== 0 ){
            temp--
            hasil[i].textContent = temp
        }
    })
}

function checkout() {
    const hasilConfirm = confirm("Apakah pesanan sudah benar?")

    if(hasilConfirm) {
        alert("Pesanan telah diterima, dimohon untuk membayar di kasir")
    }
}

// checkout.addEventListener("click", () => {
//     const hasilConfirm = confirm("Apakah pesanan sudah benar?")

//     if(hasilConfirm) {
//         alert("Pesanan telah diterima, dimohon untuk membayar di kasir")
//     }
// })

function random() {
    const randomNumber_coffee = Math.floor(Math.random() * 3);
    const randomNumber_cake = Math.floor(Math.random() * 3);
    menuRandom.innerHTML = ''
    var html = menuRandom.innerHTML
    var newHtml = 
    `
        <div class="container">
            <div class="row text-center">
                <div class="col">
                    <h1>Menu Random</h1>
                </div>                
            </div>

            <div class="row justify-content-center">
                <div class="col-md-4 pb-3">
                    <div class="card">
                        <img src="assets/images/${coffee.gambar[randomNumber_coffee]}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${coffee.nama[randomNumber_coffee]}</h5>
                            <p class="card-text">Rp ${coffee.harga[randomNumber_coffee]}</p>
                        </div>
                    </div>
                </div>
        
                <div class="col-md-4 pb-3">
                    <div class="card">
                        <img src="assets/images/${cake.gambar[randomNumber_cake]}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${cake.nama[randomNumber_cake]}</h5>
                            <p class="card-text">Rp ${cake.harga[randomNumber_cake]}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row text-center justify-content-center">
                <div class="col-lg-2">
                    <button class="btn1" id="random" onclick="random()">Random</button>
                </div>
                <div class="col-lg-2" id="div-checkout2">
                    <button class="btn1" id="checkout2">Checkout</button>
                </div>
            </div>
        </div>
    `
    html += newHtml
    menuRandom.innerHTML = html
    const checkout2 = document.getElementById("checkout2")
    checkout2.addEventListener("click", () => {
        const hasilConfirm = confirm("Apakah pesanan sudah benar?")

        if(hasilConfirm) {
            alert("Pesanan telah diterima, dimohon untuk membayar di kasir")
        }
    })
}


