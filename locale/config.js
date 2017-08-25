moment.locale('tr', {
    months : 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
    monthsShort : 'Ock_Şub_Mar_Nsn_May_Haz_Tem_Ağu_Eyl_Ekm_Kas_Ara'.split('_'),
    weekdays : 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
    weekdaysShort : 'Pzr_Pzrt_Sal_Çar_Per_Cum_Cts'.split('_'),
    weekdaysMin : 'Pz_Pt_Sl_Çr_Pr_Cu_Ct'.split('_'),
    longDateFormat : {
        LT : 'HH.mm',
        LTS : 'HH.mm.ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY [saat] HH.mm',
        LLLL : 'dddd, D MMMM YYYY [saat] HH.mm'
    },
    meridiemParse: /sabah|öğlen|akşam|gece/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'sabah') {
            return hour;
        } else if (meridiem === 'öğlen') {
            return hour >= 11 ? hour : hour + 12;
        } else if (meridiem === 'akşam' || meridiem === 'gece') {
            return hour + 12;
        }
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours < 11) {
            return 'sabah';
        } else if (hours < 15) {
            return 'öğlen';
        } else if (hours < 19) {
            return 'akşam';
        } else {
            return 'gece';
        }
    },
    calendar : {
        sameDay : '[Bugün] LT',
        nextDay : '[Yarın] LT',
        nextWeek : 'dddd [saat] LT',
        lastDay : '[dün] LT',
        lastWeek : 'dddd [sonra] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s içinde',
        past : '%s önce',
        s : 'bir kaç saniye',
        m : '1 dakika',
        mm : '%d dakika',
        h : '1 saat',
        hh : '%d saat',
        d : '1 gün',
        dd : '%d gün',
        M : 'ay',
        MM : '%d ay',
        y : 'yıl',
        yy : '%d yıl'
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});