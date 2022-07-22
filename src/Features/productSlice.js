import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'


const initialState={
    items:[],
    status:null
}

const productsFech=createAsyncThunk(
    "products/productsFech"
)
const productsSlice=createSlice({
    name:'products',
    initialState,
    reducers:{}

})

export default productsSlice.reducer