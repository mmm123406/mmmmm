var config = {
    style: 'mapbox://styles/ilkerksa/clz260lsn00k501r2fw05aara',
    accessToken: 'pk.eyJ1IjoiaWxrZXJrc2EiLCJhIjoiY2x5cjVwODhmMDJscDJpczZ3M2NnNGcydCJ9.1zVupR_cTSWgFEYD0830dg',
    showMarkers: true,
    markerColor: '#006600',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Tuzlu Köyün Kızı',
    subtitle: 'Tacikistandan İstanbula uzanan bir hikaye.',
    byline: 'Kızından',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Tuzlu Köy: Mehrabad',
            image: 'https://live.staticflickr.com/65535/53881752004_9ba69e9292_b.jpg',
            description: 'Mehrabad, Tacikistanın kuzey bölgesinde, yakınlarındaki tuz madeninden dolayı havası, suyu, toprağı tuzlu olan bir köy. Bu köydeki evler karakteristik olarak ahşap ve topraktan yapılmış olup, genelde geniş bahçeleri bulunmakta. Yerel halk bu bahçelerde ağırlıklı olarak üzüm, ceviz, kayısı, incir türevi ağaçlar yetiştiriyor. Hikayemizin ana kahramanı olan annem Maşhura, 1975 yılında bu köyde dünyaya geldi. Kendisi 5 kardeşin en büyüğü olarak Sosyalist Sovyet döneminin Tacikistanın’da doğdu.',
            location: {
                center: [69.50065, 40.16743],
                zoom: 16,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Lise Çağı: Shaydon',
            image: 'https://live.staticflickr.com/65535/53880513252_ec515ed139_b.jpg',
            description: '11 sene süren ilk ve ortaöğretimini Mehrabad yakınlarında bir kasaba olan Shaydonda aldı ve üstün başarılarından dolayı altın madalyayla tamamladı. Bu edindiği madalya, ona Tacikistan’da istediği üniversitenin istediği bölümüne sınavsız girme hakkı verdi.',
            location: {
                center: [70.35971, 40.66020],
                zoom: 16,
                pitch: 45,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Gençlik Yılları: Hojend',
            image: 'https://live.staticflickr.com/65535/53881648743_f6a92f0c60_b.jpg',
            description: 'Önündeki tüm imkan çeşitliliğine rağmen tarih öğretmeni olan annesinin izinden gitmek istediğine karar verdi ve Hojend Devlet Üniversitesinin Filoloji bölümünde öğrenim görmeye başladı. Yaşadığı ülkenin ve ailesinin kültürel çeşitliliği dolayısıyla edebiyata ergenlik yıllarından beri derin bir ilgisi vardı. Bu gibi nedenlerden ötürü şu anda da hala salonundaki kütüphanesinde bulunan ciltlerce gazel kitaplarının üzerinde çalışmakta ve yüzlerce sayfa makaleler hazırlamakta hiç zorlanmadı.  Bu okuldaki eğitimini de Sovyetlerde en yüksek diploma olan Kırmızı Diploma ile taçlandırdı.',
            location: {
                center: [69.64043, 40.27427],
                zoom: 16,
                pitch: 45,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: ' Soğuk Memleket: Moskova',
            image: 'https://live.staticflickr.com/65535/53881830690_ddba73b415_b.jpg',
            description: 'Henüz genç ve idealleri olan Maşhura, Tacikstanda okuduğu üniversitede eğitimini tamamladıktan sonra akademik anlamda daha fazla yükselmek istedi. Cesur bir karar alarak master eğitimi almak için Moskovaya taşındı. Sovyet ülkesinde büyüdüğü için dile ve kültüre büyük ölçüce hakim olmasına rağmen Moskova serüveni, şehrin dondurucu havası ve bir o kadar soğuk insanlarına rahat adapte olamaması sebebiyle bir kaç aydan fazla uzun sürmedi.',
            location: {
                center: [37.61796, 55.75306],
                zoom: 16,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Yepyeni Bir Kültür: Ankara',
            image: 'https://live.staticflickr.com/65535/53881412006_e5327a5725_b.jpg',
            description: 'Moskovayı bir türlü benimseyemedikten sonra adeta filmlerdeki gibi ani bir kararla ilk kalkan trene atlayarak Sofya üzerinden Ankara’ya geldi. Burası onun için yepyeni bir ülke, bilmediği bir dil demekti. Her şey ona yabancıydı. Bu yüzden ilk yaptığı şey kendisine tamamen yabancı bir dil olan Türkçeyi öğrenmek için Ankaranın pek meşhur olan dil okulu TÖMERe başlamak oldu. Geçmişte kendi imkanlarıyla öğrendiği Arapça ve İngilizce dillerine hali hazırda hakimiyeti vardı. Tacik diline çok benzediğinden ve edebiyata olan ilgisinden Farsça da konuşabiliyordu. Dillere olan bu yatkınlığından dolayı akıcı Türkçe konuşmaya başlamak onu çok zorlamadı.',
            location: {
                center:[32.86069, 39.90579],
                zoom: 16,
                pitch: 45,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Evlilik: Gölbaşı',
            image: '',
            description: 'Aynı dönemde Hacettepe Üniversitesinde Kimya Öğretmenliği okuyan Türk bir gençle tanışması hayatının seyrini tamamen değiştirdi. İkili beraberliklerini kısa zamanda evlilikle taçlandırdı. Artık yirmilerinin ortalarında olan Maşhura, hayat koşturmacasına kapılmış master yapmayı şimdilik rafa kaldırmıştı. Dil avantajını kullanarak büyükelçi asistanlığından avukat asistanlığına varan farklı çeşitliliklerde işler yaptı. Asistanlığını yaptığı avukatın ona tüm yazışmalarını ve evrak işlerini yaptırması, ona bugünkü akıcı Türkçesini kazandıran ana etken oldu.',
            location: {
                center:[32.86187, 39.93283],
                zoom: 16,
                pitch: 45,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Kariyer Adımları: Ankara Sanayisi',
            image: 'https://live.staticflickr.com/65535/53881412041_18050570f5_b.jpg',
            description: 'Sene 1999u gösterdiğinde genç Maşhura, sıfırdan kurduğu bağlantıları ve dil-iletişim becerileriyle Ankara OSTİM sanayi sitesinde çeşitli fabrikalarda çalışarak ihracat departmanındaki kariyerine sağlam bir adım attı.',
            location: {
                center:[32.74569, 39.97376],
                zoom: 16,
                pitch: 45,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sjeventh-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Dünyaya Bir Bebek Getirmek: Çankaya',
            image: 'https://live.staticflickr.com/65535/53881752024_e3ed016fd8_b.jpg',
            description: 'Yirmilerinin sonlarına geldiğinde bir kız çocuğu dünyaya getirdi. Kendisine tamamen yabancı olan bu ülkede yepyeni bir ailesi oldu.',
            location: {
                center:[32.84066, 39.87523],
                zoom: 16,
                pitch: 45,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seveknth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Son Durak: İstanbul',
            image: 'https://live.staticflickr.com/65535/53881830570_843c9039fb_b.jpg',
            description: 'Eşiyle evliliği kısa sürünce üç yaşındaki küçük kızını da yanına alarak İstanbul’da tamamen sıfırdan yeni bir hayat kurdu. Geldiği şehirde yabancı dil, yüksel iletişim kurma becerileri ve Ankara’da edindiği tecrübeler sayesinde çeşitli fabrikaların dış ticaret departmanlarında  yönetici olarak çalışırken  40’tan fazla ülke gezdi. Gittiği her ülkeden döndüğünde üzerindeki bozuk paralarla kızıyla beraber geniş çeşitliliği olan bir para koleksiyonu yaptılar. Daha sonra kendi ihracat firmasını kurarak faaliyetlerine devam etti.  Bir yandan kızını yetiştirirken bir yandan Tacikistandaki ailesini desteklemeye devam etti.',
            location: {
                center:[28.79025, 41.09939],
                zoom: 16,
                pitch: 45,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seoventh-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Günümüz: Libya',
            image: 'https://live.staticflickr.com/65535/53881412126_2fe8632692_b.jpg',
            description: 'Maşhura Abduvalieva, İstanbulda sıfırdan tek başına kurduğu hayatı bugün hala muhafaza etmeyi başarıyor. Şu an bu sunum yapılırken kendisi Libya’da bir iş seyahatinde. Hala master yapmadı, hala müziği ve edebiyatı çok seviyor, hala bildiği dillerin çeşitliliğiyle insanları şaşırtıyor, hala kızını okula bırakıp almaya devam ediyor ve en önemlisi hala hayat mücadelesine tüm enerjisi ve yüzünde kocaman gülümsemesiyle devam ediyor. Evinin salonu ise gençlik yıllarından bugüne edindiği kalın kitaplarla dolu.',
            location: {
                center:[15.09077, 32.37633],
                zoom: 16,
                pitch: 45,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
