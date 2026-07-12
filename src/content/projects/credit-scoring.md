---
title: Credit Risk Scorecard · PD Cross-Sell Model
order: 3
summary: A probability-of-default scorecard for a cross-sell portfolio, built the way a bank actually would — WOE/IV feature selection, strict multicollinearity and stability checks, and a Gini that holds between train and test.
tags: ['Credit risk', 'Scorecard', 'SGH']
role: 'Academic team project, SGH'
year: '2025'
metric: 'Gini 74.4% on test · 0.32pp train/test gap · stable, not overfit'
---

## Problem

As part of an SGH team project modelling a real bank's credit data, my piece was the **PD CSS Cross** model, the probability that a cross-sell customer defaults. Credit scoring has a different bar than a Kaggle leaderboard: the model has to be interpretable, monotonic in the right direction, and stable enough that it still ranks risk the same way next quarter. A number that looks great on training data and drifts in production is worse than useless.

## Solution

A logistic-regression scorecard, built the industry way. Candidate features were binned and ranked by Weight of Evidence and Information Value, then filtered hard for multicollinearity, and the final model keeps just **five variables**, with maximum VIF of 1.25 and every beta positive, so each one pushes risk in the direction intuition expects (more arrears → higher risk).

I leaned on the checks that matter for a model meant to live in production: **PSI** for population stability (0.24%), and the gap between train and test Gini as an overfitting guard.

## Stack

Python, pandas, scikit-learn, statsmodels; WOE/IV binning, VIF and PSI diagnostics.

## Outcome

The scorecard reached a **Gini of 74.4% on the test set** — and, more tellingly, the train-to-test gap was just **0.32 percentage points**, with a KS of 60% and a tiny PSI. That stability is the whole point: it ranks risk consistently rather than memorising the training sample. It also came out stronger than the main-product PD model (Gini ~67%), which made the cross-sell scorecard the more useful of the two.
