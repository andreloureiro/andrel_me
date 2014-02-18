---
title: Pattern Library
layout: default
class: pattern-library
---

# Pattern Library

Em desenvolvimento constante :)

-----

## Cores

<ul class="list">
    <li style="width:100px;height:100px;display:inline-block;vertical-align:top;border:1px solid black;background-color:#555555;color:white;font-size:10px;text-align:center">#555555<br>rgb(85, 85, 85)<br>hsl(0, 0%, 33%)</li>
    <li style="width:100px;height:100px;display:inline-block;vertical-align:top;border:1px solid black;background-color:#FFFFFF;color:black;font-size:10px;text-align:center">#FFFFFF<br>rgb(255, 255, 255)<br>hsl(0, 100%, 100%)</li>
    <li style="width:100px;height:100px;display:inline-block;vertical-align:top;border:1px solid black;background-color:#95a5a6;color:black;font-size:10px;text-align:center">#95a5a6<br>rgb(149, 165, 166)<br>hsl(184, 9%, 62%)</li>
    <li style="width:100px;height:100px;display:inline-block;vertical-align:top;border:1px solid black;background-color:#1eca6b;color:white;font-size:10px;text-align:center">#1eca6b<br>rgb(30, 202, 107)<br>hsl(147, 74%, 45%)</li>
</ul>

-----

## Tipografia

### Headings

# A H1 heading
## A H2 heading
### A H3 heading
#### A H4 heading
##### A H5 heading
###### A H6 heading

---

### Headings com link

# [A H1 heading]()
## [A H2 heading]()
### [A H3 heading]()
#### [A H4 heading]()
##### [A H5 heading]()
###### [A H6 heading]()

---

### Bloco de texto

Contra legem facit qui id facit quod lex prohibet. Hi omnes lingua, institutis, legibus inter se differunt. Phasellus laoreet lorem vel dolor tempus vehicula. Unam incolunt Belgae, aliam Aquitani, tertiam. Quid securi etiam tamquam eu fugiat nulla pariatur. Ullamco laboris nisi ut aliquid ex ea commodi consequat.

---

### Links no bloco de texto

Ullamco [laboris]() nisi ut aliquid ex ea commodi consequat. Quam diu etiam furor iste tuus nos eludet? [At nos hinc posthac]().

---

### Strong

Ullamco laboris nisi __ut aliquid ex__ ea commodi consequat.

---

### Itálico

Ullamco laboris _nisi ut aliquid_ ex ea commodi consequat.

---

### Code

Ullamco laboris nisi `ut aliquid ex ea commodi` consequat. Quam diu etiam furor iste tuus nos eludet? At nos hinc posthac, `sitientis piros Afros`.

---

### Code Block

    .center {
        position: relative;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }

---

<h3>Quote</h3>

> Ullamco laboris nisi ut aliquid ex ea commodi consequat. Quam diu etiam furor iste tuus nos eludet? At nos hinc posthac, sitientis piros Afros.

---

### Unordered List

+ Item 1
+ Item 2
+ Item 3
    - Item 1
    - Item 2
    - Item 3
+ Item 1
+ Item 2
+ Item 3

---

### Ordered List

1. Item 1
2. Item 2
3. Item 3
    1. Item 1
    2. Item 2
    3. Item 3
1. Item 1
2. Item 2
3. Item 3

-----

<h2>Componentes de UI</h2>

<h3>Menu</h3>

<nav class="menu">
    <ul class="menu__list">
        <li class="menu__list-item">
            <a href="#" class="list-item__link list-item__link--ACTIVE">
                HOME
            </a>
        </li>
        <li class="menu__list-item">
            <a href="#" class="list-item__link">
                LABS
            </a>
        </li>
        <li class="menu__list-item">
            <a href="#" class="list-item__link">
                PROJETOS
            </a>
        </li>
    </ul>
</nav>

{% highlight html %}
<nav class="menu">
    <ul class="menu__list">
        <li class="menu__list-item">
            <a href="#" class="list-item__link list-item__link--ACTIVE">
                HOME
            </a>
        </li>
        <li class="menu__list-item">
            <a href="#" class="list-item__link">
                LABS
            </a>
        </li>
        <li class="menu__list-item">
            <a href="#" class="list-item__link">
                PROJETOS
            </a>
        </li>
    </ul>
</nav>
{% endhighlight %}

<hr>

<h3>Item de artigo na lista de artigos</h3>

<div class="post-list__item">
    <h2 class="item__title">
        <a href="#">Once upon a time</a>
    </h2>
    <p class="item__category">HTML5</p><p class="item__date">07 Feb 2014</p>
</div>

{% highlight html %}
<div class="post-list__item">
    <h2 class="item__title">
        <a href="#">Once upon a time</a>
    </h2>
    <p class="item__category">HTML5</p><p class="item__date">07 Feb 2014</p>
</div>
{% endhighlight %}

<hr>

<h3>Título de artigo</h3>

<div class="post__title">
    <h1 class="post__name">Once upon a time</h1>
    <div class="post__meta">
        <p class="post__category">HTML5</p>
        <p class="post__date">07 Feb 2014</p>
    </div>
    <div class="post__share">
        <ul class="share__list">
            <li class="share__item">
                <p>Compartilhe</p>
            </li>
            <li class="share__item">
                <a href="#" class="share__link">
                    <i class="fa fa-twitter"></i>
                </a>
            </li>
            <li class="share__item">
                <a href="#" class="share__link">
                    <i class="fa fa-facebook"></i>
                </a>
            </li>
        </ul>
    </div>
</div>

