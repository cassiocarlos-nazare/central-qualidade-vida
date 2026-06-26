// Service Worker mínimo — habilita a instalação do PWA (exigência do Chrome/Android),
// sem fazer cache agressivo de conteúdo. Os dados continuam vindo direto do Supabase
// e os arquivos direto do GitHub Pages a cada visita, evitando versões desatualizadas.
// Uma estratégia de cache para uso offline pode ser adicionada depois, se necessário.

const SW_VERSION = "v1";

self.addEventListener("install", function(event){
  self.skipWaiting();
});

self.addEventListener("activate", function(event){
  event.waitUntil(self.clients.claim());
});

// Sem listener de "fetch": todas as requisições seguem direto para a rede,
// como num site comum. Isso é suficiente para o navegador considerar o
// app instalável, sem introduzir risco de conteúdo desatualizado em cache.
