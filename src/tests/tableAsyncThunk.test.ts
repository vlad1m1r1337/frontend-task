import {fetchTable} from "../store/tableSlice";

global.fetch = jest.fn();

describe('tableAsyncThunk', () => {
    // it('should fetch with resolved response', async () => {
    //     const mockTable = [
    //         {
    //             name: 'Leanne Graham',
    //             email: '12',
    //             phone: '12',
    //             username: '12',
    //             website: '12',
    //         }];
    //     fetch.mockResolvedValue({
    //         ok: true,
    //         json: () => Promise.resolve(mockTable)
    //     })
    //     const dispatch = jest.fn();
    //     const thunk = fetchTable();
    //
    //     await thunk(dispatch, () => {}, undefined);
    //
    //     const {calls} = dispatch.mock;
    //     expect(calls.length).toBe(2);
    //
    //     const [start, end] = calls;
    //
    //     expect(start[0].type).toBe('table/fetchTable/pending');
    //     expect(end[0].type).toBe('table/fetchTable/fulfilled');
    //     expect(end[0].payload).toEqual(mockTable);
    // });
});
