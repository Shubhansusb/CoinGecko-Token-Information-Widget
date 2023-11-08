const tokenSelect = document.getElementById('cryptocurrency');

window.onload = () => {
	const tokenName = tokenSelect.value || 'bitcoin';
	fetchCoinData(tokenName);
};

tokenSelect.addEventListener('change', () => {
	const selectedtoken = tokenSelect.value;
	fetchCoinData(selectedtoken);
});
