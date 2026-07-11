---
title: Eventowy Art — Website & Photo Magnets
order: 1
summary: A live photo-magnet pipeline over WebSocket for corporate events, plus a bilingual marketing site, running in production for a Warsaw event company.
tags: ['Flask', 'WebSocket', 'Production']
metric: 'Live at events for PGE Narodowy, TVN, UNLEASH World Paris'
role: 'Full-stack — design, build, deploy'
year: '2025'
liveUrl: 'https://eventowyart.pl'
---

## Problem

Eventowy Art (Hiring Sp. z o.o.) prints photo magnets live at corporate events. Guests take a photo on their own phone and it has to reach the operator's printing computer within seconds — reliably, over shaky venue Wi-Fi, and without storing anyone's photo on a server (GDPR). They also needed a credible bilingual marketing site to win corporate clients.

## Solution

Two Flask applications working as one ecosystem:

- **Website_magnets** — a public, bilingual (PL/EN) marketing site with a contact form and a client portfolio (PGE Narodowy, TVN, UNLEASH World Paris).
- **magnets_server_render** — a guest scans a QR code, opens a camera page, and the photo streams over WebSocket (Flask-SocketIO + eventlet) straight to the printing computer. Nothing is persisted to disk. An optional AI mode transforms photos through the Replicate API before printing.

Transactional email runs through Resend; the whole thing is deployed on Render behind gunicorn.

## Stack

Python, Flask, Flask-SocketIO, eventlet, Pillow, Jinja2, gunicorn, Render, Resend, Replicate API.

## Outcome

In production since 2025 with real corporate clients and full GDPR compliance. The single-file `app_server.py` grew to ~196 KB — I treat that as known technical debt scheduled for a split into modules, which is part of running something real rather than a demo.
