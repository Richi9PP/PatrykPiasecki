---
title: Airline Passenger Satisfaction
order: 2
summary: A binary classifier predicting airline passenger satisfaction on ~104k records, with full validation and business-readable drivers of satisfaction.
tags: ['scikit-learn', 'SGH', 'Classification']
metric: '95.6% accuracy · 0.992 AUC-ROC (Random Forest)'
role: 'Academic project — SGH'
year: '2024'
---

## Problem

Given ~104,000 passenger survey records (Kaggle), predict whether a passenger is satisfied — and, just as important, explain *what actually drives* satisfaction so the result is useful to an airline, not just accurate.

## Solution

Two models, compared honestly:

- **Logistic Regression** — AUC-ROC 0.926, accuracy 87.0%. A transparent baseline.
- **Random Forest** — AUC-ROC 0.992, accuracy 95.6%, F1 94.9%.

Validation went beyond a single train/test split: cross-validation, out-of-bag error, and learning/validation curves, all confirming no overfitting. Feature importance surfaced the real drivers: online boarding, in-flight Wi-Fi, type of travel, and customer loyalty.

## Stack

Python, pandas, scikit-learn, statsmodels, seaborn/matplotlib, Jupyter.

## Outcome

Portfolio-ready: a clear README with a results table, a full analytical report, and a slide deck. The takeaway an airline can act on — online boarding and on-board Wi-Fi move satisfaction more than anything else in the data.
