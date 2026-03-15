// Cara menambah kategori baru:
// 1. Tambahkan key baru (misal: 'zakat') di dalam objek categories.
// 2. Isi title (judul yang muncul di home dan breadcrumb).
// 3. topics adalah array of objects, masing-masing punya:
//    - id: unik dalam kategori
//    - title: judul topik
//    - content: teks penjelasan dengan format khusus:
//        * ((teks tombol)) → akan menjadi tombol yang memunculkan modal kitab
//        * **teks** → teks akan diberi latar kuning tipis
//        * !!teks catatan!! → teks catatan (akan jadi miring dengan border kiri)
//    - tags: array of objects untuk setiap tombol yang ada di content. Setiap objek punya:
//        * tag: teks tombol (harus sama persis dengan yang ada di content, tanpa kurung)
//        * header: judul yang muncul di modal kitab (misal: "Minhajut Thalibin, Hlm 54 Jld 2")
//        * kitab: isi teks arab dengan gaya teks arab amiri dan ketik dengan keyboard arab

const categories = {
    hadats: {
        title: "Bab Hadats",
        topics: [
            {
                id: "macam-macam-najis",
                title: "Macam Macam Najis",
                content: `
                `,
                tags: [
                    {
                        tag: "",
                        header: "",
                        kitab: `
                            <p dir="rtl" style="font-family: 'Amiri', serif; font-size: 1.2rem;"></p>
                        `
                    }
                ]
            }
        ]
    },
    haid: {
        title: "Bab Haid",
        topics: [
            {
                id: "weruh-darah-pemula",
                title: "Pemula Sudah Tau Darah",
                content: `
                `,
                tags: [
                    {
                        tag: "",
                        header: "",
                        kitab: `
                            <p dir="rtl" style="font-family: 'Amiri', serif; font-size: 1.2rem;"></p>
                        `
                    }
                ]
            }
        ]
    },
    nifas: {
        title: "Bab Nifas",
        topics: [
            {
                id: "masa-sebentar-nifas",
                title: "Masa Sebentarnya Nifas",
                content: `
                `,
                tags: [
                    {
                        tag: "",
                        header: "",
                        kitab: `
                            <p dir="rtl" style="font-family: 'Amiri', serif; font-size: 1.2rem;"></p>
                        `
                    }
                ]
            }
        ]
    },
    toharoh: {
        title: "Bab Toharoh",
        topics: [
            {
                id: "toharoh-mutawasitoh",
                title: "Cara Membersihkan Madats Kecil",
                content: `
                `,
                tags: [
                    {
                        tag: "",
                        header: "",
                        kitab: `
                            <p dir="rtl" style="font-family: 'Amiri', serif; font-size: 1.2rem;"></p>
                        `
                    }
                ]
            }
        ]
    },
    wudhu: {
        title: "Bab Wudhu",
        topics: [
            {
                id: "syarat-wudhu",
                title: "Syarat Wudhu",
                content: `
                `,
                tags: [
                    {
                        tag: "",
                        header: "",
                        kitab: `
                            <p dir="rtl" style="font-family: 'Amiri', serif; font-size: 1.2rem;"></p>
                        `
                    }
                ]
            }
        ]
    },
    tayamum: {
        title: "Bab Tayamum",
        topics: [
            {
                id: "syarat-tayamum",
                title: "Syarat Tayamum",
                content: `
                `,
                tags: [
                    {
                        tag: "",
                        header: "",
                        kitab: `
                            <p dir="rtl" style="font-family: 'Amiri', serif; font-size: 1.2rem;"></p>
                        `
                    }
                ]
            }
        ]
    },
    sholat: {
        title: "Bab Sholat",
        topics: [
            {
                id: "rukun-sholat",
                title: "Rukun Sholat",
                content: `
                    <p>Rukun sholat adalah hal-hal yang harus dilakukan dalam sholat. Jika salah satu rukun ditinggalkan, sholat tidak sah.</p>
                    <p>Rukun sholat antara lain: niat, takbiratul ihram, berdiri bagi yang mampu, membaca Al-Fatihah, ((Lihat Hlm 54 Jld 1)) ruku', i'tidal, sujud, duduk di antara dua sujud, duduk tasyahud akhir, membaca shalawat, salam, dan tertib. ((Lihat Hlm 32)) **catatan penting: jangan sampai tertukar urutan.**</p>
                    !!<strong>Catatan:</strong> masih dalam tahap pengembangan.!!
                `,
                tags: [
                    {
                        tag: "Lihat Hlm 54 Jld 1",
                        header: "Minhajut Thalibin, Hlm 54 Jld 1 Bab Sholat",
                        kitab: `
                            <p dir="rtl" style="font-family: 'Amiri', serif; font-size: 1.4rem; line-height: 2;">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
                            <p dir="rtl" style="font-family: 'Amiri', serif; font-size: 1.2rem;">وَالصَّلَاةُ وَالسَّلَامُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ أَجْمَعِينَ. (هذا نص مثال للكتاب)</p>
                            <p dir="rtl" style="font-family: 'Amiri', serif; font-size: 1.2rem;">فَصْلٌ فِي أَرْكَانِ الصَّلَاةِ: أَرْكَانُ الصَّلَاةِ سَبْعَةَ عَشَرَ رُكْنًا</p>
                        `
                    },
                    {
                        tag: "Lihat Hlm 32",
                        header: "Fathul Qorib",
                        kitab: `
                            <p dir="rtl" style="font-family: 'Amiri', serif; font-size: 1.2rem;">وَالصَّلَاةُ وَالسَّلَامُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ أَجْمَعِينَ. (هذا نص مثال للكتاب)</p>
                            <p dir="rtl" style="font-family: 'Amiri', serif; font-size: 1.2rem;">فَصْلٌ فِي أَرْكَانِ الصَّلَاةِ: أَرْكَانُ الصَّلَاةِ سَبْعَةَ عَشَرَ رُكْنًا</p>
                        `
                    }
                ]
            }/*,
            {
                id: "syarat",
                title: "Syarat Sah Sholat",
                content: `
                    <p>Syarat sah sholat adalah hal-hal yang harus dipenuhi sebelum dan saat sholat. Jika tidak terpenuhi, sholat tidak sah.</p>
                    <p>Contoh: suci dari hadas, menutup aurat, menghadap kiblat, masuk waktu, dan ((Lihat Hlm 30 Jld 1)) lain-lain.</p>
                `,
                tags: [
                    {
                        tag: "Lihat Hlm 30 Jld 1",
                        header: "Fathul Qarib, Hlm 30 Jld 1",
                        kitab: `
                            <p dir="rtl" style="font-family: 'Amiri', serif; font-size: 1.2rem;">(مَتْنُ أَبِي شُجَاعٍ) بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
                            <p dir="rtl" style="font-family: 'Amiri', serif; font-size: 1.2rem;">كِتَابُ الصَّلَاةِ: فَصْلٌ فِي شُرُوطِ الصَّلَاةِ: شُرُوطُ الصَّلَاةِ قَبْلَ الدُّخُولِ فِيهَا ...</p>
                        `
                    }
                ]
            },
            {
                id: "batal",
                title: "Pembatalan Sholat",
                content: `
                    <p>Hal-hal yang membatalkan sholat: berbicara dengan sengaja, makan/minum, bergerak banyak, hadas, dan lain-lain.</p>
                `,
                tags: []
            }*/
        ]
    },
    puasa: {
        title: "Bab Puasa",
        topics: [
            {
                id: "syarat-puasa",
                title: "Syarat Puasa",
                content: `
                `,
                tags: [
                    {
                        tag: "",
                        header: "",
                        kitab: `
                            <p dir="rtl" style="font-family: 'Amiri', serif; font-size: 1.2rem;"></p>
                        `
                    }
                ]
            }
        ]
    },
    zakat: {
        title: "Bab Zakat",
        topics: [
            {
                id: "syarat-zakat",
                title: "Syarat Zakat",
                content: `
                `,
                tags: [
                    {
                        tag: "",
                        header: "",
                        kitab: `
                            <p dir="rtl" style="font-family: 'Amiri', serif; font-size: 1.2rem;"></p>
                        `
                    }
                ]
            }
        ]
    },
    haji: {
        title: "Bab Haji",
        topics: [
            {
                id: "syarat-haji",
                title: "Syarat haji",
                content: `
                `,
                tags: [
                    {
                        tag: "",
                        header: "",
                        kitab: `
                            <p dir="rtl" style="font-family: 'Amiri', serif; font-size: 1.2rem;"></p>
                        `
                    }
                ]
            }
        ]
    },
    bisnis: {
        title: "Bab Jual Beli",
        topics: [
            {
                id: "syarat-jual-beli",
                title: "Syarat Jual Beli",
                content: `
                `,
                tags: [
                    {
                        tag: "",
                        header: "",
                        kitab: `
                            <p dir="rtl" style="font-family: 'Amiri', serif; font-size: 1.2rem;"></p>
                        `
                    }
                ]
            }
        ]
    }
};
