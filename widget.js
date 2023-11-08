function fetchCoinData(tokenName) {
	const API_URL = `https://api.coingecko.com/api/v3/coins/${tokenName}`;

	fetch(API_URL)
		.then((response) => response.json())
		.then((data) => {
			const tokenName = data.id;
			const market_cap = (data.market_data.market_cap.usd / 1000000000).toFixed(
				2
			);
			const current_price = data.market_data.current_price.usd;
			const trading_volume = (
				data.market_data.total_volume.usd / 1000000000
			).toFixed(2);
			const priceChangePercentage =
				data.market_data.price_change_percentage_24h;
			const rank = data.coingecko_rank;
			const symbol = data.symbol.toUpperCase();
			const imageUrl = data.image.small;

			const coinImageElement = document.getElementById('coin-image');
			const nameSymbolElement = document.getElementById('name-symbol');
			const currentPriceElement = document.getElementById('current-price');
			const percentageChangeElement =
				document.getElementById('percentage-change');
			const rankElement = document.getElementById('rank');
			const marketCapElement = document.getElementById('market-cap');
			const volumeElement = document.getElementById('volume');

			coinImageElement.src = imageUrl;
			nameSymbolElement.innerText = `${data.name} (${symbol})`;
			currentPriceElement.innerText = `CurrentPrice $${current_price} USD`;
			percentageChangeElement.innerText = `${priceChangePercentage}%`;
			rankElement.innerText = `Rank: ${rank}`;
			marketCapElement.innerText = `Market Cap: $${market_cap} B USD`;
			volumeElement.innerText = `Volume: $${trading_volume} B USD`;
		})
		.catch((error) => {
			console.error('Error fetching coin data:', error);
		});
}
