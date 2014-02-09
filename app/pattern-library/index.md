---
title: Pattern Library
layout: pattern-library
class: pattern-library
---

# Pattern Library

Esta é a pattern library do site. Em desenvolvimento constante.

-----

## Colors

<ul class="list">
    <li style="width:100px;height:100px;display:inline-block;vertical-align:top;border:1px solid black;background-color:#555555;color:white;font-size:10px;text-align:center">rgb(85, 85, 85)</li>
    <li style="width:100px;height:100px;display:inline-block;vertical-align:top;border:1px solid black;background-color:#FFFFFF;color:black;font-size:10px;text-align:center">rgb(255, 255, 255)</li>
    <li style="width:100px;height:100px;display:inline-block;vertical-align:top;border:1px solid black;background-color:#95a5a6;color:black;font-size:10px;text-align:center">rgb(149, 165, 166)</li>
    <li style="width:100px;height:100px;display:inline-block;vertical-align:top;border:1px solid black;background-color:#1eca6b;color:white;font-size:10px;text-align:center">rgb(30, 202, 107)</li>
</ul>

-----

## Headings

# A H1 heading
## A H2 heading
### A H3 heading
#### A H4 heading
##### A H5 heading
###### A H6 heading

-----

## Headings with link

# [A H1 heading]()
## [A H2 heading]()
### [A H3 heading]()
#### [A H4 heading]()
##### [A H5 heading]()
###### [A H6 heading]()

_____

## Text

Contra legem facit qui id facit quod lex prohibet. Hi omnes lingua, institutis, legibus inter se differunt. Phasellus laoreet lorem vel dolor tempus vehicula. Unam incolunt Belgae, aliam Aquitani, tertiam. Quid securi etiam tamquam eu fugiat nulla pariatur. Ullamco laboris nisi ut aliquid ex ea commodi consequat.

Ullamco laboris nisi ut aliquid ex ea commodi consequat. Quam diu etiam furor iste tuus nos eludet? At nos hinc posthac, sitientis piros Afros. Quae vero auctorem tractata ab fiducia dicuntur. Quis aute iure reprehenderit in voluptate velit esse. Morbi odio eros, volutpat ut pharetra vitae, lobortis sed nibh.

At nos hinc posthac, sitientis piros Afros. Inmensae subtilitatis, obscuris et malesuada fames. Paullum deliquit, ponderibus modulisque suis ratio utitur. Quae vero auctorem tractata ab fiducia dicuntur. Unam incolunt Belgae, aliam Aquitani, tertiam. Donec sed odio operae, eu vulputate felis rhoncus.

-----

## Text with link

Ullamco [laboris]() nisi ut aliquid ex ea commodi consequat. Quam diu etiam furor iste tuus nos eludet? [At nos hinc posthac](), sitientis piros Afros. Quae vero auctorem tractata ab fiducia dicuntur. Quis aute iure reprehenderit in voluptate velit esse. Morbi odio eros, [volutpat ut]() pharetra vitae, lobortis sed nibh.

-----

## Strong

Ullamco laboris nisi __ut aliquid ex__ ea commodi consequat.

-----

## Italic

Ullamco laboris _nisi ut aliquid_ ex ea commodi consequat.

-----

## Code

Ullamco laboris nisi `ut aliquid ex ea commodi` consequat. Quam diu etiam furor iste tuus nos eludet? At nos hinc posthac, `sitientis piros Afros`. Quae vero auctorem tractata ab fiducia dicuntur.

-----

## Code Block

    .center {
        position: relative;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }

-----

## Quote

> Ullamco laboris nisi ut aliquid ex ea commodi consequat. Quam diu etiam furor iste tuus nos eludet? At nos hinc posthac, sitientis piros Afros. Quae vero auctorem tractata ab fiducia dicuntur. Quis aute iure reprehenderit in voluptate velit esse. Morbi odio eros, volutpat ut pharetra vitae, lobortis sed nibh.

-----

## Unordered List

+ Item 1
+ Item 2
+ Item 3
    - Item 1
    - Item 2
    - Item 3
+ Item 1
+ Item 2
+ Item 3
 
-----

## Ordered List

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

## Menu

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

-----

## Article list item

<div class="post-list__item">
    <h2 class="item__title">
        <a href="#">Um belo título para um dia de merda</a>
    </h2>
    <p class="item__category">HTML5</p><p class="item__date">07 Feb 2014</p>
</div>

-----

## Article title

<div class="post__title">
    <h1 class="post__name">Um belo título para um dia de merda</h1>
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

-----

## Article info

<div class="post__info">
    <p class="info__by">
        Por André Loureiro em <time class="info__date">07 Feb 2014</time>.
    </p>
</div>

-----

## Article share

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

-----

## Related articles

<div class="related">
    <p class="related__title">Artigos relacionados</p>
    <ul class="related__list">
        <li class="related__item">
            <a href="#" class="item__link">
                <i class="fa fa-code"> Outro dia de merda</i>
            </a>
        </li>
        <li class="related__item">
            <a href="#" class="item__link">
                <i class="fa fa-code"> Mais um dia de merda</i>
            </a>
        </li>
    </ul>
</div>

_____

## Article

<article class="post">
    <div class="post__title">
        <h1 class="post__name">Um belo título para um dia de merda</h1>
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


