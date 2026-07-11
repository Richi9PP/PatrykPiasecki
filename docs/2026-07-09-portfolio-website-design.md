# Strona-wizytówka (portfolio) — design spec

Data: 2026-07-09
Status: W trakcie brainstormingu (niedokończone — patrz "Otwarte pytania" na końcu)

## Cel

Prosta strona internetowa typu wizytówka, żeby ułatwić znalezienie pracy w IT w rolach: Data Scientist / AI Engineer / AI Consultant / ML Specialist.

## Kontekst o właścicielu strony

- Patryk Piasecki, pracuje w Warner Bros. Discovery, DTC Team.
- Studiuje na SGH, Data Analysis (magisterskie), kończy 2027.
- Zainteresowanie: full-stack AI product development — łączenie LLM-ów, API głosowych i baz danych w działające aplikacje.

## Hosting i ograniczenia techniczne

- Hosting: **GitHub Pages, za darmo**.
- Strona ma być **statyczna** — bez własnego backendu/serwera. Wszelka funkcjonalność wymagająca serwera (np. formularz kontaktowy) musi iść przez zewnętrzny serwis (np. Formspree, EmailJS) albo być zredukowana do `mailto:`/linku do LinkedIn.
- Sugerowany sposób budowy: generator strony statycznej ze static exportem (np. Astro, Next.js w trybie `output: export`, albo Hugo/Jekyll) — do ustalenia w fazie implementacyjnej.

## Struktura strony (sitemap) — ZATWIERDZONE

Strona wielostronicowa:

- `/` (Home) — hero z pozycjonowaniem, krótkie "o mnie", karty 3 wybranych projektów z linkiem do case-study, pasek tech stack.
- `/projekty` — pełna lista projektów (siatka kart).
- `/projekty/[slug]` — osobna podstrona case-study per projekt, format: Problem → Rozwiązanie → Stack → Efekt/metryka, ze screenshotami.
- `/o-mnie` — dłuższa historia: WBD DTC Team, SGH, zainteresowania (full-stack AI product dev, LLM + voice + DB).
- `/kontakt` — dane kontaktowe, linki (LinkedIn, GitHub, mail), ewentualnie CV do pobrania.

## Wybór projektów — ZATWIERDZONE

Trzy projekty, w tej kolejności:

1. **Website_magnets + magnets_server_render** (hero project)
   - Ekosystem dwóch aplikacji Flask dla firmy eventowej Eventowy Art (marka Hiring Sp. z o.o., domena eventowyart.pl).
   - `Website_magnets`: publiczna, dwujęzyczna (PL/EN) strona marketingowa, formularz kontaktowy, portfolio klientów (PGE Narodowy, TVN, UNLEASH World Paris).
   - `magnets_server_render`: system przesyłania zdjęć z telefonu gościa (skan QR) przez WebSocket (Flask-SocketIO + eventlet) do komputera drukującego fotomagnesy na evencie, bez trwałego przechowywania zdjęć na serwerze. Zawiera też tryb AI (Replicate API, transformacja zdjęć).
   - Stack: Python/Flask, Flask-SocketIO, eventlet, Pillow, Jinja2, gunicorn, deploy na Render, Resend (e-mail), Replicate API.
   - Dowód realnego wdrożenia: prawdziwi klienci korporacyjni, pełna zgodność RODO, produkcja od X.2025.
   - Do zrobienia przed publikacją case-study: wyczyścić sekrety (.env, hasła w configach), foldery robocze; wspomnieć w case-study o świadomości technicznego długu (`app_server.py` ~196 KB, wymaga refaktoryzacji na moduły) jako dowód dojrzałości inżynierskiej.

