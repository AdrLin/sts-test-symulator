// ============================================================================
//  BAZA PYTAŃ – Symulator egzaminu STS-01 / STS-02
// ============================================================================
//
//  JAK EDYTOWAĆ:
//  - Każde pytanie to blok linii. Bloki oddzielaj PUSTĄ LINIĄ.
//  - "### Nazwa"  → zaczyna nową KATEGORIĘ (kolejne pytania należą do niej).
//  - "P: ..."     → treść pytania (jedna linia).
//  - "+ ..."      → POPRAWNA odpowiedź (dokładnie JEDNA na pytanie).
//  - "- ..."      → błędna odpowiedź (zalecane 3, ale działa od 1 do 4).
//  - "= ..."      → wyjaśnienie (opcjonalne, jedna linia).
//
//  Silnik SAM losowo rozrzuci odpowiedzi między A/B/C/D przy każdym
//  uruchomieniu i zadba o równy rozkład poprawnych pozycji oraz o proporcje
//  kategorii w egzaminie. Nie musisz nic liczyć ani układać.
//
//  ZASADY:
//  - Nie używaj znaku  `  (backtick) w treści.
//  - Jedna odpowiedź "+" na pytanie (jeśli zabraknie, pytanie zostanie pominięte
//    i pojawi się ostrzeżenie w konsoli przeglądarki).
//  - Aby USUNĄĆ pytanie – skasuj cały jego blok. Aby DODAĆ – dopisz nowy blok
//    w sekcji właściwej kategorii (lub stwórz nową przez "### Nazwa").
//
//  Po edycji wystarczy zapisać ten plik i odświeżyć index.html.
// ============================================================================

// ============================================================
//  BAZA PYTAŃ — edytuj TYLKO ten plik.
//  Format: ### Kategoria | P: pytanie | + poprawna | - błędna | = wyjaśnienie
//  Reguła: dokładnie JEDNA odpowiedź "+" na pytanie (jak na egzaminie ULC).
//  Po edycji: commit na GitHubie → koledzy odświeżają stronę (F5) → mają nowe pytania.
// ============================================================
 
window.KONFIG = {
  pytan_w_egzaminie: 20,   // ile pytań losuje tryb egzaminu
  czas_minut: 30,          // limit czasu egzaminu
  prog_zaliczenia: 75,     // próg zaliczenia w %
  pytan_w_powtorce: 10     // ile pytań w szybkiej powtórce
};
 
