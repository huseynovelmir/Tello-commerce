import {configureStore} from "@reduxjs/toolkit"
// import detailreducer from "./Reducer/detailreducer"
import Fetchreducer from "./Reducer/Fetchreducer"
import detailreducer from "./Reducer/detailreducer"
import categoriesreducer from "./Reducer/categoriesreducer"
import Phonesreducer from "./Reducer/Phonesreducer"
import Allwatchreducer from "./Reducer/Allwatchreducer"
import Samsungreducer from "./Reducer/Samsungreducer"
import Applereducer from "./Reducer/Applereducer"
import Xiomioreducer from "./Reducer/Xiaomireducer"
import honorreducer from "./Reducer/honorreducer"
import notfoundreducer from "./Reducer/notfoundreducer"
import Qulaqciqreducer from "./Reducer/Qulaqciqreducer"
import AllJblreducer from "./Reducer/AllJblreducer"
import Allbeatsreducer from "./Reducer/Allbeatsreducer"
import Allsonyreducer from "./Reducer/Allsonyreducer"
import Allqcyreducer from "./Reducer/Allqcyreducer"
import applewatchreducer from "./Reducer/applewatchreducer"
import Allsamsungwatchreducer from "./Reducer/Allsamsungwatchreducer"
import AllBandreducer from "./Reducer/AllBandreducer"
import AllAirtagreducer from "./Reducer/AllAirtagreducer"
import searchReducer from "./Reducer/searchReducer"
import Basketreducer from "./Reducer/Basketreducer"

export const store = configureStore({
    reducer: {
        products: Fetchreducer,
        detail: detailreducer,
        categories: categoriesreducer,
        allphones: Phonesreducer,
        allwatch: Allwatchreducer,
        allsamsung: Samsungreducer,
        alliphone: Applereducer,
        allxiomio: Xiomioreducer,
        allhonor: honorreducer,
        allelement: notfoundreducer,
        allqulaqciq: Qulaqciqreducer,
        alljbl :AllJblreducer,
       Allbeats: Allbeatsreducer,
       Allsony: Allsonyreducer,
       allqcy: Allqcyreducer,
       Allapplewatch: applewatchreducer,
       allsamsungwatch: Allsamsungwatchreducer,
       Allband: AllBandreducer,
       AllAirtag: AllAirtagreducer,
       search: searchReducer,
       Basket: Basketreducer,

    }
})