2. **DataMining** (projekt akademicki SGH)
   - Predykcja satysfakcji pasażerów linii lotniczych (dane Kaggle, ~104k obs.) — klasyfikacja binarna.
   - Dwa modele: Logistic Regression (AUC-ROC 0,926, Accuracy 87,0%) i Random Forest (AUC-ROC 0,992, Accuracy 95,6%, F1 94,9%), pełna walidacja (CV, OOB, learning/validation curves), brak przeuczenia.
   - Kluczowe wnioski biznesowe: online boarding, WiFi pokładowe, typ podróży i lojalność klienta jako najsilniejsze drivery satysfakcji.
   - Stack: Python, pandas, scikit-learn, statsmodels, seaborn/matplotlib, Jupyter.
   - Portfolio-ready: czytelne README z tabelą wyników, raport analityczny PL, prezentacja PDF.

3. **CNInvest** (projekt freelance)
   - Landing page firmy CN INVEST GROUP (zarządzanie nieruchomościami, Pułtusk), realnie wdrożona pod domeną cninvestgroup.com.pl.
   - Stack: Tailwind CSS, vanilla JS, backend formularza (migracja z Python/Resend/Render na PHP/PHPMailer/home.pl).
   - Dowód: szczegółowa dokumentacja migracji hostingu (`FTP_DEPLOY.md`), historia iteracji z klientem.
   - Do zrobienia: wyczyścić repo przed pokazaniem (usunąć `.venv`, `__pycache__`, ślady narzędzi AI, zdecydować którą wersję backendu pokazać).

Odrzucone z shortlisty: **Credit-scoring** (projekt PD/scorecard, SGH) — mocny merytorycznie (Gini train 74,7%/test 74,4%, KS 60%), ale pominięty na rzecz DataMining ze względu na mocniejsze/czytelniejsze metryki i lepszą narrację ML.

## Pozycjonowanie / hero messaging — ZATWIERDZONE

Główny branding na stronie: **Data Scientist / ML Specialist** (nie "full-stack AI product developer" jako headline — mimo że Website_magnets jest hero projektem, pozycjonowanie idzie w stronę bardziej tradycyjnej roli DS/ML, a Magnets służy jako dowód umiejętności wdrożeniowych/full-stack w tle).

## Format opisu projektu (case-study) — do zastosowania na `/projekty/[slug]`

Problem → Rozwiązanie → Stack → Efekt/metryka (nawet szacunkowa). Do napisania w kolejnym kroku dla każdego z 3 wybranych projektów.

## Otwarte pytania (NIE ROZSTRZYGNIĘTE — do dokończenia w kolejnej sesji)

1. **Styl wizualny strony** — pytanie zadane, ale przerwane przez użytkownika przed odpowiedzią. Opcje do rozważenia:
   - Minimalistyczny / techniczny (dużo białej przestrzeni, mono/sans-serif, akcent koloru granat/zieleń, styl zbliżony do dokumentacji technicznej/GitHub).
   - Data-driven / dashboard-like (stat tiles z metrykami typu AUC 0.992, Gini 74%, wykresy, siatki kart).
   - Ciepły / osobisty (mniej korporacyjny, zaokrąglone kształty, cieplejsza paleta, zdjęcie/avatar).
2. **Konkretna technologia budowy strony** (Astro vs Next.js static export vs Hugo/Jekyll) — nieustalone, wymaga decyzji przed pisaniem planu implementacji.
3. **Rozwiązanie formularza kontaktowego** na stronie statycznej (Formspree / EmailJS / zwykły mailto) — nieustalone.
4. **Treść case-studies** (Problem → Rozwiązanie → Stack → Efekt) dla każdego z 3 projektów — jeszcze nie napisana, do zrobienia po domknięciu pytań wizualnych.
5. Strona `/o-mnie` — nie omówiono jeszcze szczegółowej treści (jakie konkretnie wątki poza WBD/SGH/AI interests).

## Następny krok

Dokończyć pytanie o styl wizualny, ustalić technologię i formularz kontaktowy, napisać treści case-studies, następnie przejść do `writing-plans` (plan implementacji) dopiero po zatwierdzeniu pełnego spec przez użytkownika.