{% highlight html %}
<div class="post__title">
    <h1 class="post__name">Once upon a time</h1>
    <div class="post__meta">
        <p class="post__category">HTML5</p>
        <p class="post__date">07 Feb 2014</p>
    </div>
    <div class="post__share">
        <ul class="share__list">
            <li class="share__item">
                <p>Compartilhe</p>
            </li>
            <li class="share__item">
                <a href="#" class="share__link">
                    <i class="fa fa-twitter"></i>
                </a>
            </li>
            <li class="share__item">
                <a href="#" class="share__link">
                    <i class="fa fa-facebook"></i>
                </a>
            </li>
        </ul>
    </div>
</div>
{% endhighlight %}

<hr>

<h3>Informações do artigo</h3>

<div class="post__info">
    <p class="info__by">
        Por André Loureiro em <time class="info__date">07 Feb 2014</time>.
    </p>
</div>

{% highlight html %}
<div class="post__info">
    <p class="info__by">
        Por André Loureiro em <time class="info__date">07 Feb 2014</time>.
    </p>
</div>
{% endhighlight %}

<hr>

<h3>Artigo</h3>

<article class="post">
    <div class="post__title">
        <h1 class="post__name">Once upon a time</h1>
        <div class="post__meta">
            <p class="post__category">HTML5</p>
            <p class="post__date">07 Feb 2014</p>
        </div>
        <div class="post__share">
            <ul class="share__list">
                <li class="share__item">
                    <p>Compartilhe</p>
                </li>
                <li class="share__item">
                    <a href="#" class="share__link">
                        <i class="fa fa-twitter"></i>
                    </a>
                </li>
                <li class="share__item">
                    <a href="#" class="share__link">
                        <i class="fa fa-facebook"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <p>
        Quam diu etiam furor iste tuus nos eludet?
    </p>
    <p>
        Tu quoque, Brute, fili mi, nihil timor populi, nihil! Hi omnes lingua, institutis, legibus inter se differunt. Nihilne te nocturnum praesidium Palati, nihil urbis vigiliae. Hi omnes lingua, institutis, legibus inter se differunt. Pellentesque habitant morbi tristique senectus et netus.
    </p>
    <p>
        Phasellus laoreet lorem vel dolor tempus vehicula. Vivamus sagittis lacus vel augue laoreet rutrum faucibus. Ab illo tempore, ab est sed immemorabili.
    </p>
    <div class="post__info">
        <p class="info__by">
            Por André Loureiro em <time class="info__date">07 Feb 2014</time>.
        </p>
    </div>
</article>

{% highlight html %}
<article class="post">
    <div class="post__title">
        <h1 class="post__name">Once upon a time</h1>
        <div class="post__meta">
            <p class="post__category">HTML5</p>
            <p class="post__date">07 Feb 2014</p>
        </div>
        <div class="post__share">
            <ul class="share__list">
                <li class="share__item">
                    <p>Compartilhe</p>
                </li>
                <li class="share__item">
                    <a href="#" class="share__link">
                        <i class="fa fa-twitter"></i>
                    </a>
                </li>
                <li class="share__item">
                    <a href="#" class="share__link">
                        <i class="fa fa-facebook"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <p>
        Quam diu etiam furor iste tuus nos eludet?
    </p>
    <p>
        Tu quoque, Brute, fili mi, nihil timor populi, nihil! Hi omnes lingua, institutis, legibus inter se differunt. Nihilne te nocturnum praesidium Palati, nihil urbis vigiliae. Hi omnes lingua, institutis, legibus inter se differunt. Pellentesque habitant morbi tristique senectus et netus.
    </p>
    <p>
        Phasellus laoreet lorem vel dolor tempus vehicula. Vivamus sagittis lacus vel augue laoreet rutrum faucibus. Ab illo tempore, ab est sed immemorabili.
    </p>
    <div class="post__info">
        <p class="info__by">
            Por André Loureiro em <time class="info__date">07 Feb 2014</time>.
        </p>
    </div>
</article>
{% endhighlight %}

<hr>

<h3>Widget de compartilhamento de artigo</h3>

<div class="share">
    <p class="share__title">Compartilhe</p>
    <ul class="share__list">
        <li class="share__item">
            <a href="#" class="share__link">
                <i class="fa fa-twitter"></i>
            </a>
        </li>
        <li class="share__item">
            <a href="#" class="share__link">
                <i class="fa fa-facebook"></i>
            </a>
        </li>
    </ul>
</div>

{% highlight html %}
<div class="share">
    <p class="share__title">Compartilhe</p>
    <ul class="share__list">
        <li class="share__item">
            <a href="#" class="share__link">
                <i class="fa fa-twitter"></i>
            </a>
        </li>
        <li class="share__item">
            <a href="#" class="share__link">
                <i class="fa fa-facebook"></i>
            </a>
        </li>
    </ul>
</div>
{% endhighlight %}

<hr>

<h3>Widget de artigos relacionados</h3>

<div class="related">
    <p class="related__title">Artigos relacionados</p>
    <ul class="related__list">
        <li class="related__item">
            <a href="#" class="item__link">
                Um artigo relacionado <i class="fa fa-long-arrow-right"></i>
            </a>
        </li>
        <li class="related__item">
            <a href="#" class="item__link">
                Outro artigo relacionado <i class="fa fa-long-arrow-right"></i>
            </a>
        </li>
    </ul>
</div>

{% highlight html %}
<div class="related">
    <p class="related__title">Artigos relacionados</p>
    <ul class="related__list">
        <li class="related__item">
            <a href="#" class="item__link">
                Um artigo relacionado <i class="fa fa-long-arrow-right"></i>
            </a>
        </li>
        <li class="related__item">
            <a href="#" class="item__link">
                Outro artigo relacionado <i class="fa fa-long-arrow-right"></i>
            </a>
        </li>
    </ul>
</div>
{% endhighlight %}