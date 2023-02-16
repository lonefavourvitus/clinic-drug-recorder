// import { writable } from 'svelte/store'


import { writable } from 'svelte/store'

export const drugStorem = writable([
    [['GSK ANTACID SUSPENSION'], ['gsk'], []],
    [['HYDRAC P'], ['hydrac'], []],
    [['COUGH EXPECTORANT'], ['cough'], []],
    [['LUMEFANTRINE 500MG'], ['lume'], []],
    [['WINART FORTE1'], ['win1'], []],
    [['WINART FORTE2'], ['win2'], []],
    [['WINART FORTE3'], ['win3'], []],
    [['WINART FORTE4'], ['win4'], []],
    [['WINART FORTE5'], ['win5'], []],
    [['WINART FORTE6'], ['win6'], []],
    [['WINART FORTE7'], ['win7'], []],
])

export const drugs = writable([
    ['gsk', 'gsk', 'gsk antacid suspension', 500],
    ['hydrac', 'hy', 'Hydrac P', 300],
    ['cough', 'co', 'coughy', 900],
    ['lume', 'emt', 'lumefantrine', 700],
    ['winart1', 'win1', 'winart forte1', 400],
    ['winart2', 'win2', 'winart forte2', 400],
    ['winart3', 'win3', 'winart forte3', 400],
    ['winart4', 'win4', 'winart forte4', 400],
    ['winart5', 'win5', 'winart forte5', 400],
    ['winart6', 'win6', 'winart forte6', 400],
    ['winart7', 'win7', 'winart forte7', 400],
]);

// export const drugStore = writable([])
// export const drugStore_hydracP = writable([])
// export const drugStore_jawasil = writable([])
// export const drugStore_emtrisil = writable([])
// export const newone = writable([])
// export const drugStore = writable({ brandTitle: '', drugs: ['gsk'] })
// export const drugStore_hydracP = writable({ brandTitle: 'Hydrac-P', drugs: [] })
// export const drugStore_jawasil = writable({ brandTitle: 'Jawasil', drugs: [] })
// export const drugStore_emtrisil = writable({ brandTitle: 'Emtrisil', drugs: [] })
// export const newone = writable({ brandTitle: '', drugs: [] })

// console.log(drugStore)


// export const drugStore = writable([{ title: "DrugStore" }])
// export const drugStore_hydracP = writable([{ title: "HydracP" }])
// export const drugStore_jawasil = writable([{ title: "Jawasil" }])
// export const drugStore_emtrisil = writable([{ title: "Emtrisil" }])
// export const newone = writable([{ title: "NewOne" }])
// export const ll = [
//     { drugStore: 'pp' }
// ]
// import { writable } from 'svelte/store'


// export const drugStore = writable([{ title: 'Drug Store', drugs: [] }])
// export const drugStore_hydracP = writable([{ title: 'Hydrac-P', drugs: [] }])
// export const drugStore_jawasil = writable([{ title: 'Jawasil', drugs: [] }])
// export const drugStore_emtrisil = writable([{ title: 'Emtrisil', drugs: [] }])
// export const newone = writable([{ title: 'New One', drugs: [] }])

// export const allDrugStores = writable([
//     drugStore = writable([]),
//     drugStore_hydracP = writable([]),
//     drugStore_jawasil = writable([]),
//     drugStore_emtrisil = writable([]),
//     newone = writable([]),
// ]);

// export { drugStore, drugStore_hydracP, drugStore_jawasil, drugStore_emtrisil, newone }

    // {
    //     id: 20,
    //     drugName: 'emtrisil',
    //     price: 800
    // }
