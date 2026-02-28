document.addEventListener("DOMContentLoaded", function () {

  // CANVAS GALÁXIA
  const canvas = document.getElementById("galaxy");
  const ctx = canvas.getContext("2d");

  function ajustarCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  ajustarCanvas();
  window.addEventListener("resize", ajustarCanvas);

  let estrelas = [];

  function criarEstrelas() {
    estrelas = [];
    for (let i = 0; i < 150; i++) {
      estrelas.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2
      });
    }
  }

  criarEstrelas();

  function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    estrelas.forEach(e => {
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(animar);
  }

  animar();

  // FADE SCROLL
  const fades = document.querySelectorAll(".fade");

  function revelar() {
    const topo = window.innerHeight;
    fades.forEach(sec => {
      const pos = sec.getBoundingClientRect().top;
      if (pos < topo - 100) {
        sec.classList.add("aparecer");
      }
    });
  }

  window.addEventListener("scroll", revelar);
  revelar();

  // TEXTO DIGITANDO
  const texto = "Foi ali que eu percebi que você não era comum.";
  let i = 0;

  function digitar() {
    if (i < texto.length) {
      document.getElementById("digitando").innerHTML += texto.charAt(i);
      i++;
      setTimeout(digitar, 50);
    }
  }

  digitar();

  // CONTADOR
  const inicio = new Date("2026-02-19");
  const contador = document.getElementById("contador");

  function atualizarContador() {
    const agora = new Date();
    const dias = Math.floor((agora - inicio) / (1000 * 60 * 60 * 24));
    contador.innerText =
      `Já são ${dias} dias desde que você entrou na minha vida.`;
  }

  atualizarContador();

  // MÚSICA
  const botaoMusica = document.getElementById("ativarMusica");
  const musica = document.getElementById("musica");

  botaoMusica.addEventListener("click", function () {
    musica.play().catch(() => {});
    botaoMusica.style.display = "none";
  });

  // ESTRELA NO TOQUE
  document.addEventListener("touchstart", function (e) {
    const estrela = document.createElement("div");
    estrela.className = "estrela";
    estrela.style.left = e.touches[0].clientX + "px";
    estrela.style.top = e.touches[0].clientY + "px";
    document.body.appendChild(estrela);
    setTimeout(() => estrela.remove(), 1000);
  });

  // 3 TOQUES SECRETO
  let toques = 0;
  let tempo;

  document.addEventListener("touchstart", () => {
    toques++;
    clearTimeout(tempo);

    tempo = setTimeout(() => {
      toques = 0;
    }, 800);

    if (toques === 3) {
      alert("Você encontrou algo especial 💎");
      toques = 0;
    }
  });

});