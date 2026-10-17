# SPEC — Landing Page + Cardápio Digital · Restaurante Micaxu (Boituva/SP)

Fonte da verdade. NENHUM prato, bebida, preço, regra ou link pode ser omitido, alterado ou inventado.

## Objetivo
Landing page + cardápio digital interativo, altíssimo nível, profissional, mobile-first, com animações fluidas. Gastronomia brasileira contemporânea e acolhedora (frutos do mar/peixes, porções generosas, buffet variado, cervejas trincando). Paleta quente/terrosa/dourada, fundo escuro ou creme elegante.

## Animações (obrigatório)
- Hero: entrada fade-up + scale sutil na imagem de fundo.
- Scroll reveal nas seções.
- Cardápio: troca animada (layout animations) entre abas de categoria.
- Hover: elevação sutil nos cards; botões CTA (WhatsApp, Como Chegar) com pulso/brilho discreto.
- FAB flutuante de WhatsApp com animação de atenção discreta.
- Respeitar prefers-reduced-motion.

## Instagram (https://www.instagram.com/restaurantemicaxu/)
Verificar se dá para extrair fotos públicas via script leve/embed. Instagram bloqueia CORS no client; se a extração falhar: criar `/public/images/instagram/` pronta para receber imagens e usar fotos Unsplash de alta resolução fiéis aos pratos (tilápia, camarão, buffet, caipirinhas) + componente "Siga-nos no Instagram @restaurantemicaxu" com grid estilizado e link direto.

## 1. Informações gerais
- Nome: Restaurante Micaxu
- Proposta: Buffet por Kg 🍽️ & Porções / Bebidas
- Almoço por Kg: R$ 119,90 (aviso discreto: "sujeito à alteração")
- Destaque (banner/badge): Atendimento por **ORDEM DE CHEGADA** — **Não fazemos RESERVAS!**
- Horários: Terça à sexta 11h30–15h · Sábado, Domingo e Feriados 11h30–17h
- Badge dinâmico "Aberto Agora" / "Fechado no momento" pelo horário/dia atual de Brasília (America/Sao_Paulo). Segunda: fechado.
- Endereço: R. José Moschioni, 440 - Boituva/SP
- Telefone/WhatsApp: (15) 97401-7775
- Links: Instagram https://www.instagram.com/restaurantemicaxu/ · WhatsApp https://wa.me/+5515974017775 · Maps https://maps.app.goo.gl/EVmeigmwBFuHtL1P9?g_st=ac

## 2. Seção Buffet 🥘
- Título: Nosso Buffet — Saboroso & Variado
- Texto: "Nosso buffet é preparado diariamente com ingredientes frescos e selecionados, oferecendo uma grande variedade de pratos que agradam todos os paladares. Aqui, você encontra qualidade, sabor e opções para todos os gostos!"
- Destaque: Almoço por KG - R$ 119,90 (sujeito à alteração).

## 3. Cardápio (categorias)

### 🍤 1. PORÇÕES
Legenda visível: (M) = Média | (I) = Inteira

Média (M) e Inteira (I):
- Iscas de Tilápia Empanada: 45,00 (M) | 68,00 (I)
- Iscas de Tilápia Encrostada: 49,00 (M) | 74,00 (I)
- Sashimi de Tilápia: 55,00 (M) | 79,00 (I)
- Iscas de Cambucu Empanada: 49,00 (M) | 74,00 (I)
- Costelinha de Tambaqui: 45,00 (M) | 68,00 (I)
- Anéis de Lula Empanado: 55,00 (M) | 79,00 (I)
- Camarão Empanado: 95,00 (M) | 139,00 (I)
- Camarão Alho e Óleo: 95,00 (M) | 139,00 (I)
- Iscas de Carne: 55,00 (M) | 79,00 (I)
- Batata Frita: 25,00 (M) | 36,00 (I)
- Batata Frita Cheddar e Bacon: 32,00 (M) | 45,00 (I)
- Mandioca: 29,00 (M) | 42,00 (I)
- Polenta: 29,00 (M) | 42,00 (I)
- Calabresa: 34,00 (M) | 49,00 (I)

Somente Inteira (I):
- Panceta Rolo: 40,00
- Torresmo (500g): 45,00
- Frango à Passarinho: 44,00
- Coxinha da Asa Empanada (10 un.): 49,00
- Nuggets (10 un.): 29,00
- Bolinho de Bacalhau (12 un.): 57,00
- Mini Coxinha (12 un.): 40,00
- Mini Pastéis de Queijo (10 un.): 35,00

Adicionais de Molho (R$ 3,90 / unidade): Molho Rosé · Molho de Alho · Molho Mostarda · Wasabi

