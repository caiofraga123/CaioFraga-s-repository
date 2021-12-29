	const materias = document.querySelectorAll('h2');
		const pontos = new Array();
		materias.forEach(materia => {
			pontos.push(materia.textContent);
		});
		l = document.querySelector('ol');
		pontos.forEach(ponto => {
			const ut = document.createElement('li');
			ut.textContent = ponto;
			l.append(ut);
		});
