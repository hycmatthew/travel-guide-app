import { RawDataAPI } from "@/utils/HttpHelper";
import { createAppSlice } from "../../createAppSlice";
import CPUType from "@/app/constant/objectTypes/CPUType";

export interface cpuSliceState {
    status: string,
    cpuList: CPUType[]
}

const initialState: cpuSliceState = {
    status: 'idle',
    cpuList: [],
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const cpuSlice = createAppSlice({
  name: "cpuData",
  initialState,
  reducers: (create) => ({
    dataAsyn: create.asyncThunk(
      async (_: void) => {
        const response = await RawDataAPI.get('/CPUList')
        return response
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          state.status = "idle";
          state.cpuList = action.payload;
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
    selectDataList: (data) => data.cpuList,
  },
});

// Action creators are generated for each case reducer function.
export const { dataAsyn } = cpuSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectDataList } = cpuSlice.selectors;
