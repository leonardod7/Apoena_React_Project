
# Projeto Front End

<div>
<img src="https://github.com/leonardod7/Apoena/assets/107505958/c4aae639-917a-4f5e-a448-b501f5bcf228" width='200px' height='110px'  />
</div>



*******
Sumário Executivo 
 1. [Partes Envolvidas](#partesenvolvidas)
 2. [Contexto do Problema](#contextoproblema)
 3. [Missão da Aplicação](#missao)
 4. [Escopo do Projeto](#escopo)
 5. [Cronograma do Projeto](#cronograma)
 6. [Requisitos](#requisitos)
 7. [Casos de Uso](#casosdeuso)
 8. [Tecnologias e Frameworks Utilizadas](#tecnologia)
 9. [Considerações Finais](#final)
 10. [Depoimentos do nosso time](#depoimentos)
 11. [Referências e Documentação Suporte de Apoio](#ref)



*******

<div id='partesenvolvidas'/> 

## Partes Envolvidas

### Cliente: Gargo

Partes envolvidas: 

- Eduardo Mangeli - Product Owner / Professor da Disciplina (IBMEC)

- Ana Beatriz - CEO Gargo

- Victor Machado - Coordenador do Curso de I.A (IBMEC) 

### Squad: IBMEC

Partes envolvidas: 

- André Silveira (Dev);

- Daniel Gripa (Scrum Master / Dev);

- Ivo Lavacek (Dev);

- Joao Araujo (Dev);

- Leonardo Costa (PO/Dev);

- Pedro Lustosa (Dev);

- Thalles Diepes (Dev);


<div id='contextoproblema'/> 

## Contexto do Problema

A Gargo é uma fintech que oferece soluções de backoffice (terceirização) financeiro, inteligência de dados e negócio para
tomadas de decisões estratégicas e tecnologias para automatização e integração de sistemas, instituições e processos
financeiros.

Sua missão, é gerar valor para o maior número de pessoas através das melhores experiências e soluções na área
financeira.

Atualmente, a Gargo possui em desenvolvimento uma plataforma robusta para gestão financeira de fluxo de caixa e
automação de processos e, visando customizar a plataforma, o time busca o desenvolvimento de protótipos que reflitam
novas funcionalidades para complementar e otimizar a experiência do usuário. Cabe ressaltar que essas novas
funcionalidades visam o aumento da captação de clientes e potencializar o faturamento da empresa.

Diante desse problema, a Gargo deseja assessoria para o desenvolvimento de MVP para os requisitos que serão
apresentados nas próximas seções.


<div id='missao'/> 

## Missão da Aplicação

A missão do software é oferecer novos meios de pagamentos proporcionado ao usuario melhoria na experiência via oferta de novos serviços.



<div id='escopo'/>

## Escopo do Projeto

O projeto deverá entregar em sua plenitude uma nova seção capaz de oferecer ao usuários, novos meios de pagamento. Além disso, o sistema deverá apresentar a funcionalidade de informar aos usuários de planos básicos a disponibilidade de novos produtos e os seus benefícios. Será utilizado como base, o material de protótipo encaminhado pela GARGO


<div id='cronograma'/>

## Cronograma do Projeto

O projeto será dividido em 2 fases, totalizando 4 meses de duração, conforme diagrama abaixo:


![CronogramaAPOENA](https://github.com/leonardod7/Apoena/assets/107505958/52e79c49-809a-4a34-9a93-a3620e3d446f)


<div id='requisitos'/>

## Requisitos

Requisitos Funcionais:
- RF-1: Uma sessão premium relativo a meios de pagamentos: emitir boletos, notas, link de pagamentos por pix e cartão de crédito (modular).
- RF-2: Ao conferir que o cliente está pagando mais caro em um serviço deverá aparecer uma mensagem o notificando.
- RF-3: Ao fazer a checagem do preço pago pelo cliente em serviços, exibir a quantidade estimada de dinheiro que o cliente pode economizar ao fazer a troca de serviço.
- RF-4: A página para contratar Meio de Pagamento. 
- RF-5: Ter um sistema de notificações que informe aos clientes as novas funcionalidades e benefícios disponíveis nos planos pagos e como eles podem acessá-los.


Requisitos Não-Funcionais:
- RN-1: O sistema deve ser modularizado, garantindo que somente os clientes autorizados tenham acesso a determinada funcionalidade financeira.
- RN-2: Mobile First: O software deve ser responsivo para acesso via dispositivos móveis e ter uma interface amigável e intuitiva.
- RN-3: Segurança: O software deve garantir a segurança das informações inseridas e armazenadas no sistema, através de medidas como criptografia, autenticação e autorização.
- RN-4: Tecnologia/Arquitetura: React, Arquitetura via Rest API e construção de Data Base.
 
 
<div id='casosdeuso'/>
 
## Casos de Uso

<img width="618" alt="Captura de Tela 2023-06-19 às 15 56 17" src="https://github.com/leonardod7/Apoena/assets/107505958/c490c4c2-7aac-4b58-9056-fab43561adc4">

<img width="618" alt="Captura de Tela 2023-06-19 às 15 56 30" src="https://github.com/leonardod7/Apoena/assets/107505958/3907c21c-96e0-4ca1-9864-6f9862e93502">

<img width="618" alt="Captura de Tela 2023-06-19 às 15 56 40" src="https://github.com/leonardod7/Apoena/assets/107505958/cd139c81-6be9-4d94-9f9b-b7af0fae7964">

<img width="618" alt="Captura de Tela 2023-06-19 às 15 56 51" src="https://github.com/leonardod7/Apoena/assets/107505958/da436d34-72ab-46df-a71d-2a0e1f25fb6f">

<img width="633" alt="Matriz" src="https://github.com/leonardod7/Apoena/assets/107505958/6f808545-b61f-4def-932e-774a45e91cfd">



<div id='tecnologia'/>

## Tecnologias e Frameworks Utilizadas:

Colocamos abaixo, as especificações de cada tecnologia utilizada durante a fase de desenvolvimento do projeto, prototipação e linguagem server-side e client-side:

Especificação:

 * **Client-Side** : No lado do cliente, o software foi escrito utilizando JavaScript / React. A aplicação deve rodar nativamente no browser, sem necessidade de plug-ins. Ou seja, assume-se que a aplicação deve gerar HTML, Javascript e CSS para a interface com o cliente. Importante ressaltar que a aplicação é compatível com os principais navegadores do mercado, dentre eles: Mozilla FireFox, Google Chrome, Safari e Internet Explore.

Ferramenta IDE (Integrated Development Environment - Ambiente de Integração de Desenvolvimento)
 * **IDE** : VSCode & PyCharm Professional.

Controle e Versionamento
 * **Sistema** : Git & GitHub.

Ferramenta de Prototipação e Design
 * **Sistema** : Adobe Illustrator, Adobe Photoshop e Figma.

Gestão de Projeto
 * **Framework** : Scrum, Agile, Trello e Kanban.





<div id='final'/>

## Considerações Finais:

Gostaríamos de encerrar a entrega do MVP desenvolvido, concluindo assim mais um ciclo de trabalho e dedicação. Durante todo o processo de desenvolvimento, nossa equipe se empenhou em criar uma solução que atendesse às necessidades e expectativas estabelecidas.

Ao longo do projeto, enfrentamos desafios, aprendemos lições valiosas e superamos obstáculos com determinação e colaboração. Cada membro da equipe contribuiu com suas habilidades e conhecimentos para garantir a qualidade e o sucesso do software.

Agradecemos a todos os envolvidos, incluindo a equipe de desenvolvimento, os stakeholders e os usuários finais, por sua confiança, apoio e feedback ao longo do processo. Suas contribuições foram fundamentais para moldar o resultado final.

Nosso objetivo era entregar um MVP que proporcionasse valor, eficiência e usabilidade. Esperamos que o produto final atenda plenamente às suas necessidades e supere suas expectativas. Estamos abertos a sugestões de melhorias contínuas e estamos comprometidos em fornecer suporte adicional, se necessário.

Este projeto representa não apenas um marco no desenvolvimento de software, mas também uma oportunidade de aprendizado e crescimento para nossa equipe. Agradecemos por nos dar a oportunidade de trabalhar neste projeto desafiador e estamos ansiosos para futuras colaborações.

Mais uma vez, agradecemos a confiança depositada em nossa equipe e nos sentimos honrados em ter sido parte deste projeto. Esperamos que o MVP entregue traga benefícios e impacto positivo para a continuidade do plano de otimização e melhoria do software existente.

Atenciosamente,

SQUAD IBMEC Centro



<div id='depoimentos'/>

## Depoimento do nosso time:

André:
  >*Pra mim foi muito interessante ver na prática como um projeto frontend é feito, eu pude ver como as coisas se encaixam num todo e funcionam de forma bem intuitiva com react. A possibilidade de criar componentes reutilizáveis e mesclar HTML e Javascript em um único arquivo foi o que facilitou a minha compreensão do código e também agilizou o processo de desenvolvimento. Por fim, foi legal eu ter usado o git e github e ver como que funciona a colaboração e trabalho em equipe em projetos de software.*

Daniel:
  >**

Ivo:
  >*O projeto foi desafiador, mas extremamente gratificante para o aprendizado prático do desenvolvimento front-end*

João:
  >*Foi um projeto bem desafiador, aprendi bastante, aprimorando meus conhecimentos nas linguagens de programação, mas também desenvolvendo o trabalho em equipe.*

Leonardo:
  >*Foi uma oportunidade ímpar poder vivencia na prática o processo de construção de um MVP para uma Startup. Conseguimos passar por todos os conceitos e etapas do ciclo básico de desenvolvimento de software, focado no front-end. Conseguimos colocar em prática todo aprendizado adquirido nas outras disciplinas dentro do semestre, como UI&UX, Desenvolvimento Ágil e desenvolvimento web. Isso facilitou muito nossa curva de aprendizado*

Pedro:
  >*Só tenho a agradecer por participar de um projeto tão grande , com pessoas tão dedicadas*

Thalles:
  >*Foi um projeto bem desafiador, no qual consegui aprender bastante coisa e realmente me senti atuando num squad ágil de desenvolvimento. Utilizar os métodos ágeis para gestão foi um grande diferencial.*






<div id='ref'/>

## Referências e Documentação Suporte de Apoio

1. [Prototipo Figma](https://www.figma.com/file/UQwjuJDpzlV7yrwtp6r3X7/Prot%C3%B3tipo?node-id=0%3A1&t=zQOwD6tRuLFyWUhV-1)
2. [Apresentação PPT]().
3. [Diagrama de componentes]








