	const materias = document.querySelectorAll('h2');
	const pontos = new Array();
	materias.forEach(element => {
		pontos.push(element.textContent);
		const lk = document.createElement('a');
		lk.setAttribute('name', element.textContent);
		element.append(lk);
		const lkr = document.createElement('a');
		lkr.setAttribute('href' , '#');
		lkr.textContent = 'retorno';
		element.parentElement.insertBefore(lkr, element.nextElementSibling);
		});
	l = document.querySelector('ol');
	pontos.forEach(ponto => {
		const ut = document.createElement('li');
		l.append(ut);
		const lkn = document.createElement('a');
		lkn.setAttribute('href', '#${ponto}');
		lkn.textContent = ponto;
		ut.append(lkn);
	});
