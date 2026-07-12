---
title: Portfolio Optimization with Simulated Annealing
order: 4
summary: A from-scratch optimizer that reweights a 20-stock S&P 500 portfolio to maximize the Sharpe ratio, using simulated annealing under real long-only constraints.
tags: ['Python', 'Optimization', 'Quant finance']
metric: 'Lifted Sharpe from 1.10 (equal-weight) to 1.82 · higher return at lower volatility'
role: 'Quant project'
year: '2026'
---

## Problem

Take 20 large-cap S&P 500 names and find the portfolio weights that maximize the Sharpe ratio (the return you earn per unit of risk) under the constraints a real long-only mandate actually has: no shorting, no leverage, and every zloty invested (weights non-negative and summing to one). Equal-weighting is the honest baseline to beat.

## Solution

Rather than reach for a black-box solver, I implemented **simulated annealing** from scratch. Each step proposes a nudge to the weight vector, projects it back onto the simplex to stay feasible, and accepts or rejects it by the Metropolis criterion: always taking improvements, and occasionally accepting a worse portfolio early on to escape local optima. A geometric cooling schedule gradually tightens that tolerance as the search settles.

I was deliberate about the assumptions, and wrote them down: annualized return and covariance are estimated from five years of daily prices (yfinance), and I treat mean and covariance as stationary — which they aren't, in reality. Naming that limitation is part of the work.

## Stack

Python, NumPy, pandas, Matplotlib, yfinance.

## Outcome

The optimizer lifted the Sharpe ratio from **1.10** at equal weight to **1.82** — and it got there by improving both sides of the ratio, pushing annualized return from ~25% to ~36% while *lowering* volatility from ~19% to ~18%. The run is fully reproducible, with convergence, acceptance-rate, and weight-evolution diagnostics saved for every experiment.
