let hidden = document.querySelector('.hide');

document.getElementById('show').addEventListener('click', function(){
    if (hidden.style.display === 'block') {
        hidden.style.display = 'none';
    } else {
        hidden.style.display = 'block';
    }
});

