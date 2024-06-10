CREATE DATABASE IF NOT EXISTS burenbond;
USE burenbond;

CREATE TABLE IF NOT EXISTS messages (
	ID INT NOT NULL auto_increment PRIMARY KEY,
    voornaam VARCHAR(60) NOT NULL,
    achternaam VARCHAR(60) NOT NULL,
    email VARCHAR(100) NOT NULL,
    bericht TEXT NOT NULL,
    datum DATETIME NOT NULL,
    titel VARCHAR(100) NOT NULL

);

CREATE TABLE IF NOT EXISTS nieuws (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    titel VARCHAR(100) NOT NULL,
    nieuws TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS evenement (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    titel VARCHAR(100) NOT NULL,
    korte_tekst VARCHAR(255) NOT NULL,
    lange_tekst TEXT,
    locatie VARCHAR(255) NOT NULL,
    datum DATE NOT NULL,
    tijdstip_begin TIME,
    tijdstip_einde TIME
);

CREATE TABLE IF NOT EXISTS users (
	username VARCHAR(100) NOT NULL PRIMARY KEY,
    password TEXT NOT NULL
);

INSERT INTO messages (voornaam, achternaam, email, bericht, datum, titel) VALUES
('Jan', 'Jansen', 'jan.jansen@example.com', 'Hallo buren, ik organiseer een buurtbarbecue deze zaterdag om 15:00 in het park.', '2024-06-01 12:34:56', 'Buurtbarbecue'),
('Marie', 'de Vries', 'marie.devries@example.com', 'Vergeet niet dat de volgende buurtvergadering volgende week dinsdag is.', '2024-06-03 14:20:15', 'Buurtvergadering'),
('Pieter', 'Peters', 'pieter.peters@example.com', 'Is er iemand die een ladder kan uitlenen voor het weekend?', '2024-06-05 09:45:30', 'Ladder lenen'),
('Anna', 'van Dijk', 'anna.vandijk@example.com', 'Ik heb een paar dozen met boeken die ik weg wil geven. Interesse?', '2024-06-07 17:30:22', 'Boeken weggeven'),
('Sofie', 'Bakker', 'sofie.bakker@example.com', 'De katten van mijn buren zijn weer ontsnapt. Laat het me weten als je ze ziet.', '2024-06-10 08:15:45', 'Ontsnapte katten'),
('Tom', 'Vermeulen', 'tom.vermeulen@example.com', 'Weet iemand waar ik mijn fiets veilig kan stallen in de buurt?', '2024-06-10 10:20:05', 'Fiets stallen'),
('Linda', 'Koster', 'linda.koster@example.com', 'Er is een nieuwe speeltuin geopend aan de rand van het park. Zeker een bezoekje waard!', '2024-06-11 11:55:33', 'Nieuwe speeltuin'),
('Rob', 'de Groot', 'rob.degroot@example.com', 'Mijn auto is gisteravond beschadigd. Heeft iemand iets gezien?', '2024-06-12 20:40:50', 'Beschadigde auto'),
('Eva', 'Muller', 'eva.muller@example.com', 'Heeft iemand tips voor een goede kapper in de buurt?', '2024-06-14 13:22:11', 'Aanbevolen kapper'),
('Mark', 'Visser', 'mark.visser@example.com', 'We organiseren een buurtcleanup volgende zaterdag. Iedereen is welkom om mee te doen!', '2024-06-16 16:10:29', 'Buurtcleanup');

INSERT INTO evenement (titel, korte_tekst, lange_tekst, locatie, datum, tijdstip_begin, tijdstip_einde) VALUES
('Buurtbarbecue', 'Kom naar de buurtbarbecue in het park!', 'Op zaterdag organiseren we een grote buurtbarbecue in het park. Er is eten en drinken voor iedereen. Neem je eigen stoel en bord mee.', 'Park centraal', '2024-07-01', '15:00:00', '19:00:00'),
('Buurtvergadering', 'Volgende buurtvergadering', 'De volgende buurtvergadering vindt plaats in het buurthuis. We zullen verschillende onderwerpen bespreken, inclusief de nieuwe speeltuin en de geplande buurtcleanup.', 'Buurthuis', '2024-07-05', '19:00:00', '21:00:00'),
('Yoga in het Park', 'Doe mee met gratis yoga!', 'Elke zondag om 10 uur bieden we gratis yogalessen aan in het park. Iedereen is welkom, ongeacht ervaring.', 'Park centraal', '2024-07-07', '10:00:00', '11:00:00'),
('Filmavond', 'Buitenfilmavond in het park', 'Kom genieten van een filmavond onder de sterren. We vertonen een familievriendelijke film en er zijn snacks en drankjes beschikbaar.', 'Park centraal', '2024-07-14', '20:30:00', '23:00:00'),
('Buurtcleanup', 'Help mee om onze buurt schoon te houden!', 'Doe mee met onze buurtcleanup. We verzamelen om 9 uur bij het buurthuis en verspreiden ons dan door de buurt om afval op te ruimen. Handschoenen en vuilniszakken worden verstrekt.', 'Buurthuis', '2024-07-20', '09:00:00', '12:00:00'),
('Kunstmarkt', 'Lokale kunstmarkt', 'Lokale kunstenaars stellen hun werken tentoon en verkopen ze. Kom en ondersteun onze creatieve gemeenschap!', 'Centraal plein', '2024-07-27', '10:00:00', '17:00:00'),
('Kinderfestival', 'Een dag vol plezier voor kinderen!', 'Een festival speciaal voor kinderen met spelletjes, workshops en entertainment. Er zullen ook foodtrucks zijn met heerlijke snacks.', 'Park centraal', '2024-08-03', '11:00:00', '16:00:00'),
('Muziekfestival', 'Live muziek in het park', 'Geniet van een dag vol live muziek in het park. Verschillende lokale bands treden op en er zijn eet- en drinkkraampjes aanwezig.', 'Park centraal', '2024-08-10', '12:00:00', '22:00:00'),
('Boekenclub', 'Maandelijkse boekenclub bijeenkomst', 'Onze maandelijkse boekenclub komt samen om het boek van de maand te bespreken. Iedereen is welkom om deel te nemen, ook als je het boek niet hebt gelezen.', 'Bibliotheek', '2024-08-15', '18:00:00', '19:30:00'),
('Kerstmarkt', 'Gezellige kerstmarkt', 'Kom naar de gezellige kerstmarkt met kraampjes, eten, drinken en kerstmuziek. Perfect om in de kerstsfeer te komen en unieke cadeaus te kopen.', 'Centraal plein', '2024-12-15', '10:00:00', '20:00:00');


INSERT INTO nieuws (titel, nieuws) VALUES
('Nieuwe speeltuin geopend', 'Vandaag is de nieuwe speeltuin aan de rand van het park officieel geopend. De speeltuin is geschikt voor kinderen van alle leeftijden en biedt verschillende speeltoestellen en een zandbak. Kom snel een kijkje nemen!'),
('Buurtcleanup groot succes', 'De buurtcleanup afgelopen zaterdag was een groot succes! Meer dan 30 vrijwilligers hebben geholpen om onze buurt schoner te maken. Dank aan iedereen die heeft bijgedragen.'),
('Veiligheidstips voor de zomer', 'Nu de zomer voor de deur staat, willen we iedereen herinneren aan enkele veiligheidstips: blijf gehydrateerd, gebruik zonnebrandcrème, en let goed op kinderen in de buurt van water.'),
('Start renovatie buurthuis', 'Volgende week begint de renovatie van het buurthuis. Gedurende de renovatieperiode zullen alle activiteiten tijdelijk worden verplaatst naar de sporthal. We hopen dat de werkzaamheden binnen twee maanden voltooid zijn.'),
('Halloween-feest', 'Op 31 oktober organiseren we een groot Halloween-feest in het buurthuis. Iedereen is welkom en er zijn prijzen voor de beste kostuums. Zorg dat je erbij bent voor een griezelig leuke avond!'),
('Inzameling voor voedselbank', 'Deze maand houden we een inzamelingsactie voor de lokale voedselbank. Breng je donaties naar het buurthuis en help ons om gezinnen in nood te ondersteunen.'),
('Succesvol buurtfestival', 'Het jaarlijkse buurtfestival was weer een groot succes. Er waren tal van activiteiten, kraampjes en optredens. Dank aan iedereen die heeft meegeholpen en deelgenomen.'),
('Verkeersveiligheid in de buurt', 'Recent zijn er meerdere meldingen geweest van te hard rijdende auto's in de buurt. We willen iedereen eraan herinneren om zich aan de snelheidslimiet te houden en extra voorzichtig te zijn in woonwijken.'),
('Open dag brandweer', 'Komende zaterdag houdt de brandweer een open dag. Iedereen is welkom om de kazerne te bezoeken, demonstraties bij te wonen en meer te leren over brandveiligheid.'),
('Kerstmarkt in december', 'Op 15 december organiseren we een kerstmarkt op het centraal plein. Er zullen verschillende kraampjes zijn met eten, drinken en kerstcadeaus. Mis het niet!');
