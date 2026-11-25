/* Günlük yazma ve cümle kurma senaryoları. Serbest yanıtlar kullanıcı öz değerlendirmesiyle izlenir. */
window.SENTENCE_WRITING_BANK = [
[
{scenario:"Kendini tanıtma",task:"Adını, yaşını ve nerede yaşadığını tek bir kısa tanıtımda söyle.",cues:["heißen","Jahre alt","wohnen"],sample:"Ich heiße Anna, bin 15 Jahre alt und wohne in Berlin.",note:"Fiil çekimine ve ana cümlede fiilin ikinci sırada olmasına dikkat et."},
{scenario:"Kafede sipariş",task:"Bir kahve ve bir su istediğini kibarca yaz.",cues:["möchten","einen Kaffee","ein Wasser"],sample:"Ich möchte einen Kaffee und ein Wasser, bitte.",note:"Möchten fiilini özneye göre çek ve diğer fiili mastar biçiminde bırak."},
{scenario:"Günlük rutin",task:"Sabah saat yedide kalktığını ve kahvaltı yaptığını yaz.",cues:["aufstehen","um sieben Uhr","frühstücken"],sample:"Ich stehe um sieben Uhr auf und frühstücke.",note:"Ayrılabilen fiilde ön ek cümlenin sonuna gider."},
{scenario:"Yol tarifi",task:"İstasyona nasıl gidebileceğini sor.",cues:["Wie","zum Bahnhof","kommen"],sample:"Wie komme ich zum Bahnhof?",note:"Soru kelimesinden sonra çekimli fiil gelir."},
{scenario:"Alışveriş",task:"Bir kilo elma almak istediğini söyle.",cues:["möchten","ein Kilo","Äpfel"],sample:"Ich möchte ein Kilo Äpfel kaufen.",note:"Modal fiil veya möchten yapısında asıl fiil sonda mastar olur."}
],
[
{scenario:"Randevu ayarlama",task:"Yarın saat onda doktor randevun olduğunu yaz.",cues:["morgen","um zehn Uhr","einen Termin haben"],sample:"Ich habe morgen um zehn Uhr einen Termin beim Arzt.",note:"Zaman ifadesi ve fiil sırasına dikkat et."},
{scenario:"Geçmiş hafta sonu",task:"Geçen hafta sonu arkadaşlarınla sinemaya gittiğini Perfekt ile yaz.",cues:["letztes Wochenende","mit Freunden","ins Kino gehen"],sample:"Letztes Wochenende bin ich mit meinen Freunden ins Kino gegangen.",note:"Hareket bildiren gehen fiili Perfekt'te sein ile kullanılır."},
{scenario:"Ev işi",task:"Odanı temizlemen gerektiğini söyle.",cues:["müssen","mein Zimmer","aufräumen"],sample:"Ich muss mein Zimmer aufräumen.",note:"Modal fiil çekilir; asıl fiil mastar olarak sonda kalır."},
{scenario:"Yemek tarifi",task:"Önce soğanı doğradığını, sonra sebzeleri eklediğini anlat.",cues:["zuerst","die Zwiebel schneiden","danach","das Gemüse hinzufügen"],sample:"Zuerst schneide ich die Zwiebel. Danach füge ich das Gemüse hinzu.",note:"Zuerst ve danach ile sıralı iki ana cümle kur."},
{scenario:"Plan yapma",task:"Hafta sonu müzeye gitmek istediğini çünkü tarihi sevdiğini yaz.",cues:["am Wochenende","ins Museum gehen","weil","Geschichte mögen"],sample:"Am Wochenende möchte ich ins Museum gehen, weil ich Geschichte mag.",note:"Weil yan cümlesinde çekimli fiil sona gider."}
],
[
{scenario:"İş yerinde izin",task:"Yarın evden çalışmak istediğini ve bunun mümkün olup olmadığını kibarca sor.",cues:["morgen","von zu Hause arbeiten","ob es möglich wäre"],sample:"Ich würde morgen gern von zu Hause arbeiten. Wäre das möglich?",note:"Kibar rica için Konjunktiv II kullanımı."},
{scenario:"Bir sorunu açıklama",task:"Trenin geciktiğini, bu yüzden toplantıya geç kalacağını açıkla.",cues:["der Zug","Verspätung haben","deshalb","zu spät kommen"],sample:"Der Zug hat Verspätung, deshalb komme ich zu spät zur Besprechung.",note:"Deshalb sonrasında çekimli fiil hemen gelir."},
{scenario:"Fikir belirtme",task:"Toplu taşımanın arabadan daha çevreci olduğunu düşündüğünü yaz.",cues:["öffentliche Verkehrsmittel","umweltfreundlicher","als","Auto"],sample:"Ich finde, dass öffentliche Verkehrsmittel umweltfreundlicher als das Auto sind.",note:"Dass yan cümlesinde çekimli fiil sona gider."},
{scenario:"Şikâyet e-postası",task:"Siparişinin henüz ulaşmadığını ve bilgi rica ettiğini iki cümleyle yaz.",cues:["meine Bestellung","noch nicht angekommen","um Information bitten"],sample:"Meine Bestellung ist noch nicht angekommen. Könnten Sie mir bitte weitere Informationen geben?",note:"Resmî hitap ve kibar rica kalıbı kullan."},
{scenario:"Sağlıklı yaşam",task:"Daha sağlıklı yaşamak için düzenli spor yaptığını ve yeterince uyuduğunu anlat.",cues:["um ... zu","regelmäßig Sport treiben","ausreichend schlafen"],sample:"Um gesünder zu leben, treibe ich regelmäßig Sport und schlafe ausreichend.",note:"Um ... zu amacı belirtir; zu yapısının yerini kontrol et."}
],
[
{scenario:"Toplantı özeti",task:"Projenin geciktiğini çünkü önemli belgelerin eksik olduğunu açıkla.",cues:["das Projekt","sich verzögern","da","wichtige Unterlagen fehlen"],sample:"Das Projekt verzögert sich, da wichtige Unterlagen fehlen.",note:"Da yan cümlesinde çekimli fiil sona yerleşir."},
{scenario:"Bir öneriyi savunma",task:"Toplantının ertelenmesini öner ve bunun ekibe daha fazla hazırlık zamanı vereceğini açıkla.",cues:["vorschlagen","die Besprechung verschieben","dadurch"],sample:"Ich schlage vor, die Besprechung zu verschieben, da das dem Team mehr Vorbereitungszeit geben würde.",note:"zu + Infinitiv ve Konjunktiv II kullanımını kontrol et."},
{scenario:"Deneyim anlatma",task:"Daha önce Almanya'da yaşadığını ama artık Türkiye'de çalıştığını yaz.",cues:["früher","in Deutschland leben","inzwischen","in der Türkei arbeiten"],sample:"Früher habe ich in Deutschland gelebt, inzwischen arbeite ich in der Türkei.",note:"Geçmiş deneyim ve şimdiki durumu zaman zarflarıyla ayır."},
{scenario:"Avantaj ve dezavantaj",task:"Uzaktan çalışmanın esneklik sağladığını ancak ekip iletişimini zorlaştırabildiğini yaz.",cues:["einerseits","Flexibilität bieten","andererseits","erschweren"],sample:"Einerseits bietet das Arbeiten im Homeoffice mehr Flexibilität, andererseits kann es die Kommunikation im Team erschweren.",note:"Einerseits ... andererseits karşıtlığı kur."},
{scenario:"Resmî talep",task:"Bir kurumdan başvurunun durumuyla ilgili bilgi rica eden resmî bir cümle yaz.",cues:["sich erkundigen","der aktuelle Stand","mein Antrag"],sample:"Ich möchte mich höflich nach dem aktuellen Stand meines Antrags erkundigen.",note:"Resmî yazışma kalıbı ve doğru edat kullanımına dikkat et."}
],
...Array.from({length:4},(_,i)=>[
{scenario:"Günlük iletişim",task:"Bugünkü planını ve bir sonraki adımını iki cümleyle anlat.",cues:["zunächst","anschließend","vorhaben"],sample:"Zunächst erledige ich meine Aufgaben. Anschließend treffe ich mich mit meinen Freunden.",note:"Bağlaç ve zaman zarflarının cümle sırasına etkisini kontrol et."},
{scenario:"Görüş bildirme",task:"Bir konuda kendi görüşünü gerekçesiyle açıkla.",cues:["Meiner Meinung nach","weil","deshalb"],sample:"Meiner Meinung nach ist lebenslanges Lernen wichtig, weil sich die Welt ständig verändert.",note:"Görüş ve gerekçe arasında tutarlı bağ kur."},
{scenario:"Sorun çözme",task:"Bir aksaklığı ve önerdiğin çözümü açıkla.",cues:["obwohl","deshalb","eine Lösung finden"],sample:"Obwohl es ein Problem gibt, können wir gemeinsam eine Lösung finden.",note:"Obwohl yan cümlesinde fiil sona gider."}
])
];
