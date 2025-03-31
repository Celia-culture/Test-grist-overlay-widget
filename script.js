window.grist = window.grist || {};
window.grist.ready();

window.addEventListener("message", function(event) {
    if (event.data && event.data.table && event.data.table.records) {
        const records = event.data.table.records;
        const TRIGGER_WORD = "alerte";
        const TARGET_COLUMN = "Status";

        for (let record of records) {
            if (record[TARGET_COLUMN] && record[TARGET_COLUMN].toLowerCase() === TRIGGER_WORD) {
                showOverlay();
                break;
            }
        }
    }
});

function showOverlay() {
    let overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.color = "white";
    overlay.style.fontSize = "24px";
    overlay.style.zIndex = "100000";
    overlay.innerText = "Attention : Mot-clé détecté !";

    document.body.appendChild(overlay);
    setTimeout(() => document.body.removeChild(overlay), 3000);
}
