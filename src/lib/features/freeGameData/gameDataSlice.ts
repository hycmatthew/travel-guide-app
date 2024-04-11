import { EpicGameDataAPI } from "@/utils/HttpHelper";
import { createAppSlice } from "../../createAppSlice";
import FreeGameType from "@/app/constant/gameTypes/FreeGameType";

export interface gameDataSliceState {
    status: string,
    freeGameList: FreeGameType[]
}

const initialState: gameDataSliceState = {
    status: 'idle',
    freeGameList: [],
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const gameDataSlice = createAppSlice({
  name: "freeGameData",
  initialState,
  reducers: (create) => ({
    freeGameDataAsyn: create.asyncThunk(
      async (_: void) => {
        const response = await EpicGameDataAPI.get('/epicGame.json')
        return response
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          state.status = "idle";
          state.freeGameList = action.payload;
        },
        rejected: (state) => {
          state.status = "failed";
        },
      },
      
    ),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectFreeGameDataList: (data) => data.freeGameList,
  },
});

// Action creators are generated for each case reducer function.
export const { freeGameDataAsyn } = gameDataSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectFreeGameDataList } = gameDataSlice.selectors;