window.PYTANIA_RAW = `

### Przepisy lotnicze

P: Strefa D:
+ Chroni poligony wojskowe
- Zawsze jest jednoznaczna z DRA-P
- Wyznaczana nad skupiskami Dzieci (skrót od "Dzieci")
- (Delivery) drony kurierskie mają pierwszeństwo przed śmigłowcami ratunkowymi
= D oznacza Danger (działania niebezpieczne: strzelania, materiały wybuchowe).

P: CTR — w odległości do 1 km od granicy lotniska:
+ W odległości do 1 km obowiązuje zakaz lotów bez zgody zarządzającego przestrzenią
- Zakaz bez zgody, ale dopuszczony lot 30 m dronami do 250 g
- Zakaz bez zgody, ale dopuszczony lot do 30 m AGL i 900 g
- Brak ograniczeń wysokości, ograniczenie wagowe 250 g
= Jedna poprawna. <1 km od lotniska = ZAWSZE zgoda (DRA-RL CTR). Brak progów "free pass".

P: CTR — w odległości >6 km od granicy lotniska, bez zgody mogą latać drony:
+ Do 25 kg, do wysokości 100 m AGL
- Do 4 kg, do 120 m AGL
- Do 900 g, do 120 m AGL
- Do 900 g, do 100 m AGL
= TYLKO JEDNA poprawna (25 kg / 100 m). Bufor >6 km (DRA-RH CTR): "25 i 100". UWAGA: 120 m AGL NIE obowiązuje w CTR (tylko 100 m). Warianty 900 g/4 kg są "podzbiorem" reguły, ale NIE są regułą — zaznaczaj zawsze tylko górny limit masy.

P: W odległości 1-6 km od granicy lotniska kontrolowanego, bez zgody mogą latać drony:
+ Do 900 g, do wysokości 30 m AGL
- Do 250 g, do wysokości 100 m AGL
- Do 900 g, do wysokości 100 m AGL
- Do 250 g, do wysokości 30 m AGL
= Bufor 1-6 km (DRA-RM CTR): "900 i 30".

P: DRA-RM (Restricted Medium):
+ wystepuje zazwyczajw odległości od 1 do 6 km od CTR/ATZ
- Oznacza wysokie prawdopodobieństwo uzyskania zgody
- Specjalna strefa Ruchu Miejskiego (Road-Mobile), gdzie drony mają pierwszeństwo
- Loty tylko dronów z systemem rozpylania mgły (Rain-Maker)
= RM oznacza Restricted MEDIUM czyli średnie prawdopodobieństwo uzyskania zgody. Lokalizacja: 1-6 km od CTR/ATZ.

P: Służba Informacji Powietrznej:
+ Zapewnia załogom statków powietrznych wszelkich potrzebnych informacji oraz wskazówek dla sprawnego i bezpiecznego wykonania operacji
- Zajmuje się badaniem incydentóœ lotniczych
- Wydaje zgody na loty powyżej 120 m AGL
- Wydaje zgody na loty nad portami morskimi
- Wydaje zgody na loty jako służba kontroli ruchu lotniczego strefy kontrolowanej G
= FIS INFORMUJE, nie WYDAJE ZGÓD ani nie kontroluje

P: Czy "Ustawa o Infrastrukturze Krytycznej" zabrania lotów dronem na niektórymi obiektami. 
- Nie zabrania tylko ogranicza
+ Taka ustawa nie istnieje
- Zabrania lotów nad wszystkimi obiektami Infrastruktury Krytycznej
- Tak, bez wyjątków
= W polskim systemie prawnym nie ma odrębnej „Ustawy o infrastrukturze krytycznej”. Definicja, zadania oraz Narodowy Program Ochrony Infrastruktury Krytycznej są uregulowane w Ustawie z dnia 26 kwietnia 2007 r. o zarządzaniu kryzysowym. W tym akcie prawnym zawarta jest definicja infrastruktury krytycznej(art. 3 pkt 2). Nie ma w niej natomiast mowy o BSP. Przepisy te celowo nie wymieniają konkretnych technologii czy zagrożeń (w tym dronów), aby ustawa nie zdezaktualizowała się wraz z postępem technicznym.

P: Czy możliwy jest lot nad elektrowniami?
+ Należy uzyskać zgodę zarządcy terenu
- Jeżeli są tabliczki z zakazem na płocie to i tak można
- Nie, zawsze
- Tak, zawsze
- Jeżeli nie ma tabliczek z zakazem na płocie to można
= Ta sama reguła co do innych obiektów infrastruktury krytycznej. Wyjątek: elektrownie jądrowe → DRA-P (zakaz). Zwykłe elektrownie → zgoda zarządcy.

P: Czy możliwy jest lot nad stacjami elektroenergetycznymi?
+ Należy uzyskać zgodę zarządcy terenu
- Tak, zawsze
- Nie, zawsze
- Jeżeli nie ma tabliczek z zakazem na płocie to można
- Jeżeli są tabliczki z zakazem na płocie to i tak można
= Reguła z Wytycznych ULC. Stacje PSE = infrastruktura krytyczna, najczęściej objęte strefą DRA-RL.

P: Czy możliwy jest lot nad jednostkami wojskowymi?
+ Należy uzyskać zgodę zarządcy terenu
- Nie, zawsze
- Tak, zawsze
- Jeżeli nie ma tabliczek z zakazem na płocie to można
- Jeżeli są tabliczki z zakazem na płocie to i tak można
= Wytyczne Prezesa ULC: loty nad portami morskimi, lotniskami, stacjami elektroenergetycznymi, ujęciami wody, oczyszczalniami, jednostkami wojskowymi i poligonami — za zgodą zarządzającego. NIE bezwzględny zakaz (wojsko samo lata nad swoimi obiektami). „Nie, zawsze" zarezerwowane dla DRA-P.

P: Czy możliwy jest lot nad ujęciami wody i oczyszczalniami ścieków?
+ Należy uzyskać zgodę zarządcy terenu
- Jeżeli nie ma tabliczek z zakazem na płocie to można
- Jeżeli są tabliczki z zakazem na płocie to i tak można
- Nie, zawsze
- Tak, zawsze
= Infrastruktura krytyczna (ustawa o zarządzaniu kryzysowym + Wytyczne Prezesa ULC nr 7/2024). Tabliczki nie są źródłem zakazu — zakaz wynika z przepisów. Lot możliwy WYŁĄCZNIE za zgodą zarządzającego obiektem.

P: Strefa DRA-RH charakteryzuje się tym, że jest:
+ Strefą wyznaczaną w odległości CTR > 6 km i ATZ > 6 km
- Strefą dla BSP wodorowych (Hydrogen-powered)
- Strefą o nieograniczonej wysokości lotu dla wszystkich pilotów
- Wyznaczana wyłącznie nad górami, dla wsparcia lotów GOPR (High Mountain)
= DRA-RH (High likelihood of approval) to strefa wokół lotnisk w odległości większej niż 6 km od CTR/ATZ. Wysokie prawdopodobieństwo uzyskania zgody – ale uzyskanie zgody jest nadal wymagane.

P: Strefa DRA-U zakłada, że operacje BSP:
+ Mogą być wykonywane pod warunkiem korzystania z określonych usług U-Space
- Wymagają licencji na loty w warunkach kosmicznych (Upper Space)
- Są zarezerwowane dla dronów wojskowych (UAS-Military)
- Dotyczą wyłącznie dronów podwodnych (Underwater)
= DRA-U to strefa, w której funkcjonują usługi U-Space (CIS, network identification, geo-awareness, traffic information). Wszystkie BSP muszą być wyposażone w e-ID i podlegać cyfrowej koordynacji. 

P: Certyfikat wiedzy teoretycznej pilota BSP w kategorii szczególnej (STS):
+ Jest ważny 5 lat od daty wydania
- Wymaga corocznego odnowienia
- Jest ważny bezterminowo
- Jest ważny 3 lata, odnowienie wymaga jedynie szkolenia teoretycznego
= Certyfikat wiedzy teoretycznej dla kategorii szczególnej (A2, STS) jest ważny 5 lat. Odnowienie wymaga ponownego zdania egzaminu teoretycznego.

P: Strefa DRA-RM jest wyznaczana:
+ W obszarze 1 km < CTR/ATZ < 6 km, ze średnim prawdopodobieństwem uzyskania zgody
- W obszarach, w których obowiązuje obowiązkowa łączność radiowa o częstotliwości powyżej 10 GHz
- Wyłącznie nad obszarami transportu miejskiego (Road-Mobile)
- Dla BSP wyposażonych w system rozpylania mgły wodnej (Rain-Maker)
= DRA-RM (Restricted-Medium) to strefa wokół lotnisk w pasie 1–6 km od granicy lotniska. Średnie prawdopodobieństwo uzyskania zgody, w odróżnieniu od DRA-RL (niskie) i DRA-RH (wysokie).

P: Krajowe scenariusze NSTS:
+ Przestały obowiązywać z dniem 1 stycznia 2026 r.
- Zostały zastąpione wyłącznie przez kategorię otwartą A1/A3
- Obowiązują nadal bezterminowo równolegle z STS
- Dotyczą wyłącznie BSP w kategorii certyfikowanej
= NSTS (krajowe scenariusze standardowe) były rozwiązaniem przejściowym 2021–2025. Od 1 stycznia 2026 nie obowiązują – obowiązują wyłącznie europejskie STS-01 i STS-02 oraz pozostałe drogi (LUC, zezwolenie, kat. otwarta). 

P: Czy w podkategorii A1 dozwolony jest przelot nad osobami niebiorącymi udziału w operacji?
- Celowy przelot nad osobami niezaangażowanymi jest w A1 zawsze zabroniony
- Tak, w kategorii OTWARTEJ można dowolnie przelatywać nad osobami niezaangażowanymi
- Tak, w A1 zawsze można
- Tak, jeżeli jest to przelot incydentalny
= Mozliwość przelotu nad ludźmi w podkategorii A1 zależy od klasy drona. Dla C0 (<250 g) dopuszczalne są krótkie loty nad pojedynczymi osobami niezaangażowanymi. Dla C1 (250 - 900 g)– celowy przelot nad osobami niezaangażowanymi jest niedozwolony. W przypadku niezamierzonego, incydentalnego przelotu należy zminimalizować czas przebywania drona nad ludżmi czyli natychmiast odlecieć. Loty nad zgromadzeniami osób są w kategorii otwartej całkowicie zakazane.

P: Czy możliwy jest lot nad portem morskim?
+ Za zgodą dyrektora portu tak
- Jeżeli są tabliczki z zakazem powieszonym na płocie to nie można nawet wnioskować o zgodę
- Nie, zawsze
- Tak, zawsze
= Porty morskie to element infrastruktury krytycznej. Lot wymaga zgody zarządcy portu morskiego.

P: Strefa DRA-I ADIZ (Air Defense Identification Zone):
+ Jest obszarem, w którym operator BSP ma obowiązek zapewnić możliwość identyfikacji swojej operacji
- Jest strefą całkowicie zakazaną dla lotów BSP cywilnych
- Oznacza obszar 15 km wzdłuż zewnętrznej granicy UE
- Oznacza strefę automatycznego przeglądu technicznego BSP (Drone Inspection Zone)
= ADIZ to obszar identyfikacji obrony powietrznej. W jego obrębie operator BSP musi zapewnić identyfikację operacji (plan lotu, usługi cyfrowe), aby służby obrony powietrznej miały informację o aktywności BSP. 

P: Strefa DRA-I to przede wszystkim:
+ Strefy zawierające ostrzeżenia oraz informacje konieczne do zachowania bezpieczeństwa
- Strefy, w których loty są bezwzględnie zakazane ze względu na ochronę przyrody
- Strefy wyłącznie dla dronów o masie powyżej 25 kg
- Strefy wymagające każdorazowej zgody zarządzającego przed startem
= DRA-I (Information) – strefy informacyjne zawierające ostrzeżenia i informacje istotne dla bezpieczeństwa operacji. Typowo nie wymagają formalnej zgody, ale operator ma obowiązek zapoznać się z treścią.

P: Kto ponosi odpowiedzialność za naruszanie ograniczeń przestrzeni powietrznej podczas lotów BSP?
+ Pilot BSP
- Zlecający lot (klient)
- Przepisy nie określają odpowiedzialności
- Operator
= Pilot BSP jest osobiście odpowiedzialny za zgodność operacji z przepisami – w tym za naruszenie stref geograficznych. Operator (firma) odpowiada za organizację operacji. Klient nie przejmuje odpowiedzialności prawnej.

P: BSP o masie 250 g, lot VLOS na 30 m AGL, kategoria otwarta. Lokalizacja: 300 m od granicy lotniska niekontrolowanego, w aktywnej strefie DRA-R ATZ. Czy można wykonać lot bez zgody?
+ Nie
- Tak, ponieważ BSP <900 g i wysokość ≤30 m AGL
- Tak, ponieważ jesteśmy w kategorii otwartej
- Tak, jeżeli wykonamy check-in w DroneTower
= DRA-R ATZ – w obrębie 1 km od granicy lotniska zgoda Zarządzającego jest wymagana ZAWSZE, bez względu na masę BSP i wysokość lotu. Zwolnienie z obowiązku zgody dotyczy lotów >1 km dla BSP ≤900 g do 30 m AGL.

P: Jaki jest angielski skrót nazwy Agencji Unii Europejskiej ds. Bezpieczeństwa Lotniczego?
+ EASA
- EUASA
- EASP
- FAA
= EASA = European Union Aviation Safety Agency. FAA = Federal Aviation Administration (USA). Pozostałe to skróty zmyślone.

P: Strefa CTR to:
+ Przestrzeń kontrolowana wokół lotniska cywilnego
- Strefa testowa dla nowych typów BSP
- Strefa wyłącznie dla ekip filmowych i telewizyjnych
- Center Terrain Radius – krąg o promieniu R m wokół środka lądowiska pomagający w ustaleniu bufora ryzyka naziemnego
= CTR (Control Zone) to przestrzeń kontrolowana wokół lotniska. Ruch lotniczy podlega instrukcjom kontrolera ruchu lotniczego (ATC). Lot BSP wymaga zgody i ustalenia warunków (najczęściej w PansaUTM, plan misji + akceptacja TWR + check-in). W tym BSP).

P: Strefa MRT charakteryzuje się tym, że:
+ Wykonywanie lotów BSP w aktywnej strefie MRT jest skrajnie niebezpieczne i zabronione
- Strefy są aktywne wyłącznie w niedziele i święta
- Drony pomagające w lokalizacji turystów w górach mogą tam latać bez ograniczeń
- Strefy są zarezerwowane dla testów dronów cywilnych
= MRT = wojskowe korytarze niskich lotów. Statki załogowe operują często poniżej 150 m AGL (z dużymi prędkościami). Loty BSP w aktywnej MRT są absolutnie zabronione.

P: ADS-B in (odbiór sygnału) w BSP jako środek łagodzący ryzyko w powietrzu:
+ Pozwala pilotowi/systemowi BSP odbierać informacje o pobliskim ruchu lotniczym wyposażonym w ADS-B out
- Umożliwia BSP nadawanie identyfikatora do ATC
- Wyłącza GNSS 
- Zwiększa zasięg łącza C2
= ADS-B in odbiera transmisje z ADS-B out innych statków powietrznych. Świetne źródło świadomości sytuacyjnej, ale nie wszystkie statki nadają ADS-B out (np. śmigłowce HEMS, lekkie samoloty z transponderami innych typów), dlatego nie może całkowicie zastępować obserwacji.

P: Strefa DRA-I RMZ (Radio Mandatory Zone):
+ Służy zwiększeniu poziomu bezpieczeństwa w przestrzeni niekontrolowanej poprzez wzajemne informowanie się pilotów o pozycji i zamiarach
- Oznacza strefę „Zdalnego Zarządzania", w której drony mogą być przejęte przez służby specjalne
- Wskazuje, że samoloty nadają na tych samych częstotliwościach co aparatura BSP 
- Wymaga, by wszystkie BSP miały zamontowaną sprawną pełnowymiarową radiostację lotniczą i utrzymywały dwukierunkową łączność
= RMZ (Radio Mandatory Zone) to strefa o określonych wymiarach w przestrzeni klasy E/F/G, w której obowiązkowe jest posiadanie sprawnej radiostacji lotniczej i utrzymywanie ciągłej dwukierunkowej łączności radiowej. Celem RMZ jest zwiększenie bezpieczeństwa w przestrzeni niekontrolowanej poprzez wzajemne informowanie się pilotów o pozycji i zamiarach. Podstawa: SERA.6005 lit. a). Dla BSP wymóg łączności realizowany jest przez check-in w aplikacji DroneTower/DroneRadar.

P: Strefa DRA-I RMZ (Radio Mandatory Zone):
+ Wymaga, by pilot BSP prowadził ciągły nasłuch oraz posiadał możliwość dwukierunkowej łączności z ATS
- Wymaga, by wszystkie BSP miały zamontowaną sprawną pełnowymiarową radiostację lotniczą
- Wskazuje, że samoloty nadają na tych samych częstotliwościach co aparatura BSP 
- Wymaga, by wszystkie BSP utrzymywały dwukierunkową ciągłą łączność radiową ze wszystkimi pilotami samolotów znajdującyh się w strefie
= RMZ (Radio Mandatory Zone) to strefa o określonych wymiarach w przestrzeni klasy E/F/G, w której obowiązkowe jest posiadanie sprawnej radiostacji lotniczej i utrzymywanie ciągłej dwukierunkowej łączności radiowej. Celem RMZ jest zwiększenie bezpieczeństwa w przestrzeni niekontrolowanej poprzez wzajemne informowanie się pilotów o pozycji i zamiarach. Podstawa: SERA.6005 lit. a). Dla BSP wymóg łączności realizowany jest przez check-in w aplikacji DroneTower/DroneRadar.

P: Strefa TSA (Temporary Segregated Area) to:
+ Przestrzeń czasowo wydzielona na wyłączność dla konkretnego użytkownika
- Strefa tymczasowo niekontrolowana, w której każdy pilot może latać nawet bez rejestracji
- Wyłącznie strefa testowa dla nowych typów wojskowych BSP
- Strefa wyznaczana wyłącznie nad lądowiskami dla zwierząt migrujących
= TSA = przestrzeń czasowo wydzielona dla konkretnego użytkownika (najczęściej wojsko). Publikowana w AUP, aktywność w bieżących depeszach. W aktywnej TSA loty BSP są zakazane.

P: BSP 25 kg, 120 m AGL. Strefa DRA-I AAA (Rejon Lotniczej Działalności) aktywna H24. Czy można wykonać lot bez formalnej zgody?
+ Tak (DRA-I AAA to strefa informacyjna; pilot zachowuje szczególną ostrożność i wykonuje check-in)
- Nie, BSP 25 kg zawsze wymaga zgody
- Nie, DRA-I AAA zawsze wymaga zgody, ponieważ czarakteryzuje się wzmożonym ruchem pojazdów załogowych
- Tylko z certyfikatem LUC – po wcześniejszym zgłoszeniu telefonicznym, co reguluje osobne rozporządzenie krajowe
= DRA-I AAA = strefa informacyjna, nie wymaga formalnej zgody. Obowiązuje zapoznanie się z treścią ostrzeżenia, szczególna ostrożność (możliwa wzmożona aktywność lotnicza w obszarze) i check-in w DroneTower.

P: Strefa DRA-I AREA:
+ Zawiera informacje o potencjalnych zagrożeniach lub specyficznej aktywności w danym obszarze
- Występuje przy wzmożonej aktywności lotnictwa cywilnego (np. szybowcowego)
- Wyznacza powierzchnię do startów i lądowań
- To strefa międzynarodowa, w której można przekraczać granice państwowe dronem
= DRA-I AREA – strefa informacyjna o specyficznej aktywności w danym obszarze. Pilot ma obowiązek zachowania szczególnej ostrożności.

P: Strefa ATZ:
+ Wyznaczana jest w celu zapewnienia bezpieczeństwa ruchu lotniczego w sąsiedztwie lotnisk niekontrolowanych
- Strefa automatycznego szkolenia – AI sterująca bojowymi BSP ma prawo zestrzelić naszego drona bez ostrzeżenia
- Obszar antyterrorystyczny (Anti-Terrorist Zone) z obowiązkowym nadajnikiem zagłuszającym
- Posiada granice stałe i w związku z tym nie wymaga każdorazowego sprawdzania w DroneTower
= ATZ otacza lotniska niekontrolowane (aerokluby, lądowiska prywatne). Granice poziome i pionowe ATZ są stałe, opublikowane – pilot ma obowiązek je znać. Lot BSP wymaga zazwyczaj wcześniejszego zgłoszenia i uzyskania zgody zarządzającego lotniskiem.

P: BSP o masie 900 g, lot VLOS, kategoria otwarta, na wysokości 100 m AGL, w odległości 8 km od granicy lotniska kontrolowanego. Czy można wykonać lot bez zgody PAŻP?
+ Tak, ale konieczny jest check-in
- Tak, ale tylko jeśli BSP jest klasy C0 lub C1
- Nie, każda operacja w pobliżu lotniska wymaga zgody
- Nie, BSP powyżej 250 g zawsze wymaga zgody
= Zgoda nie jest wymagana gdy wykonujesz loty VLOS BSP o masie startowej ≤25 kg w odległości większej niż 6 km od granicy i do wysokości 100 m nad poziomem terenu. Przed każdym lotem zrób check-in w aplikacji mobilnej DroneTower. Brak wymogu uzyskania formalnej zgody ≠ całkowity brak obowiązków. Check-in pozostaje.

P: Strefa MCTR (Military CTR) jest aktywna:
+ Podczas pracy wojskowych służb TWR
- Stale – nigdy nie jest dezaktywowana
- Wyłącznie w czasie wojny
- Wyłącznie w nocy
= MCTR (Military CTR) jest aktywna w godzinach pracy wojskowych służb TWR. Loty BSP wymagają zgody MIL TWR (Organu Kontroli Lotniska wojskowego). W razie braku kontaktu z MIL TWR, aktywność weryfikuje się u dyżurnego jednostki wojskowej. Loty BSP w MCTR są możliwe za zgodą Organu Kontroli Lotniska wojskowego, na warunkach przez niego określonych.

P: W aktywnej strefie obowiązuje całkowity zakaz lotów BSP, w której z poniższych grup?
+ MCTR, TSA, MRT
- CTR, ATZ, G
- R, RMZ, AAA
- MCTR, EUASA, TRA, D
= Całkowity zakaz lotów BSP w aktywnym stanie: MCTR (wojskowy CTR), TSA (czasowo wydzielona), D (Dangerous, poligony), MRT (wojskowe korytarze niskich lotów).

P: Pojęcie ATS obejmuje:
+ Służbę kontroli ruchu lotniczego (ATC), służbę informacji powietrznej (FIS) oraz służbę alarmową 
- Wyłącznie służbę kontroli ruchu lotniczego
- Automatyczny system śledzenia dronów (Automatic Tracking System) 
- Wyłącznie służbę informacji powietrznej (FIS), bez kontroli ruchu 
= ATS (Air Traffic Services) to pojęcie nadrzędne, obejmujące trzy służby: ATC + FIS + alarmową. Nie jest pojedynczą służbą.

P: Czym różni się ATC od FIS?
+ ATC wydaje wiążące instrukcje i zapewnia separację statków powietrznych; FIS jedynie informuje i doradza, a decyzję oraz odpowiedzialność ponosi pilot 
- ATC działa nad lądem, a FIS wyłącznie nad morzem terytorialnym 
- ATC obsługuje samoloty załogowe, a FIS wyłącznie bezzałogowe statki powietrzne 
- Nie ma różnicy – to dwie nazwy tej samej służby 
= To dwie RÓŻNE służby o różnych uprawnieniach. Sedno: ATC KONTROLUJE (rozkazy, separacja, przestrzeń kontrolowana), FIS INFORMUJE (porady, pilot decyduje sam, przestrzeń niekontrolowana).

P: W przestrzeni niekontrolowanej klasy G, gdzie zapewniana jest służba FIS, odpowiedzialność za unikanie kolizji z innymi statkami powietrznymi spoczywa na:
+ Pilocie (zasada „patrz i unikaj" – see and avoid) 
- Służbie FIS, która zapewnia separację wszystkim statkom 
- Kontrolerze ATC, który zdalnie nadzoruje przestrzeń klasy G 
- Służbie alarmowej, która automatycznie rozdziela ruch 
= FIS NIE zapewnia separacji — tylko informuje. W klasie G nie ma ATC, więc odpowiedzialność za unikanie kolizji spoczywa na pilocie (zasada see-and-avoid).



P: Loty dronami nad portami morskimi w Polsce:
+ Są dozwolone wyłącznie po uzyskaniu odpowiedniej zgody zarządzającego portem
- Są zabronione całkowicie – o ile operator nie posiada certyfikatu LUC
- Są dozwolone bez ograniczeń jako miejsca publiczne
- Można wykonywać tylko z licencją A4 – pod warunkiem zachowania 30 m od osób
= Porty morskie to element infrastruktury krytycznej (zobacz Wytyczne Prezesa ULC). Loty wymagają zgody zarządzającego portem morskim.

P: Czy możliwy jest lot nad jednostkami wojskowymi?
+ Należy uzyskać zgodę zarządcy terenu
- Tylko dla BSP klasy C0 - małe drony nie stanowią zagrożenia dla pojazdów wojskowych
- Jest zabroniony zawsze - z wojskiem nie ma żartów
- Jeżeli nie ma tabliczek z zakazem powieszonych na płocie, to można
= Loty nad jednostkami wojskowymi nie są bezwzględnie zakazane – analogicznie do innych obiektów infrastruktury krytycznej (ujęcia wody, elektrownie, porty), wymagana jest zgoda zarządcy terenu (komendanta jednostki) i spełnienie warunków przez niego określonych.

P: Czy możliwe jest wykonanie lotu BSP nad ujęciem wody lub oczyszczalnią ścieków?
+ Po uzyskaniu zgody zarządcy terenu
- Nie, zawsze
- Tylko jeżeli nie ma tabliczek z zakazem powieszonych na ogrodzeniu
- Tak, zawsze – są to obiekty publiczne
= Ujęcia wody i oczyszczalnie to elementy infrastruktury krytycznej. Wykonanie operacji wymaga uzyskania zgody zarządcy terenu, niezależnie od oznakowania ogrodzenia.

P: Strefa DRA-I:
+ Zawiera ostrzeżenia oraz informacje konieczne do zachowania bezpieczeństwa (Information)
- Wymaga uzyskania każdorazowej zgody zarządzającego przed startem
- Jest dostępna wyłącznie dla BSP o MTOM powyżej 25 kg z kategorii certyfikowanej
- Oznacza całkowity zakaz lotów ze względu na ochronę środowiska naturalnego
= DRA-I (Information) zawiera ostrzeżenia i informacje istotne dla bezpieczeństwa operacji BSP, m.in. ostrzeżenia nawigacyjne (NW), AAA (Rejon Lotniczej Działalności), ADIZ, RMZ czy AREA. Zazwyczaj nie wymaga formalnej zgody, ale operator ma obowiązek zapoznać się z treścią.

P: W Polsce obowiązkowe ubezpieczenie OC dotyczy BSP o masie startowej powyżej:
- 20 kg (zgodnie z rozp. (WE) 785/2004)
+ 250 g
- 20 kg, ale dotyczy tylko BSP wykorzystywanych komercyjnie
- 25 kg
= Od 13 listopada 2025 roku użytkownicy dronów o masie od 250 g do 20 kg są obowiązani do zawarcia obowiązkowego ubezpieczenia OC operatora dronów. Brak polisy może skutkować karą w wysokości do 4000 zł.

P: Strefa DRA-R to:
+ Strefa z ograniczeniami
- Strefa czasowego zakazu lotów
- Strefa silnego promieniowania radiowego
- Strefa bezwzględnego zakazu lotów
= DRA-R (Restricted) – strefa z ograniczeniami. Loty BSP są możliwe po uzyskaniu zgody zarządzającego (PAŻP lub podmiot uprawniony) i na określonych przez niego warunkach (wysokość, masa BSP, czas, lokalizacja).

P: BSP 250 g, 30 m AGL, kategoria otwarta. Aktywna strefa DRA-R H24, max 275 m AMSL (np. DRA-RL PSE). Czy można wykonać lot bez zgody?
+ Nie
- Tak, jeżeli wykonamy check-in w DroneTower
- Tak, BSP <900 g do 30 m AGL
- Tak, kategoria otwarta nie wymaga zgody
= DRA-R wymaga zgody zarządzającego strefą niezależnie od masy BSP i wysokości lotu. Zwolnienie z uzyskania zgody dotyczy np. DRA-R ATZ przy >1 km od lotniska – ale to tylko jedna z możliwych stref DRA-R.

P: Jaka jest maksymalna masa startowa BSP, który może być używany w kategorii OTWARTEJ?
+ Poniżej 25 kg
- Do 250 g
- Poniżej 4 kg
- Do 2 kg
= Kategoria OTWARTA dopuszcza BSP o MTOM < 25 kg (dokładnie: do 25 kg). Powyżej – kategoria szczególna lub certyfikowana. Podkategorie A1/A2/A3 mają własne ograniczenia masy.

P: Które rodzaje lotów BSP w kategorii A1/A3 są zabronione?
+ Wszystkie wymienione są zabronione
- Lot w pobliżu lotniska bez wymaganych zgód
- Lot nad stadionem w czasie koncertu
- Lot w pobliżu elektrowni jądrowej
= Wszystkie wymienione są zabronione: elektrownie jądrowe (DRA-P), lotniska (CTR/ATZ bez zgody), zgromadzenia ludzi np. koncert (A1/A3 zabronione zawsze) - lot nad zgromadzeniami w kategorii otwartej jest absolutnie wykluczony.

P: Strefa DRA-RL charakteryzuje się tym, że jest wyznaczana:
+ W odległości do 1 km od granicy lotniska (CTR/ATZ, D, TRA), z niskim prawdopodobieństwem uzyskania zgody
- Wyłącznie nad obszarami, gdzie dopuszcza się tzw. „real-life delivery"
- Nad obiektami, w których dozwolone są loty wyłącznie sterowane satelitarnie (Remote-Link)
- Po godzinie 22:00 i wymaga włączenia czerwonego oświetlenia ostrzegawczego (Red-Light)
= DRA-RL to podtyp DRA-R wokół lotnisk (CTR/ATZ/D/TRA) w odległości do 1 km – obszar o najwyższej wrażliwości i najniższym prawdopodobieństwie uzyskania zgody.

P: W myśl RODO, dane osobowe to wszelkie informacje dotyczące:
+ Zidentyfikowanej lub możliwej do zidentyfikowania osoby fizycznej
- Wyłącznie zidentyfikowanej osoby prawnej – na podstawie ustnej zgody zarządzającego
- Wszelkich osób fizycznych i prawnych – wyłącznie w dni robocze i w porze dziennej
- Zidentyfikowanego samolotu pasażerskiego
= RODO (art. 4) definiuje dane osobowe jako wszelkie informacje dotyczące zidentyfikowanej lub możliwej do zidentyfikowania osoby fizycznej (np. wizerunek z drona, tablice rejestracyjne, lokalizacja). Nie dotyczy osób prawnych.

P: Czy w kategorii OTWARTEJ mogą być przewożone materiały niebezpieczne?
+ Nie, przewóz materiałów niebezpiecznych w kategorii otwartej jest zabroniony
- Tak, bez ograniczeń – z wyjątkiem operacji transgranicznych
- Tak, po uzyskaniu zgody PAŻP
- Tak, do 250 g materiału – według klasyfikacji w załączniku do ustawy
= Kategoria OTWARTA – przewóz materiałów niebezpiecznych (łatwopalne, gazy, żrące, wybuchowe) jest zabroniony. Może być dopuszczony w kategorii szczególnej / certyfikowanej na podstawie zezwolenia.

P: Klasa BSP wymagana do operacji w scenariuszu STS-02 (BVLOS) to:
+ C6 lub równoważny BSP wyprodukowany prywatnie spełniający wymagania STS-02
- Dowolna klasa od C0 do C4
- Wyłącznie BSP w kategorii certyfikowanej
- C5 lub równoważny BSP wyprodukowany prywatnie spełniający wymagania STS-01
= STS-02 wymaga BSP klasy C6 (BVLOS, MTOM ≤25 kg, zaprogramowana trajektoria, FTS, geo-awareness) lub odpowiednika produkcji prywatnej spełniającego wymogi STS-02.

P: Strefa DRA-P to:
+ Strefa zakazu lotów BSP, wyznaczana nad obszarami o szczególnym znaczeniu
- Strefa, w której można latać dronem pilotowanym jedynie przez osoby z licencją A2
- Strefa, w której PAŻP wskazuje wymogi techniczne dla SBSP
- Strefa jedynie dla lotnictwa załogowego (od P - people)
= DRA-P (Prohibited) – strefa zakazu lotów BSP. Wyznaczana nad obszarami o szczególnym znaczeniu dla bezpieczeństwa państwa. Jednostki wojskowe, elektrownie jądrowe, bazy paliwowe. Operacje wykonuje wyłącznie zarządzający lub posiadacz specjalnego zezwolenia.

P: Kto ma pierwszeństwo w powietrzu – BSP czy załogowy statek powietrzny?
+ Załogowy statek powietrzny
- Obowiązuje zasada „prawej ręki" jak w ruchu drogowym
- Pierwszeństwo zależy od poinformowania o trasie lotu
- BSP, ponieważ jest mniejszy i zwinniejszy
= BSP zawsze ustępuje pierwszeństwa statkom załogowym. Pilot BSP odpowiada za stosowanie zasady „see and avoid". Szczególne pierwszeństwo mają służby (HEMS/LPR, Policja, Straż Pożarna), wojsko.

P: Strefa DRA-T charakteryzuje się tym, że:
+ Jest strukturą ograniczoną czasowo, której aktywność i warunki publikowane są w systemach teleinformatycznych
- Jest publikowana wyłącznie w AIP Polska i nie podlega aktualizacjom
- Jest stałą strukturą wyznaczoną nad obiektami infrastruktury, w której lot jest zawsze zabroniony
- Dotyczy wyłącznie testowania (T = Test) nowych modeli BSP
= DRA-T to struktura czasowa. Jej aktywność oraz warunki lotu są publikowane w systemach informacyjnych (mapy drona, PansaUTM) i w depeszach NOTAM. Przed każdym startem koniecznie sprawdź aktualny status tej strefy oraz szczegółowe wytyczne dla danego obszaru.

P: Planujesz lot w strefie DRA-T. Jaki warunek techniczny musi najczęściej spełnić Twój system BSP, aby operacja była zgodna z przepisami?
+ Dron musi być wyposażony w sprawnie działający i zaktualizowany system zdalnej identyfikacji (Remote ID) oraz system świadomości przestrzennej (Geo-awareness), jeśli wymaga tego opis strefy.
- Dron musi posiadać zamontowany certyfikowany spadochron ratunkowy o udźwigu dopasowanym do masy startowej (MTOM).
- Pilot musi posiadać wyłącznie drona posiadającego klasę nadaną fabrycznie (np. C1 lub C2), starsze drony (tzw. "legacy") mają tam całkowity zakaz lotów.
- System BSP musi być wyposażony w podwójne pozycjonowanie satelitarne (GPS oraz GLONASS) działające jednocześnie w paśmie 5.8 GHz.
= Strefa DRA-T (ang. Technical) to wyznaczony obszar w polskiej przestrzeni powietrznej, w którym operowanie BSP jest dozwolone wyłącznie pod warunkiem, że sprzęt spełnia określone wymogi techniczne i operacyjne określone przez PAŻP.

P:Jaki jest główny cel wyznaczania strefy geograficznej o oznaczeniu DRA-T?
+ Aby zapewnić bezpieczne współdzielenie przestrzeni powietrznej lub ograniczyć ryzyko operacyjne poprzez wymuszenie na operatorach stosowania konkretnych technologii nadawczo-odbiorczych lub lokalizacyjnych.
- Aby umożliwić producentom dronów testowanie prototypów bezzałogowców przed wprowadzeniem ich do seryjnej sprzedaży.
- Aby całkowicie zamknąć przestrzeń powietrzną nad miastami powyżej 100 tysięcy mieszkańców z powodów bezpieczeństwa publicznego.
- Aby informować pilotów o występujących w danym rejonie zakłóceniach sygnału GPS (tzw. GPS spoofing).
= Strefa DRA-T (ang. Technical) to wyznaczony obszar w polskiej przestrzeni powietrznej, w którym operowanie BSP jest dozwolone wyłącznie pod warunkiem, że sprzęt spełnia określone wymogi techniczne i operacyjne określone przez PAŻP.

P: Główną cechą odróżniającą strefę geograficzną DRA-T od pozostałych stref typu DRA jest to, że:
+ Dostęp do niej jest uwarunkowany spełnieniem przez BSP określonych wymagań technicznych (np. aktywny system Remote ID, Geo-awareness).
- Lot w niej jest bezwzględnie zabroniony dla wszystkich BSP, niezależnie od ich wyposażenia.
- Wlot w jej obszar wymaga wyłącznie dokonania zgłoszenia lotu (Check-in) w aplikacji teleinformatycznej, bez spełniania dodatkowych kryteriów.
- Jest dedykowana wyłącznie dla lotów wykonywanych przez wojsko, policję i straż pożarną.
= Strefa DRA-T (ang. Technical) to wyznaczony obszar w polskiej przestrzeni powietrznej, w którym operowanie BSP jest dozwolone wyłącznie pod warunkiem, że sprzęt spełnia określone wymogi techniczne i operacyjne określone przez PAŻP.

P: Jakie są minimalne odległości w poziomie, które pilot BSP w podkategorii A3 musi utrzymywać od terenów rekreacyjnych, mieszkalnych, przemysłowych i handlowych?
+ 150 m
- pilot z kategoria A3 może latać wszędzie
- 30 m
- 5 m
= Podkategoria A3 (loty z dala od ludzi): min. 150 m od terenów mieszkalnych, rekreacyjnych, przemysłowych i handlowych. To podstawowy parametr A3.

P: Strefa R (Restricted, parki narodowe / rezerwaty przyrody):
+ Wymaga uzyskania zgody zarządzającego daną strefą
- Dotyczy wyłącznie szlaków turystycznych
- Można latać powyżej 100 m AGL bez zgody, poniżej wymagana zgoda Ministra
- Loty są całkowicie zakazane ze względu na ochronę przyrody
= Strefa R nad parkami narodowymi i rezerwatami wymaga zgody zarządzającego (dyrekcja parku, RDOŚ) i odbywa się na warunkach przez niego określonych (wysokość, sezon, ograniczenia hałasu).

P: Strefa geograficzna DRA-I to:
+ Strefa informacyjna
- Strefa wykluczająca loty BSP
- Strefa wymagająca każdorazowo zgody zarządzającego
- Strefa wyznaczana tylko nad rezerwatami przyrody
= DRA-I (Information) zawiera ostrzeżenia nawigacyjne (NW), informacje o aktywności (AAA), strefy identyfikacji (ADIZ), strefy łączności radiowej (RMZ). Zawiera ostrzeżenia i informacje istotne dla bezpieczeństwa, ale zwykle nie wymaga formalnej zgody.

P: Czy możliwe jest wykonanie lotu BSP nad jednostką wojskową?
- Nie, zawsze
- Tak, dla BSP klasy C0 do masy 250 g
+ tak, po uzyskaniu zgody zarządcy terenu (komendanta jednostki)
- Tak, jeżeli na ogrodzeniu nie ma tabliczki z zakazem
= Loty nad jednostkami wojskowymi nie są zabronione zawsze. Istnieje możliwość uzyskania zgody. 

P: Strefa DRA-I ADIZ to:
+ Obszar identyfikacji obrony powietrznej
- Strefa wyłącznie dla dronów wojskowych
- Obszar 15 km wzdłuż zewnętrznej granicy UE
- Strefa automatycznego przeglądu technicznego dronów
= ADIZ = Air Defense Identification Zone. Operator BSP musi zapewnić identyfikację (plan lotu, usługi cyfrowe), aby służby obrony powietrznej miały informację o operacji.

P: Co to jest RODO?
+ Ogólne rozporządzenie o ochronie danych osobowych (Reg. UE 2016/679)
- Ogólne rozporządzenie w sprawie lotów BSP
- Przewodnik ochrony danych pilota BSP
- Rozporządzenie w sprawie procedur towarów niebezpiecznych
= RODO (GDPR) = Rozporządzenie (UE) 2016/679 o ochronie danych osobowych. Dotyczy operatorów BSP, jeżeli BSP rejestruje dane osobowe (wizerunek, tablice rejestracyjne). Wymaga m.in. informowania osób, podstaw prawnych przetwarzania.

P: Zdarzenie lotnicze z udziałem BSP (incydent/wypadek) należy zgłosić:
+ Do Państwowej Komisji Badania Wypadków Lotniczych
- Wyłącznie producentowi BSP
- Wyłącznie do PAŻP poprzez DroneTower
- Tylko do lokalnej Policji w terminie 72 h
= Zdarzenia lotnicze (wypadek, poważny incydent, incydent) zgłasza się obowiązkowo do PKBWL i Prezesa ULC przez system zgłoszeń (ECCAIRS). Operator zobowiązany jest prowadzić dziennik zdarzeń.

P: Czy zamiar lotu BSP powinien być zgłaszany do PAŻP?
+ Tak – każdy lot BSP wymaga zgłoszenia
- Nie ma takiego obowiązku w kategorii otwartej
- Tylko loty powyżej 120 m AGL
- Tylko loty BSP powyżej 250 g
= Każdy lot BSP w Polsce wymaga zgłoszenia (check-in) w aplikacji DroneTower – niezależnie od kategorii i masy BSP. To wymóg krajowy ULC/PAŻP. Po locie obowiązkowe jest też zgłoszenie zakończenia (wyłączenie Check-in) w systemie teleinformatycznym wskazanym przez PAŻP (DroneTower).

P: BSP 25 kg, 120 m AGL, kategoria otwarta. AKTYWNA strefa DRA-R MCTR. Czy można wykonać lot bez zgody?
+ Tylko za zgodą MIL TWR
- Tak, ale tylko do 100 m AGL
- Tak, jeśli odległość >6 km od granicy lotniska
- Tak, BSP do 25 kg w kat. otwartej
= DRA-R MCTR – strefa kontrolowana lotnisk wojskowych. Wymaga zgody MIL TWR (lub weryfikacji u dyżurnego jednostki wojskowej). Aktywność strefy = bezwzględny wymóg zgody Organu Kontroli Lotniska wojskowego.

P: Jaka jest maksymalna dozwolona wysokość lotu w kategorii OTWARTEJ?
+ 120 m AGL
- 100 m AGL
- 105 m AGL
- 30 m AGL
= Maksymalna wysokość w kategorii otwartej: 120 m AGL (z możliwością przekroczenia o 15 m nad pionową przeszkodą wyższą niż 105 m).

P: DRA-RM (Restricted-Medium) wyznaczana jest w obszarze:
+ 1 km < CTR/ATZ < 6 km, ze średnim prawdopodobieństwem uzyskania zgody
- Specjalnej strefy „Ruchu Miejskiego" (Road-Mobile)
- Systemu rozpylania mgły (Rain-Maker)
- Łączności radiowej o częstotliwości powyżej 10 GHz (Radio-Mobile)
= DRA-RM = strefa wokół lotnisk w pasie 1–6 km od granicy. Średnie prawdopodobieństwo uzyskania zgody.

P: BSP 25 kg, 120 m AGL. DRA-P MRT NIEAKTYWNA w danej chwili. Czy można wykonać lot bez zgody?
+ Tak, DRA-P nieaktywna nie wprowadza ograniczeń (wymagany tylko check-in)
- Tylko dla BSP <4 kg – i po opłaceniu stosownej opłaty skarbowej
- Nie, DRA-P zawsze wymaga zgody
- Tylko jeśli operator ma LUC
= DRA-P jest „strefą elastyczną" – gdy nieaktywna, nie wprowadza ograniczeń dla lotów BSP. Pilot wykonuje normalny check-in w DroneTower. Aktywność zawsze należy sprawdzać w aplikacji.

P: DRA-RH (Restricted-High) charakteryzuje się tym, że:
+ Ma wysokie prawdopodobieństwo uzyskania zgody
- Pozwala na lot każdemu pilotowi bez zgody
- Dotyczy dronów wodorowych (Hydrogen)
- Występuje wyłącznie w wysokich górach (High Mountain)
= DRA-RH = strefa wokół lotnisk powyżej 6 km od granicy. Wysokie prawdopodobieństwo uzyskania zgody, ale uzyskanie zgody jest nadal wymagane. CTR > 6 km, ATZ > 6 km.

P: Czy możliwy jest lot nad stacjami elektroenergetycznymi?
+ Należy uzyskać zgodę zarządcy terenu
- Nie, zawsze
- Tak, zawsze
- Jeżeli nie ma tabliczek z zakazem powieszonych na płocie, to można
= Stacje elektroenergetyczne to infrastruktura krytyczna. Lot wymaga zgody zarządcy terenu (np. operatora sieci przesyłowej).

P: Maksymalna wysokość lotu w scenariuszu STS-01 wynosi:
- 120 m AGL, z możliwością przekroczenia o 15 m nad pionową przeszkodą wyższą niż 105
- 120 m AMSL bez wyjątków
+ 120 m AGL 
- 150 m AGL – na podstawie ustnej zgody zarządzającego strefą 
= Dla scenariusza STS-01 (operacje VLOS w zaludnionym obszarze z użyciem drona z klasą C5) maksymalna wysokość lotu wynosi 120 m AGL (nad poziomem terenu). W przypadku scenariuszy standardowych operacje są ściśle zdefiniowane i ograniczone do 120 m AGL. Jeśli zachodzi potrzeba lotu wyżej (np. inspekcja wysokiego komina), operator musi wystąpić o zezwolenie na operację w kategorii szczególnej poza scenariuszem standardowym (na podstawie analizy ryzyka SORA) lub operować w kategorii otwartej (jeśli parametry drona i odległości od ludzi na to pozwalają).

P: BSP 25 kg, 120 m AGL, w strefie DRA-I AAA (Rejon Lotniczej Działalności) oznaczonej jako aktywna H24. Czy można wykonać lot bez formalnej zgody?
+ Tak, DRA-I AAA to strefa informacyjna informormująca o wzmożonej aktywności lotniczej
- Nie, BSP 25 kg wymaga zgody niezależnie od typu strefy
- Tak, ale tylko dla BSP w kategorii certyfikowanej
- Nie, w każdej strefie DRA-I wymagana jest zgoda zarządzającego
= DRA-I AAA (Rejon Lotniczej Działalności) to strefa informacyjna o możliwej wzmożonej aktywności lotniczej (np. sportowej). Nie jest strefą zamkniętą – zaleca się zachowanie szczególnej ostrożności. Nie wymaga formalnej zgody, ale operator ma obowiązek zachować szczególną ostrożność i wykonać check-in w DroneTower. Check-in w DroneTower jest obowiązkowy dla każdej operacji BSP. 

P: Strefa DRA-R wyznaczana jest:
+ Z możliwością wykonywania lotów po spełnieniu określonych warunków lub uzyskaniu zgody instytucji zarządzającej tą strefą
- Wyłącznie dla operatorów posiadających certyfikat LUC
- Wyłącznie dla obszarów objętych całkowitym zakazem lotów 24/7
- Wyłącznie nad cmentarzami w celu ochrony powagi miejsc pochówku
= DRA-R (Restricted) to strefa z ograniczeniami – operacje mogą być wykonywane za zgodą i na warunkach określonych przez PAŻP lub podmiot uprawniony, na wniosek którego strefa została wyznaczona.

P: Przepisy regulujące zasady wykonywania lotów nad portami morskimi, elektrowniami i ujęciami wody w Polsce zawarte są przede wszystkim w:
+ Wytycznych Prezesa ULC
- Ustawie o ochronie infrastruktury krytycznej
- Rozporządzeniu wykonawczym (UE) 2019/947
- Ustawie o obronie Ojczyzny
= Loty nad infrastrukturą krytyczną reguluje polskie prawo krajowe: Wytyczne Prezesa ULC. Rozporządzenia UE 2019/945 i 947 regulują kwestie europejskie (klasy BSP, kategorie operacji).

P: Czy możliwy jest lot nad elektrowniami?
+ Należy uzyskać zgodę zarządcy terenu
- Jeżeli nie ma tabliczek z zakazem powieszonych na płocie, to można
- Tak, zawsze
- Nie, zawsze
= Elektrownie to infrastruktura krytyczna. Lot wymaga zgody zarządcy terenu.

P: O czym trzeba pamiętać latając nad rurociągami paliwowymi, liniami energetycznymi, telekomunikacyjnymi i zaporami wodnymi, których uszkodzenie może stanowić zagrożenie dla życia, zdrowia lub środowiska?
+ O zachowaniu szczególnej ostrożności
- O poinformowaniu Prezesa Urzędu Lotnictwa Cywilnego o każdym locie
- Nie wolno latać nad takimi obiektami
- O uzyskaniu zgody od miejscowej Policji
= Loty nad infrastrukturą krytyczną wymagają szczególnej ostrożności, zgody zarządcy i często dodatkowych zezwoleń.

P: Czy loty dronem w nocy są dozwolone z licencją w podkategoriach A1/A3?
+ Tak, o ile dron jest wyposażony w zielone migające światło widoczne dla pilota lub obserwatora
- Tylko z licencją A2 – po wcześniejszym zgłoszeniu telefonicznym, co reguluje osobne rozporządzenie krajowe
- Loty w nocy są całkowicie zabronione w kategorii otwartej
- Tylko w wyznaczonych strefach lotów nocnych i wyłącznie poza sezonem lęgowym nietoperzy
= Loty nocne w kategorii otwartej są dozwolone, pod warunkiem wyposażenia BSP w zielone migające światło (warunek wprowadzony w UE w 2022 r.). Widoczność światła musi pozwalać na zachowanie VLOS.

P: Loty BSP w pobliżu działań ratowniczych (akcje służb):
+ Nie można, chyba że posiadasz zgodę odpowiednich służb prowadzących akcję
- Można jeżeli BSP ma mniej niż 250 g
- Przepisy tego nie regulują
- Można wykonywać bez ograniczeń – informowanie służb to dobry zwyczaj
= Loty BSP w pobliżu prowadzonych akcji ratowniczych są generalnie zabronione bez zgody służb. Mogą zagrażać statkom HEMS/LPR (śmigłowcom ratowniczym). Naruszenie skutkuje surowymi sankcjami.

P: Jak daleko od pilota można latać dronem w kategorii OTWARTEJ?
+ Maksymalnie w zasięgu wzroku pilota lub obserwatora
- Maksymalnie 500 m od pilota – zgodnie z instrukcją producenta BSP
- Nie ma limitów – po opłaceniu stosownej opłaty skarbowej
- Maksymalnie 200 m od miejsca startu
= Kategoria OTWARTA wymaga VLOS – zasięgu wzroku pilota bez przyrządów optycznych (lornetka, FPV bez obserwatora wykluczone). Można korzystać z obserwatora (UAO) który utrzymuje VLOS – wtedy pilot może operować na ekranie.

P: DRA-RL odnosi się do obszarów:
+ W odległości do 1 km od CTR/ATZ, D, TRA
- Po godzinie 22:00 wymagających czerwonego oświetlenia (Red-Light)
- Z ciszą radiową, sterowanych przewodem światłowodowym
- Z dostawami zakupów (Real-Life)
= DRA-RL = strefy do 1 km od lotnisk (CTR/ATZ) oraz niebezpieczne D, i czasowo zarezerwowane TRA). Niskie prawdopodobieństwo uzyskania zgody.

P: Litera „L” w oznaczeniu strefy geograficznej DRA-RL definiuje:
+ Niskie prawdopodobieństwo (Low) uzyskania zgody na operację BSP od instytucji zarządzającej tą strefą.
- Lokalny zasięg strefy (Local Area), ograniczony wyłącznie do granic lotniska.
- Obowiązek wykonywania lotów wyłącznie na niskiej wysokości (Low Level), czyli maksymalnie do 30 m AGL.
- Przebieg linii lotniczych (Line), nad którymi kategorycznie zabrania się uruchamiania bezzałogowych statków powietrznych.
= DRA-RL (Danger/Restricted Area – Low) charakteryzuje się niskim prawdopodobieństwem (Low) uzyskania zgody na lot. Obejmuje obszary o podwyższonym ryzyku operacyjnym, w których priorytet mają inne operacje lotnicze lub bezpieczeństwo obiektów na ziemi. Główna cecha: Wykonanie lotu wymaga spełnienia restrykcyjnych warunków określonych przez zarządzającego strefą (PAŻP, wojsko lub inny podmiot), a wnioski o zgodę są akceptowane tylko w wyjątkowych przypadkach. Typowe lokalizacje: Obszar w bezpośrednim sąsiedztwie lotnisk (w promieniu do 1 km od granicy CTR/ATZ), aktywne poligony wojskowe (strefy niebezpieczne D) oraz wybrane Parki Narodowe.

P: Czy możliwy jest lot nad ujęciami wody i oczyszczalniami ścieków?
+ Należy uzyskać zgodę zarządcy terenu
- Tak, zawsze
- Jeżeli nie ma tabliczek z zakazem powieszonych na płocie, to można
- Nie, zawsze
= Ujęcia wody i oczyszczalnie ścieków to elementy infrastruktury krytycznej. Lot wymaga zgody zarządcy terenu (Ustawa o ochronie infrastruktury krytycznej + Wytyczne Prezesa ULC).

P: Obszar powietrzny Rzeczypospolitej Polskiej rozciąga się nad:
+ Terytorium lądowym, morzem terytorialnym oraz wodami wewnętrznymi
- Wyłącznie nad terytorium lądowym, bez stref przygranicznych z państwami UE
- Wyłącznie nad terytorium lądowym, bez wód
- Wodami wewnętrznymi, ale wyłączając morze terytorialne państw członkowskich UE
= Polska przestrzeń powietrzna obejmuje obszar nad terytorium lądowym, morzem terytorialnym (12 mil morskich) oraz wodami wewnętrznymi. Reguluje to art. 1 ustawy Prawo Lotnicze.

P: Operator zamierzający wykonywać loty zgodnie ze STS-01 musi:
+ Złożyć Prezesowi ULC oświadczenie o zgodności operacji ze scenariuszem standardowym
- Zarejestrować się wyłącznie w PansaUTM – według klasyfikacji w załączniku do ustawy
- Wystąpić o zezwolenie operacyjne Prezesa ULC z opiniami SORA
- Uzyskać certyfikat LUC i pełną analizę SORA – po opłaceniu stosownej opłaty skarbowej
= STS-01/STS-02: wystarczy oświadczenie operacyjne (deklaracja zgodności ze scenariuszem standardowym) złożone do Prezesa ULC. Pełne zezwolenie i SORA są wymagane dla operacji poza STS.

P: Strefa DRA-R charakteryzuje się:
+ Możliwością wykonywania lotów po spełnieniu określonych warunków lub uzyskaniu zgody od instytucji zarządzającej tą strefą
- Stosowaniem się wyłącznie dla obszarów z całkowitym zakazem lotów 24h/dobę – pod warunkiem zachowania 30 m od osób
- Dopuszczaniem wyłącznie lotów rekreacyjnych dronami o masie poniżej 250 g – o ile operator posiada certyfikat LUC
- Wyznaczaniem wyłącznie w celu ochrony prywatności osób na posesjach prywatnych
= DRA-R (Restricted) – loty BSP możliwe po uzyskaniu zgody i na warunkach określonych przez zarządzającego strefą (PAŻP lub podmiot uprawniony).

P: Jaki jest minimalny wiek wymagany do samodzielnego pilotowania dronów w kategorii OTWARTEJ w Polsce?
- 16 lat
- 18 lat
+ 14 lat
- 17 lat
= W Polsce minimalny wiek pilota w kategorii otwartej to 14 lat. Przed rokiem 2025 wynosił 16, ale został obnizony. Osoba młodsza może latać pod nadzorem osoby uprawnionej (rodzic/opiekun) lub dla BSP <250 g.

P: Czy mogę robić zdjęcia ludzi używając BSP?
+ Tak, ale przestrzegając przepisów RODO
- Nie, jest to zabronione
- Tak, po powiadomieniu UOKiK
- Tak, bo jest to mój BSP i mam pełną swobodę
= Rejestrowanie wizerunku osób przez BSP podlega RODO. Wymagana podstawa prawna (zwykle zgoda osoby), informowanie o przetwarzaniu, minimalizacja danych, zabezpieczenia. Wyjątki: cele osobiste, cele dziennikarskie, artystyczne (art. 2 RODO). 

P: Strefa DRA-P oznacza:
+ Całkowity zakaz lotów BSP dla wszystkich operatorów
- Strefę informującą o możliwym niebezpieczeństwie, w której decyzja o wlocie należy do operatora
- Strefę testową dla nowych klas BSP
- Strefę „Priority", w której drony kurierskie mają pierwszeństwo
= DRA-P (Prohibited) wyznaczana jest nad obszarami o szczególnym znaczeniu (jednostki wojskowe, elektrownie jądrowe, bazy paliwowe). W aktywnej DRA-P loty BSP są zakazane – operacje wykonuje wyłącznie Zarządzający lub podmiot przez niego upoważniony.

### Procedury operacyjne

P: Plan misji w systemie drony.gov.pl powinien być złożony minimalnie:
+ Na co najmniej 24 godziny przed planowanym lotem
- 30 minut przed planowanym startem
- Bezpośrednio przed lotem, bez żadnych ograniczeń czasowych
- Na 7 dni przed planowanym lotem
= Plan misji składa się na co najmniej 24 h przed lotem, by zapewnić jego rozpatrzenie. Pozytywne rozpatrzenie planu nie jest jeszcze zgodą na lot – ostateczną zgodą jest zaakceptowany check-in w DroneTower.

P: Procedura przerwania lotu (Flight Termination) oznacza:
+ Awaryjne zakończenie lotu BSP poprzez zdalne odcięcie zasilania w celu minimalizacji ryzyka
- Powolne odlatywanie BSP od pilota
- Wyłączenie wyłącznie kamery BSP
- Wymianę baterii w locie
= Procedura przerwania lotu (Flight Termination) to natychmiastowe, wymuszone i nieodwracalne przerwanie zasilania zespołu napędowego drona (odcięcie prądu od silników), mające na celu natychmiastowe sprowadzenie drona na ziemię, bez możliwości dalszego sterowania nim. Klikasz przycisk FTS, silniki gasną w ułamku sekundy, a dron spada jak kamień (lub otwiera się spadochron). Po co stosuje się tak drastyczną procedurę? Stosuje się ją w sytuacji całkowitej utraty kontroli nad dronem (tzw. ucieczka drona / flyaway), gdy maszyna leci np. w stronę autostrady, lotniska lub gęstego tłumu ludzi, a systemy failsafe np RTH zawiodły. Lepiej, żeby dron spadł natychmiast w miarę bezpiecznym miejscu, niż miałby wlecieć w silnik samolotu pasażerskiego.

P: Pilot zauważa w trakcie lotu, że strefa, w której operuje, została właśnie aktywowana (np. czasowa DRA-P, MCTR uruchomione przez wojsko). Powinien:
+ Natychmiast przerwać operację: zakończyć lot, wycofać BSP z aktywowanej strefy lub bezpiecznie wylądować
- Ignorować aktywację – ważny jest pierwotny plan zgłoszony uprzednio przez check-in
- Skontaktować się z klientem i zapytać o decyzję
- Dokończyć zaplanowany manewr i wylądować w pierwotnej lokalizacji
= Aktywacja strefy w trakcie operacji oznacza, że dalsze loty są zabronione lub wymagają pilnej zgody. Pilot kończy lot, wycofuje BSP, zgłasza sytuację zarządzającemu strefą. Bieżący monitoring stref w DroneTower jest kluczowy.

P: Check-in w aplikacji DroneTower jest obowiązkowy:
+ Przed każdym lotem BSP, niezależnie od kategorii i miejsca operacji
- Tylko dla BSP o MTOM powyżej 4 kg
- Wyłącznie dla lotów w kategorii szczególnej (STS, LUC, zezwolenie)
- Wyłącznie nad obszarem zabudowanym
= Check-in w DroneTower (przed startem) i zgłoszenie zakończenia lotu jest obowiązkowe dla KAŻDEGO lotu BSP w Polsce – także w kategorii otwartej. Jest to wymóg krajowy ULC/PAŻP, niezależny od kategorii operacji.

P: Co to jest „lista kontrolna" (checklist) w odniesieniu do lotów BSP?
+ Lista pozycji, rzeczy do zrobienia lub punktów do rozważenia
- Lista miejsc operacji, które sprawdzałeś w przeszłości
- Lista, którą okazujemy podczas kontroli policyjnej
- Lista, na której zapisywane są daty kontroli drona
= Checklist to ustrukturyzowana lista kontrolna – kluczowe narzędzie redukcji błędów operacyjnych. Stosowana przed lotem (pre-flight), po locie (post-flight), w sytuacjach awaryjnych. Zastępuje pamięć systematyczną procedurą. 

P: W razie utraty łącza C2 w STS-01 BSP powinien:
+ Wykonać zaprogramowaną procedurę awaryjną
- Wyłączyć silniki natychmiast
- Wykonać manewr akrobatyczny, aby zwrócić uwagę pilota
- Lecieć dalej, próbując nawiązać łącze po dotarciu do celu
= BSP musi mieć zaprogramowaną reakcję na utratę łącza C2: RTH, lądowanie w wyznaczonym miejscu lub aktywacja FTS – wyzwalaną zanim BSP opuści dozwolony obszar operacji lub przekroczy parametry. 

P: Po wykonaniu operacji pilot powinien przede wszystkim:
+ Przeprowadzić inspekcję polotną BSP, zgłosić zakończenie lotu w DroneTower
- Natychmiast opuścić miejsce, nie zatrzymując się przy BSP
- Wyłączyć kontroler bez sprawdzenia stanu BSP
- Skasować logi telemetryczne – zgodnie z załącznikiem do ustawy RODO
= Procedura polotna: inspekcja BSP, zgłoszenie zakończenia lotu w DroneTower (obowiązkowe!), wpis do dziennika operacji, raport ze zdarzeń, debrief zespołu (lessons learned).

P: Jakie czynniki należy uwzględnić przy planowaniu trasy lotu BSP?
+ Strefy zakazu lotów
- Wyłącznie odległość od bazy
- Tylko atrakcyjność wizualną trasy
- Tylko aspekt energetyczny
= Planowanie trasy uwzględnia: strefy geograficzne, warunki meteo, przeszkody (linie WN, wieże, drzewa, budynki), miejsca lądowania awaryjnego, zasięg C2, rezerwę baterii. 

P: Skrót RTL w kontekście dronów oznacza:
+ Return To Launch
- Real Time Loop
- Ride To Lounge
- Return To Land
= RTL = Return To Launch. Synonim RTH (Return To Home). Oznacza automatyczny powrót BSP do zaprogramowanego punktu startu.

P: Obserwator przestrzeni powietrznej (AO) w STS-02 odpowiada za:
+ Monitorowanie przydzielonego sektora przestrzeni powietrznej i ostrzeganie pilota o zbliżających się statkach załogowych
- Sprzedaż usług fotografii lotniczej – według klasyfikacji w załączniku do ustawy, po opłaceniu stosownej opłaty skarbowej
- Sprawdzanie poprawności dokumentów operatora
- Operowanie BSP na zmianę z pilotem – pod warunkiem zachowania 30 m od osób
= AO obserwuje wyznaczony sektor wzdłuż trasy lotu BSP, używając ustalonych kodów komunikacyjnych. Pilot może wówczas reagować na konflikty (obniżenie, lądowanie). Jest to kluczowy środek łagodzący ryzyko w powietrzu w STS-02.

P: W trakcie operacji w kontrolowanym obszarze naziemnym pojawia się przypadkowo osoba postronna. Pilot powinien:
+ Natychmiast wylądować BSP w bezpiecznym miejscu lub aktywować odpowiednią procedurę awaryjną oraz wyprowadzić osobę z obszaru
- Zignorować – osoba sama odpowiada za swoje bezpieczeństwo
- Obniżyć prędkość BSP do 3 m/s i kontynuować misję
- Wykonać manewr odstraszający – zgodnie z instrukcją producenta BSP
= Wtargnięcie osoby postronnej narusza warunki STS-01. Pilot natychmiast bezpiecznie kończy lot (lądowanie / RTH), zespół wyprowadza osobę z obszaru. Operacja może być wznowiona dopiero po przywróceniu pełnej kontroli obszaru.

P: Co należy zrobić w przypadku zauważenia śmigłowca LPR w pobliżu BSP?
+ Natychmiast wylądować lub obniżyć BSP do bezpiecznego poziomu
- Wzbić BSP wyżej, by go ominąć z góry – na podstawie ustnej zgody zarządzającego operacją
- Skontynuować lot – śmigłowiec sam ominie BSP
- Spróbować wykonać pościg, by nagrać materiał
= BSP zawsze ustępuje pierwszeństwa, a szczególnie służbom ratunkowym (HEMS/LPR), które zawsze mają najwyższy priorytet. Reakcja: natychmiastowe obniżenie i lądowanie.

P: Pilot w trakcie operacji zauważa zbliżający się helikopter ratownictwa medycznego (HEMS/LPR). Powinien:
+ Niezwłocznie ustąpić pierwszeństwa: obniżyć BSP i wylądować
- Zwiększyć wysokość BSP, aby ominąć helikopter z góry
- Kontynuować misję, helikopter nas ominie
- Wyłączyć kamerę BSP, aby nie naruszać prywatności pacjenta oraz ratowników
= BSP zawsze ustępuje pierwszeństwa statkom załogowym, a w szczególności służbom (HEMS/LPR, Policja, Straż Pożarna). Pilot natychmiast obniża BSP i wykonuje lądowanie, usuwając konflikt.

P: Co należy zrobić, widząc zbliżającą się burzę?
+ Niezwłocznie znaleźć bezpieczne miejsce do lądowania lub aktywować RTH
- Próbować przelecieć burzę wyżej
- Nic – drony są odporne na wyładowania
- Zwiększyć prędkość, by szybciej dolecieć
= Burza (chmury Cumulonimbus) to zagrożenie: prądy pionowe, turbulencje, oblodzenie, grad, wyładowania. Reakcja: nie startować lub natychmiast lądować / RTH. Operacja przy aktywnym Cb w okolicy jest absolutnie wykluczona. Nie należy startować, jeśli burza zbliża się przed lotem.

P: Utrata połączenia pomiędzy aparaturą sterującą a BSP jest najczęściej związana z:
+ Przeszkodami terenowymi lub zbyt dużą odległością między BSP a aparaturą
- Promieniowaniem mikrofalowym tła
- Odbijaniem fal radiowych od powierzchni wody
- Problemami z kompasem BSP – o ile operator nie wykonał kalibracji
= Główne przyczyny utraty C2: zbyt duża odległość, przeszkody terenowe (budynki, drzewa), zakłócenia radiowe (wieże GSM, Wi-Fi, mikrofalówki). BSP powinien mieć zaprogramowaną reakcję (RTH/Land/FTS).

P: Pre-flight checklist obejmuje przede wszystkim:
+ Stan techniczny BSP (śmigła, mocowania, kadłub), baterie (napięcie ogniw, temperatura), kalibracje, GNSS, meteo, dokumenty, briefing zespołu, check-in w DroneTower
- Tylko stan baterii i kontrolera według instrukcji producenta
- Wyłącznie pogodę i widoczność z wyjątkiem operacji transgranicznych
- Wyłącznie sprawdzenie kart pamięci
= Pre-flight checklist jest kompleksowy: BSP mechanicznie, baterie, kalibracje (kompas/IMU), GNSS, warunki meteo, dokumenty, briefing zespołu i check-in w DroneTower.

P: Briefing przedlotowy zespołu powinien obejmować przede wszystkim:
+ Role i odpowiedzialności, przebieg operacji
- Plan urlopowy pilota
- Wyłącznie cel marketingowy operacji
- Listę zakupów dla zespołu
= Briefing przed lotem to ustalenie: roli (pilot, UAO, AO, operator kamery), przebiegu operacji, sygnałów komunikacji, procedur awaryjnych, miejsc lądowania awaryjnego, dróg ewakuacji osób postronnych. 

P: W strefie CTR – co jest prawdą o procedurze uzyskiwania zgody?
+ Po uzyskaniu zgody PAŻP, kontroler TWR może nadal odmówić zgody na lot lub zmienić warunki
- Po uzyskaniu zgody PAŻP/TWR odpowiedzialność za lot przejmują te instytucje
- Po akceptacji planu misji TWR nie może już odmówić
- Plan misji nie musi być akceptowany przez PAŻP
= Plan misji może być zaakceptowany w drony.gov.pl, ale ostateczna decyzja należy do TWR w dniu operacji. Kontroler może odmówić, zmienić warunki lub zadzwonić celem wyjaśnienia. Odpowiedzialność za lot ZAWSZE spoczywa na pilocie. Kontroler może też kontaktować się telefonicznie z operatorem.

P: Jakie działania należy podjąć w przypadku zbliżania się innego drona do naszego BSP?
+ Oddalić się od innego drona
- Spisać raport na druku DRA-P
- Wyłączyć silniki i czekać
- Kontynuować lot bez zmian
= Reakcja na zbliżający się BSP: manewr unikania (oddalenie się, obniżenie), w razie potrzeby lądowanie. Brak międzynarodowego standardu „kto ustępuje" między BSP – każdy operator powinien unikać kolizji.

P: CONOPS (Concept of Operations) to dokument zawierający:
+ Opis koncepcji operacji: cel, sprzęt
- Wyłącznie specyfikację techniczną silników BSP
- CONOPS dotyczy legalizacji uprawy konopii siewnych i nie ma nic wspólnego z BSP
- Cennik usług firmy operatora
= CONOPS to fundament dokumentacji operacyjnej. Opisuje koncepcję operacji, jej cel, sprzęt, role uczestników, procedury, analizę ryzyka i środki łagodzące – stanowi podstawę m.in. dla wniosków o zezwolenie poza scenariuszami standardowymi.

P: Służba Informacji Powietrznej (FIS):
+ Zapewnia załogom statków powietrznych informacje i wskazówki dla bezpiecznego wykonania operacji
- Zarządza wyłącznie przestrzenią klasy C
- Jest usługą prywatną dostępną wyłącznie odpłatnie
- Wydaje zgody na loty jako służba kontroli ruchu lotniczego dla przestrzeni klasy D
= FIS (Flight Information Service) świadczy informacje – o ruchu, pogodzie, stanie przestrzeni – ale NIE wydaje zgód ani nie udziela instrukcji obowiązkowych jak ATC. FIS funkcjonuje głównie w przestrzeni niekontrolowanej (klasa G).

P: Akceptacja planu misji w systemie drony.gov.pl/PansaUTM:
+ Nie jest jednoznaczna ze zgodą na lot
- Zwalnia z konieczności wykonywania check-in dla BSP <250 g
- Wymagana jest wyłącznie dla lotów BVLOS
- Jest jednoznaczna ze zgodą na wykonanie lotu i zwalnia z check-in w DroneTower
= Akceptacja planu misji w systemie drony.gov.pl nie oznacza jeszcze zgody na konkretny lot. Ostateczną zgodą jest zaakceptowany check-in w aplikacji mobilnej DroneTower – wykonywany przed każdym lotem.

P: W strefie CTR pilot BSP musi liczyć się z tym, że:
+ Po uzyskaniu zgody od PAŻP, kontroler TWR może nadal odmówić zgody na lot lub zmienić warunki
- Plan misji nie musi być akceptowany przez PAŻP, wystarczy DroneTower
- Po uzyskaniu zgody PAŻP odpowiedzialność za lot przejmuje PAŻP i TWR
- Po zaakceptowaniu planu misji TWR nie może już odmówić zgody na konkretny lot
= Plan misji złożony do PAŻP może być zaakceptowany, ale ostateczna decyzja należy do kontrolera TWR w dniu operacji – może odmówić lub zmienić warunki ze względu na ruch lotniczy. Kontroler może też skontaktować się telefonicznie z operatorem. A w razie potrzeby kontaktować się telefonicznie z operatorem.

P: W przestrzeni FL095–FL660 nad Polską zapewniana jest:
- Zarówno służba kontroli ruchu lotniczego, jak i służba informacji powietrznej (FIS)
- Brak jakiejkolwiek służby – przestrzeń jest niekontrolowana
+ Wyłącznie służba kontroli ruchu lotniczego, bez FIS
- Wyłącznie służba informacji powietrznej (FIS), bez kontroli ruchu
= W polskiej przestrzeni powietrznej obowiązuje ścisły podział pionowy: Poniżej FL095 (przestrzeń niekontrolowana klasy G) służbą odpowiedzialną za ruch jest FIS (Służba Informacji Powietrznej). Sektorowi informatorzy FIS podają pilotom komunikaty o pogodzie, innych statkach czy strefach, ale nie wydają zezwól ani nakazów. Od FL095 do FL660 (przestrzeń kontrolowana klasy C) służba FIS tam nie działa i nie jest zapewniana. Całkowitą władzę nad ruchem przejmuje ATC (Służba Kontroli Ruchu Lotniczego) – czyli kontrolerzy obszarowi (ACC). Tam każdy lot (zarówno IFR, jak i VFR) musi posiadać zezwolenie kontroli i wykonywać polecenia kursowe i wysokościowe.

P: Lądowanie awaryjne w STS-01 powinno odbyć się:
+ W zaplanowanej wcześniej strefie awaryjnej w obrębie kontrolowanego obszaru naziemnego
- Na najbliższym dachu – po wcześniejszym zgłoszeniu telefonicznym, co reguluje osobne rozporządzenie krajowe
- W dowolnym miejscu w zasięgu BSP
- W parku publicznym dla zminimalizowania szkód
= Strefy lądowania awaryjnego planuje się przed lotem w obrębie kontrolowanego obszaru naziemnego i bufora. Mają być dostępne, bezpieczne (brak ludzi, infrastruktury wrażliwej) i osiągalne dla BSP w każdej fazie lotu.

P: Logbook operacyjny (dziennik operacji) operatora UAV jest:
+ Wymaganym dokumentem operatora
- Dokumentem wewnętrznym dla potrzeb księgowych
- Wymagany wyłącznie przy lotach poza Polską
- Opcjonalnym narzędziem marketingowym
= Dziennik operacji to obowiązkowa dokumentacja operatora, podlegająca audytowi ULC. Zawiera ewidencję lotów, zdarzenia, serwis BSP. Stanowi podstawę do oceny dojrzałości operacyjnej. Ewidencja lotów, czasu, lokalizacji, BSP, zdarzeń, czynności serwisowych – podstawą audytu i analizy ryzyka.

P: W razie spadku napięcia baterii BSP poniżej progu ostrzegawczego pilot powinien:
+ Niezwłocznie rozpocząć procedurę powrotu lub awaryjnego lądowania w bezpiecznym miejscu
- Zignorować ostrzeżenie – jest to wartość konserwatywna
- Wyłączyć GPS, co zmniejszy zużycie energii
- Zwiększyć moc silników, aby szybciej dolecieć do celu
= Ostrzeżenie o niskim napięciu / niskim stanie baterii oznacza wejście w zakres rezerwy – pilot rozpoczyna procedurę powrotu (RTH) lub lądowania w wyznaczonym miejscu. Ignorowanie skutkuje awaryjnym przerwaniem zasilania w powietrzu.

P: Czy można pozostawiać akumulatory BSP w czasie ładowania bez nadzoru?
+ Nie, baterie LiPo mogą ulec samozapłonowi
- Tak, jeśli ładowarka ma certyfikat
- Tak, akumulatory są bezpieczne
- Tak, jeśli temperatura otoczenia jest poniżej 25°C
= Baterie LiPo w trakcie ładowania (lub po przeładowaniu / uszkodzeniu) mogą się zapalić. Ładowanie ZAWSZE pod nadzorem, najlepiej w torbie LiPo-safe lub stalowej skrzyni, na powierzchni niepalnej, z dala od materiałów łatwopalnych. 

P: Obserwator BSP (UA Observer) w STS-01 ma za zadanie:
+ Utrzymywać stały kontakt wzrokowy z BSP i informować pilota o zagrożeniach
- Naprawiać BSP w terenie na podstawie ustnej zgody zarządzającego operacją
- Filmować dokumentację promocyjną z lotu
- Pilotować BSP zamiennie z głównym pilotem
= UAO (UA Observer) utrzymuje VLOS z BSP i informuje pilota o zagrożeniach – innych statkach powietrznych, przeszkodach, osobach postronnych. Pomaga zachować ciągłość VLOS, gdy pilot operuje BSP korzystając z monitora.

P: NOTAM (Notice to Airmen / Air Missions) to:
+ Komunikat dla lotnictwa o czasowych zmianach
- System wymiany płatności za zgody w PansaUTM
- Protokół komunikacji łącza C2
- Numer rejestracyjny BSP
= NOTAM zawiera istotne dla bezpieczeństwa informacje czasowe – nieczynne lotniska, aktywacje stref restrykcyjnych, ostrzeżenia. Pilot BSP powinien sprawdzać NOTAM-y dotyczące rejonu operacji. Ograniczeniach lub zagrożeniach w przestrzeni powietrznej.

P: Gdzie po locie należy zostawić akumulator BSP na noc?
+ W specjalnej skrzyni lub torbie ognioodpornej (LiPo-safe bag)
- W ładowarce – zawsze podłączony – zgodnie z instrukcją producenta BSP
- W wilgotnej piwnicy – wilgoć przedłuży żywotność
- W BSP, by był natychmiast gotowy do kolejengo lotu
= Baterie LiPo przechowuje się w torbach ognioodpornych (LiPo-safe bags) lub stalowych skrzyniach. Zwłaszcza po locie (gdy mogły się rozgrzać). Ładowanie też zawsze pod nadzorem, w bezpiecznym miejscu, na powierzchni niepalnej. Ze względu na ryzyko samozapłonu uszkodzonej baterii.

P: Ostateczną zgodą na wykonanie konkretnego lotu BSP w Polsce jest:
+ Zaakceptowany check-in w aplikacji DroneTower
- Telefoniczna zgoda dyżurnego PAŻP
- Pozytywnie rozpatrzony plan misji w systemie drony.gov.pl
- Wpis numeru operatora do logbooka
= Pozytywne rozpatrzenie planu misji nie jest jeszcze zgodą na lot. Ostateczną zgodą (lub jej brakiem) jest zaakceptowany check-in w aplikacji DroneTower wykonywany bezpośrednio przed startem.


### Ogólna wiedza o systemach BSP

P: Test zasięgu i poprawności działania aparatury RC powinien być wykonywany:
+ Przed każdym lotem
- Nie ma takiej potrzeby – aparatura działa zawsze poprawnie
- Tylko przy zmianie warunków pogodowych
- Tylko przy wymianie baterii
= Test zasięgu i sprawności aparatury (range check) wykonuje się przed każdym lotem – sprawdza siłę sygnału i ewentualne zakłócenia w okolicy. Może wykryć usterki anteny lub silne źródła zakłóceń (np. wieże komórkowe). W ramach pre-flight checklist.

P: Najczęściej spotykane silniki napędowe w wielowirnikowcach (MR) to:
+ Bezszczotkowe outrunner
- Szczotkowe inrunner
- Bezszczotkowe inrunner
- Szczotkowe outrunner
= W MR dominują silniki BLDC (bezszczotkowe) outrunner – z wirującym płaszczem zewnętrznym. Zapewniają wysoki moment obrotowy przy niskich obrotach, są wydajne i mają długą żywotność. Inrunnery (wirujący wewnętrznie wirnik) stosuje się raczej w samochodach RC.

P: Klasa C6 zgodnie z rozp. (UE) 2019/945 to BSP charakteryzujący się:
+ MTOM ≤ 25 kg, dedykowany operacjom BVLOS w STS-02
- MTOM > 25 kg, kategoria certyfikowana
- Wyłącznie do operacji wewnętrznych w halach
- Wyłącznie do operacji nad wodą
= C6 dedykowana STS-02 (BVLOS). MTOM ≤ 25 kg, wymaga zaprogramowanej trajektorii, FTS, geo-awareness, e-ID i mechanizmów wykrywania ruchu lotniczego (lub współpracy z obserwatorami AO). Wymagający zaprogramowanej trasy, systemu zakończenia lotu, geo-awareness, e-ID.

P: Add-on (zestaw modernizacyjny) zgodnie z rozp. (UE) 2020/1058 umożliwia:
+ Przekształcenie BSP klasy C3 do wymagań klasy C5 poprzez doposażenie
- Zwiększenie pojemności baterii o 50%
- Dodanie kamery termowizyjnej do BSP
- Wymianę silnika BSP na mocniejszy
= Add-on to certyfikowany zestaw doposażenia BSP klasy C3 do wymagań C5. Zwykle obejmuje moduł low-speed, miganie świetlne, geo-awareness. Producent zestawu wystawia deklarację zgodności. Moduł low-speed/light/geo) i deklarację producenta zestawu.

P: Konfiguracja stałopłatowa (fixed-wing) BSP charakteryzuje się:
+ Długim czasem lotu, dużym zasięgiem
- Krótkim czasem lotu i brakiem zasięgu
- Niemożnością startu z rozbiegu
- MTOM zawsze powyżej 25 kg
= Stałopłaty: długi czas lotu, duży zasięg dzięki efektywności aerodynamicznej skrzydła. Brak zawisu (chyba że VTOL-hybrid). Wymagają miejsca na rozbieg i lądowanie, w stosunku do BSP klasy C6 mogą być atrakcyjną opcją operacyjną. Brakiem zawisu (chyba że VTOL-hybrid) i wymogiem miejsca na start/lądowanie.

P: Etykieta klasy (np. „C5") na BSP oznacza:
+ Potwierdzenie zgodności BSP z wymaganiami technicznymi danej klasy zgodnie z rozp.
- Klasę energetyczną silnika
- certyfikat przeciwpożarowy posiadany przez Producenta baterii
- Tylko unikalny numer seryjny
= Etykieta klasy (C0–C6) potwierdza fabryczną zgodność BSP z wymaganiami technicznymi rozp. delegowanego (UE) 2019/945. Bez etykiety BSP nie kwalifikuje się do operacji w danej klasie (poza ścieżką BSP własnej budowy lub dla BSP wprowadzonych do obrotu przed wejściem przepisów).

P: Śmigło o oznaczeniu 14"x5" charakteryzuje się:
+ 14 cali długości (średnicy) i 5 cali skoku (pitch)
- 14 cm długości i 5 cm skoku
- 14 cali długości i 5° kąta natarcia
- Długością 14 cm i grubością 5 mm
= Standardowe oznaczenie śmigieł w jednostkach calowych: pierwsza wartość = średnica w calach, druga = skok w calach. 14"x5" = 14 cali średnicy (35.5 cm), 5 cali skoku.

P: Symbol 500KV na silniku BSP oznacza:
+ Prędkość obrotową w rpm na jeden wolt napięcia zasilania
- Prędkość 500 obrotów na minutę
- Moc w kilowoltach (KV)
- Moment obrotowy silnika 
= KV (kilo-rpm-per-Volt, choć symbol myli się z kilowoltami) to stała napięciowa silnika BLDC: prędkość obrotowa rpm/V. Silnik 500KV przy 14.8V (4S LiPo) osiąga teoretycznie 7400 rpm bez obciążenia. Niski KV = duży moment, wysoki KV = wysokie obroty. Silnik wykona 500 obrotów na minutę na każdy 1V przyłożonego napięcia.

P: Aby lot dronem przy użyciu aparatury i aplikacji sterującej przebiegał poprawnie i komfortowo, wymagane jest poprawne działanie:
+ Wszystkich trzech linków
- Wyłącznie linku telemetrii
- Wyłącznie linku aparatury
- Wyłącznie linku wizji
= Komfortowy lot wymaga trzech niezależnych łączy radiowych: link aparatury (sterowanie BSP → C2), link telemetrii (status BSP → pilot), link wizji (obraz z kamery → pilot). Utrata któregokolwiek wpływa na świadomość sytuacyjną pilota. Aparatury, wizji oraz telemetrii.

P: Jaka jest poprawna kolejność uruchamiania BSP?
+ W pierwszej kolejności aparatura, potem dron
- Kolejność nie ma znaczenia
- Pierw odbiornik, następnie nadajnik
- W pierwszej kolejności dron, następnie aparatura
= Zasada: NAJPIERW APARATURA (nadajnik TX), POTEM DRON (odbiornik RX). Zapobiega to przypadkowemu odebraniu przez drona losowych sygnałów ze zlokalizowanego w pobliżu obcego nadajnika. Wyłączanie – w odwrotnej kolejności (pierw dron, potem aparatura).

P: Spuchnięty pakiet baterii LiPo to informacja, że:
+ Bateria została uszkodzona i nie nadaje się do dalszego użytku
- Bateria jest przeładowana, wystarczy ją rozładować
- To normalne zjawisko, niewymagające reakcji
- Bateria się rozładowała
= Spuchnięcie baterii LiPo (puff) to nieodwracalne uszkodzenie chemiczne wewnątrz ogniwa. Bateria nie nadaje się do użycia. Stwarza realne ryzyko pożaru/wybuchu. Należy ją zutylizować w specjalistycznym punkcie (najlepiej po wyładowaniu w wodzie z solą).

P: Oznaczenie trybu „P" na aparaturze sterującej dronami DJI oznacza tryb:
+ Pozycyjny / GPS (Position)
- Atti
- autonomiczny (Pilot Over)
- Sportowy
= Tryb P (Position) – najbardziej stabilizowany tryb DJI: aktywne GNSS, sensory wizyjne, czujniki odległości. BSP utrzymuje pozycję, lot jest płynny. Tryb Atti – tylko stabilizacja na żyroskopach (driftuje). Tryb Sport (S) – szybki, mniej zabezpieczeń. 

P: Tryb low-speed w BSP klasy C5 ogranicza prędkość maksymalną do:
+ 5 m/s
- 3 m/s
- 15 m/s
- 10 m/s
= Tryb niskiej prędkości w C5 ogranicza maksymalną prędkość lotu do 5 m/s. Stosowany w sytuacjach wymagających szczególnej ostrożności – np. w pobliżu osób uczestniczących w operacji lub obiektów wrażliwych.

P: Śmigła dronów dzielimy na:
+ Lewe (CCW) i prawe (CW)
- Nie dzielimy – są tylko lewe
- Nie dzielimy – są tylko prawe
- Dzielimy wyłącznie według rozmiaru
= W multirotorze sąsiadujące silniki obracają się w przeciwnych kierunkach (po przekątnej te same). Każdy potrzebuje odpowiedniego śmigła: CW (Clockwise, prawe) lub CCW (Counter-Clockwise, lewe). Zamiana skutkuje przewróceniem BSP przy starcie. Każda para silników sąsiadujących obraca się w przeciwnych kierunkach.

P: Litera „S" w oznaczeniu baterii LiPo (np. 4S, 6S) oznacza:
+ Połączenie szeregowe ogniw (Series)
- Pojemność baterii
- Napięcie znamionowe pojedynczego ogniwa
- Połączenie równoległe ogniw
= S = Series (szeregowe). 4S = 4 ogniwa w szeregu = 14.8 V napięcia znamionowego (4×3.7 V). P = Parallel (równoległe) – zwiększa pojemność. Oznaczenie 4S2P = 4 szeregowo, 2 takie zespoły równolegle. „4S" = 4 ogniwa w szeregu.

P: Typowa konfiguracja multirotor BSP charakteryzuje się:
+ Wysoką manewrowością, możliwością zawisu (VTOL)
- Naturalną zdolnością do lotu szybowego
- Wymogiem startu z rozbiegu
- Najdłuższym czasem lotu w stosunku do innych konfiguracji
= Multirotor: wysoka manewrowość, zawis, VTOL. Słabe strony: krótki czas lotu (efektywność aerodynamiczna jest niska), podatność na wiatr, krótki zasięg. Konfiguracje: kwadro-, hexa-, oktokopter. Ograniczonym czasem lotu w porównaniu do stałopłatów i podatnością na wiatr.

P: Kalibrację kompasu BSP wykonujemy:
+ Przy każdej zmianie miejsca startu
- Przy każdej wymianie baterii
- Wyłącznie przed pierwszym lotem fabrycznym
- Co miesiąc, niezależnie od użycia
= Kalibracja kompasu jest wymagana przy znacznej zmianie lokalizacji geograficznej (różnica deklinacji magnetycznej) lub na żądanie aplikacji (zakłócenia magnetyczne, blisko stali). Nie wykonuje się jej rutynowo przy każdym locie, ale ZAWSZE gdy aplikacja sygnalizuje taką potrzebę.

P: Telemetria BSP to:
+ Strumień danych z BSP do stacji kontrolnej
- Pomiar głośności silników
- Wbudowane GPS
- Funkcja telewizyjnego streamingu
= Telemetria to dane z BSP informujące pilota o stanie systemu: pozycja, wysokość, prędkość, kurs, stan baterii, jakość GNSS, ostrzeżenia (geofence, low battery, IMU error). Pozwala podjąć decyzje operacyjne i awaryjne.

P: Stan techniczny BSP sprawdzamy:
+ Przed każdym lotem
- Nie ma potrzeby regularnego sprawdzania
- Raz na miesiąc
- Raz w roku przy serwisie
= Inspekcja przedlotowa BSP jest obligatoryjna PRZED KAŻDYM LOTEM. Obejmuje stan śmigieł, mocowań silników, kadłuba, baterii, kamery, anten. Element pre-flight checklist.

P: Skrót MTOM oznacza:
+ Maximum Take-Off Mass
- Minimum Take-Off Mass
- Measured Take-Off Mass
- Multirotor Take-Off Mass
= MTOM = Maximum Take-Off Mass – maksymalna masa startowa BSP, łącznie z baterią/paliwem i ładunkiem. Parametr decydujący o klasyfikacji BSP (C0–C6).

P: Procedura fail-safe „HOVER" oznacza:
+ Wykonanie zawisu w bieżącej pozycji w oczekiwaniu na odzyskanie łączności lub decyzję pilota
- Awaryjne lądowanie w miejscu zdarzenia – zgodnie z instrukcją producenta BSP
- Powrót do miejsca startu (Return to Home)
- Awaryjne wyłączenie silników – po opłaceniu stosownej opłaty skarbowej
= HOVER (zawis) jako tryb fail-safe: BSP utrzymuje aktualną pozycję, dając pilotowi czas na odzyskanie łączności lub manualną decyzję. Alternatywy: RTH (powrót do domu), LAND (lądowanie w miejscu).

P: System „Fail-safe" w dronie to:
+ System bezpieczeństwa reagujący automatycznie na sytuacje awaryjne
- System awaryjnego wyłączania silników
- System zapisujący dane o błędach GPS – co reguluje osobne rozporządzenie krajowe
- Tryb śledzący wybrany obiekt – po wcześniejszym zgłoszeniu telefonicznym
= Fail-safe to ogólna nazwa zaprogramowanych reakcji BSP na zdarzenia awaryjne: utrata C2, niski stan baterii, naruszenie geofence. Typowe akcje: HOVER, RTH, LAND, FTS. Konfigurowane w aplikacji sterującej przed lotem. M.in. na utratę łączności pomiędzy nadajnikiem TX a odbiornikiem RX, lub na krytyczny poziom naładowania baterii.

P: Klasa C5 zgodnie z rozp. (UE) 2019/945 to BSP charakteryzujący się m.in.:
+ MTOM ≤ 25 kg, dedykowany STS-01
- MTOM do 250 g, kategoria otwarta
- MTOM ≤ 4 kg, kategoria otwarta A2
- Dowolnym MTOM dla operacji BVLOS
= C5 to BSP klasy MTOM ≤ 25 kg dedykowany operacjom w STS-01 (VLOS). Wymaga trybu low-speed (5 m/s), systemu zakończenia lotu, geo-awareness, e-ID. Może powstać przez add-on do C3 (rozp. 2020/1058). VLOS), wyposażony w tryb low-speed (≤5 m/s), system zakończenia lotu, geo-awareness i e-ID.

P: W oznaczeniu śmigła 15"x5", człon „5"" oznacza:
+ Drogę, jaką pokonałoby śmigło podczas obrotu o 360° w ośrodku nieściśliwym
- Długość śmigła
- Powierzchnię łopaty śmigła w najszerszym miejscu
- Kąt nachylenia łopaty śmigła
= Skok śmigła wyrażony w calach. 15"x5" = średnica 15 cali, skok 5 cali (teoretyczna droga jaką śmigło pokonałoby w idealnym ośrodku nieściśliwym podczas jednego pełnego obrotu).

P: MTOM (Maximum Take-Off Mass) oznacza:
+ Maksymalną masę startową BSP
- Masę samej baterii
- Masę pustego BSP bez baterii
- Maksymalną długość ramienia BSP
= MTOM to maksymalna masa startowa BSP – z baterią, paliwem i ładunkiem. Determinuje klasyfikację BSP (C0–C6) i rodzaj operacji. Przekroczenie MTOM powoduje utratę zgodności BSP z deklarowaną klasą.

P: Direct Remote ID (zdalna identyfikacja BSP) transmituje przede wszystkim:
+ Identyfikator operatora, pozycję BSP
- Tylko numer rejestracyjny operatora
- Wyłącznie nagrania kamer
- Dane handlowe firmy operatora
= Direct Remote ID transmituje w czasie rzeczywistym: ID operatora, pozycję BSP, prędkość, wysokość, pozycję pilota, znacznik czasu w sposób umożliwiający odbiór przez urządzenia w pobliżu (Bluetooth/Wi-Fi).

P: Łącze C2 (Command and Control) w BSP to:
+ Dwukierunkowe łącze danych pomiędzy jednostką sterującą,a BSP
- Wbudowany akumulator zapasowy – zgodnie z instrukcją producenta BSP
- Funkcja ładowania baterii bezprzewodowo
- Łącze wideo do streamingu obrazu
= Łącze C2 = dwukierunkowy link radiowy stacja kontrolna ↔ BSP, przekazujący komendy sterowania i telemetrię. Niezawodność łącza C2 jest fundamentalnym wymogiem bezpieczeństwa. Łącze wideo (video downlink) jest zwykle osobnym kanałem. 

P: Skrót RTH oznacza:
+ Return To Home
- Ready To Hangout
- Return To Hangar
- Real-Time Heading
= RTH (Return To Home) – funkcja automatycznego powrotu BSP do punktu startu po utracie łącza C2 lub niskim stanie baterii. Wymaga aktywnego GNSS i prawidłowo ustawionego home point.

P: Długoterminowe przechowywanie nieinteligentnej baterii LiPo bez użytkowania wymaga:
+ Rozładowania lub doładowania do tzw. napięcia znamionowego
- Naładowania do 100% 
- Pozostawienia bez zmian – w stanie po ostatnim locie
- Rozładowania do zera według instrukcji producenta
= Przechowywanie LiPo: napięcie storage ~3.8 V na ogniwo (lub 3.7–3.85 V). 100% przyspiesza degradację, 0% może spowodować trwałe uszkodzenie ogniwa (głębokie rozładowanie). Inteligentne baterie (np. DJI) robią to automatycznie. Ok. 3.8 V/ogniwo).

P: Jak nazywamy regulatory obrotów silnika w wielowirnikowcu (MR)?
+ ESC
- UBEC
- BEC
- SBUS
= ESC (Electronic Speed Controller) to regulator obrotów silnika bezszczotkowego. BEC/UBEC to przetwornice napięcia zasilające elektronikę. SBUS to protokół komunikacji aparatury RC.


### Środki ograniczające ryzyko na ziemi

P: Geofencing (geo-awareness) w BSP klasy C5/C6 oznacza funkcję:
+ Ostrzegania pilota o naruszeniu stref geograficznych lub aktywnego blokowania BSP przed wlotem w zdefiniowane strefy zakazane/ograniczone
- Pomiaru wilgotności w trakcie lotu
- Mocowania kamery do BSP – na podstawie ustnej zgody zarządzającego, o ile operator posiada certyfikat LUC
- Sieci Wi-Fi do transmisji obrazu – pod warunkiem zachowania 30 m od osób, z wyjątkiem operacji transgranicznych
= Geo-awareness/geofencing to funkcja informowania lub aktywnego ograniczania ruchu BSP na podstawie pokładowych danych o strefach geograficznych. C5/C6 muszą tę funkcję posiadać zgodnie z rozp. (UE) 2019/945.

P: Maksymalny wymiar charakterystyczny BSP (D) w scenariuszu STS-01 wynosi:
+ 3 m
- 1 m
- Brak ograniczenia – istotna jest tylko masa
- 5 m
= STS-01: maksymalny wymiar charakterystyczny BSP D = 3 m (przy MTOM ≤ 25 kg). To wpływa na rozmiar bufora i kontrolowanego obszaru naziemnego. STS-02 dopuszcza większe BSP.

P: Dlaczego należy zachować szczególną ostrożność, lecąc dronem w pobliżu linii energetycznych wysokiego napięcia?
+ Promieniowanie elektromagnetyczne i indukcja mogą zakłócać systemy stabilizacji lotu
- Tylko ze względu na ryzyko uszkodzenia samych linii
- Linie energetyczne nie wpływają na BSP – według klasyfikacji w załączniku do ustawy
- Tylko ze względu na hałas – z wyjątkiem operacji transgranicznych
= Linie WN wytwarzają silne pola elektromagnetyczne mogące zakłócać systemy stabilizacji BSP (IMU, kompas, GNSS, łącze C2). Plus ryzyko uszkodzenia mechanicznego BSP o przewody (często słabo widoczne) i konsekwencji uszkodzenia linii. Operacja wymaga zgody operatora sieci.

P: Operacja w STS-01 w aktywnej strefie DRA-R o zakresie wysokości 0–700 ft AMSL, planowana wysokość lotu BSP 100 m AGL (lokalna wysokość terenu ~150 m n.p.m.). Czy lot mieści się w strefie wysokościowej DRA-R?
+ Nie – lot 100 m AGL przy 150 m n.p.m. = 250 m AMSL
- Nie – AGL zawsze przewyższa AMSL
- Tak – AGL i AMSL to to samo
- Tak – AMSL liczy się od poziomu lotniska
= Strefy DRA-R często mają granice w wysokości AMSL (nad poziomem morza). Lot 100 m AGL przy wysokości terenu 150 m n.p.m. = 250 m AMSL. 700 ft = ~213 m AMSL. Lot wykracza poza górną granicę strefy. Należy zawsze przeliczać AGL ↔ AMSL z uwzględnieniem rzeźby terenu.

P: Co jest uważane za materiał niebezpieczny w kontekście przewozu przez BSP?
+ Łatwopalne ciecze, gazy pod ciśnieniem
- Tylko substancje żrące
- Tylko łatwopalne ciecze
- Tylko gazy pod ciśnieniem
= Materiały niebezpieczne (Dangerous Goods) wg ICAO/IATA: 9 klas, m.in. wybuchowe, gazy, ciecze łatwopalne, substancje żrące, infekcyjne, radioaktywne, utleniacze. W kategorii OTWARTEJ ich przewóz jest zabroniony. 

P: Komunikacja zespołu operacyjnego w trakcie operacji powinna być:
+ Realizowana za pomocą dopuszczalnych form komunikacji radiowej
- Wykluczona dla zachowania koncentracji pilota
- Realizowana przez krzyk
- Tylko w formie SMS-ów
= Łączność zespołu (pilot, UAO, AO) realizowana jest dedykowanymi środkami z procedurą sprawdzenia łączności przed lotem. Komendy ustalone i krótkie (np. pozycje zegarowe, sygnały awaryjne).

P: W STS-01 nad obszarem zabudowanym operacja jest dopuszczona pod warunkiem, że:
+ Kontrolowany obszar naziemny obejmuje obszar lotu i jest zapewniona obecność wyłącznie osób biorących udział w operacji
- Pilot posiada certyfikat LUC
- Lot odbywa się tylko nocą – według klasyfikacji w załączniku do ustawy, po opłaceniu stosownej opłaty skarbowej
- BSP waży poniżej 4 kg – pod warunkiem zachowania 30 m od osób, z wyjątkiem operacji transgranicznych
= STS-01 dopuszcza loty nad obszarem zabudowanym – ale z zachowaniem kontrolowanego obszaru naziemnego. W praktyce wymaga to uzgodnień z zarządcą terenu, zamknięcia ulic/placów, oznakowania, kontroli dostępu.

P: Wybór miejsca startu i lądowania BSP w STS-01 powinien uwzględniać:
+ Płaską, twardą powierzchnię
- Wyłącznie estetykę miejsca
- Wyłącznie dostępność prądu
- Bliskość bankomatu
= Miejsce startu/lądowania musi być stabilne, wolne od przeszkód i osób, dostępne dla zespołu w razie awarii, oraz dostosowane wielkością do BSP i rozmiaru pola turbulencji generowanego przez wirniki.

P: Loty BSP nad infrastrukturą krytyczną (linie WN, gazociągi, rurociągi) wymagają:
+ Szczególnej analizy ryzyka
- Wyłącznie BSP klasy C0
- Wyłącznie zgłoszenia przed lotem
- Tylko zgody pilota i operatora
= Infrastruktura krytyczna stanowi szczególne zagrożenie (pola elektromagnetyczne wokół linii WN, ciepłe rurociągi powodujące zaburzenia termalne, ryzyko spowodowania awarii). Wymaga rozszerzonej analizy ryzyka, dodatkowych środków łagodzących i zwykle zgody zarządzającego.

P: Procedura ewakuacji osób z obszaru operacji w razie zagrożenia (np. pożar BSP) powinna:
+ Być zdefiniowana, znana zespołowi
- Polegać wyłącznie na wezwaniu pomocy
- Być improwizowana na bieżąco
- Być wprowadzana wyłącznie zimą
= Plan ewakuacji – element ERP. Określa kierunek ewakuacji (pod wiatr od dymu/płonącej baterii), miejsce zbiórki (punkt poza obszarem operacji), osobę odpowiedzialną za koordynację i sprawdzenie obecności zespołu. 

P: Plan reakcji na zagrożenie naziemne (Emergency Response Plan) powinien zawierać:
+ Procedury powiadamiania służb, plan ewakuacji
- Wyłącznie numery telefonów alarmowych
- Pełną analizę SORA
- Wzór umowy z klientem
= ERP zawiera procedury w razie wypadku, dane służb ratunkowych (numery, adres najbliższego szpitala), plan ewakuacji osób, miejsce zbiórki, lokalizację apteczki i gaśnicy do baterii litowych.

P: Wykrycie utraty zasięgu kontroli (C2) na granicy obszaru operacji powinno skutkować:
+ Automatyczną reakcją BSP zgodnie z zaprogramowaną procedurą
- Zmianą trybu lotu na FPV – o ile operator posiada certyfikat LUC
- Brakiem reakcji – na podstawie ustnej zgody zarządzającego
- Wyłączeniem zasilania BSP
= BSP musi mieć zaprogramowaną reakcję na utratę C2: RTH, lądowanie w wyznaczonym miejscu lub FTS, wyzwalaną zanim BSP opuści dozwolony obszar lub przekroczy parametry. Brak takiego mechanizmu dyskwalifikuje BSP w STS.

P: Spadochron rakietowy jako środek łagodzący ryzyko:
+ Może być elementem łagodzenia ryzyka kontaktu BSP z osobami
- Nie wpływa na ocenę ryzyka
- Jest obowiązkowy dla wszystkich BSP klasy C5
- Jest zabroniony w Polsce – według klasyfikacji w załączniku do ustawy
= Spadochron może obniżyć energię upadku BSP – istotny środek przy operacjach nad osobami. Wymaga jednak właściwego utrzymania (testy, świeżość spadochronu), minimalnej wysokości otwarcia i prawidłowej konfiguracji. Sam w sobie nie zwalnia z innych środków.

P: Apteczka i gaśnica do baterii litowych na miejscu operacji są:
+ Standardowym wyposażeniem zespołu
- Wymagane tylko latem
- Zakazane przepisami
- Wymagane tylko przy lotach nad wodą
= Apteczka, gaśnica do baterii litowych (klasa D lub specjalistyczna do LiPo), koc gaśniczy to standardowe wyposażenie operacji BSP. Większość instrukcji operacyjnych wymaga ich na miejscu operacji.

P: Wpływ silnego wiatru na bufor naziemny polega na:
+ Konieczności zwiększenia bufora po stronie zawietrznej
- Wyłącznie zwiększeniu hałasu BSP
- Braku wpływu – zgodnie z instrukcją producenta BSP
- Zmniejszeniu wymaganej powierzchni bufora
= Wiatr zwiększa odległość, na jaką BSP może być zniesiony w razie utraty zasilania lub kontroli. Bufor po stronie zawietrznej musi być proporcjonalnie większy – uwzględnia się prędkość wiatru, wysokość lotu i czas reakcji.

P: Pomiar wysokości operacji BSP w odniesieniu do terenu (AGL) może bazować na:
+ Wskazaniach barometru
- Głównie na kompasie
- Wyłącznie żyroskopie
- Wyłącznie pamięci pilota
= Pomiar wysokości to kombinacja sensorów: barometr, GNSS, opcjonalnie wysokościomierz laserowy/radarowy i numeryczny model terenu (NMT/DTM). W terenie pofałdowanym kluczowe jest odniesienie do DTM, a nie wyłącznie do startu (RTL altitude).

P: Kontrolowany obszar naziemny w STS-01 to obszar:
+ W obrębie którego operator zapewnia obecność wyłącznie osób biorących udział w operacji
- Patrolowany przez Policję podczas operacji
- Wyposażony w monitoring miejski
- Należący do skarbu państwa – co reguluje osobne rozporządzenie krajowe
= Controlled ground area to obszar wraz z buforami, w którym operator gwarantuje obecność wyłącznie osób uczestniczących w operacji, poprzez kontrolę dostępu, oznakowanie lub fizyczne bariery.

P: Podczas operacji w pobliżu drogi publicznej operator powinien:
+ Uwzględnić ją w analizie ryzyka, ustalić bufor
- Nie latać nad drogą wcale
- Polecić pilotowi szybsze loty, aby zminimalizować czas nad drogą
- Zignorować drogę – samochody to nie jego sprawa
= Droga publiczna to skupisko ruchomych obiektów z osobami w środku (klasyfikowane jako osoby postronne). W STS-01 wymaga się unikania lotu nad pojazdami z osobami – stąd potrzeba bufora lub koordynacji z zarządcą drogi (czasowe ograniczenie ruchu).

P: Klasa ryzyka naziemnego (Ground Risk Class, GRC) w metodyce SORA określa:
+ Poziom ryzyka dla osób postronnych w razie upadku BSP
- Klasę przestrzeni powietrznej
- Cenę ubezpieczenia dla pilota BSP
- Czas trwania przygotowania BSP do lotu 
= GRC zależy energii upadku BSP i rodzaju obszaru (niezamieszkały, rzadko/gęsto zaludniony, miasto, zgromadzenie ludzi). Jeden z dwóch kluczowych wskaźników SORA – obok ARC (Air Risk Class).

P: Bufor naziemny w STS-01 to:
+ Strefa zapasowa wokół planowanego obszaru lotu
- Strefa wokół anteny stacji sterowania
- Strefa parkingowa dla samochodów zespołu
- Strefa dla osób postronnych przyglądających się operacji z ziemi
= Bufor naziemny rozszerza kontrolowany obszar naziemny o margines bezpieczeństwa, uwzględniający dryf BSP w razie utraty kontroli, prędkość wiatru, opóźnienie reakcji pilota i drogę zatrzymania.

P: Numer operatora BSP powinien:
+ Być umieszczony na wszystkich posiadanych BSP w widocznym miejscu
- Być pisany ręcznie na każdej części BSP
- Być umieszczony tylko na BSP należących do podmiotów gospodarczych i instytucji edukacyjnych
- Być utajniony – jest to dana wrażliwa
= Numer operatora UAS musi być widocznie umieszczony na wszystkich BSP danego operatora (naklejka, grawer) i wprowadzony do systemu zdalnej identyfikacji (Remote ID). Stanowi podstawę identyfikacji przy kontroli organów. 

P: Oznakowanie obszaru operacji ma na celu:
+ Powiadomienie osób postronnych o trwającej operacji i wyznaczenie granicy strefy niedostępnej
- Estetyczne wyróżnienie obszaru – co reguluje tzw. Ustawa Reklamowa
- Sygnalizację dla nawigacji satelitarnej
- Wyłącznie reklamę firmy operatora
= Tablice ostrzegawcze, taśmy, pachołki, ogrodzenia służą poinformowaniu osób postronnych o trwającej operacji UAV i wyznaczają granice strefy niedostępnej. Często wymagane przez zarządców terenu.

P: Jakie elementy BSP należy bezwzględnie sprawdzać po każdym locie pod kątem uszkodzeń?
+ Śmigła i akumulatory
- Tylko kamerę
- Tylko transponder
- Tylko oznakowanie identyfikacyjne
= Inspekcja polotna obowiązkowo obejmuje śmigła (pęknięcia, wyszczerbienia) i akumulatory (deformacje, spuchnięcia, napięcie ogniw). To elementy krytyczne dla bezpieczeństwa kolejnego lotu. Dodatkowo: silniki, kadłub, mocowania.

P: Flight Termination System (FTS) w BSP klasy C6 zapewnia:
+ Mechanizm natychmiastowego zatrzymania silników
- Czarną skrzynkę do późniejszej analizy
- Funkcję pełnej autonomii BSP
- Automatyczne lądowanie po wyczerpaniu baterii
= FTS to system pozwalający szybkie zakończenie lotu w razie awarii lub naruszenia parametrów (wyjście z obszaru, utrata C2). Niezależny od innych systemów BSP. W C6 wymagany jako mechanizm bezpieczeństwa zgodnie z rozp. (UE) 2019/945. Realizowany prez zatrzymanie silników. czasami drony z FTS posiadają też spadochron.

P: Mapowanie zagrożeń naziemnych przed operacją obejmuje identyfikację:
+ Skupisk ludzi, infrastruktury krytycznej
- Wyłącznie tras komunikacji miejskiej
- Wyłącznie najbliższego sklepu spożywczego
- Wyłącznie lokalizacji urzędów i instytucji państwowych
= Mapowanie zagrożeń: skupiska ludzi, drogi publiczne, infrastruktura krytyczna, budynki, zbiorniki wodne, obiekty wrażliwe (szpitale, szkoły).

P: Wielkość bufora naziemnego zależy m.in. od:
+ Wysokości i prędkości lotu
- Marki kontrolera i masy BSP
- Wyłącznie liczby śmigieł BSP
- Głównie od pory roku
= Wielkość bufora obliczana jest z uwzględnieniem wysokości lotu, prędkości BSP, prędkości wiatru, czasu reakcji pilota (typowo 3 s) i charakterystyki BSP (zwłaszcza drogi zatrzymania / promienia zawracania).


### Środki ograniczające ryzyko w powietrzu

P: Operacje w STS-02 nad rzadko zaludnionym obszarem wymagają:
+ Ciągłego monitorowania ruchu powietrznego przez obserwatorów AO rozmieszczonych wzdłuż trasy lub przez systemy detekcji ruchu
- Wyłączenia GNSS – z wyjątkiem operacji transgranicznych
- Brak żadnych dodatkowych wymagań – po opłaceniu stosownej opłaty skarbowej
- Wykonania manewru testowego przed startem
= STS-02 wymaga ciągłego monitoringu ruchu lotniczego (AO rozmieszczeni wzdłuż trasy lub elektroniczny system detekcji) oraz utrzymania zaprogramowanej, znanej trasy. BSP nie może swobodnie improwizować w przestrzeni.

P: Co to jest „obstacle avoidance" w kontekście BSP?
+ Zdolność BSP do wykrywania i unikania przeszkód na trasie lotu
- Mechanizm zapobiegający utracie sygnału GPS
- Tryb akrobatyczny BSP 
- Tryb śledzący wybrany obiekt
= Obstacle avoidance to system sensorów (ultradźwiękowe, IR, ToF, kamery stereoskopowe) wykrywający przeszkody i automatycznie wstrzymujący lub omijający je. Nowoczesne BSP (np. DJI Air, Mavic) mają sensory we wszystkich kierunkach (6-kierunkowe omijanie).

P: Jakie ryzyko niesie lot BSP w pobliżu lotów pasażerskich (statków załogowych)?
+ Realne ryzyko kolizji z samolotem
- Tylko ryzyko zakłócenia łączności radiowej
- Tylko ryzyko przechwycenia BSP przez kontrolera z Tower
- Brak ryzyka – samolot jest szybszy i zawsze wyminie BSP
= Kolizja BSP z statkiem załogowym może być katastrofalna – uderzenie w silnik turbinowy, kokpit, mechanizmy sterowe. Stąd absolutny priorytet ustępowania pierwszeństwa i przestrzegania ograniczeń wokół lotnisk (CTR/ATZ). Nawet niewielki BSP może spowodować poważne uszkodzenia silnika lub szyby kokpitu, zagrażając życiu pasażerów.

P: Przestrzeń kontrolowana poniżej FL095 nad Polską:
+ Jest ustanowiona w CTR i TMA
- Może być, ale rzadko
- Nie występuje
- Występuje wyłącznie nad morzem
= Poniżej FL095 przestrzeń kontrolowana to lokalne strefy CTR (wokół lotnisk kontrolowanych) i TMA (ścieżki dolotu/odlotu). Reszta przestrzeni poniżej FL095 to klasa G (niekontrolowana).

P: FL095 oznacza:
+ 9500 stóp ciśnienia standardowego
- Numer scenariusza standardowego
- Wysokość 95 metrów (Flight Level 95 m)
- Częstotliwość radiową 95 MHz
= FL095 = 9500 ft ciśnienia standardowego (29.92 inHg / 1013.25 hPa) – ok. 2900 m. Poniżej tej linii (do GND) jest przestrzeń niekontrolowana klasy G (z lokalnymi strefami kontrolowanymi: CTR, TMA). Powyżej – przestrzeń kontrolowana klasy C. Pułap oddzielający przestrzeń niekontrolowaną (poniżej) od kontrolowanej (powyżej) w Polsce.

P: Strefa TMA (Terminal Manoeuvring Area):
+ To strefa dolotu do lotnisk kontrolowanych
- Oznacza Transit Management Area – obszar tranzytu dronów kurierskich
- Jest strefą wyłącznie informacyjną
- Jest strefą, w której FIS przejmuje rolę ATC
= TMA to przestrzeń kontrolowana powiązana ze ścieżkami dolotu i odlotu dla lotnisk kontrolowanych. Loty BSP wymagają zgody właściwego organu ATS i są zwykle bardzo ograniczone. W której obowiązuje całkowity zakaz lotów BSP poniżej określonych warunków.

P: Strefa TSA:
+ Jest przestrzenią czasowo wydzieloną na wyłączność dla konkretnego użytkownika (Temporary Segregated)
- Oznacza Territorial Sanctuary for Animals – obowiązuje tam zakaz lotów
- Jest strefą całkowicie bezpieczną dla wszystkich pilotów
- Jest dostępna dla każdego pilota – stąd „T" jak Tolerated
= TSA to przestrzeń czasowo wydzielona dla konkretnego użytkownika (np. lotnictwo wojskowe). Publikowana w Planie Użytkowania Przestrzeni Powietrznej (AUP), jej aktywność można sprawdzić w bieżących depeszach i aplikacjach dla operatorów BSP (DroneTower)
W czasie aktywności TSA obowiązuje całkowity zakaz dla BSP cywilnych.

P: Strefa DRA-I NW (Navigational Warning):
+ Jest wyznaczana w celu przekazania ostrzeżeń nawigacyjnych
- To obszar całkowitej ciszy radiowej dla BSP
- Jest dostępna wyłącznie dla operatorów z certyfikatem LUC
- Wymaga sterowania BSP przewodem światłowodowym
= DRA-I NW – Navigational Warning, strefa ostrzeżeń nawigacyjnych. Operator zapoznaje się z treścią ostrzeżenia, zachowuje szczególną ostrożność. Wymaga wzmożonej uwagi. Np. prace wysokościowe, przeloty grup statków powietrznych.

P: Maksymalna wysokość lotu BSP (120 m AGL) wynika z założenia separacji od:
+ Ruchu lotniczego załogowego
- Ruchu kosmicznego
- Wież telekomunikacyjnych
- Chmur cumulonimbus zawierających ogromne ilości ładunków elektrostatycznych
= Limit 120 m AGL ma zapewnić bufor pionowy do typowego ruchu lotniczego załogowego, który zwykle utrzymuje min. 150 m AGL nad terenem. Wyjątki: HEMS, lotnictwo rolnicze, niskie loty wojskowe, start/lądowanie – tu separację zapewniają inne środki.

P: Strefa DRA-I AAA (Rejon Lotniczej Działalności):
+ Nie wymaga zazwyczaj formalnej zgody
- Jest strefą zakazu lotów dla BSP
- Wymaga uzyskania formalnej zgody przed każdym lotem
- Występuje wyłącznie nad poligonami wojskowymi
= DRA-I AAA – strefa informacyjna o możliwej wzmożonej aktywności lotniczej (np. sportowej). Operator zapoznaje się z treścią, zachowuje szczególną ostrożność, wykonuje check-in w DroneTower.

P: CTR vs ATZ – która charakterystyka jest poprawna?
+ CTR aktywne stale, ATZ aktywne czasowo
- CTR – zakaz lotów, ATZ – loty zawsze dozwolone
- Oba aktywne stale
- CTR aktywne czasowo, ATZ aktywne stale
= CTR (lotniska kontrolowane) jest aktywne stale (24/7). ATZ (lotniska niekontrolowane) jest aktywne czasowo, w godzinach pracy lotniska. Aktywność ATZ sprawdza się w aplikacji DroneTower.

P: Detect and Avoid (DAA) w kontekście operacji BSP oznacza:
+ Zdolność wykrywania innych statków powietrznych i unikania kolizji
- Funkcję unikania rejestracji wizerunku osób niezaangażowanych w operację przez kamerę 
- Funkcję automatycznego kasowania zdjęć w strefach MCTR i TSA
- Algorytm filtrowania zakłóceń radiowych
= DAA to fundamentalna zdolność (operacyjna lub techniczna) wykrycia statku powietrznego i podjęcia akcji uniknięcia kolizji. STS-01: realizowane przez pilota/UAO (VLOS). STS-02: AO lub systemy automatyczne wykrywania (np. ADS-B in, radary akustyczne).

P: Strefy w polskiej przestrzeni powietrznej, w czasie aktywności których obowiązuje całkowity zakaz lotów BSP to m.in.:
+ MCTR, TSA, D, MRT
- AWY, EA, TRA 
- TMA, ATZ, G
- FIS, RMZ, DRA-I AAA
= Strefy z całkowitym zakazem lotów BSP w aktywnym stanie: MCTR (wojskowy CTR), TSA (czasowo wydzielona), D (Dangerous – poligony wojskowe), MRT (Military Routes – wojskowe korytarze niskich lotów).

P: Co to jest tryb „Follow Me" w dronach?
+ Tryb, w którym BSP automatycznie podąża za pilotem lub wybranym obiektem
- Tryb zawisu 
- Tryb, w którym kamera zawsze jest zwrócona w stronę operatora niezależnie od kierunku lotu BSP
- Tryb automatycznego powrotu
= Follow Me – tryb automatycznego podążania za obiektem (najczęściej pilotem). BSP utrzymuje stałą odległość i wysokość, zachowując obiekt w kadrze. Wymaga aktywnego GNSS i często wizyjnego rozpoznawania obiektu (tracking).


### Osiągi BSP w locie

P: Promień skrętu i prędkość minimalna (stall speed) są parametrami szczególnie istotnymi dla:
+ BSP stałopłatowych
- BSP w wersji submersywnej
- BSP o MTOM < 250 g
- Multirotorów
= Stałopłat ma prędkość minimalną (poniżej której traci nośność – stall) i promień skrętu zależny od przechyłu i prędkości. To determinuje planowanie trasy, wielkość bufora bocznego i wymaganą powierzchnię lądowania. Wpływają na planowanie trasy, wielkość bufora i strefy lądowania.

P: Które czynniki mogą wpływać na żywotność baterii BSP?
+ Wszystkie powyższe
- Intensywność korzystania z funkcji BSP (peak current)
- Częstotliwość ładowania i głębokość rozładowania
- Temperatura otoczenia podczas użytkowania i przechowywania
= Żywotność LiPo (typowo 200–500 cykli) zależy od: liczby pełnych cykli ładowania, temperatury (zarówno przechowywania jak i pracy), głębokości rozładowania (nie wpadać poniżej 3.3 V/ogniwo), peak current (agresywne manewry rozgrzewają i zużywają). Żywotność LiPo zależy od liczby cykli, temperatury, profilu rozładowania.

P: Minimalna rezerwa energetyczna BSP (zapas baterii na powrót i lądowanie) powinna wynosić:
+ standardowo 20–30% pojemności baterii
- 5% – pod warunkiem zachowania 30 m od osób
- Nie jest wymagana
- 1% – tyle wystarcza na bezpieczny powrót i lądowanie
= Standardowa rezerwa: 20–30% baterii. W pewnych warunkach należy jednak zapewnić większy zapas, żeby zapewnić czas na bezpieczny powrót do bazy z marginesem na okoliczności awaryjne. Operacje krytyczne (BVLOS, długie trasy) wymagają większej rezerwy. Silniejszy wiatr, dłuższa trasa, manewry omijania.

P: Czas lotu BSP zależy przede wszystkim od:
+ Pojemności baterii
- Liczby diod LED
- Marki kontrolera
- Koloru BSP (albedo i rozszerzalność cieplna)
= Czas lotu to funkcja zapasu energii (pojemność × napięcie), masy BSP, sprawności napędu, profilu lotu i warunków zewnętrznych. Dwukrotny wzrost masy to ok. dwukrotny wzrost poboru prądu i taki sam spadek czasu lotu. Masy całkowitej, sprawności silników/śmigieł, prędkości lotu i warunków atmosferycznych (wiatr, temperatura)

P: Jakie czynniki mają wpływ na czas lotu BSP:
- Wyłacznie parametry silników
- Wyłacznie MTOM drona
- Przede wszystkim Kp Indeks
+ Stan baterii, warunki atmosferyczne, masa BSP
= Czas lotu to funkcja zapasu energii (pojemność × napięcie), masy BSP, sprawności napędu, profilu lotu i warunków zewnętrznych. Dwukrotny wzrost masy to ok. dwukrotny wzrost poboru prądu i taki sam spadek czasu lotu. Masy całkowitej, sprawności silników/śmigieł, prędkości lotu i warunków atmosferycznych (wiatr, temperatura)

P: Silny przeciwny wiatr w trakcie lotu BSP powoduje:
+ Zmniejszenie prędkości względem ziemi
- Wyłącznie zmniejszenie hałasu BSP
- Brak wpływu na osiągi
- Zwiększenie prędkości względem ziemi
= Wiatr przeciwny redukuje prędkość względem ziemi (Ground Speed) przy zachowanej prędkości powietrznej (Air Speed). Skutek: dłuższy czas trasy, większe zużycie energii, krótszy realny zasięg. Krytyczne dla operacji BVLOS z planowaniem trasy. Wydłużenie czasu pokonania trasy, zwiększenie zużycia energii.

P: Zwiększenie ładunku użytecznego (payload) BSP wpływa na osiągi w ten sposób, że:
+ Skraca czas lotu, zwiększa zużycie energii
- Nie wpływa na osiągi
- Wydłuża czas lotu i zwiększa pułap
- Zwiększa zasięg radiowy łącza C2
= Dodatkowa masa zwiększa zapotrzebowanie energii do utrzymania zawisu/lotu, co skraca czas operacji, obniża zwrotność i maksymalny pułap. Ważne: przekroczenie MTOM jest naruszeniem zgodności BSP z deklarowaną klasą. Obniża manewrowość i maksymalny pułap.

P: Spadek napięcia baterii pod obciążeniem (voltage sag) jest większy, gdy:
+ Bateria jest stara, rozładowana lub zimna
- Bateria jest sucha
- Bateria jest nowa, zimna i naładowana w 100%
- Bateria jest mokra
= Wewnętrzna rezystancja baterii rośnie z wiekiem ogniw, niskim stanem naładowania i niską temperaturą. Skutek: większy spadek napięcia pod obciążeniem (manewry, podmuchy), co może wyzwolić ochronę BMS i przerwać lot. Wpływa na to wewnętrzna rezystancja ogniw.

P: Agresywne manewry (gwałtowne przechyły, szybkie wznoszenia, lot w turbulencjach) skutkują:
+ Zwiększonym chwilowym poborem prądu
- Brakiem zmiany osiągów
- Zwiększeniem zasięgu C2
- Spadkiem zużycia energii
= Agresywne manewry zwiększają chwilowy pobór prądu (peak current). Powodują większy spadek napięcia, większe nagrzewanie ogniw i silników. Skutek: skrócenie realnego czasu lotu i większe ryzyko niespodziewanego załamania zasilania. Większym sagiem napięcia i krótszym czasem lotu.

P: Stateczność BSP typu multirotor zapewniają:
+ System inercyjny (IMU), algorytmy kontrolera lotu
- Tylko płetwy ogonowe
- Wyłącznie wiatromierz pokładowy
- Magnetyczna stabilizacja 
= Multirotor jest statycznie niestabilny. Stateczność aktywna realizowana jest przez IMU (akcelerometry, żyroskopy), kompas, GNSS, barometr i pętlę sterowania, która koryguje obroty silników w czasie rzeczywistym (50–500 Hz). GNSS i kompensacja przez zmienne obroty poszczególnych silników.

P: Które czynniki mogą wpływać na zasięg lotu BSP (zasięg radiowy)?
+ Wszystkie powyższe: antena, moc, przeszkody, zakłócenia
- Ustawienia mocy transmisji (jeśli regulowalne)
- Obecność przeszkód między pilotem a BSP, zakłócenia radiowe
- Rodzaj i jakość anteny BSP / aparatury
= Zasięg radiowy zależy od: typu anteny (kierunkowa vs omni), mocy nadajnika, częstotliwości pracy (2.4 GHz vs 5.8 GHz vs niższe), przeszkód terenowych (każda redukuje sygnał), poziomu zakłóceń w paśmie.

P: Które czynniki mogą wpływać na czas lotu BSP?
+ Pojemność baterii, masa BSP
- Tylko pojemność baterii
- Tylko temperatura
- Tylko prędkość wiatru
= Czas lotu to kombinacja: pojemność i kondycja baterii, masa BSP (z ładunkiem), temperatura (LiPo gorzej działa w niskich i bardzo wysokich), wiatr (przeciwny to większe zużycie), profil lotu, agresywność manewrów. Zawis vs lot poziomy. Temperatura otoczenia, prędkość wiatru, profil lotu.

P: Wpływ temperatury otoczenia na osiągi silników i baterii:
+ W skrajnie wysokich i niskich temperaturach pojemność baterii spada
- Temperatura nie ma znaczenia
- Wysoka temperatura zawsze zwiększa pojemność baterii
- Temperatura wpływa tylko na GPS 
= Niskie temperatury redukują pojemność i napięcie baterii. Wysokie temperatury powodują przegrzewanie silników i elektroniki. W obu skrajnościach należy zapewnić większą rezerwę bezpieczeństwa (energia + sprawność). Wymagana jest większa rezerwa energetyczna. Silniki/elektronika mogą się przegrzewać.

P: Które czynniki mogą wpływać na stabilność lotu BSP?
+ Wszystkie wymienione
- Silny wiatr i turbulencje
- Masa i wyważenie BSP
- Uszkodzone śmigła lub silniki
= Stabilność lotu zależy od: warunków atmosferycznych (wiatr, turbulencje), stanu technicznego (śmigła, silniki, IMU, GPS), wyważenia BSP (środek ciężkości), kompetencji pilota. Każdy z czynników może indywidualnie pogorszyć stabilność. 

P: Wpływ wzrostu wysokości n.p.m. na osiągi BSP wynika z:
+ Spadku gęstości powietrza
- Większego zasięgu radia
- Wyłącznie zmiany koloru oświetlenia LED
- Wzrostu ciągu silników
= Wraz ze wzrostem wysokości n.p.m. gęstość powietrza spada (ok. 7% na 1000 m). Śmigła generują mniejszy ciąg przy tej samej prędkości obrotowej. Skutek: mniejszy udźwig, niższy pułap praktyczny, krótszy czas lotu. Krytyczne w górach. Co redukuje ciąg śmigieł i obniża osiągi BSP.

P: Wiatr boczny (crosswind) w trakcie lotu BSP powoduje:
+ Konieczność kompensacji odchyłki kursowej i większe zużycie energii na utrzymanie trasy
- Zmianę koloru diod LED
- Brak żadnych zmian 
- Wyłączenie GNSS – zgodnie z instrukcją producenta BSP
= Wiatr boczny powoduje znoszenie BSP. Kontroler lotu (lub pilot) kompensuje znoszenie odpowiednim przechyłem (crab angle), co zwiększa pobór energii i ogranicza dostępną prędkość względem ziemi w kierunku trasy.


### Ograniczenia możliwości człowieka

P: Lista IMSAFE służy ocenie:
+ Stanu psychofizycznego pilota
- Warunków meteorologicznych i widoczności
- Wymagań dokumentacji operacyjnej
- Stanu technicznego BSP przed startem
= IMSAFE to autocheck przed lotem: Illness, Medication, Stress, Alcohol, Fatigue, Emotion. Każdy z tych czynników może obniżyć wydajność i bezpieczeństwo operacji.

P: Centralne pole widzenia (foveal) człowieka, zapewniające ostre rozpoznanie szczegółów, obejmuje kąt:
+ Około 2–5°
- Około 60° w każdą stronę – cały zakres bez ruchu głowy
- Kąt zależny wyłącznie od wieku pilota
- Pełne 180° w poziomie
= Foveal vision obejmuje ok. 2–5°. Reszta pola to widzenie peryferyjne, dobre do wykrywania ruchu, ale słabe do oceny szczegółów. Pilot musi aktywnie skanować przestrzeń przy obserwacji BSP w VLOS. Stąd konieczność aktywnego skanowania przestrzeni wokół BSP.

P: Wpływ alkoholu na zachowanie pilota polega na:
+ Wydłużeniu czasu reakcji, pogorszeniu koordynacji
- Polepszeniu świadomości sytuacyjnej
- Skróceniu czasu reakcji
- Poprawie zasięgu widzenia pozazmysłowego
= Alkohol: wydłuża czas reakcji, pogarsza koordynację ruchową, ocenę odległości, kontrolę nad emocjami, podejmowanie decyzji. Obowiązuje zasada zero alkoholu przed i podczas operacji!

P: Zasada „Sterile Cockpit" zaadaptowana do operacji BSP oznacza, że w trakcie krytycznych faz operacji (start, lądowanie, manewry w pobliżu przeszkód):
+ Należy zachować ciszę w pokoju operacyjnym poza komunikatami niezbędnymi do prowadzenia operacji
- Pilot powinien zdezynfekować stację kontrolną przed lotem
- Obowiązuje absolutny nakaz noszenia maseczek – na podstawie ustnej komendy zarządzającego operacją
- Należy wyłączyć wszystkie urządzenia elektroniczne poza kontrolerem 
= Sterile cockpit: w fazach krytycznych komunikacja ogranicza się do tematów operacyjnych. Eliminuje to rozproszenie uwagi pilota i zespołu, podnosząc bezpieczeństwo.

P: Pilot BSP przyjmujący leki przeciwhistaminowe pierwszej generacji (np. zawierające difenhydraminę) przed lotem powinien:
+ Powstrzymać się od wykonywania operacji
- Przyspieszyć tempo decyzji, ponieważ leki działają stymulująco
- Wykonywać operację jak zwykle – są to leki bez recepty
- Stosować podwójną dawkę kawy, aby zredukować skutki uboczne
= Leki przeciwhistaminowe I generacji mają silne działanie sedatywne, wydłużają czas reakcji i obniżają koncentrację. Pilot nie powinien wykonywać operacji pod ich wpływem (litera „M" w IMSAFE). Leki te działają sedatywnie i wydłużają czas reakcji.

P: Czy lot w nocy może wpływać na zdolności pilota?
+ Tak – zdolności pilota zmniejszają się w nocy z powodu gorszej percepcji wzrokowej
- Zdolności są zwiększone – pilot jest bardziej wyczulony na bodźce
- Tak, ale tylko ze względu na zimno 
- Nie ma wpływu na umiejętności pilota o ile operator posiada certyfikat LUC
= Noc znacząco obniża zdolności percepcyjne: gorsza ostrość widzenia, brak widzenia barw, dłuższy czas reakcji, łatwiej o złudzenia wzrokowe (autokineza), ryzyko tzw. mikrosnu. Stąd specjalne wymagania nocne (zielone migające światło, dodatkowa ostrożność).

P: W przypadku choroby pilot powinien:
+ Upewnić się, że choroba nie wpłynie na bezpieczeństwo operacji
- Wziąć niezbędne lekarstwa i wykonać lot
- Odstąpić od operacji w każdym przypadku, nawet przy lekkim katarze
- Latać bez obaw
= „I" w IMSAFE to Illness (choroba). Pilot powinien ocenić, czy stan zdrowia pozwala na bezpieczną operację. Lekkie dolegliwości nie zawsze dyskwalifikują, ale gorączka, silny katar, ból głowy, problemy z koncentracją – wykluczają lot. W razie wątpliwości odstąpić od lotu.

P: Główne zagrożenie wynikające z długotrwałego zmęczenia pilota podczas wielogodzinnej operacji to:
+ Mikrosen (krótkotrwałe utraty świadomości) i istotne wydłużenie czasu reakcji oraz pogorszenie świadomości sytuacyjnej
- Wzrost zapotrzebowania na sygnał GNSS
- Spadek temperatury baterii BSP – zgodnie z instrukcją producenta BSP
- Zwiększone ryzyko utraty łącza C2
= Zmęczenie powoduje wydłużenie czasu reakcji, obniżenie koncentracji, błędy decyzyjne i mikrosens – sekundowe utraty świadomości groźne w fazie krytycznej operacji. Operator powinien planować przerwy i rotację pilotów.

P: Autokineza to złudzenie wzrokowe polegające na:
+ Postrzeganiu nieruchomego źródła światła w ciemnym otoczeniu jako poruszającego się
- Sterowaniu BSP za pomocą fal mózgowych bez potrzeby używania konwencjonalnego kontrolera
- Wrażeniu szybszego ruchu BSP w nocy
- Pozornym zatrzymaniu śmigieł BSP na zdjęciach
= Autokineza – mózg, pozbawiony punktów odniesienia, „wymyśla" ruch pojedynczego punktu świetlnego. Istotne przy obserwacji świateł BSP w nocy – stosuje się migające światła i unika operacji w pełnej ciemności bez referencji wzrokowych. Pojedynczego źródła światła w ciemnym otoczeniu jako poruszającego się.

P: Czy stres może mieć wpływ na zdolności psychofizyczne pilota?
+ Tak, stres obniża koncentrację, zwiększa ryzyko błędów decyzyjnych
- Tylko alkohol ma wpływ 
- Tak, ale można latać po lekach uspokajających
- Nie, stres mobilizuje pilota 
= Stres (litera „S" w IMSAFE) zwęża pole uwagi (tunelowe myślenie), pogarsza ocenę sytuacji, zwiększa ryzyko błędów. Leki uspokajające z kolei zwykle sedują – nie można po nich latać („M" – Medication). Ogranicza świadomość sytuacyjną.


### Meteorologia

P: Inwersja temperatury w przyziemnej warstwie atmosfery może powodować, że:
+ Mgła i niska widzialność utrzymują się długo
- Bateria BSP ładuje się szybciej
- GNSS przestaje działać
- Wiatr przyziemny zawsze rośnie
= Inwersja temperatury (cieplejsze powietrze nad chłodniejszym) blokuje pionową cyrkulację. Sprzyja gromadzeniu się wilgoci (mgła), zanieczyszczeń i pyłów w warstwie przyziemnej – ogranicza widzialność, co może zerwać warunki VLOS.

P: Jak zmienia się prędkość wiatru wraz ze wzrostem wysokości?
+ Zazwyczaj rośnie
- Powyżej 100 m zawsze wynosi iloczyn wysokości i prędkości na ziemi
- Zazwyczaj maleje
- Wiatr nie zmienia prędkości z wysokością
= Profil pionowy wiatru: prędkość wiatru zwykle rośnie z wysokością – mniejsze tarcie o przeszkody terenowe (warstwa graniczna atmosfery). Pilot powinien zakładać, że wiatr na 120 m może być znacząco silniejszy niż przy ziemi.

P: Oblodzenie BSP w locie jest zagrożeniem, ponieważ:
+ Zwiększa masę, zmienia profil aerodynamiczny śmigieł
- Wyłącza GPS 
- Sprawia, że BSP staje się szybszy
- Powoduje awarię kamery
= Lód na śmigłach i kadłubie zwiększa masę, zaburza opływ powietrza, zmniejsza ciąg, w skrajnych przypadkach zatrzymuje wirniki. Operacje w warunkach oblodzenia są zwykle wykluczone – temperatury bliskie 0°C w połączeniu z wilgocią lub mżawką dają ryzyko zatrzymania silników oraz utratę kontroli nad BSP.

P: Maksymalna prędkość wiatru dopuszczalna dla danego BSP wynika z:
+ Specyfikacji producenta BSP i oceny ryzyka pilota
- Wyłącznie wieku BSP
- Tylko temperatury powietrza
- Regulacji EUASA
= Producent podaje maksymalną dopuszczalną prędkość wiatru (zwykle w m/s lub stopniach Beauforta). Pilot uwzględnia również podmuchy (gust), które bywają znacząco wyższe od średniej. Operacja przy granicy specyfikacji to ostrzeżenie do przerwania misji.

P: Co należy wziąć pod uwagę, jeśli planujemy lot BSP podczas opadu lub mżawki?
+ Wilgoć może uszkodzić elektronikę BSP
- Wilgoć polepsza zasięg sterowania
- Mżawka nie ma wpływu
- Deszcz wyostrza działanie obiektywu
= Większość BSP konsumenckich nie ma certyfikacji IP – wilgoć może uszkodzić elektronikę, silniki, baterię. Opad zmniejsza widzialność (utrudnia VLOS), zwiększa ryzyko oblodzenia w temp. bliskich 0°C. Tylko BSP IP-rated mogą operować w deszczu. Większość dronów konsumenckich nie jest wodoodporna.

P: Operacje BSP w pobliżu chmur kłębiastych burzowych (cumulonimbus, Cb):
+ Są kategorycznie zabronione
- Nie wpływają na bezpieczeństwo
- Są zalecane do testowania niezawodności BSP
- Są dozwolone wyłącznie zimą
= Chmury Cumulonimbus to ekstremalnie niebezpieczne zjawisko: prądy pionowe (uplift / downburst do 30 m/s), turbulencje, oblodzenie, grad, wyładowania. Lot w okolicy Cb jest absolutnie zabroniony.

P: METAR to:
+ Regularny komunikat meteorologiczny z lotniska
- Krajowa sieć radarów meteorologicznych ULC
- Norma certyfikacji silników BSP
- Klasa zgodności BSP z rozp. UE
= METAR (Meteorological Aerodrome Report) – standardowy komunikat meteorologiczny z lotnisk, kodowany. Czytelność wymaga przeszkolenia, ale jest najlepszym źródłem wiarygodnych informacji o pogodzie w rejonie operacji. Zwykle nadawany co 30 minut – zawierający kierunek i prędkość wiatru, widzialność, chmury, temperaturę, ciśnienie QNH, zjawiska atmosferyczne.

P: Niska temperatura otoczenia wpływa na baterię LiPo BSP w ten sposób, że:
+ Zmniejsza dostępną pojemność i napięcie pod obciążeniem
- Powoduje pęcznienie kadłuba
- Nie ma wpływu – pod warunkiem zachowania 30 m od osób
- Zwiększa jej pojemność 
= W niskich temperaturach reakcje chemiczne w ogniwach LiPo zwalniają. Skutek: spadek napięcia pod obciążeniem, mniejsza dostępna pojemność, ryzyko nagłego załamania zasilania (sag). Baterie należy ogrzewać przed lotem (typowo do ok. 20°C).

P: Wysoki KP INDEX (wskaźnik aktywności geomagnetycznej) wpływa na operacje BSP w ten sposób, że:
+ Może zakłócać prawidłowe działanie systemu GPS/GNSS
- Odnosi się do efektywności układu napędowego BSP
- Nie ma wpływu na BSP
- Powoduje obniżenie temperatury powietrza
= KP INDEX (Planetary K-index) opisuje aktywność geomagnetyczną. Wysokie wartości (≥5) mogą zakłócać GPS/GNSS – błędy pozycjonowania, problemy z kalibracją kompasu. Przed operacją należy sprawdzić KP INDEX.
`;
