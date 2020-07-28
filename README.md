## Football info

Aplikacja, która przedstawia informacje na temat drużyn piłkarskich z poszczególnych lig oraz ich zawodników. Możliwe, że w przyszłości rozwienie się ona o kolejne funkcjonalności. 

#### Aplikacja składa się z kilku kontenerów i wielu komponentów

* kontenery odpowiadają za pobranie stanu aplikacji oraz rozdzielanie go pomiędzy odpowiednimi komponentami,
* komponenty obsługują otrzymany stan przez kontenery oraz wywołują odpowiednie akcje.

#### Możliwości:

* wyszukiwanie drużyn z poszczególnych lig,
* przejście do widoku drużyny oraz przegląd informacji, zawodników oraz danych kontaktowych,
* przejście do widoku zawodnika (poprzez sekcje *Team* w widoku drużyny,
* proste menu, dzięki któremu można bezpośrednio wrócić na stronę główną.

#### Możliwości rozwoju: 

* szukanie strzelców z danej ligi oraz wyświetlenie informacji o nich,
* wyświetlenie poszczególnych meczów z ligi oraz wyświetlanie informacji o nich,
* wiele innych w oparciu o *https://www.football-data.org/documentation/quickstart*

#### Zewnętrzne API

* *https://www.football-data.org/*,
* proste, darmowe API, które nie nie zawsze udostępnia wszystkie niezbędne informacje (np. brak zdjęć zawodników).

#### Użyte technologie

* HTML5,
* CSS3, SASS,
* RWD (media queries),
* React.JS,
* React-router-dom,
* React-redux, redux-saga.

#### Uruchamienie:

1. npm install
2. npm run dev
