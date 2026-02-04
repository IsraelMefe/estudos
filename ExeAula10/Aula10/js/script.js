const cidades = [
    { nome: "São Paulo", lat: -23.55, lon: -46.63 },
    { nome: "Rio de Janeiro", lat: -22.90, lon: -43.20 },
    { nome: "Brasília", lat: -15.79, lon: -47.88 }
];

const weatherCodes = {
    0: { desc: "céu limpo", icon: "☀️" },
    1: { desc: "quase limpo", icon: "🌤️" },
    2: { desc: "parcialmente nublado", icon: "⛅" },
    3: { desc: "nublado", icon: "☁️" },
    45: { desc: "nevoeiro", icon: "🌫️" },
    48: { desc: "nevoeiro gelado", icon: "🌫️" },
    51: { desc: "garoa fraca", icon: "🌦️" },
    53: { desc: "garoa", icon: "🌦️" },
    55: { desc: "garoa intensa", icon: "🌧️" },
    61: { desc: "chuva fraca", icon: "🌧️" },
    63: { desc: "chuva moderada", icon: "🌧️" },
    65: { desc: "chuva forte", icon: "🌧️" },
    80: { desc: "chuvas rápidas", icon: "🌧️" },
    95: { desc: "tempestade", icon: "⛈️" }
};

async function carregarClimas() {
    const container = document.querySelector("#weather-cards");

    for (let c of cidades) {
        const url =
            `https://api.open-meteo.com/v1/forecast?latitude=${c.lat}` +
            `&longitude=${c.lon}&current_weather=true&hourly=relativehumidity_2m`;

        const dados = await fetch(url).then(resp => resp.json());

        const clima = dados.current_weather;
        const umidade = dados.hourly.relativehumidity_2m[0];

        const info = weatherCodes[clima.weathercode] || {
            desc: "desconhecido",
            icon: "❓"
        };

        const card = `
            <div class="card">
                <h2>${c.nome}</h2>
                <div class="weather-icon">${info.icon}</div>
                <div class="temperature">${clima.temperature}°C</div>
                <div class="description">${info.desc}</div>

                <div class="details">
                    <p><b>Umidade:</b> ${umidade}%</p>
                    <p><b>Vento:</b> ${clima.windspeed} km/h</p>
                </div>
            </div>
        `;

        container.innerHTML += card;
    }
}

carregarClimas();
