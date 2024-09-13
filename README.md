# CRM Dashboard Frontend

Bu proje, CRM Dashboard backend API'si ile etkileşimli bir kullanıcı arayüzü sağlayan bir React uygulamasıdır. Kullanıcılar, müşteri ve görev yönetimini gerçekleştirebilir ve uygulamanın genel yönetimini yapabilirler.
İçindekiler

    Proje Özeti
    Kullanım
    API Entegrasyonu
    

Proje Özeti

Bu proje, CRM Dashboard uygulamasının frontend kısmını oluşturur ve aşağıdaki özellikleri içerir:

    Kullanıcı girişi ve kayıt işlemleri
    Müşteri ekleme, güncelleme, silme ve listeleme işlemleri

Kullanım
Ana Sayfa

Ana sayfada müşteri tablosu bulunur. Bu tabloda aşağıdaki işlemleri gerçekleştirebilirsiniz:

    Müşteri Ekleme: Tablo üstündeki + butonuna basarak yeni bir müşteri ekleyebilirsiniz. Bu butona tıkladığınızda müşteri ekleme formu açılır.
    Müşteri Silme: Tablo satırlarının sonundaki çöp kutusu simgesine tıklayarak müşteri kaydını silebilirsiniz.
    Müşteri Düzenleme: Düzenle butonuna tıklayarak mevcut müşteri bilgilerini güncelleyebilirsiniz.

Filtreleme

Tablonun üst kısmında bulunan filtreleme formu ile müşterileri çeşitli kriterlere göre filtreleyebilirsiniz:

    Filtreleme: Formdaki alanlara filtreleme yapmak istediğiniz bilgileri girin ve Filter butonuna basın. Bu işlem, tablodaki müşteri listesini filtreleyerek sadece kriterlere uyan müşteri kayıtlarını gösterir.
    Filtreyi Sıfırlama: Reset Filter butonuna tıklayarak filtreleri sıfırlayabilir ve tüm müşteri kayıtlarını tekrar görebilirsiniz.    

API Entegrasyonu

Frontend uygulamanız, aşağıdaki API uç noktalarına erişim sağlar:

    Kullanıcı API:
        POST /api/v1/user/login - Kullanıcı girişi yapar ve JWT token alır.
        POST /api/v1/user/register - Yeni bir kullanıcı kaydeder.

    Müşteri API:
        POST /api/v1/customer - Yeni bir müşteri ekler.
        PUT /api/v1/customer/{id} - Var olan bir müşteri bilgilerini günceller.
        DELETE /api/v1/customer/{id} - Var olan bir müşteri siler.
        GET /api/v1/customer - Müşteri listesini alır.
        GET /api/v1/customer/filter - Müşterileri filtreler.    
