import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer` 

let resetButton = document.getElementById('reset-button');

    resetButton.addEventListener('click', function () {
    document.querySelector('textarea[name="user-input"]').value = '';
    });

