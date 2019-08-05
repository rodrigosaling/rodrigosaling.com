---
path: "/blog/configurando-multiplas-contas-do-github-com-ssh-para-uso-no-mesmo-computador/"
slug: "configurando-multiplas-contas-do-github-com-ssh-para-uso-no-mesmo-computador"
date: "2019-08-04"
title: "Configurando múltiplas contas do GitHub com SSH para uso no mesmo computador"
category: "blog"
tags: ['desenvolvimento', 'github', 'ssh']
published: true
---

## Introdução

Esta publicação é mais como um lembrete de como fazer, ao invés de um passo-a-passo extremamente
detalhado. Mais ou menos como o outro post sobre 
[configurações no Ubuntu](/blog/coisas-importantes-sobre-a-instalacao-do-ubuntu-no-meu-notebook).
Para gerar os arquivos com as chaves, e importar eles no GitHub, é só pesquisar por tutoriais no
Google.

## Cenário

- Você usa o mesmo computador para trabalhar em projetos pessoais e do trabalho;
- Você tem duas contas no GitHub, uma pessoal e outra do trabalho, e cada uma tem acesso a 
diferentes repositórios;
- Você não quer commitar nos repositórios pessoais com o usuário do trabalho.

## Como se faz

1. Criar os arquivos com as chaves para a conta pessoal e a conta do trabalho. Criei eles com nomes
`id_rsa_trabalho` e `id_rsa_pessoal`, ambos no diretório `~/.ssh`;
2. Incluir a chave correta em cada conta do GitHub;
3. Acessar o arquivo global de configuração do git no computador, no meu caso `~/.gitconfig`, e 
adicionar o seguinte código:

    ```
    [includeIf "gitdir:~/diretorio/do/trabalho/"]
        path = ./.gitconfig-trabalho

    [includeIf "gitdir:~/diretorio/pessoal/"]
        path = ./.gitconfig-pessoal
    ```
   
    No exemplo da referência #1, ele adiciona diretamente o código que deveria ser incluído, o que não
funcionou para mim. Eu tive que criar mais dois arquivos e botar a configuração dentro deles.

4. Criar dois novos arquivos no mesmo local do `.gitconfig`, com os nomes definidos acima, novamente
no meu caso `.gitconfig-trabalho` e `.gitconfig-pessoal`. O conteúdo deles, respectivamente:

    ```text
    [user]
        email = seuemaildetrabalho@meuemprego.com
    [core]
        sshCommand = "ssh -i ~/.ssh/id_rsa_trabalho"
    ```
   
    ```text
    [user]
        email = seuemailpessoal@algumacoisa.com
    [core]
        sshCommand = "ssh -i ~/.ssh/id_rsa_pessoal"
    ```

    Qualquer outra configuração pode ser colocada nestes arquivos. É como se fosse um `import`.
    
5. Agora cada repositório dentro dos diretórios que você especificou acima usarão os endereços de 
email e arquivos corretos. Mas eles precisam de uma configuração importante: a URL do `origin` 
precisa estar configurada com `git@github.com` ao invés do `https`:

    ```text
    [remote "origin"]
        url = git@github.com:rodrigosaling/rodrigosaling.com.git
    ```

    Quando você clona um repositório, o GitHub já te dá essa opção.
    
E era isso!

## Referências

1. https://dev.to/arnellebalane/setting-up-multiple-github-accounts-the-nicer-way-1m5m
2. https://git-scm.com/docs/git-config#_conditional_includes
