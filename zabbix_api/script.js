// Adres URL Zabbixa i klucz API
const zabbixUrl = 'https://monitoring.seeyoursco.com/zabbix/index.php';
const apiKey = 'tff2fc27fd804a0be9326fd891392f9129134daae8cd81d6ae2687111b29a9b5d';

// Dane żądania
const requestData = {
    jsonrpc: '2.0',
    method: 'host.get',
    params: {
        output: ['hostid', 'host'],
    },
    auth: apiKey,
    id: 1,
};

// Wykonaj zapytanie do API Zabbixa
fetch(zabbixUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
})
.then(response => response.json())
.then(data => {
    // Przetwórz odpowiedź API i wygeneruj listę hostów
    const hostsList = document.getElementById('hosts-list');
    data.result.forEach(host => {
        const hostItem = document.createElement('div');
        hostItem.textContent = host.host;
        hostsList.appendChild(hostItem);
    });
})
.catch(error => console.error('Błąd:', error));
