document.addEventListener("DOMContentLoaded", selec);

let num = 1;

let tam = 3;

    function mudatam() {
        const e = document.querySelector(`h${num}`);
        e.style.fontSize = `${tam}em`;
    }
	
    function aumenta() {
	if (tam < 10) {
		tam += 0.7;
		mudatam();
	}
    }
	
    function diminui() {
        if (tam > 1) {
		tam -= 0.7;
            	mudatam();
        }
	}
	
function cria () {
	botao = document.createElement("button")
	botao.innerHTML = "+"
	botao.addEventListener("click", function () {
		aumenta();
	});
	a = document.querySelector(`h${num}`)
	a.after(botao);
	bota = document.createElement("button")
	bota.innerHTML = "-"
	bota.addEventListener("click", function () {
		diminui();
	});
	b = document.querySelector(`h${num}`)
	b.after(bota);
}

function selec () {
	elemento = document.querySelector(`h${num}`);
	if (elemento != null) {
		cria();
	} else if(elemento == null && num <= 6){
		num = num + 1
		selec();
	}
}
