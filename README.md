# Conversor de IP para Binário

Uma ferramenta simples que converte endereços IPv4 em sua representação binária, útil para estudos de redes, TI e desenvolvimento.

## Funcionalidades

- Converte endereços IPv4 válidos em sua representação binária (32 bits)
- Validação rigorosa dos octetos (0-255)
- Formatação correta com zeros à esquerda
- Interface web intuitiva

## Como Usar

### Interface Web
1. Clone este repositório
2. Abra o arquivo `index.html` em um navegador
3. Insira um endereço IPv4 no campo de entrada
4. Clique em converter para ver o resultado em binário

### Exemplo de Uso
```javascript
// Para uso direto em JavaScript:
const ipBinario = conversionToBinary("192.168.1.1");
console.log(ipBinario); 
// Retorna: "11000000.10101000.00000001.00000001"
```

## Centro do codigo

### `conversionToBinary(ip)`

Converte um endereço IPv4 em sua representação binária.

**Parâmetros:**
- `ip` (String): Endereço IPv4 no formato "xxx.xxx.xxx.xxx"

**Retorno:**
- String: Representação binária no formato "bbbbbbbb.bbbbbbbb.bbbbbbbb.bbbbbbbb"

**Exceções:**
- `Error`: Lançada quando:
  - O IP não possui exatamente 4 octetos
  - Um octeto não é um número válido
  - Um octeto está fora do intervalo 0-255

### `printResult()`

Função para uso em interfaces web que lê o valor de um campo de entrada e exibe o resultado em um campo de saída.

**Requisitos HTML:**
```html
<input type="text" id="areaip" placeholder="Digite o IP">
<textarea id="resultbinary" readonly></textarea>
<button onclick="printResult()">Converter</button>
```

## Estrutura do Projeto

```
├── index.html          # Interface principal
├── script.js          # Código JavaScript (contém as funções)
├── style.css          # Estilos (opcional)
└── README.md          # Este arquivo
```

## Exemplos de Conversão

| IP Decimal       | IP Binário                           |
|------------------|--------------------------------------|
| 192.168.1.1      | 11000000.10101000.00000001.00000001 |
| 10.0.0.1         | 00001010.00000000.00000000.00000001 |
| 255.255.255.0    | 11111111.11111111.11111111.00000000 |
| 8.8.8.8          | 00001000.00001000.00001000.00001000 |

## Requisitos

- Navegador web moderno com suporte a JavaScript
- Para uso direto: Node.js (opcional)

## Limitações

- Suporta apenas IPv4
- Não realiza validação de classes de IP ou máscaras de rede
- Focado apenas na conversão básica para binário

## Aplicações Práticas

- Estudos de redes de computadores
- Debugging de configurações de rede
- Aulas de TI e programação
- Ferramenta de apoio para administradores de rede

## Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a GNU General Public License v2.0.

```
Copyright (C) 2024 [Seu Nome]

Este programa é software livre; você pode redistribuí-lo e/ou
modificá-lo sob os termos da GNU General Public License
conforme publicada pela Free Software Foundation; versão 2
da Licença.

Este programa é distribuído na esperança de que será útil,
mas SEM QUALQUER GARANTIA; sem mesmo a garantia implícita de
COMERCIALIZAÇÃO ou ADEQUAÇÃO A UM DETERMINADO FIM. Veja a
GNU General Public License para mais detalhes.

Você deve ter recebido uma cópia da GNU General Public License
junto com este programa; se não, escreva para a Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
```

Para ver a licença completa, acesse: [GNU GPL v2.0](LICENSE)

´´´

**Assinado:** dvcDaniel
