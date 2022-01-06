document.addEventListener("DOMContentLoaded", selec);

let num = 1;

let tamanho = 2;

    function atualizatamanho() {
        const h1 = document.querySelector(`h${num}`);
        h1.style.fontSize = `${tamanho}em`;
    }
	
    function aumentatitulo() {
		if (tamanho < 9) {
			tamanho += 0.5;
			atualizatamanho()
		}
    }
	
    function diminuititulo() {
        if (tamanho > 1) {
			tamanho -= 0.5;
            atualizatamanho();
        }
	}
	
function cria () {
	botao = document.createElement("button")
	botao.innerHTML = "+"
	botao.addEventListener("click", function () {
		aumentatitulo();
	});
	a = document.querySelector(`h${num}`)
	a.after(botao);
	bota = document.createElement("button")
	bota.innerHTML = "-"
	bota.addEventListener("click", function () {
		diminuititulo();
	});
	b = document.querySelector(`h${num}`)
	b.after(bota);
}

function selec () {
	elemento = document.querySelector(`h${num}`);
	if (elemento != null) {
		cria();
	} else if(elemento == null && num < 7){
		num = num + 1
		selec();
	}
}
