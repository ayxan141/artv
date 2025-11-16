
document.addEventListener('DOMContentLoaded', function () {
    // Rəssamlar məlumatları - daha zəngin və real məlumatlar
    const artists = [
        {
            id: 1,
            name: "Məhəmməd Orucov",
            bio: "1962-ci ildə Gürcüstan-da Borçalıda anadan olmuşdur. 1982-ci ildə Bakı-da Ə.Əzimzadə adına rəssamlıq məktəbini bitirmişdir. 1982-ci ildə Azərbaycan İncəsənət İnstitutun rəssamlıq fakultəsinə daxil olub və 1986-ci ildə həmin institutu bitirib. Orucov rəngkarlıq texnikada işləyir. Bir necə sərgilərdə iştirak etdi. Onlardan ən mənalı: 1995 İstanbul Kadiköy belediyesi sanat qalereyası 1996 Y.",
            specialty: "Abstrakt Rəsm",
            category: "bstract",
            image: "./img/images.jpg",
            artworksCount: 24,
            followers: "1.2K",
            rating: 4.9,
            social: {
                instagram: "https://www.instagram.com/muhammed.orujov?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                facebook: "."
            },
            artworks: [
                {
                    id: 101,
                    title: "Abşeron",
                    year: 2022,
                    price: 5000,
                    size: "120×100 cm",
                    medium: "Akril, kətan",
                    description: "Bu əsər neft mövzusunun sənət baxışından ifadəsidir.",
                    image: "./img/imagess.jpg",
                    tags: ["Neft Mövzusunda"]
                },
               
                 {
                    id: 102,
                    title: "Neft Mövzusu",
                    year: 2021,
                    size: "120×100 cm",
                    price: 5000,
                    medium: "Yağlı boya, kətan",
                    description: "Dərin mavi rənglərlə işlənmiş bu əsər dənizin sakitliyini və sonsuzluq hissini təqdim edir.",
                    image: "./img/imagesss.jpg",
                    tags: ["Neft"]
                },
                
                 {
                    id: 103,
                    title: "Qədimi",
                    year: 2021,
                    size: "110×80 cm",
                    price: 4000,
                    medium: "Yağlı boya, kətan",
                    description: "Dərin mavi rənglərlə işlənmiş bu əsər dənizin sakitliyini və sonsuzluq hissini təqdim edir.",
                    image: "./img/sekil.jpg",
                    tags: ["Binalar"]
                },

                {
                    id: 104,
                    title: "Neft Mövzusu 2",
                    year: 2021,
                    size: "120×100 cm",
                    price: 5000,
                    medium: "Yağlı boya, kətan",
                    description: "Dərin mavi rənglərlə işlənmiş bu əsər dənizin sakitliyini və sonsuzluq hissini təqdim edir.",
                    image: "./img/sekil1.jpg",
                    tags: ["Buruqlar"]
                },
                {
                    id: 105,
                    title: "Neft Mövzusu 3",
                    year: 2021,
                    size: "120×100 cm",
                    price: 5000,
                    medium: "Yağlı boya, kətan",
                    description: "Dərin mavi rənglərlə işlənmiş bu əsər dənizin sakitliyini və sonsuzluq hissini təqdim edir.",
                    image: "./img/sekil2.jpg",
                    tags: ["Buruqlar"]
                },
                {
                    id: 106,
                    title: "Neft İşçiləri",
                    year: 2021,
                    size: "120×100 cm",
                    price: 5000,
                    medium: "Yağlı boya, kətan",
                    description: "Dərin mavi rənglərlə işlənmiş bu əsər dənizin sakitliyini və sonsuzluq hissini təqdim edir.",
                    image: "./img/sekil3.jpg",
                    tags: ["Neft"]
                },
                {
                    id: 107,
                    title: "Neft İşçiləri 2",
                    year: 2021,
                    size: "140×90 cm",
                    price: 11900,
                    medium: "Yağlı boya, kətan",
                    description: "Dərin mavi rənglərlə işlənmiş bu əsər dənizin sakitliyini və sonsuzluq hissini təqdim edir.",
                    image: "./img/sekil4.jpg",
                    tags: ["Buruqlar"]
                },
                {
                    id: 108,
                    title: "Neft Mövzusu 4",
                    year: 2021,
                    size: "140×90 cm",
                    price: 11900,
                    medium: "Yağlı boya, kətan",
                    description: "Dərin mavi rənglərlə işlənmiş bu əsər dənizin sakitliyini və sonsuzluq hissini təqdim edir.",
                    image: "./img/sekil5.jpg",
                    tags: ["Neft"]
                },
                {
                    id: 109,
                    title: "Neft Mövzusu 5",
                    year: 2021,
                    size: "120×100 cm",
                    price: 5000,
                    medium: "Yağlı boya, kətan",
                    description: "Dərin mavi rənglərlə işlənmiş bu əsər dənizin sakitliyini və sonsuzluq hissini təqdim edir.",
                    image: "./img/sekil6.jpg",
                    tags: ["Neft,Buruqlari"]
                },
                 {
                    id: 110,
                    title: "Çiçəklər",
                    year: 2021,
                    size: "85×75 cm",
                    price: 2500,
                    medium: "Yağlı boya, kətan",
                    description: "Dərin mavi rənglərlə işlənmiş bu əsər dənizin sakitliyini və sonsuzluq hissini təqdim edir.",
                    image: "./img/sekil7.jpg",
                    tags: ["Təbiət"]
                },
                
            ]
            
        },
        
        {
            id: 2,
            name: "Fikrət İbrahimli",
            bio: "FİKRƏT İBRAHİMLİ 1955-ci ildə Neftçala rayonu Xıllı qəsəbəsində anadan olub. Neftçalada görkəmli rəssam Adil Hacıyevdən rəssamlıq sənətinin sirlərini öyrəndikdən sonra Əzim Əzimzadə adına Azərbaycan Dövlət Rəssamlıq məktəbini və Azərbaycan Dövlət Mədəniyyət və İncəsənət Universitetinin Rəngkarlıq ixtisasını bitirmişdir. Azərbaycanda öz dəsti-xətti olan rəssamlardandır.",
            specialty: "Realizm",
            category: "realism",
            image: "./img/Fikət İbrahimli.webp",
            artworksCount: 18,
            followers: "980",
            rating: 4.8,
            social: {
                instagram: "",
                facebook: ""
            },
            artworks: [
                {
                    id: 201,
                    title: "Qoca Balıqçı",
                    year: 2020,
                    price: 2000,
                    size: "150×180 cm",
                    medium: "Yağlı boya, kətan",
                    description: "Bu portret həyatın ağırlığını daşıyan, lakin hələ də ümidi olan bir balıqçını təsvir edir. Hər bir xətt onun həyat hekayəsini danışır.",
                    image: "./img/sekil.jpeg",
                    tags: ["portret", "realizm", "yaşlı"]
                }
            ]
        },
        {
            id: 3,
            name: "İntiqam Ağayev",
            bio: "Rəssam İntiqam Ağayev ehtiyatda olan zabit, II qrup Qarabağ əlilidir. Əzim Əzimzadə adına Rəssamlıq Məktəbini bitirib. Çəkdiyi əsərlər imperssionizm üslubundadır. Əsasən, yağlı boyadan istifadə edir. İşlədiyi mövzularda isə məişət, dəniz peyzajları və müharibə mövzuları üstünlük təşkil edir.İntiqam Ağayev incəsənət aləmində özünəməxsus dəsti-xətti olan istedadlı rəssamlardandır. Rəsmlərinə baxanda insanın ağlına da gəlməz ki, o, Qarabağ müharibəsinin iştirakçısı olub, ağır döyüşlərdə iştirak edib, yaddaşında dərin iz buraxmış faciəvi itkilər görüb. Çünki yaradıcılıqda əsas şüarı auditoriyaya yalnız müsbət enerji, xoş təəssürat və nikbin əhval-ruhiyyə ötürməkdir. O, öz kədərini, ağrı-acılarını da kətan üzərinə rəngli boyalarla, gözəl təbiət mənzərələri ilə canlandırmağı bacaran rəssamlardandır. Cəbhədə baş verənləri unutmasa da, tablolarda mavi Xəzəri, qayğısız uşaqlıq illərini, Abşeronun əsrarəngiz təbiətini təsvir etməklə insanlara nikbinlik aşılamağa çalışır. Müharibə illərində qanlı savaşlarda iştirak etmiş, böyük faciələrin şahidi olmuş və rəssamlığa da məhz döyüş zamanı aldığı fiziki və mənəvi zərbədən sonra başlamış İntiqam Ağayevin yaradıcılığının əsas mövzusu vətənpərvərlik olsa da, o, heç zaman ağrı-acını, bədbinliyi, çarəsizliyi rəsmlərində təbliğ etmir, əksinə, auditoriyaya mənəvi rahatlıq və ümid hissi aşılayır, xeyirin şər üzərində gec-tez qələbə çalacağına inamını insanlara çatdırır. Bir sözlə, rəssamın optimizmlə dolu yaradıcılığı hər kəsə həyatın gözəl olduğunu, onu sevinclə, doya-doya yaşamağı, nə baş verirsə-versin həyatdan küsməməyi öyrədir. İntiqam Ağayev böyük həvəslə hazırlaşdığı, bu yaxınlarda təşkil edəcəyi yeni sərgidə yer alan tablolarda da məhz bu xətt qorunub saxlanılır.",
            specialty: "Miniatür",
            category: "miniature",
            image: "./img/İntiqam Aqayev.jpg",
            artworksCount: 32,
            followers: "2.1K",
            rating: 4.7,
            social: {
                instagram: "",
                facebook: ""
            },
            artworks: [
                {
                    id: 301,
                    title: "Şəhər Həyatı",
                    year: 2023,
                    price: 750,
                    size: "40×50 cm",
                    medium: "Sulu boya, kağız",
                    description: "Müasir şəhər həyatının dinamikasını miniatür üslubunda təsvir edən incə işlənmiş əsər.",
                    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    tags: ["miniatur", "şəhər", "müasir"]
                }
            ]
        },
        {
            id: 4,
            name: "Aydın Rəcəbov",
            bio: "Aydın Rəcəbov 9 aprel 1944-cü ildə Bakı şəhərində anadan olmuşdur. O, 1966-cı ildə Ə.Əzimzadə adına Azərbaycan Dövlət Rəssamlıq Məktəbini bitirmiş və həmin il Politexnik İnstitutunun memarlıq fakültəsinə daxil olmuşdur. İkinci kursdan M.A.Əliyev adına Azərbaycan Dövlət İncəsənət İnstitutunun xalça kafedrasında təhsilini davam etdirmiş və buradan 1972-ci ildə məzun olmuşdur.Rəssam 1975-ci ildə SSRİ Rəssamlar İttifaqının üzvü, 1991-ci ildə isə Azərbaycan Rəssamlar İttifaqının Rəyasət heyətinin üzvü seçilmişdir. O, 2012-ci ildə Azərbaycan Rəssamlar İttifaqının Dekorativ-tətbiqi sənət bölməsinin rəhbəri təyin olunmuşdur.",
            specialty: "Miniatür",
            category: "miniature",
            image: "./img/Aydin Recebov.jpg",
            artworksCount: 32,
            followers: "2.1K",
            rating: 4.7,
            social: {
                instagram: "",
                facebook: ""
            },
            artworks: [
                {
                    id: 301,
                    title: "Şəhər Həyatı",
                    year: 2023,
                    price: 750,
                    size: "40×50 cm",
                    medium: "Sulu boya, kağız",
                    description: "Müasir şəhər həyatının dinamikasını miniatür üslubunda təsvir edən incə işlənmiş əsər.",
                    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    tags: ["miniatur", "şəhər", "müasir"]
                }
            ]
        },
        {
            id: 5,
            name: "Hüseyn Haqverdiyev",
            bio: "Hüseyn Həsən oğlu Haqverdiyev (3 mart 1956, Ucar) — Azərbaycan rəssamı, fotoqraf və heykəltaraş, Azərbaycan Respublikasının xalq rəssamı (2021). Həyatı:Rəssam Həsən Haqverdiyevin və Vera Kalininanın oğlu olaraq 1956-cı ildə Ucarda anadan olmuşdur. 1958-ci ildə ailəsi Bakıya köçmüşdür. 1971-ci ildə Əzim Əzimzadə adına İncəsənət kollecinə daxil olmuş, 1975-ci ildə oradan məzun olmuşdur. Həmin il Vera Muxina adına Leninqrad ali incəsənət akademiyasına daxil olmuş, heykəltaraşlıq fakültəsini 1980-ci ildə bitirmişdir. Azərbaycan Həvari Prefektinin baş kafedral kilsəsi olan Müqəddəs Bakirə Məryəm kilsəsindəki 'Bakirə Məryəm' heykəlinin müəllifidir. Səngəçal terminalının girişindəki 'Xəzər dənizi əfsanəsi' əsərinin müəllifidir.[2] İlk simpoziumu 1980-ci ildə nümayiş olunmuşdur. Hindistan, ABŞ, Almaniya, Gürcüstan, BƏƏ kimi ölkələrdə sərgi və simpoziumları baş tutmuşdur. 2014-cü ildə Özbəkistanda solo sərgisi baş tutmuşdur. Bakıda yaşayır.",
            specialty: "Miniatür",
            category: "miniature",
            image: "./img/Hüseyn Haqverdiyev.webp",
            artworksCount: 32,
            followers: "2.1K",
            rating: 4.7,
            social: {
                instagram: "",
                facebook: ""
            },
            artworks: [
                {
                    id: 301,
                    title: "Şəhər Həyatı",
                    year: 2023,
                    price: 750,
                    size: "40×50 cm",
                    medium: "Sulu boya, kağız",
                    description: "Müasir şəhər həyatının dinamikasını miniatür üslubunda təsvir edən incə işlənmiş əsər.",
                    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    tags: ["miniatur", "şəhər", "müasir"]
                }
            ]
        },
        {
            id: 6,
            name: "Xanlar Əhmədov",
            bio: "Xanlar Əhməd oğlu Əhmədov (12 iyun 1946, Bakı) — rəssam-heykəltaraş, Azərbaycan Respublikasının xalq rəssamı (2006).Həyat və yaradıcılığı: Əhmədov Xanlar Əhməd oğlu 12 iyun 1946-ci ildə Bakıda anadan olmuşdur. O, Ə.Əzimzadə adına Rəssamlıq Texnikumu (1961–1966), Daşkənd Teatral-Bədii İnstitutunda (1966–1972) təhsil almışdır.Əsasən dəzgah və monumental heykəltaraşlıq sahəsində işləyən Xanlar Əhmədov bir sıra məşhur monumental layihələrin müəllifidir. Xanlar Əhmədov Xocalı faciəsini əks etdirən silsilə əsərlərini yaradıb. Bu cür heykəltaraşlıq və qrafika əsərləri sırasında 'Nalə', 'Ana körpəsi ilə', 'Yanmış qadın', 'Ata fəryadı', 'Fikir', 'Ana', 'Tomris ana', 'Soyunan', 'Leyli və Məcnun', 'Əzmkarlıq' əsərlərini misal çəkmək olar. Azadlıq prospekti metrostansiyasında böyük həcmli relyef əsərlərinin müəllifidir. Həmçinin, metronun foyesində Azərbaycan tarixi abidələrini əks etdirən əsərləri yaradıb.Xanlar Əhmədov 1975-ci ildə SSRİ Rəssamlar İttifaqının üzvü olmuşdur. O, 1982-ci ildə VDNX-nın bürünc medalı, 1995 və 1998-ci ildə Heykəltaraşlıq nominasiyasında Milli 'Humay' mükafatı almışdır. Xanlar Əhmədov 2002-ci ildə Azərbaycan Respublikasının əməkdar rəssamı, 2006-cı ildə Azərbaycan Respublikasının xalq rəssamı fəxri adına layiq görülmüşdür. Onun əsərləri Fransa, Almaniya, İran, Polşa, Rusiya, Ukrayna, Özbəkistan və digər ölkələrdə nümayiş etdirilib. Bir sıra əsərləri müxtəlif muzey və şəxsi kolleksiyalarda saxlanılır.",
            specialty: "Miniatür",
            category: "miniature",
            image: "./img/Xanlar Ehmedov.jpg",
            artworksCount: 32,
            followers: "2.1K",
            rating: 4.7,
            social: {
                instagram: "",
                facebook: ""
            },
            artworks: [
                {
                    id: 301,
                    title: "Şəhər Həyatı",
                    year: 2023,
                    price: 750,
                    size: "40×50 cm",
                    medium: "Sulu boya, kağız",
                    description: "Müasir şəhər həyatının dinamikasını miniatür üslubunda təsvir edən incə işlənmiş əsər.",
                    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    tags: ["miniatur", "şəhər", "müasir"]
                }
            ]
        },
        {
            id: 7,
            name: "Zakir Əhmədov",
            bio: "Azərbaycan heykəltaraşı Zakir Əhmədov 1955-ci ildə Bakı şəhərində anadan olub.O, 1978-ci ildə Əzim Əzimzadə adına Dövlət Rəssamlıq Məktəbinin, 1988-ci ildə isə Mirzağa Əliyev adına Azərbaycan Dövlət İncəsənət İnstitutunun heykəltaraşlıq fakültələrini bitirib.1978-ci ildən dünyanın bir çox ölkələrində keçirilən sərgilərdə iştirak edir.1989-cu ildə Azərbaycan və SSRİ Rəssamlar İttifaqının üzvü seçilib.2005-ci ildə 'Humay' milli mükafatına layiq görülüb.Zakir Əhmədovun heykəlləri Azərbaycan, Türkiyə, Rusiya, Polşa, Çexiya, Cənubi Afrika, Fransa, Almaniya, Böyük Britaniya, ABŞ və cox ölkələrdəki şəxsi kolleksiyalarda saxlanılır.",
            specialty: "Miniatür",
            category: "miniature",
            image: "./img/Zakir Ehmedov.jpeg",
            artworksCount: 32,
            followers: "2.1K",
            rating: 4.7,
            social: {
                instagram: "",
                facebook: ""
            },
            artworks: [
                {
                    id: 301,
                    title: "Şəhər Həyatı",
                    year: 2023,
                    price: 750,
                    size: "40×50 cm",
                    medium: "Sulu boya, kağız",
                    description: "Müasir şəhər həyatının dinamikasını miniatür üslubunda təsvir edən incə işlənmiş əsər.",
                    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    tags: ["miniatur", "şəhər", "müasir"]
                }
            ]
        },
        {
            id: 8,
            name: "Zakir Mehdiyev",
            bio: "Zakir Tahir oğlu Mehdiyev (4 oktyabr 1948, Kirovabad) — Azərbaycan heykəltaraş və rəssamı, pedaqoq, SSRİ Rəssamlar İttifaqının üzvü (1979), Azərbaycan Respublikasının əməkdar rəssamı (2021).Həyatı: Zakir Mehtiyev 1948-ci il 4 oktyabrda Gəncə şəhərində dünyaya gəlib. 1965-ci ildə orta məktəbi bitirdikdən sonra Əzim Əzimzadə adına Bakı Rəssamlıq Məktəbinə daxil olmuş və 1969-cu ildə bitirmişdir. Həmçinin Surikov adına Moskva Dövlət Rəssamlıq İnstitutunun məzunudur. SSRİ Rəssamlıq Akademiyasının aspiranturasını bitirmişdir. 1979-cu ildən SSRİ Rəssamlar İttifaqının üzvü olub.1978-ci ildə bu institutun heykəltaraşlıq fakültəsini bitirdikdən sonra Mehdiyev Bakıya dönüb. 1983–2000-ci illərdə Azərbaycan Dövlət Pedaqoji Universitetində heykəltaraşlıq tədris etmişdir. 2000–2016-cı illərdə Türkiyədə M.K. Atatürk Universitetində dosent və kafedra müdiri vəzifəsində fəaliyyət göstərmişdir",
            specialty: "Miniatür",
            category: "miniature",
            image: "./img/Zakir Mehtiyev.jpg",
            artworksCount: 32,
            followers: "2.1K",
            rating: 4.7,
            social: {
                instagram: "",
                facebook: ""
            },
            artworks: [
                {
                    id: 301,
                    title: "Şəhər Həyatı",
                    year: 2023,
                    price: 750,
                    size: "40×50 cm",
                    medium: "Sulu boya, kağız",
                    description: "Müasir şəhər həyatının dinamikasını miniatür üslubunda təsvir edən incə işlənmiş əsər.",
                    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    tags: ["miniatur", "şəhər", "müasir"]
                }
            ]
        },
        {
            id: 9,
            name: "Məhəmmədhüseyn Hüseynov",
            bio: "O, Sankt-Peterburq şəhərində yaşadığı müddətdə özünün çoxşaxəli yaradıcılıq fəaliyyətinə başlamış, “Qatçina lövhələri”, “Sfinksin kölgəsi”, “Puşkin şəhərinin etüdləri” və başqa əsərlərini müxtəlif sərgilərdə nümayiş etdirmişdir. Rəssam 1995-ci ildə “Azərxalça” Elmi Yaradıcılıq İstehsalat Birliyində rəssam kimi, 1996-1998-ci illərdə Lətif Kərimov adına Azərbaycan Dövlət Xalça tətbiqi sənəti və Xalça Muzeyində bərpaçı-rəssam kimi işləmişdir. Xalçaçı rəssam eyni zamanda xalça sənətinə həsr olunmuş “Pazırık xalısı - rəmzlər dünyası”, “Xalça sənətində naxış yaddaşı” adlı kitablar və onlarla elmi məqalələrin müəllifidir.",
            specialty: "Miniatür",
            category: "miniature",
            image: "./img/Mehemmedhuseyn Huseynov.jpg",
            artworksCount: 32,
            followers: "2.1K",
            rating: 4.7,
            social: {
                instagram: "",
                facebook: ""
            },
            artworks: [
                {
                    id: 301,
                    title: "Şəhər Həyatı",
                    year: 2023,
                    price: 750,
                    size: "40×50 cm",
                    medium: "Sulu boya, kağız",
                    description: "Müasir şəhər həyatının dinamikasını miniatür üslubunda təsvir edən incə işlənmiş əsər.",
                    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    tags: ["miniatur", "şəhər", "müasir"]
                }
            ]
        }

    ];

    // DOM elementləri - daha aydın qruplaşdırma
    const elements = {
        // Konteyner elementləri
        artistsContainer: document.getElementById('artistsContainer'),
        artworksSection: document.getElementById('artworksSection'),
        artistInfo: document.getElementById('artistInfo'),
        artworksContainer: document.getElementById('artworksContainer'),
        cartItems: document.getElementById('cartItems'),

        // Düymə elementləri
        backButton: document.getElementById('backButton'),
        searchToggle: document.getElementById('searchToggle'),
        searchBtn: document.getElementById('searchBtn'),
        applyFilters: document.getElementById('applyFilters'),
        resetFilters: document.getElementById('resetFilters'),
        favoritesBtn: document.getElementById('favoritesBtn'),
        cartBtn: document.getElementById('cartBtn'),
        closeCart: document.getElementById('closeCart'),
        exploreArtists: document.getElementById('exploreArtists'),
        mobileMenuBtn: document.getElementById('mobileMenuBtn'),

        // Input elementləri
        searchInput: document.getElementById('searchInput'),
        categoryFilter: document.getElementById('categoryFilter'),
        minPrice: document.getElementById('minPrice'),
        maxPrice: document.getElementById('maxPrice'),
        sortBy: document.getElementById('sortBy'),

        // Sayğac elementləri
        favoritesCount: document.getElementById('favoritesCount'),
        cartCount: document.getElementById('cartCount'),
        cartTotal: document.getElementById('cartTotal'),

        // UI elementləri
        searchFilter: document.getElementById('searchFilter'),
        cartSidebar: document.getElementById('cartSidebar'),
        overlay: document.getElementById('overlay'),
        toast: document.getElementById('toast'),
        mobileMenu: document.getElementById('mobileMenu')
    };

    // Dəyişənlər - daha təşkil edilmiş
    const state = {
        favorites: JSON.parse(localStorage.getItem('artvision_favorites')) || [],
        cart: JSON.parse(localStorage.getItem('artvision_cart')) || [],
        currentArtist: null,
        filteredArtists: [...artists],
        isFilterOpen: false
    };

    // Əsas funksiyalar - daha moduler və oxunaqlı
    class ArtGallery {
        // Rəssamları yüklə
        static loadArtists() {
            elements.artistsContainer.innerHTML = '';

            if (state.filteredArtists.length === 0) {
                this.showEmptyState('Heç bir rəssam tapılmadı');
                return;
            }

            state.filteredArtists.forEach(artist => {
                elements.artistsContainer.appendChild(this.createArtistCard(artist));
            });

            this.attachArtistEventListeners();
            this.updateFavoritesCount();
        }

        // Boş state göstər
        static showEmptyState(message) {
            elements.artistsContainer.innerHTML = `
                    <div class="empty-state fade-in">
                        <i class="fas fa-palette"></i>
                        <h3>${message}</h3>
                        <p>Başqa axtarış kriteriyaları ilə cəhd edin</p>
                    </div>
                `;
        }

        // Rəssam kartı yarat
        static createArtistCard(artist) {
            const isFavorite = state.favorites.includes(artist.id);
            const artistCard = document.createElement('div');
            artistCard.className = 'artist-card fade-in';
            artistCard.innerHTML = `
                    <div class="artist-actions">
                        <button class="action-btn favorite ${isFavorite ? 'active' : ''}" 
                                data-id="${artist.id}"
                                aria-label="${isFavorite ? 'Favorilərdən çıxar' : 'Favoritlərə əlavə et'}">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                    <img src="${artist.image}" alt="${artist.name}" class="artist-image" loading="lazy">
                    <div class="artist-details">
                        <h3 class="artist-name">${artist.name}</h3>
                        <p class="artist-bio">${artist.bio}</p>
                        <span class="artist-specialty">${artist.specialty}</span>
                        <div class="artist-stats">
                            <div class="stat">
                                <div class="stat-value">${artist.artworksCount}</div>
                                <div class="stat-label">Əsər</div>
                            </div>
                            <div class="stat">
                                <div class="stat-value">${artist.followers}</div>
                                <div class="stat-label">İzləyici</div>
                            </div>
                            <div class="stat">
                                <div class="stat-value">${artist.rating}</div>
                                <div class="stat-label">Reytinq</div>
                            </div>
                        </div>
                        <div class="artist-social">
                          <a href="${artist.social.instagram}" class="social-btn">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="${artist.social.facebook}" class="social-btn">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                        </div>
                    </div>
                `;

            artistCard.addEventListener('click', (e) => {
                if (!e.target.closest('.artist-actions')) {
                    this.showArtistArtworks(artist);
                }
            });

            return artistCard;
        }

        // Rəssamın əsərlərini göstər
        static showArtistArtworks(artist) {
            state.currentArtist = artist;
            document.querySelector('.section').style.display = 'none';
            elements.artworksSection.style.display = 'block';

            this.loadArtistInfo(artist);
            this.loadArtworks(artist.artworks);
            this.scrollToTop();
        }

        // Rəssam məlumatlarını yüklə
        static loadArtistInfo(artist) {
            elements.artistInfo.innerHTML = `
                    <div class="artist-info-content">
                        <img src="${artist.image}" alt="${artist.name}" class="artist-info-image">
                        <div class="artist-info-details">
                            <h2>${artist.name}</h2>
                            <p class="artist-info-bio">${artist.bio}</p>
                            <span class="artist-specialty large">${artist.specialty}</span>
                            <div class="artist-info-stats">
                                <div class="info-stat">
                                    <strong>${artist.artworksCount}</strong>
                                    <span>Əsər</span>
                                </div>
                                <div class="info-stat">
                                    <strong>${artist.followers}</strong>
                                    <span>İzləyici</span>
                                </div>
                                <div class="info-stat">
                                    <strong>${artist.rating}</strong>
                                    <span>Reyting</span>
                                </div>
                            </div>
                            <div class="artist-info-social">
                                <span>İzlə:</span>
                                <a href="${artist.social.instagram}" class="social-btn">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="${artist.social.facebook}" class="social-btn">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                `;
        }

        // Əsərləri yüklə
        static loadArtworks(artworks) {
            elements.artworksContainer.innerHTML = '';

            artworks.forEach(artwork => {
                elements.artworksContainer.appendChild(this.createArtworkCard(artwork));
            });

            this.attachArtworkEventListeners();
        }

        // Əsər kartı yarat
        static createArtworkCard(artwork) {
            const isInCart = state.cart.some(item => item.id === artwork.id);
            const isFavorite = state.favorites.includes(artwork.id);

            const artworkCard = document.createElement('div');
            artworkCard.className = 'artwork-card fade-in';
            artworkCard.innerHTML = `
                    <div class="artwork-image-container">
                        <img src="${artwork.image}" alt="${artwork.title}" class="artwork-image" loading="lazy">
                        <div class="artwork-overlay">
                            <button class="artwork-overlay-btn favorite-button ${isFavorite ? 'active' : ''}" 
                                    data-id="${artwork.id}"
                                    aria-label="${isFavorite ? 'Favorilərdən çıxar' : 'Favoritlərə əlavə et'}">
                                <i class="fas fa-heart"></i>
                            </button>
                        </div>
                    </div>
                    <div class="artwork-details">
                        <h3 class="artwork-title">${artwork.title}</h3>
                        <div class="artwork-meta">
                            <span class="artwork-year">${artwork.year}</span>
                            <span class="artwork-size">${artwork.size}</span>
                            <span class="artwork-medium">${artwork.medium}</span>
                        </div>
                        <p class="artwork-price">${this.formatPrice(artwork.price)} AZN</p>
                        <p class="artwork-description">${artwork.description}</p>
                        <div class="artwork-tags">
                            ${artwork.tags.map(tag => `<span class="artwork-tag">#${tag}</span>`).join('')}
                        </div>
                        <div class="artwork-actions">
                            <button class="artwork-btn buy-button ${isInCart ? 'added' : ''}" 
                                    data-id="${artwork.id}">
                                <i class="fas fa-shopping-cart"></i>
                                ${isInCart ? 'Səbətdə' : 'Səbətə əlavə et'}
                            </button>
                        </div>
                    </div>
                `;

            return artworkCard;
        }

        // Qiyməti formatla
        static formatPrice(price) {
            return new Intl.NumberFormat('az-AZ').format(price);
        }

        // Favorit əlavə et/çıxar
        static toggleFavorite(itemId, element) {
            const index = state.favorites.indexOf(itemId);
            const isAdding = index === -1;

            if (isAdding) {
                state.favorites.push(itemId);
                if (element) {
                    element.classList.add('active');
                    element.setAttribute('aria-label', 'Favorilərdən çıxar');
                }
                this.showToast('Favorilərə əlavə edildi', 'success');
            } else {
                state.favorites.splice(index, 1);
                if (element) {
                    element.classList.remove('active');
                    element.setAttribute('aria-label', 'Favoritlərə əlavə et');
                }
                this.showToast('Favorilərdən çıxarıldı', 'info');
            }

            this.saveToStorage('artvision_favorites', state.favorites);
            this.updateFavoritesCount();
        }

        // Səbətə əlavə et/çıxar
        static addToCart(artwork, element) {
            const existingIndex = state.cart.findIndex(item => item.id === artwork.id);
            const isAdding = existingIndex === -1;

            if (isAdding) {
                state.cart.push({
                    id: artwork.id,
                    title: artwork.title,
                    price: artwork.price,
                    image: artwork.image,
                    artist: state.currentArtist.name,
                    size: artwork.size
                });
                if (element) {
                    element.classList.add('added');
                    element.innerHTML = '<i class="fas fa-shopping-cart"></i> Səbətdə';
                }
                this.showToast('Məhsul səbətə əlavə edildi', 'success');
            } else {
                state.cart.splice(existingIndex, 1);
                if (element) {
                    element.classList.remove('added');
                    element.innerHTML = '<i class="fas fa-shopping-cart"></i> Səbətə əlavə et';
                }
                this.showToast('Məhsul səbətdən çıxarıldı', 'info');
            }

            this.saveToStorage('artvision_cart', state.cart);
            this.updateCartCount();
            this.updateCartDisplay();
        }

        // Səbətdən çıxar
        static removeFromCart(itemId) {
            state.cart = state.cart.filter(item => item.id !== itemId);
            this.saveToStorage('artvision_cart', state.cart);
            this.updateCartCount();
            this.updateCartDisplay();
            this.updateArtworkButtons();
        }

        // Səbəti yenilə
        static updateCartDisplay() {
            elements.cartItems.innerHTML = '';
            let total = 0;

            if (state.cart.length === 0) {
                elements.cartItems.innerHTML = `
                        <div class="empty-cart">
                            <i class="fas fa-shopping-cart"></i>
                            <h4>Səbətiniz boşdur</h4>
                            <p>İncəsənət əsərləri əlavə edin</p>
                        </div>
                    `;
            } else {
                state.cart.forEach(item => {
                    total += item.price;
                    const cartItem = document.createElement('div');
                    cartItem.className = 'cart-item';
                    cartItem.innerHTML = `
                            <img src="${item.image}" alt="${item.title}" class="cart-item-image">
                            <div class="cart-item-details">
                                <div class="cart-item-title">${item.title}</div>
                                <div class="cart-item-artist">${item.artist}</div>
                                <div class="cart-item-size">${item.size}</div>
                                <div class="cart-item-price">${this.formatPrice(item.price)} AZN</div>
                            </div>
                            <button class="remove-item" data-id="${item.id}" aria-label="Sil">
                                <i class="fas fa-times"></i>
                            </button>
                        `;
                    elements.cartItems.appendChild(cartItem);
                });

                this.attachCartEventListeners();
            }

            elements.cartTotal.textContent = `${this.formatPrice(total)} AZN`;
        }

        // Əsər düymələrini yenilə
        static updateArtworkButtons() {
            document.querySelectorAll('.buy-button').forEach(btn => {
                const artworkId = parseInt(btn.getAttribute('data-id'));
                const isInCart = state.cart.some(item => item.id === artworkId);

                if (isInCart) {
                    btn.classList.add('added');
                    btn.innerHTML = '<i class="fas fa-shopping-cart"></i> Səbətdə';
                } else {
                    btn.classList.remove('added');
                    btn.innerHTML = '<i class="fas fa-shopping-cart"></i> Səbətə əlavə et';
                }
            });
        }

        // Filtirlə
        static filterArtists() {
            const searchTerm = elements.searchInput.value.toLowerCase();
            const category = elements.categoryFilter.value;
            const min = elements.minPrice.value ? parseInt(elements.minPrice.value) : 0;
            const max = elements.maxPrice.value ? parseInt(elements.maxPrice.value) : Infinity;
            const sort = elements.sortBy.value;

            // Filtrlə
            state.filteredArtists = artists.filter(artist => {
                const matchesSearch = artist.name.toLowerCase().includes(searchTerm) ||
                    artist.specialty.toLowerCase().includes(searchTerm) ||
                    artist.bio.toLowerCase().includes(searchTerm);

                const matchesCategory = category === 'all' || artist.category === category;

                const avgPrice = artist.artworks.reduce((sum, artwork) => sum + artwork.price, 0) / artist.artworks.length;
                const matchesPrice = avgPrice >= min && avgPrice <= max;

                return matchesSearch && matchesCategory && matchesPrice;
            });

            // Sırala
            this.sortArtists(sort);
            this.loadArtists();
        }

        // Sırala
        static sortArtists(sortType) {
            switch (sortType) {
                case 'price-low':
                    state.filteredArtists.sort((a, b) => {
                        const avgPriceA = a.artworks.reduce((sum, artwork) => sum + artwork.price, 0) / a.artworks.length;
                        const avgPriceB = b.artworks.reduce((sum, artwork) => sum + artwork.price, 0) / b.artworks.length;
                        return avgPriceA - avgPriceB;
                    });
                    break;
                case 'price-high':
                    state.filteredArtists.sort((a, b) => {
                        const avgPriceA = a.artworks.reduce((sum, artwork) => sum + artwork.price, 0) / a.artworks.length;
                        const avgPriceB = b.artworks.reduce((sum, artwork) => sum + artwork.price, 0) / b.artworks.length;
                        return avgPriceB - avgPriceA;
                    });
                    break;
                case 'name':
                    state.filteredArtists.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'newest':
                    state.filteredArtists.sort((a, b) => b.id - a.id);
                    break;
                case 'rating':
                    state.filteredArtists.sort((a, b) => b.rating - a.rating);
                    break;
            }
        }

        // Toast mesajı göstər
        static showToast(message, type = 'info') {
            const toast = elements.toast;
            toast.className = `toast ${type} active`;
            toast.querySelector('.toast-message').textContent = message;

            setTimeout(() => {
                toast.classList.remove('active');
            }, 3000);
        }

        // LocalStorage-a yaz
        static saveToStorage(key, data) {
            localStorage.setItem(key, JSON.stringify(data));
        }

        // Sayğacları yenilə
        static updateFavoritesCount() {
            elements.favoritesCount.textContent = state.favorites.length;
        }

        static updateCartCount() {
            elements.cartCount.textContent = state.cart.length;
        }

        // Səhifənin yuxarısına sürüş
        static scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Event listenerları əlavə et
        static attachArtistEventListeners() {
            document.querySelectorAll('.action-btn.favorite').forEach(btn => {
                btn.addEventListener('click', function (e) {
                    e.stopPropagation();
                    const artistId = parseInt(this.getAttribute('data-id'));
                    ArtGallery.toggleFavorite(artistId, this);
                });
            });
        }

        static attachArtworkEventListeners() {
            document.querySelectorAll('.favorite-button').forEach(btn => {
                btn.addEventListener('click', function () {
                    const artworkId = parseInt(this.getAttribute('data-id'));
                    ArtGallery.toggleFavorite(artworkId, this);
                });
            });

            document.querySelectorAll('.buy-button').forEach(btn => {
                btn.addEventListener('click', function () {
                    const artworkId = parseInt(this.getAttribute('data-id'));
                    const artwork = state.currentArtist.artworks.find(a => a.id === artworkId);
                    ArtGallery.addToCart(artwork, this);
                });
            });
        }

        static attachCartEventListeners() {
            document.querySelectorAll('.remove-item').forEach(btn => {
                btn.addEventListener('click', function () {
                    const itemId = parseInt(this.getAttribute('data-id'));
                    ArtGallery.removeFromCart(itemId);
                });
            });
        }
    }

    // Event listenerlar - daha təşkil edilmiş
    class EventHandlers {
        static init() {
            this.handleNavigation();
            this.handleSearch();
            this.handleCart();
            this.handleMobile();
            this.handleFilters();
        }

        static handleNavigation() {
            // Geri düyməsi
            elements.backButton.addEventListener('click', () => {
                elements.artworksSection.style.display = 'none';
                document.querySelector('.section').style.display = 'block';
                ArtGallery.scrollToTop();
            });

            // Navbar linkləri
            document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
                link.addEventListener('click', function (e) {
                    if (this.getAttribute('href').startsWith('#')) {
                        e.preventDefault();
                        const targetId = this.getAttribute('href');
                        const targetSection = document.querySelector(targetId);
                        if (targetSection) {
                            window.scrollTo({
                                top: targetSection.offsetTop - 80,
                                behavior: 'smooth'
                            });
                        }
                    }
                    elements.mobileMenu.classList.remove('active');
                });
            });

            // Rəssamları kəşf et
            elements.exploreArtists.addEventListener('click', () => {
                document.querySelector('.section').scrollIntoView({ behavior: 'smooth' });
            });
        }

        static handleSearch() {
            // Axtarış panelini aç/bağla
            elements.searchToggle.addEventListener('click', () => {
                state.isFilterOpen = !state.isFilterOpen;
                elements.searchFilter.style.display = state.isFilterOpen ? 'block' : 'none';
            });

            // Axtarış
            elements.searchBtn.addEventListener('click', () => ArtGallery.filterArtists());
            elements.searchInput.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') {
                    ArtGallery.filterArtists();
                }
            });
        }

        static handleFilters() {
            // Filtrləri tətbiq et
            elements.applyFilters.addEventListener('click', () => ArtGallery.filterArtists());

            // Filtrləri sıfırla
            elements.resetFilters.addEventListener('click', () => {
                elements.searchInput.value = '';
                elements.categoryFilter.value = 'all';
                elements.minPrice.value = '';
                elements.maxPrice.value = '';
                elements.sortBy.value = 'default';
                ArtGallery.filterArtists();
                ArtGallery.showToast('Filtrlər sıfırlandı', 'info');
            });
        }

        static handleCart() {
            // Səbəti aç/bağla
            elements.cartBtn.addEventListener('click', () => {
                elements.cartSidebar.classList.add('active');
                elements.overlay.classList.add('active');
            });

            elements.closeCart.addEventListener('click', this.closeCart);
            elements.overlay.addEventListener('click', this.closeCart);
        }

        static closeCart() {
            elements.cartSidebar.classList.remove('active');
            elements.overlay.classList.remove('active');
        }

        static handleMobile() {
            // Mobil menyu
            elements.mobileMenuBtn.addEventListener('click', () => {
                elements.mobileMenu.classList.toggle('active');
            });

            // Overlay klik
            elements.overlay.addEventListener('click', () => {
                elements.mobileMenu.classList.remove('active');
                elements.cartSidebar.classList.remove('active');
                elements.overlay.classList.remove('active');
            });
        }
    }

    // İlkin yüklənmə
    function init() {
        ArtGallery.loadArtists();
        ArtGallery.updateCartCount();
        ArtGallery.updateCartDisplay();
        EventHandlers.init();

        // Saytın yükləndiyini göstər
        setTimeout(() => {
            ArtGallery.showToast('ArtVision-a xoş gəlmisiniz!', 'success');
        }, 1000);
    }

    // App-i başlat
    init();
});
