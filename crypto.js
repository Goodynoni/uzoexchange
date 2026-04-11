const cryptos = [
    { name: "Bitcoin (BTC)", price: "$48,532.25", icon: "fab fa-bitcoin", isText: false },
    { name: "Ethereum (ETH)", price: "$3,258.87", icon: "fab fa-ethereum", isText: false },
    { name: "Tether (USDT)", price: "$1.00", icon: "T", isText: true },
    { name: "Binance Coin (BNB)", price: "$353.57", icon: "fas fa-cube", isText: false },
    { name: "Dogecoin (DOGE)", price: "$0.18", icon: "D", isText: true },
    { name: "Litecoin (LTC)", price: "$180.45", icon: "L", isText: true }
];

const cryptoGrid = document.getElementById("cryptoGrid");

cryptos.forEach(coin => {
    const card = document.createElement("div");
    card.classList.add("crypto-card");

    const iconHTML = coin.isText 
        ? `<div class="coin-icon text-icon">${coin.icon}</div>`
        : `<div class="coin-icon"><i class="${coin.icon}"></i></div>`;

    card.innerHTML = `
        ${iconHTML}
        <h3>${coin.name}</h3>
        <button class="btn-primary">Trade Now</button>
    `;

    card.querySelector('.btn-primary').addEventListener('click', () => {
        window.location.href = 'https://wa.me/2348171777697?text=Hello%20I%20want%20to%20trade%20crypto';
    });

    cryptoGrid.appendChild(card);
});