### 🍻 2. CERVEJAS
Long Neck (330ml):
- Black Princess 12,00
- Budweiser 12,00
- Heineken 15,00
- Heineken Zero 15,00
- Império Gold 12,00
- Império Lager 12,00
- Império Ultra 12,00
- Itaipava Pilsen (250ml) 7,00
- Itaipava Premium 12,00
- Itaipava Zero 12,00
- Malzbier 12,00
- Petra 12,00
- Petra Escura 12,00
- Stella (sem glúten) 15,00
- Corona 15,00
- Corona Zero 15,00

600ml:
- Petra 18,00
- Itaipava Premium 18,00
- Império 18,00
- Império Gold 19,00
- Império Lager 19,00
- Black Princess 19,00
- Original 19,00
- Heineken 25,00
- Corona 25,00

Especiais & Combos:
- IPA Weiss: 30,00 (Consulte-nos)
- Combos de Cerveja: Consulte-nos

### 🥤 3. REFRIGERANTES & OUTROS
Lata (350ml):
- Guaraná Antarctica 7,50
- Pepsi / Pepsi Black / Pepsi Twist 7,50
- Fanta Uva 7,50
- Schweppes 8,50

IT (Lata):
- Cola / Cola Zero 7,00
- Guaraná / Guaraná Zero 7,00
- Limão / Lemon Ice / Laranja 7,00

KS (290ml):
- Coca-Cola / Coca-Cola Zero 7,50
- Sprite 7,50
- Fanta Laranja 7,50

Outros:
- H2OH! Limão (500ml) 9,00
- H2OH! Limoneto (500ml) 9,00
- Itubaína Retrô LN (355ml) 8,50
- Tônica Antarctica / Tônica Zero Antarctica (350ml) 8,50
- Tônica Petra / Tônica Zero Petra (350ml) 8,00

### 🧃 4. ÁGUAS, SUCOS & CHÁS
Sucos Naturais e Polpas:
- Suco Natural (Copo) - Laranja 10,00
- Suco Polpa (Copo c/ água) - Acerola, Abacaxi, Abacaxi c/ Hortelã 11,00
- Suco Polpa (Copo c/ água) - Maracujá 12,00

Sucos em Lata:
- Suco Del Valle (Uva, Pêssego, Goiaba) 8,50
- Suco Kapo (Uva, Morango) 6,00

Chás (450ml): Chá Verde, Chá Branco, Chá Mate — 8,50

Águas:
- Água Com / Sem Gás 6,50
- Água de Coco (330ml) 9,00

### 🍸 5. DRINKS PRONTOS & DOSES
Drinks Prontos:
- Cabaré Ice (Limão ou Frutas Vermelhas) 8,90 (unidade)
- Smirnoff Ice (Qualquer Sabor) 8,90 (unidade)

Doses:
- 51: 6,00
- Cachaça Cabaré: 8,00
- Cachaça Zé da Varge: 8,00
- Velho Barreiro: 9,00
- Vodka: 10,00
- Campari: 11,00
- Red Label: 19,00
- Jack Daniel's: 25,00

### ⚡ 6. ENERGÉTICOS & ISOTÔNICOS
- Red Bull (269ml) 15,00
- TNT (269ml) 14,00
- Monster (473ml) 15,00
- Gatorade (Laranja ou Limão) 9,00
- Ironage TNT (Laranja ou Limão) 9,00

### 🍹 7. CAIPIRINHAS
Card interativo "Monte sua Caipirinha":
- Passo 1 — Fruta: Limão | Kiwi | Morango
- Passo 2 — Destilado: Pinga 35,00 · Cachaça 40,00 · Vodka 40,00 · Gin 50,00
- Especiais: Caipirinha de Cerveja 49,00 · Caipirinha de Cachaça com Rúcula e Pimenta 49,00

## Plano de execução
1. Planejador: stack (Next.js/React + TS + Tailwind + Framer Motion + Lucide), árvore de componentes, schema de dados (docs/ARCHITECTURE.md).
2. Git Manager: git init, .gitignore, commit inicial.
3. Programador: `menuData.ts` com 100% dos itens; imagens Instagram (script ou fallback).
4. Frontend Designer + Programador: Navbar fixa glassmorphism, Hero, Banner info rápida (Ordem de chegada / Sem reservas / Aberto-Fechado / Preço Kg), Buffet, Cardápio com abas animadas + busca, Simulador de Caipirinhas, Galeria Instagram, Footer (Maps + WhatsApp), FAB WhatsApp.
5. Revisão: responsividade mobile, testar links externos, commits finais.
