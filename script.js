document.addEventListener("DOMContentLoaded", () => {

  const posts = document.querySelectorAll(".post");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.3 });

  posts.forEach(post => {
    observer.observe(post);
  });

  const frases = [
    "Você não precisa ser forte o tempo todo.",
    "Eu te admiro demais.",
    "Seu jeito muda o ambiente inteiro.",
    "Você é mais importante do que imagina.",
    "Respira. Eu tô aqui sempre.",
    "Mesmo nos seus dias difíceis, você continua incrível."
  ];

  const botao = document.getElementById("botaoCarinho");
  const caixa = document.getElementById("mensagem");
  const texto = document.getElementById("textoMensagem");
  const fechar = document.getElementById("fechar");

  botao.addEventListener("click", () => {
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    texto.textContent = fraseAleatoria;
    caixa.style.display = "flex";
  });

  fechar.addEventListener("click", () => {
    caixa.style.display = "none";
  });

});
