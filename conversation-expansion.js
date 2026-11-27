window.CONVERSATION_SCENARIOS = [
  [
    {
      id: "a11-introduction",
      title: "Kursun ilk günü",
      context: "Yeni bir Almanca kursunda başka bir öğrenciyle tanışıyorsun.",
      turns: [
        { prompt: "Hallo! Wie heißt du?", translation: "Merhaba! Adın ne?", answers: ["Ich heiße Ali.", "Mein Name ist Elif."], partnerReply: "Freut mich, dich kennenzulernen!", cues: ["heißen", "Name"] },
        { prompt: "Woher kommst du?", translation: "Nerelisin?", answers: ["Ich komme aus der Türkei.", "Ich komme aus Istanbul."], partnerReply: "Ah, sehr schön! Willkommen im Kurs.", cues: ["kommen aus", "Türkei", "Istanbul"] },
        { prompt: "Wo wohnst du?", translation: "Nerede yaşıyorsun?", answers: ["Ich wohne in Istanbul.", "Ich wohne in Ankara."], partnerReply: "Das ist interessant. Bis später!", cues: ["wohnen", "in"] }
      ]
    },
    {
      id: "a11-cafe",
      title: "Kafede sipariş",
      context: "Bir kafede garson sana ne istediğini soruyor.",
      turns: [
        { prompt: "Was möchtest du trinken?", translation: "Ne içmek istersin?", answers: ["Ich möchte einen Tee, bitte.", "Einen Kaffee, bitte."], partnerReply: "Gerne. Möchtest du auch etwas essen?", cues: ["möchten", "Tee", "Kaffee"] },
        { prompt: "Möchtest du auch etwas essen?", translation: "Bir şeyler yemek de ister misin?", answers: ["Ja, ich nehme ein Stück Kuchen.", "Nein, danke. Nur einen Tee."], partnerReply: "Alles klar. Sonst noch etwas?", cues: ["nehmen", "Kuchen", "nein, danke"] },
        { prompt: "Wie möchtest du bezahlen?", translation: "Nasıl ödemek istersin?", answers: ["Ich bezahle mit Karte.", "Ich bezahle bar."], partnerReply: "Vielen Dank. Einen schönen Tag noch!", cues: ["bezahlen", "mit Karte", "bar"] }
      ]
    }
  ],
  [
    {
      id: "a12-routine",
      title: "Günlük rutin",
      context: "Bir arkadaşın günlük hayatını ve işe gidişini soruyor.",
      turns: [
        { prompt: "Wann stehst du normalerweise auf?", translation: "Normalde saat kaçta kalkarsın?", answers: ["Ich stehe um sieben Uhr auf.", "Ich stehe um halb acht auf."], partnerReply: "Das ist ziemlich früh!", cues: ["aufstehen", "um sieben Uhr"] },
        { prompt: "Wie kommst du zur Arbeit?", translation: "İşe nasıl gidersin?", answers: ["Ich fahre mit dem Bus.", "Ich gehe zu Fuß."], partnerReply: "Wie lange dauert der Weg?", cues: ["mit dem Bus", "zu Fuß"] },
        { prompt: "Was machst du am Abend?", translation: "Akşamları ne yaparsın?", answers: ["Ich koche und lese ein Buch.", "Ich sehe fern und höre Musik."], partnerReply: "Das klingt gemütlich!", cues: ["kochen", "lesen", "fernsehen"] }
      ]
    },
    {
      id: "a12-shopping",
      title: "Mağazada alışveriş",
      context: "Bir mağazada görevli sana Almanca yardımcı oluyor.",
      turns: [
        { prompt: "Guten Tag. Kann ich Ihnen helfen?", translation: "İyi günler. Size yardımcı olabilir miyim?", answers: ["Ja, ich suche eine Jacke.", "Ja, ich möchte eine Hose kaufen."], partnerReply: "Natürlich. Welche Größe brauchen Sie?", cues: ["suchen", "Jacke", "kaufen"] },
        { prompt: "Welche Größe brauchen Sie?", translation: "Hangi bedene ihtiyacınız var?", answers: ["Ich brauche Größe M.", "Größe L, bitte."], partnerReply: "Hier ist ein passendes Modell.", cues: ["Größe M", "Größe L"] },
        { prompt: "Möchten Sie die Jacke anprobieren?", translation: "Ceketi denemek ister misiniz?", answers: ["Ja, wo ist die Umkleidekabine?", "Nein, danke. Sie passt mir."], partnerReply: "Die Kasse ist gleich vorne.", cues: ["anprobieren", "Umkleidekabine"] }
      ]
    }
  ],
  [
    {
      id: "a21-wochenende",
      title: "Hafta sonunu anlatmak",
      context: "Bir arkadaşın hafta sonunun nasıl geçtiğini soruyor.",
      turns: [
        { prompt: "Was hast du am Wochenende gemacht?", translation: "Hafta sonu ne yaptın?", answers: ["Ich habe meine Freunde besucht.", "Ich bin ans Meer gefahren."], partnerReply: "Das klingt schön! Mit wem warst du dort?", cues: ["Perfekt", "besucht", "gefahren"] },
        { prompt: "Wen hast du dort getroffen?", translation: "Orada kiminle karşılaştın?", answers: ["Ich habe meine Freundin getroffen.", "Ich habe meinen Bruder getroffen."], partnerReply: "Wie lange seid ihr geblieben?", cues: ["Wen", "getroffen"] },
        { prompt: "Wie hat dir der Ausflug gefallen?", translation: "Gezi hoşuna gitti mi?", answers: ["Der Ausflug hat mir sehr gut gefallen.", "Das Wetter war schön und der Ausflug war toll."], partnerReply: "Das freut mich. Vielleicht fahren wir nächstes Mal zusammen.", cues: ["gefallen", "sehr gut", "toll"] }
      ]
    },
    {
      id: "a21-zugfahrt",
      title: "Tren bileti almak",
      context: "Tren istasyonunda gişedeki görevliyle konuşuyorsun.",
      turns: [
        { prompt: "Wohin möchten Sie fahren?", translation: "Nereye gitmek istiyorsunuz?", answers: ["Ich möchte nach Köln fahren.", "Nach Berlin, bitte."], partnerReply: "Möchten Sie eine einfache Fahrt oder eine Rückfahrkarte?", cues: ["nach Köln", "nach Berlin"] },
        { prompt: "Möchten Sie eine einfache Fahrt oder eine Rückfahrkarte?", translation: "Tek yön mü, gidiş-dönüş mü istiyorsunuz?", answers: ["Ich nehme eine Rückfahrkarte.", "Eine einfache Fahrt, bitte."], partnerReply: "Wann möchten Sie zurückfahren?", cues: ["einfache Fahrt", "Rückfahrkarte"] },
        { prompt: "Wann möchten Sie zurückfahren?", translation: "Ne zaman dönmek istiyorsunuz?", answers: ["Ich möchte am Sonntag zurückfahren.", "Am Montagmorgen, bitte."], partnerReply: "In Ordnung. Gute Reise!", cues: ["am Sonntag", "am Montagmorgen"] }
      ]
    }
  ],
  [
    {
      id: "a22-zukunft",
      title: "Gelecek planları",
      context: "Bir arkadaşın Almanca öğrenme nedenini ve gelecek planlarını soruyor.",
      turns: [
        { prompt: "Warum lernst du Deutsch?", translation: "Neden Almanca öğreniyorsun?", answers: ["Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.", "Ich lerne Deutsch, weil ich gern reise."], partnerReply: "Das ist ein gutes Ziel!", cues: ["weil", "arbeiten", "reisen"] },
        { prompt: "Was würdest du gern in Deutschland besuchen?", translation: "Almanya'da nereyi ziyaret etmek isterdin?", answers: ["Ich würde gern Berlin besuchen.", "Ich würde gern Museen besichtigen."], partnerReply: "Berlin hat viele interessante Orte.", cues: ["würde gern", "besuchen"] },
        { prompt: "Was machst du, wenn du genug Zeit hast?", translation: "Yeterince zamanın olduğunda ne yaparsın?", answers: ["Wenn ich genug Zeit habe, treffe ich meine Freunde.", "Wenn ich Zeit habe, lese ich ein Buch."], partnerReply: "Das klingt nach einem schönen Plan.", cues: ["wenn", "Zeit haben", "treffen"] }
      ]
    },
    {
      id: "a22-wohnung",
      title: "Ev aramak",
      context: "Bir arkadaşınla iki daireyi karşılaştırıyorsun.",
      turns: [
        { prompt: "Was ist dir bei einer Wohnung wichtig?", translation: "Bir evde senin için ne önemli?", answers: ["Mir sind eine gute Lage und ein Balkon wichtig.", "Eine ruhige Lage ist mir wichtig."], partnerReply: "Das kann ich gut verstehen.", cues: ["wichtig sein", "Lage", "Balkon"] },
        { prompt: "Welche Wohnung gefällt dir besser?", translation: "Hangi daire daha çok hoşuna gidiyor?", answers: ["Die zweite Wohnung gefällt mir besser, weil sie größer ist.", "Die erste gefällt mir besser, weil sie günstiger ist."], partnerReply: "Ja, die Lage ist auch sehr gut.", cues: ["besser", "weil", "größer", "günstiger"] },
        { prompt: "Was würdest du gern ändern?", translation: "Neyi değiştirmek isterdin?", answers: ["Ich würde gern die Küche renovieren.", "Ich würde gern ein zusätzliches Zimmer haben."], partnerReply: "Das wäre bestimmt praktisch.", cues: ["würde gern", "renovieren", "Zimmer"] }
      ]
    }
  ]
];
