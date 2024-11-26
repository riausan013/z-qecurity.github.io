// Matrix animation setup
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrixCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const characters = matrixCharacters.split("");
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00FF00";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}
setInterval(drawMatrix, 50);

// Email check function
function checkBreach() {
    const email = document.getElementById("emailInput").value.trim();
    const resultDiv = document.getElementById("result");

    if (email === "") {
        resultDiv.innerHTML = "<p style='color: red;'>Please enter a valid email address.</p>";
        return;
    }

    resultDiv.innerHTML = "<p>Checking for breaches...</p>";

    // Simulating a breach check for the specific email
    setTimeout(() => {
        if (email === "ryanshell003@gmail.com") {
            resultDiv.innerHTML = `
                <div class="notification">
                    Alert !! Your email has been found in 1 data breach.<br>
                    Breaches you were pwned in: <a href="https://qtext.io/" target="_blank">https://qtext.io/</a>
                </div>`;
        } else {
            resultDiv.innerHTML = `<p style='color: lightgreen;'>No breaches found for ${email}!</p>`;
        }
    }, 2000);
}

// Adjust canvas size on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
