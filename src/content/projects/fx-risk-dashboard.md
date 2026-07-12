---
title: FX Risk & Cost Dashboard
order: 5
summary: An interactive dashboard that turns live ECB exchange-rate data into market-risk metrics (rolling volatility, VaR and Expected Shortfall) plus a mid-market conversion-cost simulator.
tags: ['Python', 'Plotly', 'Market risk']
role: 'Quant project'
year: '2026'
metric: 'VaR, Expected Shortfall & a conversion-cost simulator on live ECB rates'
repoUrl: 'https://github.com/Richi9PP/Fx_risk_dashboard'
---

## Problem

Anyone holding or moving money across currencies faces two questions that are easy to hand-wave and hard to actually see: how much could an FX position lose over a given horizon, and how much is a conversion really costing versus the mid-market rate? I wanted a single view that answers both from real data.

## Solution

An interactive dashboard built on live ECB reference rates (pulled from the Frankfurter API). It computes rolling volatility and a correlation view across currency pairs, then quantifies downside with **Value at Risk**, **Expected Shortfall** (the average loss in the tail *beyond* VaR, which is the number that actually matters when things go wrong), and drawdowns.

On top of the risk view sit two things that make it more than a chart: a **mid-market vs. markup conversion-cost simulator** that shows the true cost of a conversion against the mid rate rather than a provider's headline number, and a **random-walk forecast benchmark**, because any forecast worth showing has to beat the naïve one first.

## Stack

Python, pandas, NumPy, Plotly; live ECB rates via the Frankfurter API.

## Outcome

The result is a tool, not a static report: change the horizon, the pair, or the amount and the risk, the cost, and the benchmark all update with it. It brings the two things a treasury desk (or a careful traveller) actually cares about, tail risk and true conversion cost, into one place, driven by real rates.
