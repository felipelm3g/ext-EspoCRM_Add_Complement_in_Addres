# EspoCRM Address2 (com Complement)

Extensão para **EspoCRM 9.3.7** (compatível com **>= 9.3.0**) que adiciona um novo tipo de campo **address2**, igual ao `address` padrão, porém com um campo extra **Complement**.

## O que muda

Ao criar um campo `address2` chamado, por exemplo, `adressCobranca`, o EspoCRM cria e expõe os seguintes campos (separados no DB e na API):

- `adressCobrancaStreet`
- `adressCobrancaComplement`
- `adressCobrancaCity`
- `adressCobrancaState`
- `adressCobrancaPostalCode`
- `adressCobrancaCountry`

O **Complement fica separado** (DB e API) e também entra na **formatação** do endereço, mantendo o comportamento do `address`.

## Requisitos

- EspoCRM >= 9.3.0
- PHP >= 8.1

## Instalação (passo a passo)

1. Baixe o arquivo `.zip` pronto para instalação na aba **Releases** deste repositório (Assets), por exemplo: `extesao.zip`.
2. No EspoCRM, entre como admin e vá em **Administração → Extensions**.
3. Clique em **Install**, selecione o ZIP baixado e confirme.
4. Se solicitado, execute **Rebuild / Clear Cache**.

Importante:

- Instale em **Administração → Extensions** (não use **Upgrade Manager**). Se tentar pelo Upgrade Manager, aparece “Wrong package type”.

## Como usar

1. Vá em **Administração → Entity Manager**.
2. Escolha a entidade (ex.: Account, Contact, etc.).
3. Crie um novo campo com tipo **address2** (ex.: `adressCobranca`).
4. Adicione os campos no layout em **Layout Manager** se necessário.

## Sobre o “Download ZIP” do GitHub

O botão **Code → Download ZIP** baixa o código-fonte do repositório com uma pasta raiz extra. Esse ZIP **não** é o formato que o EspoCRM espera para instalar extensões.

Use sempre o ZIP da aba **Releases** (Assets).
