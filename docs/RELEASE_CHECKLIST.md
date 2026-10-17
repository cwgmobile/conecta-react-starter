# Checklist de homologação e release — modelo

## Escopo e conteúdo
- [ ] Briefing e critérios de aceite revisados
- [ ] Identidade visual oficial aplicada com autorização
- [ ] Páginas, links, formulários, mensagens e imagens revisados
- [ ] Responsividade em desktop e mobile
- [ ] Navegação por teclado e acessibilidade básica

## Engenharia
- [ ] `.env.local` fora do Git e sem segredos no frontend
- [ ] Dependências e vulnerabilidades revisadas
- [ ] `npm.cmd run typecheck` aprovado
- [ ] `npm.cmd run build` aprovado
- [ ] `npm.cmd test` aprovado
- [ ] `npm.cmd run test:e2e` aprovado
- [ ] Rotas diretas funcionam no ambiente de produção
- [ ] API/backend real ou mocks claramente identificados
- [ ] Estados de erro e vazio revisados

## Produção e entrega
- [ ] Preview de produção revisado
- [ ] Lighthouse executado e valores reais registrados
- [ ] Links, domínio, HTTPS, SEO e metadados verificados
- [ ] Logs sem dados pessoais e sem segredos
- [ ] README, diário, testes e issues atualizados
- [ ] Limitações conhecidas explicitadas
- [ ] Evidências e versão/commit registrados
- [ ] Aprovação do responsável documentada

**Estado atual da matriz:** instalação npm e home em navegador confirmadas pelo usuário; demais itens não foram homologados nesta conversa.
