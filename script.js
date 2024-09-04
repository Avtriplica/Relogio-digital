document.addEventListener('DOMContentLoaded', () => {
    function updateClock() {
        const now = new Date();

        // Atualiza o relógio digital
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const timeElement = document.getElementById('time');

        if (timeElement) {
            timeElement.innerText = `${hours}:${minutes}:${seconds}`;
        }
    }

    // Atualiza o relógio a cada segundo
    setInterval(updateClock, 1000);
    updateClock(); // Inicializa o relógio
});
