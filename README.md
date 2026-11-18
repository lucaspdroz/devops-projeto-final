# devops-projeto-final

Projeto de implementação de uma pipeline automatizada de CI/CD utilizando **GitHub Actions**. Sempre que há uma alteração na branch `main`, o fluxo de trabalho é disparado automaticamente.

## ⚙️ Como Funciona

1. **Gatilho (`push` / `pull_request`):** Qualquer atualização enviada para a branch `main` inicia a execução.
2. **Runner:** O GitHub Actions sobe um ambiente virtual isolado.
3. **Execução:** A pipeline realiza o checkout do código e executa as etapas de validação, testes e/ou deploy configuradas no workflow.

## Estrutura

```text
devops-projeto-final/
├── .github/
│   └── workflows/
│       └── deploy.yml    # Definição da pipeline no GitHub Actions
└── README.md
```

## Como Testar

1. Faça qualquer alteração no código e envie para a `main`:
   ```bash
   git add .
   git commit -m "chore: dispara pipeline"
   git push origin main
   ```
2. Acesse a aba **Actions** aqui no repositório do GitHub para acompanhar a execução e os logs em tempo real.

3. acesse o site

[https://lucaspdroz.github.io/devops-projeto-final/](https://lucaspdroz.github.io/devops-projeto-final/)