/* A1.1–A2.2 role-play conversations. Each learner turn has accepted sample answers and a partner reply. */
window.CONVERSATION_SCENARIOS = [
  [
    {title:"Im Café",context:"Du bist in einem Café und möchtest etwas bestellen.",turns:[
      {prompt:"Guten Tag! Was möchten Sie bestellen?",translation:"İyi günler! Ne sipariş etmek istersiniz?",answers:["Ich möchte einen Tee und ein Stück Kuchen, bitte.","Ich nehme einen Tee und ein Stück Kuchen, bitte."],partnerReply:"Sehr gern. Möchten Sie den Tee mit Zitrone?"},
      {prompt:"Möchten Sie Zitrone oder Milch?",translation:"Limon mu, süt mü istersiniz?",answers:["Mit Zitrone, bitte.","Ich nehme Zitrone, danke."],partnerReply:"Natürlich. Sonst noch etwas?"},
      {prompt:"Möchten Sie noch etwas?",translation:"Başka bir şey ister misiniz?",answers:["Nein, danke. Das ist alles.","Nein, das wäre alles, danke."],partnerReply:"Gut. Das macht sechs Euro."}
    ]},
    {title:"Neue Mitschülerin",context:"Du lernst eine neue Mitschülerin kennen und stellst dich vor.",turns:[
      {prompt:"Hallo! Wie heißt du?",translation:"Merhaba! Adın ne?",answers:["Ich heiße Elif.","Mein Name ist Elif."],partnerReply:"Freut mich, Elif! Woher kommst du?"},
      {prompt:"Woher kommst du?",translation:"Nerelisin?",answers:["Ich komme aus der Türkei.","Ich bin aus der Türkei."],partnerReply:"Wie schön! Welche Sprachen sprichst du?"},
      {prompt:"Welche Sprachen sprichst du?",translation:"Hangi dilleri konuşuyorsun?",answers:["Ich spreche Türkisch und ein bisschen Deutsch.","Ich spreche Türkisch und etwas Deutsch."],partnerReply:"Toll! Dann können wir zusammen Deutsch üben."}
    ]}
  ],
  [
    {title:"Am Bahnhof",context:"Du bist am Bahnhof und möchtest eine Zugverbindung finden.",turns:[
      {prompt:"Wohin möchten Sie fahren?",translation:"Nereye gitmek istiyorsunuz?",answers:["Ich möchte nach Köln fahren.","Ich fahre nach Köln."],partnerReply:"Der nächste Zug nach Köln fährt um zehn Uhr zwanzig."},
      {prompt:"Möchten Sie eine einfache Fahrt oder eine Rückfahrkarte?",translation:"Tek yön bilet mi, gidiş-dönüş bileti mi istersiniz?",answers:["Eine Rückfahrkarte, bitte.","Ich möchte eine Fahrkarte hin und zurück."],partnerReply:"Gern. Der Zug fährt von Gleis drei."},
      {prompt:"Kann ich Ihnen sonst noch helfen?",translation:"Başka yardımcı olabilir miyim?",answers:["Nein, danke. Das ist alles.","Nein, vielen Dank."],partnerReply:"Gute Reise und einen schönen Tag!"}
    ]},
    {title:"Im Supermarkt",context:"Du kaufst Lebensmittel und fragst eine Mitarbeiterin nach Produkten.",turns:[
      {prompt:"Guten Tag. Suchen Sie etwas Bestimmtes?",translation:"İyi günler. Belirli bir şey mi arıyorsunuz?",answers:["Ja, wo finde ich die Milch?","Ja, ich suche die Milch. Wo steht sie?"],partnerReply:"Die Milch finden Sie im Kühlregal links."},
      {prompt:"Brauchen Sie auch Brot?",translation:"Ekmek de gerekiyor mu?",answers:["Ja, bitte. Ich nehme ein Vollkornbrot.","Ja, ich möchte ein Vollkornbrot."],partnerReply:"Gern. Möchten Sie noch etwas?"},
      {prompt:"Möchten Sie eine Tüte?",translation:"Poşet ister misiniz?",answers:["Nein danke, ich habe eine Tasche dabei.","Nein, ich habe eine eigene Tasche."],partnerReply:"Alles klar. Das macht zusammen acht Euro fünfzig."}
    ]}
  ],
  [
    {title:"Beim Arzt",context:"Du hast einen Termin in einer Arztpraxis und beschreibst deine Beschwerden.",turns:[
      {prompt:"Guten Morgen. Was fehlt Ihnen?",translation:"Günaydın. Şikâyetiniz nedir?",answers:["Ich habe seit gestern Halsschmerzen und Fieber.","Mein Hals tut seit gestern weh und ich habe Fieber."],partnerReply:"Haben Sie auch Husten?"},
      {prompt:"Haben Sie auch Husten?",translation:"Öksürüğünüz de var mı?",answers:["Ja, besonders in der Nacht.","Ja, ich muss vor allem nachts husten."],partnerReply:"Ich untersuche Sie jetzt. Haben Sie schon Medikamente genommen?"},
      {prompt:"Haben Sie schon Medikamente genommen?",translation:"Daha önce ilaç aldınız mı?",answers:["Nein, ich habe noch nichts genommen.","Nein, bisher habe ich keine Medikamente genommen."],partnerReply:"In Ordnung. Ich schreibe Ihnen ein Rezept."}
    ]},
    {title:"Über das Wochenende sprechen",context:"Du erzählst einem Freund, was du am Wochenende gemacht hast.",turns:[
      {prompt:"Was hast du am Wochenende gemacht?",translation:"Hafta sonu ne yaptın?",answers:["Ich habe meine Freunde besucht und wir haben zusammen gekocht.","Ich war bei Freunden und wir haben gemeinsam gekocht."],partnerReply:"Das klingt schön! Wie war das Wetter?"},
      {prompt:"Wie war das Wetter?",translation:"Hava nasıldı?",answers:["Es war sonnig, deshalb sind wir spazieren gegangen.","Das Wetter war schön und wir sind draußen spazieren gegangen."],partnerReply:"Prima! Was möchtest du nächstes Wochenende machen?"},
      {prompt:"Was möchtest du nächstes Wochenende machen?",translation:"Gelecek hafta sonu ne yapmak istiyorsun?",answers:["Ich möchte einen Ausflug machen.","Vielleicht fahre ich ans Meer."],partnerReply:"Das hört sich nach einem guten Plan an!"}
    ]}
  ],
  [
    {title:"Eine Wohnung suchen",context:"Du rufst eine Wohnungsagentur an und erklärst, welche Wohnung du suchst.",turns:[
      {prompt:"Guten Tag. Welche Wohnung suchen Sie?",translation:"İyi günler. Nasıl bir daire arıyorsunuz?",answers:["Ich suche eine Zwei-Zimmer-Wohnung mit Balkon.","Ich möchte eine Wohnung mit zwei Zimmern und einem Balkon mieten."],partnerReply:"Wie hoch darf die monatliche Miete sein?"},
      {prompt:"Wie hoch darf die monatliche Miete sein?",translation:"Aylık kira en fazla ne kadar olabilir?",answers:["Die Warmmiete sollte höchstens neunhundert Euro betragen.","Ich kann bis zu neunhundert Euro im Monat bezahlen."],partnerReply:"Verstehe. Ab wann möchten Sie einziehen?"},
      {prompt:"Ab wann möchten Sie einziehen?",translation:"Ne zamandan itibaren taşınmak istiyorsunuz?",answers:["Am besten ab dem ersten Dezember.","Ich würde gern Anfang Dezember einziehen."],partnerReply:"Ich prüfe die Angebote und melde mich bei Ihnen."}
    ]},
    {title:"Eine Verspätung erklären",context:"Du bist zu spät zu einem Termin gekommen und erklärst den Grund.",turns:[
      {prompt:"Warum sind Sie heute zu spät gekommen?",translation:"Bugün neden geç kaldınız?",answers:["Der Bus hatte Verspätung, deshalb bin ich später angekommen.","Ich bin zu spät gekommen, weil der Bus nicht pünktlich war."],partnerReply:"Haben Sie im Büro Bescheid gesagt?"},
      {prompt:"Haben Sie im Büro Bescheid gesagt?",translation:"Ofise haber verdiniz mi?",answers:["Ja, ich habe vorhin angerufen.","Ja, ich habe das Büro schon telefonisch informiert."],partnerReply:"Gut. Können Sie die Aufgabe trotzdem heute erledigen?"},
      {prompt:"Können Sie die Aufgabe trotzdem heute erledigen?",translation:"Buna rağmen görevi bugün tamamlayabilir misiniz?",answers:["Ja, ich erledige sie bis zum Nachmittag.","Ja, ich kann die Aufgabe heute Nachmittag fertig machen."],partnerReply:"Vielen Dank. Dann können wir wie geplant weitermachen."}
    ]}
  ],
  null,null,null,null
];