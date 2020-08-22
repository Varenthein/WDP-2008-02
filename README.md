


# WDP Projekt Zespołowy

## Opis projektu

Projekt sklepu internetowego, zbudowany przy wykorzystaniu technologii React, Redux, JavaScrip, SCSS.

## Demo

DO UZUPEŁNIENIA

## Inicjacja projektu

Po sklonowaniu projektu, zainstaluj wymagane paczki komendą `yarn install` (lub `npm install`).

Teraz możesz zacząć pracę, korzystając z przygotowanych taska `yarn start` (lub `npm start`).

Wszystkie potrzebne do pracy pliki źródłowe znajdują się w folderach `src` oraz `public`.

## NPM Scripts

Dostępne są 3 główne skrypty przyspieszające pracę:

- `build`: na bazie plików z folderów `src` i `public` buduje project w folderze `build`
- `start`: obserwuje zmiany w folderze `src` i uruchamia podgląd roboczy
- `test`: uruchomienie testów jednostkowych
- `refactor`: skrypt dokonuje automatycznego formatowania plików w folderze `src/`
  zgodnie z przyjętą konwencją formatowania kodu, a także sprawdza błędy za pomocą ESLinta

## Git Hooks

Projekt korzysta z Git Hooks - możliwości uruchamiania skryptów w reakcji na wybrane zdarzenia programu Git.

Za każdym razem gdy wykonasz komendę `git commit` zostaną uruchomione testy jednostkowe, formatowanie oraz lintowanie
dla plików, które zostały wybrane za pomocą `git add` i mają być zapisane w commicie.

## Konwencje i dobre praktyki

1. Codzinnie każdy wysyła na koniec dnia DAILY.
2. Każdy samodzielnie przypisuje sobie zadania w Jirze.
3. Należy zwracć uwagę na kolejność zadań w backlogu. Wybieramy jedno z 3-5 z samej góry.
4. Nowy branch utwórz z aktualnego mastera. Nazwij branch numerem taska np. WDP200802-1.
5. Nazwy commitów wpisuj po angielsku - nazwa powinna odnosić się do wprowadzonej zmiany.
6. Zakładając pull request, w tytule należy podać numer zadania z Jiry. W opisie podaj krótki opis problemu.

Struktura katalogów projektu:

	- src - główny katalog
		- components - katalog ze wszystkimi komponentami, podzielony na cztery podkategorie (common, features, layout, views),
		- redux - katalog z plikami związanymi z obsługą magazynu (Reduxa),
		- styles - katalog z plikami styli,
