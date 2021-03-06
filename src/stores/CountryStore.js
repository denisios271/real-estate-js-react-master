import { createSlice } from '@reduxjs/toolkit'

const CountryStore = createSlice({
    name:'CountryStore',
    initialState:{
        HTTP_STATUS_OK:200,
        HTTP_STATUS_CREATED:201,
        HTTP_STATUS_NO_CONTENT:204,
        countries:[],
        selectCountry:null
    },
    reducers:{
        setCountries:(state, action) => {
            state.countries = action.payload
        },
        setSelectCountry:(state, action) => {
            state.selectCountry = action.payload
        }
    }
})

export const {setCountries, setSelectCountry} = CountryStore.actions
export default CountryStore.reducer