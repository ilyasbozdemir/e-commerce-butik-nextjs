import Head from "next/head";
import Link from "next/link";
import React from "react";

function DistanceSellingContractPage() {
  return (
    <>
    <Head>
    <title>Mesafeli Satış Sözleşmesi &#x2022; [siteName] | [desc]</title>
    </Head>
      <div>
        <h1 id="mesafeli-sat-s-zle-mesi">Mesafeli Satış Sözleşmesi</h1>
        <p>
          Tüm kullanıcılar üyelik işlemlerini gerçekleştirdikleri anda şatış
          sözleşmesini okuduklarını ve onayladıklarını kabul etmiş sayılırlar.
          Satış Sözleşmesi
          <Link href="/" legacyBehavior>
           <a >www.domain-name.com</a>
          </Link>
          ile
          Müşteri arasındaki Sanal Ortamda Satış Sözleşmesidir.
        </p>
        <h3 id="madde-1">Madde - 1</h3>
        <p>
          Is bu sözleşmenin konusu, satıcının, alıcıya satısını yaptığı, aşağıda
          nitelikleri ve satış fiyatı belirtilen ürünün satısı ve teslimi ile
          ilgili olarak 4077 sayılı Tüketicilerin Korunması Hakkındaki Kanunun;
          Mesafeli Sözleşmeleri Uygulama Esas ve Usulleri Hakkında Yönetmelik
          hükümleri gereğince tarafların hak ve yükümlülüklerinin kapsamaktadır.
        </p>
        <h3 id="madde-2-satici-bi-lgileri-">Madde - 2 SATICI BİLGILERİ:</h3>
        <p>
          Ünvanı : Eflatun Moda
          <br />
          Adres : {"{"}
          {"{"}Adres{"}"}
          {"}"}
          <br />
          Telefon : 0 531 248 6322
          <br />
          E-mail :{" "}
          <a href="mailto:info@domain-name.com">info@domain-name.com</a>
        </p>
        <h3 id="madde-3-alici-bi-lgi-leri-">Madde - 3 ALICI BİLGİLERİ:</h3>
        <p>
          Tüm üyeler: domain-name.com Firmasının e-ticaret mağazası{" "}
          <a href="https://www.domain-name.com/">www.domain-name.com</a>'a üye
          olup alışveriş yapan tüm alıcılar. (Bundan sonra alıcı veya müşteri
          olarak anılacaktır).
        </p>
        <h3 id="madde-4-s-zlesme-konusu-ve-r-n-bilgileri-">
          Madde - 4 SÖZLESME KONUSU VE ÜRÜN BILGILERI:
        </h3>
        <p>
          Mal/Ürün veya Hizmetin; Türü, Miktarı, Marka/Modeli, Rengi, Adedi,
          Satış Bedeli ve Ödeme Sekli, sitede belirtildiği gibi olup, bu vaatler
          alıcıya bildirilmeden değişiklik gösterebilmektedir.
        </p>
        <h3 id="madde-5-genel-h-k-mler-">Madde - 5 GENEL HÜKÜMLER:</h3>
        <p>
          {" "}
          5.1 - ALICI, Madde 4’te belirtilen sözleşme konusu ürünün temel
          nitelikleri, satış fiyatı ve ödeme sekli ile teslimata ilişkin tüm ön
          bilgileri okuyup bilgi sahibi olduğunu ve elektronik ortamda gerekli
          teyidi verdiğini beyan eder.
        </p>
        <p>
          5.2 - Sözleşme konusu ürün, yasal 30 günlük süreyi asmamak koşulu ile
          her bir ürün için alicinin yerleşim yerinin uzaklığına bağlı olarak ön
          bilgiler içinde açıklanan süre içinde alici veya gösterdiği adresteki
          kişi veya kuruluşa teslim edilir.
        </p>
        <p>
          5.3 - Sözleşme konusu ürün, alıcıdan başka bir kişi veya kuruluşa
          teslim edilecek ise, teslim edilecek kişi veya kurulusun teslimatı
          kabul etmemesinden dolayı SATICI sorumlu tutulamaz.
        </p>
        <p>
          5.4 " SATICI , sözleşme konusu ürünün sağlam, eksiksiz, siparişte
          belirtilen niteliklere uygun ve varsa garanti belgeleri ve kullanım
          kılavuzları ile birlikte teslim edilmesinden sorumludur.
        </p>
        <p>
          5.5 - Sözleşme konusu ürünün teslimatı için is bu sözleşmenin
          elektronik ortamda onaylanmış olması ve satış bedelinin alicinin
          tercih ettiği ödeme sekli ile ödenmiş olması şarttır. Herhangi bir
          nedenle ürün bedeli ödenmez veya banka kayıtlarında iptal edilir ise,
          SATICI ürünün teslimi yükümlülüğünden kurtulmuş kabul edilir.
        </p>
        <p>
          5.6 - Ürünün tesliminden sonra alıcıya ait kredi kartının alıcının
          kusurundan kaynaklanmayan bir şekilde yetkisiz kişilerce hâksiz veya
          hukuka aykırı olarak kullanılması nedeni ile ilgili banka veya finans
          kurulusun ürün bedelini SATICI ya ödememesi halinde, ALICI kendisi
          veya satış sözleşmesinde belirttiği kişi veya kuruma teslim edilmiş
          olan ürünü 3 is günü içinde SATICI ya göndermek zorundadır. Böyle bir
          durumda nakliye giderleri alıcıya aittir.
        </p>
        <p>
          5.7 - SATICI mücbir sebepler veya nakliyeyi engelleyen hava
          muhalefeti, ulaşımın kesilmesi gibi olağanüstü durumlar nedeni ile
          sözleşme konusu ürünü süresi içinde teslim edemez ise, durumu aliciya
          bildirmekle yükümlüdür. Bu takdirde alici siparisinin iptal
          edilmesini, sözlesme konusu ürünün varsa emsali ile değiştirilmesini
          ve/veya teslimat süresinin engelleyici durumun ortadan kalkmasina
          kadar ertelenmesi haklarından birini kullanabilir. Alicinin siparisi
          iptal etmesi halinde, SATICI 7 gün içinde aliciya ait kredi karti
          fisinin iptali ve ilgili tutarın alicinin hesabına iade edilmesi
          konusunda ilgili banka nezdinde girişimde bulunur ve yapilan islem
          elektronik posta aracılığı ile Alıcıya bildirilir. Böyle bir durumda
          ilgili bankadan kaynaklanan gecikmelerden dolayı SATICI sorumlu
          tutulamaz.
        </p>
        <p>
          5.8 - ALICI ve/veya ALICInin teslimat yapılması istediği kisi ve/veya
          kurumlara teslim edilmis olan ürünlerin arizali veya bozuk olmasi
          durumunda, gerekli onarim veya degistirme isleminin yapilmasi için
          ilgili ürün veya ürünler SATICIya, ALICI tarafinin teslim aldigi
          tarihten baslayarak (3) gün içinde gönderilir ve nakliye giderleri
          SATICI tarafından karşılanır.
        </p>
        <p>
          5.9- Is bu sözleşme, alici tarafından elektronik olarak
          onaylandıktan(üyelik gerçekleştirildikten sonra) ayenbutik.com
          adresine ulaştırıldıktan sonra geçerlilik kazanır.
        </p>
        <p>
          <strong>Madde - 6 CAYMA HAKKI</strong>
        </p>
        <p>
          6.1- Tüketici, on dört gün içinde herhangi bir gerekçe göstermeksizin
          ve cezai şart ödemeksizin sözleşmeden cayma hakkına sahiptir.
        </p>
        <p>
          6.2- Taksitli satışlarda ALICI, sözleşme konusu ürünün kendisine veya
          gösterdiği adresteki kişi/kuruluşa tesliminden itibaren 7 (yedi) gün
          içinde cayma hakkına sahiptir.
        </p>
        <p>
          6.3- Cayma hakkının kullanılması için bu süre içinde SATICIya yazılı
          bildirimde bulunulması ve ürünün 6. madde hükümleri çerçevesinde
          kullanılmamış olması şarttır.
        </p>
        <p>
          6.4- Bu hakkın kullanılması halinde, ALICIya veya 3.kişiye teslim
          edilen ürünün SATICIya gönderildiğine ilişkin kargo teslim tutanağı
          örneği ile fatura aslının iadesi zorunludur, ayrıca zarar görmemiş
          haldeki ürün kutusu, kullanma kılavuzları, aksesuarlar, varsa bahse
          konu ürün ile birlikte verilen hediyeler de SATICI?ya
          ulaştırılmalıdır. Tüm belgeler ve ürünlerin SATICI?ya ulaşmasını takip
          eden (10) gün içinde ürün bedeli( SATICI tarafından ödenen kargo
          gönderim bedeli düşülmek suretiyle) ALICIya iade edilir. Fatura aslı
          gönderilmez ise iade talebi kabul edilemez. Cayma hakkı nedeni ile
          iade edilen ürünün kargo bedeli ALICIya aittir.
        </p>
        <p>
          6.5- Alıcı iade edeceği malı Satıcı?ya Ön Bilgilendirme Formu?nda
          belirtilen Satıcı?nın anlaşmalı kargo şirketi ile göndermediği
          takdirde iade talebi kabul edilmeyecektir. Alıcı?nın iade edeceği malı
          Ön Bilgilendirme Formu?nda belirtilen Satıcı?nın anlaşmalı kargo
          şirketi dışında bir kargo şirketi ile göndermesi halinde, iade bedeli
          ve malın kargo sürecinde uğrayacağı hasardan Satıcı sorumlu değildir.
        </p>
        <h3 id="madde-7-cayma-hakki-kullanilamayacak-durumlar">
          Madde - 7 CAYMA HAKKI KULLANILAMAYACAK DURUMLAR
        </h3>
        <p>
          Ürünlerin iade edilebilmesi, ürünün ambalajının açılmamış, bozulmamış
          ve ürünün kullanılmamış, yıkanmamış, ütülenmemiş, evsaf ve özelliğini
          kaybetmemiş, sağlık ve hijyen açısından yeniden satılabilirlik
          özelliğini yitirmemiş, giyilmemiş ve denenmemiş olması şartına
          bağlıdır. Ayrıca;
        </p>
        <p>
          7.1- Alıcı, cayma hakkı sona ermeden önce hizmeti kullanmaya başlarsa,
          cayma hakkını kullanamaz.
        </p>
        <p>
          7.2- ALICI Tesliminden sonra ambalaj, bant, mühür, paket gibi koruyucu
          unsurları açılmış olan mallardan; iadesi sağlık ve hijyen açısından
          uygun olmayanların iadesine ilişkin cayma hakkını kullanamaz.
        </p>
        <p>
          7.3- Satıcı cayma süresi içinde malı tüketiciye teslim etmişse
          tüketici, malı ancak olağan bir gözden geçirmenin gerektirdiği ölçüde
          kontrol edebilir; aksi takdirde tüketici cayma hakkını kullanamaz.
        </p>
        <p>
          7.4-Tüketici istekleri veya kişisel ihtiyaçları doğrultusunda
          hazırlanan mallara ilişkin cayma hakkını kullanamaz.
        </p>
        <p>
          5.5- ABİYE ürünlerinde diğer ürünlerden farklı olarak SADECE beden
          değişimi yapılmakta olup, ALICI bu ürüne mahsus sağlık ve hijyen
          nedeniyle cayma hakkını kullanamaz.
        </p>
        <p>
          7.6- Tadilat veya onarım gören, orijinal şekli bozulan Kıyafetlerde
          ALICI cayma hakkını kullanamaz.
        </p>
        <p>
          7.7- Kemer, broş, toka, kolye gibi aksesuarlarla satılan ürünlerin
          aksesuarlarının tam olarak iade edilmemesi durumunda ALICI cayma
          hakkını kullanamaz.
        </p>
        <p>
          7.8- ALICI kargo teslimatı sırasında kargosunu fiziki olarak kontrol
          etmek, kargo ambalajında açılma, yırtılma, yanma, lekelenme ve kargo
          ambalajının orijinalliğinde bozulma tespit etmesi durumunda Kargo
          hasar tutanağı talebinde bulunmak ve durumu derhal SATICIya
          bildirmekle sorumludur. Aksi durumda ALICI cayma hakkını kullanamaz.
        </p>
        <h3 id="madde-8-i-sti-snalar">Madde - 8 İSTİSNALAR</h3>
        <p>8.1- 18 yaşından küçük kişiler SATICIdan alış-veriş yapamaz.</p>
        <p>
          8.2- Dizgi ve sistem hatalarından meydana gelen fiyat
          yanlışlıklarından SATICI sorumlu değildir.
        </p>
        <h3 id="madde-9-yetki-li-mahkeme">Madde - 9 YETKİLİ MAHKEME</h3>
        <p>
          İşbu sözleşmenin uygulanmasında, Sanayi ve Ticaret Bakanlığınca ilan
          edilen değere kadar SATICInın yerleşim yerindeki Tüketici Hakem
          Heyetleri ile SATICInın yerleşim yerindeki Tüketici Mahkemeleri
          yetkilidir.
        </p>
        <p>
          Siparişin elektronik ortamda onaylanması durumunda, ALICI is bu
          sözleşmenin tüm hükümlerini kabul etmiş sayılır.
        </p>
      </div>
    </>
  );
}


export default DistanceSellingContractPage;
