---

layout: post
title: Usando HTML5 AppCache para Web e aplicações offline
date: 2013-12-10 19:42
category: HTML5
published: true

---

Uma API do HTML5 que vem recebendo bastante atenção é a [AppCache](), que permite forçar com que o browser faça o download e armazene os arquivos que quisermos no cache do navegador.

O resultado é a otimização na economia de requests na próxima vez que o usuário precisar desse arquivo. Mas isso não quer dizer que você deve colocar o site inteiro no cache do browser, e sim o que for apenas necessário.

<!--readmore-->

## Use com parcimônia

Você deve conhecer bem o projeto que está trabalhando e saber do que o site ou aplicação precisa para definir os arquivos que irá precisar incluir no AppCache.

No meu caso, recebi um projeto em que o cliente iria apresentar alguns produtos numa exposição e queria deixar iPads em totens rodando uma aplicação com algumas características do produto em si.

O que logo veio à cabeça foi uma das maiores dificuldades nessas exposições: internet. Não sabiamos se o cliente iria ter uma rede WiFi no local, e também preferi não indicar para que eles alugassem iPads com 3G porque, convenhamos, não dá pra confiar na estabilidade do sinal das operadoras nacionais.

Então decidimos que a aplicação seria preparada para funcionar completamente offline. Assim, o cliente só precisaria utilizar a internet na primeira vez para que o aplicativo fosse baixado, e depois poderia desconectar que tudo continuaria funcionando.

## Conhecendo a API

Eu já sabia da existência da AppCache, mas ainda não havia usado, e então mergulhei no assunto. A API é muito completa e através dos seus eventos, temos acesso a vários estágios do processo de download. Nesse post, não vou abordar todos os eventos, mas no fim do post tem alguns links com bastante material bacana sobre a AppCache.

Depois de estudar as possibilidades da API, comecei a definir a interação que poderia oferecer ao usuário. Defini que iria desenvolver a aplicação em [AngularJS]() e como tinha bastante trabalho pela frente no aplicativo em si, e como quem daria suporte ao cliente no evento seria a sua equipe de TI, preparei interações bem simples.

## Declarando o arquivo manifest no HTML

{% highlight javascript linenos %}
// Manifest no HTML
{% endhighlight %}

## Checando se o browser tem suporte a AppCache

## Tratando 
