const bgInput = document.getElementById('bgInput');
const container = document.querySelector('.container');
const note = document.getElementById('note');

// Sayfa açıldığında kaydedilmiş notu yükle
note.value = localStorage.getItem('savedNote') || '';

// Sayfa açıldığında kaydedilmiş arkaplanı yükle
const savedBg = localStorage.getItem('savedBg');
if (savedBg) {
    container.style.backgroundImage = `url(${savedBg})`;
}

// Fotoğraf seçildiğinde arka planı ayarla ve kaydet
bgInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            container.style.backgroundImage = `url(${e.target.result})`;
            localStorage.setItem('savedBg', e.target.result);
        }
        reader.readAsDataURL(file);
    }
});

// Not yazıldığında kaydet
note.addEventListener('input', function() {
    localStorage.setItem('savedNote', note.value);
});
