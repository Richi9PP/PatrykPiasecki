---
title: Airline Passenger Satisfaction
order: 6
summary: A binary classifier predicting airline passenger satisfaction on ~104k records, with full validation and business-readable drivers of satisfaction.
tags: ['scikit-learn', 'SGH', 'Classification']
metric: 'Two validated models, and the drivers that actually move satisfaction'
role: 'Academic project, SGH'
year: '2024'
repoUrl: 'https://github.com/Richi9PP/DataMining'
---

## Problem

Given ~104,000 passenger survey records (Kaggle), predict whether a passenger is satisfied and, just as important, explain *what actually drives* satisfaction so the result is useful to an airline, not just accurate.

## Solution

Two models, compared honestly:

- **Logistic Regression**: a transparent baseline that's easy to explain to a stakeholder.
- **Random Forest**: a stronger ensemble that captures the non-linear structure the baseline misses.

The goal was never to chase a leaderboard number. I validated both beyond a single train/test split (cross-validation, out-of-bag error, and learning/validation curves), so the performance I report is stable rather than a lucky split. Then feature importance did the interesting work: it surfaced the real drivers of satisfaction.

## Stack

Python, pandas, scikit-learn, statsmodels, seaborn/matplotlib, Jupyter.

## Outcome

The result an airline can actually act on isn't the accuracy — it's the *why*. Online boarding, in-flight Wi-Fi, type of travel, and customer loyalty came out as the strongest levers on satisfaction. Packaged portfolio-ready: a clear README, a full analytical report, and a slide deck.
