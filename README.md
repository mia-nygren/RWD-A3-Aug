# tea2go 

> Delprov 3 (Omexamination)  - Skapandet av en prototyp (webbsida) för det fiktiva testället tea2go
> Kurs: RWD3, Responsiv Webbdesign, WD452F, 7.5hp. VT 2017

# Sammanfattning
Detta projekt har bestått av att utforma en high-fidelity prototyp (i form av en webbsida) för det fiktiva testället tea2go. 

## Kod och katalogstruktur
Det här repositoriet innehåller all kod för webbsidan i den utvecklingsmiljö jag har jobbat i. 
Ni kan börja med att kolla på pages/index.vue för att se vad startsidan innehåller. 

För att se återanvänd/delad kod så kan ni kolla under components/

## Sidor (pages) 
Pages innehåller alla mina sidor som finns på webbsidan. 
Finns det undersidor så är dessa placerat i mappar. 
Exempelvis så ligger sidan för tehuset i helsingfors under --> pages/teahouses/helsingfors.vue

## HTML
HTML-kod ligger placerad högst i mina .vue filer och är omringat med taggen <template>
Det blir på så sätt lätt att återvinna HTML mellan olika sidor och komponenter

OBS! Filen app.html kan tyckas lite förvirrande men den innehåller bara lite tillägg för index-sidan såsom javascript inriktad mot IE. 

## Vart finns CSS/SCSS? 
Delad scss finns under katalogen assets/styles/
Exempel på delad scss är global.scss, och colors.scss

Övrig css/scss ligger uppdelad i komponenter och sidor (components and pages) som slutar på .vue och är css är omringat i <style> taggar.  
Detta blir separation of concerns då CSS är väldigt lätt att hitta när den ligger nära till hands vid den html man jobbar med. 

## Vad är components?
Components består främst av återanvändbar och delad kod (html och css) som kan läggas in på olika sidor som ska ha lika information.
På så sätt behöver man inte ändra på flera ställen om det ska vara samma information på sidorna. 
Exempelvis använder jag komponenten OpeningHours.vue på flera sidor såsom startsidan, sidan om öppettider, och på sidorna om tehusen.
Komponenten med öppettider kan hittas i under -->  components/opening-hours/OpeningHours.vue



## NUXT 
För en ännu mer detaljerad förklaring om hur saker fungerar kan ni kolla in docs för Nuxt.js 
[Nuxt.js docs](https://github.com/nuxt/nuxt.js).