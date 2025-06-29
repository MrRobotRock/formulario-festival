// Função que gera uma mensagem personalizada
function gerarMensagem(nome, evento, data, horario, local, diasParaEvento) {
  let mensagem = "";

  if (diasParaEvento === 0) {
    // Se o evento for hoje
    mensagem = `🎉 Olá, ${nome}! O evento "${evento}" é hoje (${data}) às ${horario}, no ${local}. Não perca! 🚀`;
  } else {
    // Se ainda faltam dias para o evento
    mensagem = `Olá, ${nome}! Estamos felizes em confirmar sua participação no evento "${evento}". Ele acontecerá no dia ${data}, às ${horario}, no ${local}. Faltam apenas ${diasParaEvento} dias! 🎉 Nos vemos lá! 🚀`;
  }

  return mensagem;
}

// Teste 1: evento em 6 dias
const mensagem1 = gerarMensagem(
  "João",
  "Workshop de JavaScript",
  "10 de dezembro de 2024",
  "14h",
  "Auditório Central",
  6
);
console.log(mensagem1);

// Teste 2: evento é hoje
const mensagem2 = gerarMensagem(
  "Ana",
  "Encontro de Design",
  "25 de junho de 2025",
  "9h",
  "Sala 12",
  0
);
console.log(mensagem2);
