import img1 from "@/assets/treatment-fruchtsaeure.jpg";
import img2 from "@/assets/treatment-microneedling.jpg";
import img3 from "@/assets/treatment-facial.jpg";
import img4 from "@/assets/treatment-skin.jpg";
import img5 from "@/assets/treatment-antiaging.jpg";
import img6 from "@/assets/gesichtsbehandlung.jpg";

export interface BlogArticle {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  relatedTo: string;
  content: { heading?: string; text: string }[];
}

const articles: BlogArticle[] = [
  {
    slug: "fruchtsaeure-peeling-fruehjahr",
    title: "Warum ist ein Fruchtsäurepeeling im Frühjahr kein Tabu?",
    category: "Fruchtsäure",
    excerpt:
      "Viele denken, Fruchtsäure sei nur im Winter möglich — dabei kann sie bei richtiger Pflege auch im Frühjahr eine effektive Behandlung für Glow, Hautstruktur und Unreinheiten sein.",
    image: img1,
    relatedTo: "/leistungen/fruchtsaeure",
    content: [
      {
        text: "Viele Kundinnen fragen mich: Kann ich Fruchtsäure auch im Frühling anwenden? Die Antwort ist ja — mit der richtigen Nachsorge. Fruchtsäure (AHA) macht die Haut lichtempfindlicher, was viele davon abhält, sie außerhalb der dunklen Jahreszeit zu verwenden. Dabei ist es ganz einfach: Mit einem konsequenten Sonnenschutz (LSF 30+, täglich) können Fruchtsäurebehandlungen das ganze Jahr über sinnvoll sein.",
      },
      {
        heading: "Was Fruchtsäure im Frühjahr bewirkt",
        text: "Sie entfernt abgestorbene Hautzellen, die sich über den Winter angesammelt haben. Das Hautbild wird gleichmäßiger und der Teint frischer. Poren werden verfeinert und Unreinheiten sowie erste Pigmentflecken sichtbar reduziert. Gerade nach der kalten Jahreszeit, wenn die Haut oft stumpf und fahl wirkt, ist ein Fruchtsäurepeeling ein idealer Neustart.",
      },
      {
        heading: "Sonnenschutz ist keine Option, sondern Pflicht",
        text: "Wer Fruchtsäure nutzt — egal ob zu Hause oder in der Kabine — muss täglich SPF tragen. Das gilt auch an bewölkten Tagen, denn UVA-Strahlen durchdringen Wolken und dringen tiefer in die Haut ein. Ein leichter SPF 30–50 morgens als letzter Pflegeschritt schützt dein Ergebnis und verhindert neue Pigmentflecken.",
      },
      {
        heading: "Welche Behandlung passt zu dir?",
        text: "Im Studio biete ich verschiedene Fruchtsäurebehandlungen an — von der 30-minütigen intensiven Kabinen-Behandlung bis hin zum individuell abgestimmten Pflegeplan für zu Hause. Wenn du dir unsicher bist, ob Fruchtsäure aktuell das Richtige für dich ist, starten wir am besten mit einer Hautanalyse und klären gemeinsam, was deine Haut gerade wirklich braucht.",
      },
    ],
  },
  {
    slug: "microneedling-glow",
    title: "Warum lässt mich Microneedling bei Face and More im Frühling frisch erstrahlen?",
    category: "Microneedling",
    excerpt:
      "Microneedling unterstützt die natürliche Hauterneuerung, verbessert die Hautstruktur und sorgt für einen frischen, gesunden Glow.",
    image: img2,
    relatedTo: "/leistungen/microneedling",
    content: [
      {
        text: "Microneedling klingt intensiver als es ist — und die Ergebnisse überraschen oft positiv. Nach einer Behandlung berichten viele Kundinnen, dass ihre Haut frischer, strahlender und insgesamt jünger wirkt. Aber wie funktioniert das genau?",
      },
      {
        heading: "Wie Microneedling wirkt",
        text: "Beim Microneedling werden mit einem speziellen Gerät feine, kontrollierte Mikrokanäle in die Haut gesetzt. Die Haut antwortet darauf mit einer natürlichen Heilungsreaktion: Sie produziert mehr Kollagen und Elastin — die Bausteine für eine straffe, elastische Haut. Gleichzeitig werden Wirkstoffe wie Hyaluron direkt in tiefere Hautschichten transportiert, wo sie ihre volle Wirkung entfalten können.",
      },
      {
        heading: "Das bringt Microneedling",
        text: "Eine verbesserte Hautstruktur und -textur, mehr Spannkraft, ein sichtbarer Glow-Effekt, weniger feine Linien und Fältchen sowie eine bessere Wirkstoffaufnahme für deine Heimpflege — all das sind Ergebnisse, die Kundinnen nach regelmäßigen Microneedling-Sitzungen berichten.",
      },
      {
        heading: "Was dich im Studio erwartet",
        text: "Im Studio kombiniere ich Microneedling mit Hyaluron für eine sofortige Auffüllung und einen intensiven Feuchtigkeitsboost. Das Ergebnis ist eine Haut, die sichtbar frischer und gepflegter wirkt — ohne nennenswerte Ausfallzeit. Die meisten Kundinnen sind am nächsten Tag wieder ganz normal im Alltag. Wer sich für Microneedling interessiert, empfehle ich immer ein kurzes Vorgespräch: Nicht jede Haut eignet sich in jeder Phase dafür, und eine Behandlung zum richtigen Zeitpunkt bringt die besten Ergebnisse.",
      },
    ],
  },
  {
    slug: "asap-skincare-face-and-more",
    title: "Gesichtsbehandlungen mit ASAP Skincare bei Face and More",
    category: "Hautpflege",
    excerpt:
      "Hochwertige Wirkstoffe, individuell abgestimmte Pflege und professionelle Behandlungen unterstützen die Haut langfristig und nachhaltig.",
    image: img3,
    relatedTo: "/produkte",
    content: [
      {
        text: "Im Studio FACE AND MORE arbeite ich exklusiv mit ASAP Skincare — einer australischen Marke, die auf pharmazeutisch aktiven Wirkstoffen basiert. Was macht diese Produktlinie besonders, und warum setze ich sie sowohl in der Kabine als auch für die Heimpflege meiner Kundinnen ein?",
      },
      {
        heading: "Was ASAP auszeichnet",
        text: "ASAP formuliert ihre Produkte mit klinisch getesteten Konzentrationen. Das bedeutet: Die Wirkstoffe — Vitamin C, Niacinamid, Retinol, Peptide — sind in Konzentrationen enthalten, die tatsächlich etwas bewirken. Keine leeren Versprechen, keine dekorativen Mengen — sondern messbare Ergebnisse, die man auf der Haut spürt und sieht.",
      },
      {
        heading: "Für wen eignet sich ASAP?",
        text: "Grundsätzlich für alle, die ihre Hautpflege auf das nächste Level heben möchten. Besonders bewährt hat sich die Linie bei Akne und unreiner Haut, bei Pigmentflecken, bei Zeichen der Hautalterung sowie als Ergänzung zu professionellen Behandlungen im Studio. ASAP-Produkte sind so formuliert, dass sie die Ergebnisse aus der Kabine verlängern und vertiefen.",
      },
      {
        heading: "Persönliche Beratung inklusive",
        text: "Im Studio zeige ich dir, welche ASAP-Produkte zu deiner Haut passen — und wie du sie richtig anwendest. Denn das beste Produkt nützt wenig, wenn die Routine nicht stimmt. Wirkstoffpflege braucht eine kluge Reihenfolge und die passende Kombination — das besprechen wir gemeinsam, damit du zu Hause wirklich profitierst.",
      },
    ],
  },
  {
    slug: "uva-uvb-schutz",
    title: "Warum ist eine Tagescreme mit UVA/UVB Schutz so wichtig und unerlässlich?",
    category: "Hautpflege",
    excerpt:
      "UV-Strahlung beeinflusst die Haut das ganze Jahr über. Ein täglicher Sonnenschutz hilft dabei, Hautalterung und Pigmentflecken vorzubeugen.",
    image: img4,
    relatedTo: "/kontakt",
    content: [
      {
        text: "Eine Frage, die ich fast täglich gestellt bekomme: Brauche ich Sonnenschutz auch im Winter, auch an bewölkten Tagen? Die klare Antwort: Ja — und ich erkläre dir auch warum.",
      },
      {
        heading: "UVA: Die unsichtbare Gefahr",
        text: "UVA-Strahlen — die sogenannten Alterungsstrahlen — durchdringen Wolken und sogar Glasscheiben. Sie sind das ganze Jahr über aktiv, unabhängig davon ob die Sonne scheint. UVA dringt tiefer in die Haut ein als UVB-Strahlen, beschleunigt die Hautalterung, fördert Pigmentflecken und schwächt die Hautstruktur langfristig.",
      },
      {
        heading: "Was ohne täglichen Schutz passiert",
        text: "Ohne Sonnenschutz altert die Haut deutlich schneller, entstehen Pigmentflecken — besonders nach Behandlungen oder bei hormonellen Schwankungen —, sprechen Behandlungen schlechter an und kehren Pigmentprobleme nach einer Aufhellung rascher zurück. Kurz gesagt: Sonnenschutz schützt nicht nur vor Sonnenbrand, sondern ist die wirkungsvollste Anti-Aging-Maßnahme, die es gibt.",
      },
      {
        heading: "Meine Empfehlung für den Alltag",
        text: "Ein leichter SPF 30–50 morgens als letzter Schritt der Pflege — vor dem Make-up. Heute gibt es wunderbar leichte Texturen, die sich nicht fettig oder schwer anfühlen. Ich empfehle meinen Kundinnen ASAP-Sonnenschutzprodukte, die sich nahtlos in jede Morgenroutine integrieren lassen. Wenn du wissen möchtest, welcher Sonnenschutz zu deiner Haut passt, frag mich gerne beim nächsten Termin.",
      },
    ],
  },
  {
    slug: "aha-fruchtsaeure-nach-behandlung",
    title: "Warum AHA-Fruchtsäureprodukte nach Behandlungen sinnvoll sind",
    category: "Fruchtsäure",
    excerpt:
      "AHA-Fruchtsäuren unterstützen die Hauterneuerung, verbessern die Wirkstoffaufnahme und sorgen für ein glatteres Hautbild.",
    image: img5,
    relatedTo: "/leistungen/fruchtsaeure",
    content: [
      {
        text: "Nach einer professionellen Behandlung im Studio — sei es ein Fruchtsäurepeeling, Microneedling oder eine klassische Gesichtsbehandlung — ist die Heimpflege entscheidend dafür, wie lange das Ergebnis hält und wie tief es wirkt. AHA-Produkte spielen dabei oft eine zentrale Rolle.",
      },
      {
        heading: "Was AHA (Alpha-Hydroxysäuren) bewirken",
        text: "AHA-Fruchtsäuren lösen abgestorbene Hautzellen an der Oberfläche und fördern die natürliche Hauterneuerung. Das Ergebnis ist eine glattere Textur, verfeinerte Poren und ein ebenmäßigeres Hautbild. Gleichzeitig verbessern sie die Wirkstoffaufnahme nachfolgender Pflegeprodukte — dein Serum wirkt tiefer, deine Tagespflege wird besser aufgenommen.",
      },
      {
        heading: "Wann sind AHA-Produkte nach Behandlungen sinnvoll?",
        text: "Als Erhalt nach einer Fruchtsäurebehandlung im Studio halten sie das Ergebnis länger aufrecht. Nach einem Microneedling unterstützen sie die Hauterneuerung in der Nachsorgephase. Bei unregelmäßigem Hautbild, kleinen Unreinheiten oder Pigmentflecken helfen sie, den Teint gleichmäßiger zu halten.",
      },
      {
        heading: "Wichtig: Dosierung und Sonnenschutz",
        text: "AHA-Produkte für zu Hause sollten dosiert eingesetzt werden — zwei bis drei Mal pro Woche reicht in der Regel aus. Wer täglich AHA anwendet, riskiert eine Überreizung der Haut. Und: Sonnenschutz ist bei der Anwendung von Fruchtsäuren ein absolutes Muss. Welche AHA-Konzentration für dich passt und wie du sie am besten in deine Routine integrierst, besprechen wir gerne persönlich.",
      },
    ],
  },
  {
    slug: "fruchtsaeure-moderne-kosmetik",
    title: "Warum Fruchtsäure in der modernen Kosmetik nicht mehr wegzudenken ist",
    category: "Fruchtsäure",
    excerpt:
      "Fruchtsäure zählt zu den effektivsten Wirkstoffen zur Verbesserung von Hautstruktur, Glow, Poren und Unreinheiten.",
    image: img6,
    relatedTo: "/leistungen/fruchtsaeure",
    content: [
      {
        text: "Fruchtsäure ist aus der modernen Hautpflege nicht mehr wegzudenken. Ob im Studio oder zu Hause — AHA-Säuren gehören zu den am besten erforschten und wirksamsten Wirkstoffen der professionellen Kosmetik. Aber was genau steckt dahinter?",
      },
      {
        heading: "Was Fruchtsäure leistet",
        text: "AHA-Fruchtsäuren wie Glykolsäure, Mandelsäure oder Milchsäure lösen die Verbindungen zwischen abgestorbenen Hornzellen und beschleunigen so die natürliche Hauterneuerung. Das Ergebnis: eine glattere Haut, feinere Poren und ein frischeres, gleichmäßigeres Hautbild. Dazu kommt eine verbesserte Aufnahme anderer Wirkstoffe — Fruchtsäure bereitet die Haut gewissermaßen vor.",
      },
      {
        heading: "Für welche Hautprobleme ist Fruchtsäure besonders geeignet?",
        text: "Fruchtsäure eignet sich hervorragend bei Unreinheiten und Mitessern, ungleichmäßigem Hautbild, ersten Falten und nachlassender Spannkraft, Pigmentflecken nach Sonne oder Akne sowie stumpfer und fahler Haut. Sie ist also vielseitig einsetzbar — und genau das macht sie so wertvoll in der professionellen Kabine.",
      },
      {
        heading: "Wie ich Fruchtsäure im Studio einsetze",
        text: "Im Studio FACE AND MORE setze ich Fruchtsäure sowohl in der Kabine als auch als Teil eines individuellen Heimpflegeplans ein. Die Konzentration und Art der Säure wird immer auf den aktuellen Hautzustand abgestimmt — was bei einer Kundin gut wirkt, muss bei der nächsten nicht passen. Deshalb starten wir immer mit einem Gespräch und wenn nötig mit einer Hautanalyse, bevor wir mit einer Fruchtsäurebehandlung beginnen.",
      },
    ],
  },
];

export default articles;
