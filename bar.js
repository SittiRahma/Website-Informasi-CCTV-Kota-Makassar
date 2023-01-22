var jl_abdulkadir = [], jl_adhysirua = [], jl_adhypengayoman = [], jl_alauddintalasalapang = [], jl_amirullah = [], jl_andalastentara = [],
jl_bajigau = [], jl_banksampah = [], jl_barukang = [], jl_baskotalauddin = [], jl_batuaborongtoddopuli = [], jl_bawakaraenglatimojong = [],
jl_bawakaraengveteran = [], jl_botosawer = [], jl_cakpan = [], jl_datulama = [], jl_tatahaji = [], jl_flyover = [], jl_gabdin = [], 
jl_gatepel = [], jl_baucen = [], jl_baurat = [], jl_baurajpen = [], jl_kakat = []  

async function dummyChart(){
    await getDummyData()
    const ctx = document.getElementById('myChart');

    const data = {
        labels: ['08.00-10.00', '10.00-12.00', '12.00-14.00', '14.00-16.00', '16.00-18.00', '18.00-20.00', '20.00-22.00', '22.00-00.00', '00.00-02.00', '02.00-04.00', '04.00-06.00', '06.00-08.00'],
        datasets: [{
                label: 'Abdul Kadir',
                backgroundColor : 'red',
                data: jl_abdulkadir,
                borderWidth: 1
            }]
    };
    // config
    const config = {
        type: 'bar',
        data: data,
        options: {
            plugins:{
                legend:{
                    position : 'left',
                    maxHeight : 1500,
                    labels: {
                        boxWidth : 0,
                        boxHeight : 0,
                        color : 'black',
                        font : 'Montserrat',
                        padding : 10,
                        useBorderRadius : true,
                        border : 20
                    }
                },
            },
            scales: {
                x: {
                    grid : {
                        display : false
                    }
                },
                y: {
                    grid : {
                        display : false
                    },
                    beginAtZero: true
                }
            },
            tooltips: {
                mode : 'index'
            }
        }
    };

   let myChart = new Chart(
        ctx, config
    );  
    
}

async function dummyChart2(){
    await getDummyData()
    const ctx = document.getElementById('myChart2');

    const data2 = {
        labels: ['08.00-10.00', '10.00-12.00', '12.00-14.00', '14.00-16.00', '16.00-18.00', '18.00-20.00', '20.00-22.00', '22.00-00.00', '00.00-02.00', '02.00-04.00', '04.00-06.00', '06.00-08.00'],
        datasets: [{
                label: 'Adhyaksa-Dg.Sirua',
                backgroundColor : 'blue',
                data: jl_adhysirua,
                borderWidth: 1
            }]
    };

    // config
    const config2 = {
        type: 'bar',
        data: data2,
        options: {
            plugins:{
                legend:{
                    position : 'left',
                    maxHeight : 1500,
                    labels: {
                        boxWidth : 0,
                        boxHeight : 0,
                        color : 'black',
                        font : 'Montserrat',
                        padding : 10,
                        useBorderRadius : true,
                        border : 20
                    }
                },
            },
            scales: {
                x: {
                    grid : {
                        display : false
                    }
                },
                y: {
                    grid : {
                        display : false
                    },
                    beginAtZero: true
                }
            },
            tooltips: {
                mode : 'index'
            }
        }
    };

   let myChart = new Chart(
        ctx, config2
    );  
    
}

// fungsi untuk memanggil dummy
dummyChart()
dummyChart2()

function renderChart(type){
    const selectChart1 = document.querySelector(".abdul-kadir");
    const selectChart2 = document.querySelector(".adhyaksa");
    
    if(type.value === 'abdul-kadir'){
        dummyChart()
    }else if(type.value === 'abdul-kadir'){
        dummyChart2()
    }
}

