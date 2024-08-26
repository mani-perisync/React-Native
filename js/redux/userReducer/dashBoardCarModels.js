import { createSlice } from "@reduxjs/toolkit";
import { CarModelsJson } from "../../constants/CarModelsJson";

const dashBoardCarModels = createSlice({
    name: "dashBoardCarReducer",
    initialState: {
        dashBoardCarModels: CarModelsJson,
        wishlist : []
    },
    reducers: {
        setDashBoardCarModels(state, action) {
            state.dashBoardCarModels = action.payload; 
        },
        toggleFavorite(state,action){
            const { Product_Id } = action.payload; 

            const carProduct = state.dashBoardCarModels.findIndex((car) => car.Product_Id === Product_Id);
        
            if (carProduct !== -1) {
            const carModel = state.dashBoardCarModels[carProduct];
            carModel.favorite = !carModel.favorite;

            if(carModel.favorite){
                if(!state.wishlist){
                    state.wishlist = [];
                }
                state.wishlist.push(carModel)
            }else{
                state.wishlist = state.wishlist.filter((car) => car.Product_Id !== Product_Id)
            }
            }
        }

        

    }
});

export const { setDashBoardCarModels,toggleFavorite } = dashBoardCarModels.actions;
export const dashBoardCarReducer = dashBoardCarModels.reducer;