function loadNextPage(nextPage) {
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'loading-screen';
    loadingScreen.textContent = 'carregando a proxima pergunta (quero coisar)';
    document.body.appendChild(loadingScreen);

    // Mostra a tela de carregamento
    setTimeout(() => {
        loadingScreen.classList.add('show');
    }, 100); // Dá um pequeno delay para garantir a transição suave

    // Espera alguns segundos antes de redirecionar
    setTimeout(() => {
        window.location = nextPage;
    }, 5000); // Ajuste este tempo conforme necessário
}
