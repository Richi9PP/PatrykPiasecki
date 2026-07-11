---
title: CN Invest Group — Landing Page
order: 3
summary: A client-facing landing page for a property-management firm, shipped to a live domain, including a mid-flight hosting and backend migration.
tags: ['Tailwind', 'PHP', 'Freelance']
metric: 'Live on cninvestgroup.com.pl · zero-downtime migration'
role: 'Freelance — client work'
year: '2025'
liveUrl: 'https://cninvestgroup.com.pl'
---

## Problem

CN INVEST GROUP (property management, Pułtusk) needed a credible landing page on their own domain, with a working contact form — and partway through, the hosting had to change, which meant moving the form's backend without breaking anything for the client.

## Solution

A hand-built landing page in Tailwind CSS and vanilla JS. The contact backend started on Python/Resend/Render and was migrated to PHP/PHPMailer on home.pl to fit the new hosting. I documented the whole migration in `FTP_DEPLOY.md` so the deploy is reproducible rather than tribal knowledge.

## Stack

Tailwind CSS, vanilla JavaScript, PHP, PHPMailer, home.pl hosting (migrated from Python/Resend/Render).

## Outcome

Live on cninvestgroup.com.pl with a documented deployment and a real iteration history with the client — the unglamorous part of freelance work that decides whether a site keeps running after handover.
