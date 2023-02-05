# Projeto Individual: Modulo 5 - Facilitando o dia a dia
Projeto Individual: Módulo 5 (Programadores Cariocas) - Facilitando o dia a dia

CONTEXTO DO PROJETO

Algumas soluções podem impactar muitas pessoas, ainda mais na tecnologia. Que tal criar uma ferramenta no terminal que vai auxiliar desenvolvedores no dia a dia com CSS?<br>

O QUE É PARA FAZER?

Vamos usar o Node para montar um código que vai receber uma lista de propriedades de CSS (ex: background-color, font-size, text-align) e vai devolver essa lista ordenada de A-Z. Ordenar o CSS ajuda a encontrar mais rápido a propriedade que precisamos alterar.<br>

➔ O código deve rodar em um laço que vai receber propriedades até a pessoa digitar a palavra “SAIR”, quando isso acontecer vai ser impresso no terminal a lista das propriedades ordenadas de A-Z uma em cada linha.<br>

O QUE DEVO ENTREGAR?

Você deve entregar um código capaz de receber uma lista de propriedades de CSS.<br>

FERRAMENTAS UTILIZADAS

• Visual Studio Code;<br>
• Node.js.<br>

CÓDIGO UTILIZADO

Abaixo o código utilizado com os comentários que foram inseridos em cada linha deste, durante a sua montagem, facilitando o entendimento e estudo do mesmo.<br>
![image](https://user-images.githubusercontent.com/113391188/216840349-1c5cbd67-e484-46ac-88d5-98216fbe875b.png)

COMANDOS UTILIZADOS

• npm init -y<br>
Este comando foi utilizado para iniciar o projeto npm com as configurações padrão.<br>
![image](https://user-images.githubusercontent.com/113391188/216835712-a9dd7eac-ec1f-44bb-a2c9-21bcbf04f154.png)

- Ajuste necessário no arquivo "package.json"<br>
Foi adicionado o "type": "module" ao arquivo package.json, para indicar ao Node.js que o script deve ser interpretado como um módulo e, portanto, deve suportar as importações de módulos. Se não incluísse essa informação, o Node.js poderia não reconhecer a sintaxe das importações e o script poderia falhar.<br>
![image](https://user-images.githubusercontent.com/113391188/216838489-c676801a-560c-48e5-a4a9-0f0c124607d3.png)

• npm i readline-sync<br>
Este comando é um módulo do Node.js, utilizado para criar os scripts interativos deste projeto.<br>
![image](https://user-images.githubusercontent.com/113391188/216836048-2b8c465a-ba6b-44f1-9616-d010671fc341.png)

• Node index.js
Este comando foi utilizado para rodar o código.<br>
![image](https://user-images.githubusercontent.com/113391188/216838868-e1ca5a32-664c-43a6-96e6-b9e1ba268011.png)

RESULTADO NO TERMINAL

![image](https://user-images.githubusercontent.com/113391188/216840547-8068acf4-a5e5-4f65-85e4-319ba695fc08.png)