// Fetch Data dari API
async function getDummyData(){
    const apiUrl = 'https://script.google.com/macros/s/AKfycbyG5kW0IgI54gDK6iGRA_V_xk7r5b2Scm3_q1BGc6qE94k1CbU_yP1fmFDADVUDcjYN3A/exec?action=getUsers';

    const response = await fetch(apiUrl)
    const barChartData = await response.json()
    let chartJlKadir = []
    let tanggalJlKadir = []
    let DataJlKadir = []
    barChartData.map(item =>{
        tanggalJlKadir.push(item.tanggal);
        DataJlKadir.push(item.abdul_kadir);

        chartJlKadir.push()
    })

    const Tanggal = barChartData.kemacetan.map( (x) => x.Tanggal)
    const Waktu = barChartData.kemacetan.map( (x) => x.Waktu)
    const TotalKemacetan = barChartData.kemacetan.map( (x) => x.Total)
    const AbdulKadir = barChartData.kemacetan.map( (x) => x.abdul_kadir)
    const AdhyaksaSirua = barChartData.kemacetan.map( (x) => x.adhyaksa_sirua)
    const AdhyaksaPengayoman = barChartData.kemacetan.map( (x) => x.adhyaksa_pengayoman)
    const AlauddinTalasalapang = barChartData.kemacetan.map( (x) => x.alauddin_talasalapang)
    const Amirullah = barChartData.kemacetan.map( (x) => x.amirullah)
    const AndalasTentaraPelajar = barChartData.kemacetan.map( (x) => x.andalas_tentara_pelajar)
    const BajiGau = barChartData.kemacetan.map( (x) => x.baji_gau)
    const BankSampahTangkasarong = barChartData.kemacetan.map( (x) => x.bank_sampah_tangkasarong)
    const Barukang = barChartData.kemacetan.map( (x) => x.barukang)
    const BatasKotaAlauddin = barChartData.kemacetan.map( (x) => x.batas_kota_alauddin)
    const BatuaBorongToddopuli = barChartData.kemacetan.map( (x) => x.batua_borong_toddopuli)
    const BawakaraengLatimojong = barChartData.kemacetan.map( (x) => x.bawakaraeng_latimojong)
    const BawakaraengVeteran = barChartData.kemacetan.map( (x) => x.bawakaraeng_veteran)
    const BotolempanganSawerigading = barChartData.kemacetan.map( (x) => x.botolempangan_sawerigading)
    const CakalangPanampu = barChartData.kemacetan.map( (x) => x.cakalang_panampu)
    const DatumusengLamadukelleng = barChartData.kemacetan.map( (x) => x.datumuseng_lamadukelleng)
    const DgTataRSHaji = barChartData.kemacetan.map( (x) => x.dgtata_rshaji)
    const Flyover = barChartData.kemacetan.map( (x) => x.flyover)
    const GabunganDinasDalamBapenda = barChartData.kemacetan.map( (x) => x.gabungan_dinas_dalam_bapenda)
    const GateIPelindo = barChartData.kemacetan.map( (x) => x.gate_i_pelindo)
    const HajiBauCendrawasih = barChartData.kemacetan.map( (x) => x.haji_bau_cendrawasih)
    const HajiBauRatulangi = barChartData.kemacetan.map( (x) => x.haji_bau_ratulangi)
    const HajiBaukRajawaliPenghibur = barChartData.kemacetan.map( (x) => x.haji_bau_rajawali_penghibur)
    const KajaolaliddoKatedral = barChartData.kemacetan.map( (x) => x.kajaolaliddo_katedral)
    
    jl_abdulkadir = AbdulKadir
    console.log(jl_abdulkadir)
  
    jl_adhypengayoman = AdhyaksaPengayoman
    jl_adhysirua = AdhyaksaSirua
    jl_alauddintalasalapang = AlauddinTalasalapang
    jl_amirullah = Amirullah
    jl_andalastentara = AndalasTentaraPelajar
    jl_bajigau = BajiGau
    jl_banksampah = BankSampahTangkasarong
    jl_barukang = Barukang
    jl_baskotalauddin = BatasKotaAlauddin
    jl_batuaborongtoddopuli = BatuaBorongToddopuli
    jl_bawakaraenglatimojong = BawakaraengLatimojong
    jl_bawakaraengveteran = BawakaraengVeteran
    jl_botosawer = BotolempanganSawerigading
    jl_cakpan = CakalangPanampu
    jl_datulama = DatumusengLamadukelleng
    jl_tatahaji = DgTataRSHaji
    jl_flyover = Flyover
    jl_gabdin = GabunganDinasDalamBapenda
    jl_gatepel = GateIPelindo
    jl_baucen = HajiBauCendrawasih
    jl_baurat = HajiBauRatulangi
    jl_baurajpen = HajiBaukRajawaliPenghibur
    jl_kakat = KajaolaliddoKatedral
    
}


