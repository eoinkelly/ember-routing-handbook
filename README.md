# Ember routing handbook

by [Eoin Kelly](https://twitter.com/eoinkelly)

![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)

# Contributing

    When this is complete I will be happy to have contributions but for the moment all I ask is your patience :-)

# Status

    very much a work in progress.

# Introduction

```
Goals
```

Hello friend and welcome to a deep dive into how the Ember routing layer works.

The ember router is considered "best in class" - it is one of those ideas that the other JS frameworks are taking inspiration from (in the same way that Ember is inspired by them).

## Automatic code generation is not (yet) our friend

Ember has a really neat "automatic code generation" feature i.e. if Ember can infer that an object needs to exist and you don't specify it in your code then Ember will create an instance of it that implements some default behaviour for you. If you are in the "I don't quite get Ember yet" part of your career (hopefully a reasonably short period) then this feature is not useful and will get in the way of your understanding. When you graduate into the ["It's an Ember system, I know this!"](http://www.youtube.com/watch?v=dFUlAQZB9Ng) part of your career (a much longer period of time) then automatic code generation is your friend again.

We are going to be explicit about code in this guide - no magic tricks.


    we are going to use globals because it is simpler. Ember-CLI is the future
    but our purpose here today is to understand the routing layer not build a
    robust app and I think modules etc. would get in the way of this learning

# Why so fancy?

```
Goals
    explain why the simple rails style routing is less good on client
```



```js
// short version
window.Simple = Ember.Application.create();
```

```js
// which really does
window.Simple = Ember.Application.create();

Simple.ApplicationRoute = Ember.Route.extend({});
```


```
## Introduction
## Why so fancy?
## Every journey begins with a map
    start with route map
## Anatomy of a route object
```
