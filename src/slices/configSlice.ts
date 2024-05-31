import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Configuration, getConfiguration } from '@/api/api';

interface ConfigState {
    config: Configuration | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: ConfigState = {
    config: null,
    status: 'idle',
    error: null,
};

export const fetchConfig = createAsyncThunk('config/fetchConfig', async () => {
    const response = await getConfiguration();
    console.log('foo response', response);
    return response;
});

const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchConfig.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchConfig.fulfilled, (state, action: PayloadAction<Configuration>) => {
                state.status = 'succeeded';
                state.config = action.payload;
            })
            .addCase(fetchConfig.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch configuration';
            });
    },
});

export default configSlice.reducer;
