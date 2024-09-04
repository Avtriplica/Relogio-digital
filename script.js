document.addEventListener('DOMContentLoaded', () => {
    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const timeElement = document.getElementById('time');

        if (timeElement) {
            timeElement.innerText = `${hours}:${minutes}:${seconds}`;
        }
    }

    setInterval(updateClock, 1000);
    updateClock(); // Inicializa o relógio

    // Função para capturar o widget
    function captureWidget() {
        html2canvas(document.getElementById('digital-clock-transparent')).then(canvas => {
            // Exporta o canvas como PNG
            const img = canvas.toDataURL("image/png");
            const link = document.createElement('a');
            link.href = img;
            link.download = 'digital-clock.png';
            link.click();
        });
    }

    // Captura o widget após um tempo ou em resposta a um evento
    setTimeout(captureWidget, 1000); // Captura após 1 segundo, você pode ajustar conforme necessário
});
