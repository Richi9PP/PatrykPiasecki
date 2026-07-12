---
title: CN Invest Group — Landing Page
order: 2
summary: A client-facing landing page for a property-management firm, shipped to a live domain, including a mid-flight hosting and backend migration.
tags: ['Tailwind', 'PHP', 'Freelance']
metric: 'Live on cninvestgroup.com.pl · zero-downtime migration'
role: 'Freelance, client work'
year: '2025'
liveUrl: 'https://cninvestgroup.com.pl'
---

## Problem

CN INVEST GROUP (property management, Pułtusk) had an old WordPress site on home.pl and needed a credible, custom-built landing page with a working contact form. The client wanted to keep hosting on home.pl rather than move to a Linux server, which meant the contact backend had to run on a shared PHP host.

## Solution

A hand-built landing page in Tailwind CSS and vanilla JS, replacing the old WordPress build. I first implemented the contact backend with my usual stack (Python/Resend/Render), then migrated it to PHP/PHPMailer to run natively on home.pl's shared hosting. The entire migration process was documented so the client and any developer who works on the project later can understand and maintain it without guesswork.

## Stack

Tailwind CSS, vanilla JavaScript, PHP, PHPMailer, home.pl hosting.

## Outcome

Live on cninvestgroup.com.pl with a documented deployment and a real iteration history with the client — the unglamorous part of freelance work that decides whether a site keeps running after handover.
