export function startClock() {

    const block =
        document.getElementById("clock");

    function update() {

        const now = new Date();

        block.textContent =
            now.toLocaleTimeString();
    }

    update();

    setInterval(update, 1000);
}