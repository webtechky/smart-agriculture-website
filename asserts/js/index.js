document.getElementById('current-year').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchSuggestions = document.getElementById('searchSuggestions');

    const products = [
        'inputmarketplace','agribhumi','onlineauction','emandi','agripay','iot','crop','intelligent','products','services','input','output'
    ];

    function showSuggestions(input) {
        searchSuggestions.innerHTML = '';
        const filtered = products.filter(p => p.toLowerCase().includes(input.toLowerCase()));
        filtered.slice(0,5).forEach(suggestion => {
            const div = document.createElement('div');
            div.classList.add('suggestion-item');
            div.textContent = suggestion;
            div.addEventListener('click', () => {
                const pages = {
                    inputmarketplace: 'iputoutput.html',
                    agribhumi: 'AgriBhumi.html',
                    onlineauction: 'Onlineaction.html',
                    emandi: 'Emandi.html',
                    agripay: 'Agripay.html',
                    iot: 'Iot.html',
                    crop: 'crop.html',
                    products: 'Products.html'
                };
                if(pages[suggestion]) window.location.href = pages[suggestion];
                else searchInput.value = suggestion;
                searchSuggestions.innerHTML = '';
            });
            searchSuggestions.appendChild(div);
        });
        if(filtered.length === 0){
            const div = document.createElement('div');
            div.classList.add('suggestion-item');
            div.textContent = 'No matching products found';
            searchSuggestions.appendChild(div);
        }
    }

    searchInput.addEventListener('input', function() {
        const inputText = this.value.trim();
        if(inputText.length > 0) showSuggestions(inputText);
        else searchSuggestions.innerHTML = '';
    });

    document.addEventListener('click', e => {
        if(!searchSuggestions.contains(e.target) && e.target !== searchInput) searchSuggestions.innerHTML = '';
    });
});