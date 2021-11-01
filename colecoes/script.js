function getAdmins(map) {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
}

const usuarios = new Map();

usuarios.set('Stephany', 'ADMIN');
usuarios.set('Luiz', 'ADMIN');
usuarios.set('Elvira', 'ADMIN');
usuarios.set('Carolina', 'USER');
usuarios.set('Guilherme', 'USER');

console.log(getAdmins(usuarios));