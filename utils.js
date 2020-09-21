var periods={
    mon:{
        first:"spm",
        second:"pom",
        third:"cc",
        fourth:"hci",
        fifth:"hm",
        sixth:'pom'
    },
    tue:{
        first:'pom',
        second:'cc',
        third:'hci',
        fourth:'cns',
        fifth:'hci',
        sixth:'spm'
    },
    wed:{
        first:'hm',
        second:'cns',
        third:'spm',
        fourth:'cc',
        fifth:'hci',
        sixth:'cns',
    },
    thu:{
        first:'hci',
        second:'spm',
        third:'pom',
        fourth:'hm',
        fifth:'cc',
        sixth:'cns',
    },
    fri:{
        first:'cns',
        second:'hci',
        third:'hm',
        fourth:'pom',
        fifth:'spm',
        sixth:'cc',
    },
    sat:{
        first:'cc',
        second:'hm',
        third:'cns',
        fourth:'spm',
        fifth:'hm',
        sixth:'pom',
    },
}

var info={
    dept:"Information Technology",
    section:"A",
    semester:"VII"

}
var lookup={
    hci:{
        staff:"Dr Vincent Antony Kumar",
        google_meet:"https://meet.google.com/hby-rirj-kje?pli=1&authuser=1",
        
    },
    spm:{
        staff:"Sudha R",
        google_meet:"https://meet.google.com/qiq-urvu-hag?pli=1&authuser=1 ",
        
    },
    hm:{
        staff:"Dr Pavalarajan",
        google_meet:"https://meet.google.com/gbs-phos-sqm?pli=1&authuser=1",
    },
    pom:{
        staff:"Dr.P.S.Venkateswaran",
        google_meet:"https://meet.google.com/lookup/a5qatmall3?pli=1&authuser=1",
    }, 
    cns:{
        staff:"A.Sangeetha",
        google_meet:"https://meet.google.com/pkd-ffqf-pwa?pli=1&authuser=1",
    },
    cc:{
        staff:"Dr.K.Muthumayil",
        google_meet:"https://meet.google.com/ybb-vqrw-urm?pli=1&authuser=1",
    }
}
var timings={
    first:'9.30-10.20',
    second:'10.20-11.10',
    third:'11.30-12.20',
    fourth:'12.20-1.10',
    fifth:'2.00-2.50',
    sixth:'2.50-3.40',
}

function getDay(){
   var dateObj=new Date();
   var weekday = ['Sun',
               'Mon',
               'Tue',
               'Wed',
               'Thu',
               'Fri',
               'Sat']
    return weekday[dateObj.getDay()].toLowerCase()

}
