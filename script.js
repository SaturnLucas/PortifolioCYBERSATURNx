// CONFIGURAÇÃO DO EFEITO MATRIX
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

// --- CONFIGURAÇÃO DA GALERIA DE PROJETOS ---

const meusProjetos = [
    /* Exemplo de como adicionar:
    {
        titulo: "Project_Alpha.sh",
        descricao: "Automação de análise de sistemas.",
        tags: ["Python", "Bash"],
        link: "https://github.com/seu-usuario/projeto"
    }, 
    */
];

const container = document.getElementById('project-gallery');

function renderizarProjetos() {
    if (meusProjetos.length === 0) {
        container.innerHTML = `
            <div class="project-card" style="grid-column: 1 / -1; text-align: center; opacity: 0.6;">
                <h3>[ STATUS: EMPTY ]</h3>
                <p>Nenhum repositório detectado. Mais projetos em breve...</p>
            </div>
        `;
        return;
    }


    container.innerHTML = meusProjetos.map(proj => `
        <article class="project-card" onclick="window.open('${proj.link}', '_blank')">
            <h3>${proj.titulo}</h3>
            <p>${proj.descricao}</p>
            <div class="tags">
                ${proj.tags.map(tag => `<span>${tag}</span>`).join('')}
            </div>
        </article>
    `).join('');
}


renderizarProjetos();

// EFEITO DE DIGITAÇÃO (TYPEWRITER)
const myName = "CyberSaturnX";
let index = 0;

function typeWriter() {
    if (index < myName.length) {
        document.getElementById("typewriter").innerHTML += myName.charAt(index);
        index++;
        setTimeout(typeWriter, 150);
    }
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

setInterval(drawMatrix, 35);
window.onload = typeWriter;