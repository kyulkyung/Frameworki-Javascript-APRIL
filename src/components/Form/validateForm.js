export default function validateForm({ name, email, password, confirmPass }) {
	if (!name.trim()) {
		return 'Podaj nazwę użytkownika';
	}

	const regex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!email) {
		return 'Podaj Email';
	} else if (regex.test(email.toLocalLowerCase)) {
		return 'Email nieprawidłowy';
	}
	if (!password) {
		return 'Podaj hasło';
	} else if (password.length < 6) {
		return 'Hasło musi mieć więcej niż 6 znaków';
	}

	if (!confirmPass) {
		return 'Podaj hasło ponownie';
	} else if (confirmPass !== password) {
		return 'Hasła nie pasują do siebie';
	}
	return null;
}
