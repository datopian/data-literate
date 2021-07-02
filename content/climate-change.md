---
title: Climate Change
author: Rufus Pollock
---

This evolving document represents my own investigation into the climate crisis and what we can (and should) be doing about it. The aim is to document and share my path through this topic rather than to offer anything original.

Motivating questions:

* What is actually happening? For example:
  * How much CO2 (and GHGs) are we emitting? How much is that relative to the past?
  * What impact has there been on the temperature and the climate? What is likely future impact?
  * What impact has there been on the planet and on humans -- already and in the future?
* What's causing this? For example, what is the role of different countries and different energy sources in generating CO2 and GHGs?
  * Also what actors -- countries, corporations etc -- are behind this, and who is blocking change?
* What can we do about all of this?
  * What is the case for action?
  * What policies can we use to reduce emissions?
  * What cleantech do we need, what investment do we need?
  * What kind of mitigation or adaptation is possible?
  * Is it "too late" to stop dangerous warming?
* What is being done? By whom?

## Table of Contents

## Conceptual Model

I am using the following very rough conceptual model for thinking about the climate crisis and the policies to address it.


```
1. Human Processes (e.g. energy production, travel etc)
      |
      |           <--- Policy (emissions controls, cleantech)
      |
      V
2. Green House Gases (GHG)
      |
      |           <--- Sequestration
      |
      V
3. Climate Change (temperature, sea level, weather patterns)
      |
      |
      |
      V
4. Direct Impact (storms, ecosystem changes etc)
      |
      |            <----- Policy (mitigation, adaptation, transfers)
      |
      V
5. Indirect Impact (homes lost, hurricance damage)
      |
      |            <----- Policy (rebuilding, compensation)
      |
      V
6. Impact on Lives  (measured in well-being $)
```

Reading IPCC reports, it appears that the greatest efforts -- and the greatest certainty -- is around steps two and three: documenting GHG emissions and their link to climate change.

My intention, for the present, is to focus on these: to gather the best summary data on these two areas and set it out in a simple and compelling way.

Later one could expand in two directions. First, backwards into the causes of GHG. In particular, what is the composition of energy production and use and how could that change. 

Second, forwards into the impact. The impacts is ultimately what matters but also the area where there is the greatest uncertainty. Right now we could focus on some of the things that have already been happening: the increasing number of forest fires, the growing number of extreme weather incidents etc. Just documenting them and assigning some probability score would be useful.

## Situation

### Temperatures are rising

Global temperatures have been rising, especially since 1980, relative to historical norm and this seems to be accelerating.

<VegaLite spec={ 
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "_files/HadCRUT.5.0.1.0.analysis.summary_series.global.annual.csv"},
  "width": 600,
  "height": 250,
  "mark": "line",
  "encoding": {
    "x": {"field": "Time", "type": "temporal"},
    "y": {"field": "Anomaly (deg C)", "type": "quantitative"}
  }
}
} />


## What do we need to do?

### What emissions reductions do we need?

![](https://ourworldindata.org/app/uploads/2020/11/15C-and-2C-mitigation-scenarios-1536x987.png)

Source: fn 10 in https://ourworldindata.org/worlds-energy-problem

### What options are there for doing that?

* Energy
* Food
* ...

TODO: sources of emissions

* transportation (29%), electricity (28%), industry (22%), commercial and residential (12%), and agriculture (9%) (https://www.climatecentral.org/gallery/graphics/emissions-sources-2020#:~:text=As%20defined%20by%20the%20Environmental,%2C%20and%20agriculture%20(9%25).)
* https://www.epa.gov/ghgemissions/global-greenhouse-gas-emissions-data - sourced from IPCC (2014). Climate Change 2014: Mitigation of Climate Change


### Which are feasible?

### Can we get enough from Solar (alone)?

See https://www.worldbank.org/en/topic/energy/publication/solar-photovoltaic-power-potential-by-country




## Reading List

See Zotero bibliography: https://www.zotero.org/groups/1488090/life-itself/collections/XA8U7WGT

* [Sustainable Energy without the Hot Air](./mckay-without-the-hot-air.md)
* [Project Drawdown](https://projectdrawdown.org/) - see also https://github.com/datasets/awesome-data/issues/329
* [IPCC - Special Report - Global Warming of 1.5 ºC](https://www.ipcc.ch/sr15/)
* https://www.unep.org/interactive/emissions-gap-report/2020/ - basically things are not looking good!

  > The world is still heading for a catastrophic temperature rise in excess of 3°C this century – far beyond the Paris Agreement goals of limiting global warming to well below 2°C and pursuing 1.5°C."
  >
  > ...
  >
  > So far, action on a green fiscal recovery has been limited. Around one-quarter of G20 members have dedicated shares of their spending, up to 3 per cent of GDP, to low-carbon measures. For most others, spending has mostly been high-carbon or neutral.



## Other work

* With Tommaso Venturini of KCL / Sciences Po I built the [COP21 Treaty Texts website][cop21] in November / December 2015
* With Tommaso Venturini of KCL / Sciences Po I have been working on [analyzing climate negotations][climate-talks]

[cop21]: http://cop21.okfnlabs.org/
[climate-talks]: https://github.com/rgrp/climate-negotiations


## TODO

* Base framework for understanding climate stuff.
  * Framework = sink/source
  * Framework for effects
  * Framework for overall question = an issue tree 
* How efficient could solar get? (Why? We can calculate amount of energy arriving from sun pretty well and combining that with solar efficiency tells us how energy we can obtain per m2 and hence how much area we need to obtain X amount of energy production)
  * What does efficiency mean? There is rate efficiency and actual 
  * McKay thought 10% was good. today in 2020 we are seeing things in 15-20% range
  * See https://en.wikipedia.org/wiki/Solar_cell_efficiency. Answer for single layer voltaics is theoretical limit is Shockley-Queiseer limit of ~33%. that is theoretical and given temperature, dust etc my guess is "real" efficiency is going to quite a bit lower so actual "real" efficiency of 20% would be good (?)
* how much money is spent on techno stuff (e.g. direct air capture - $100m alone with XPrize funded by Musk) vs social change e.g. better education for women?

### Data

* Solar capacity installed per year so that we know how fast we are making progress on supply in this area
  * Capacity (total and installed)
  * Supply (TWh or millions of KwH)
  * One answer is here: https://www.iea.org/reports/solar-pv.

    | Year | Generation (TWh) | % of total energy |
    |--|--|
    |2008|12|
    |2009|20|
    |2010|32|
    |2011|63|
    |2012|99|
    |2013|139|
    |2014|190|
    |2015|251|
    |2016|329|
    |2017|444|
    |2018|585|
    |2019|720| 2.7 |

* Energy demand (i.e. use) per person per country with breakdown if possible
* Wind capacity etc
