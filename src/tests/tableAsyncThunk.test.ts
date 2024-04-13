import tableReducer, {fetchTable, initialState} from "../store/tableSlice";

global.fetch = jest.fn();
jest.mock('node-fetch');
import fetch from 'node-fetch';

const mockTable = [
    {
        name: 'Leanne Graham',
        email: '123',
        phone: '12',
        username: '12',
        website: '12',
    }];
describe('tableAsyncThunk', () => {
    it('should fetch with resolved response', async () => {
        const mockResponse = {
            ok: true,
            json: jest.fn().mockResolvedValue(mockTable)
        };

        jest.spyOn(global, 'fetch').mockResolvedValue(mockResponse as any);
        const dispatch = jest.fn();
        const thunk = fetchTable();

        await thunk(dispatch, () => {}, undefined);

        const {calls} = dispatch.mock;
        expect(calls.length).toBe(2);

        const [start, end] = calls;

        expect(start[0].type).toBe('table/fetchTable/pending');
        expect(end[0].type).toBe('table/fetchTable/fulfilled');
        expect(end[0].payload).toEqual(mockTable);
    });
    it ('should fetch with rejected response', async () => {
        const mockResponse = {
            ok: false,
        };

        jest.spyOn(global, 'fetch').mockResolvedValue(mockResponse as any);
        const dispatch = jest.fn();
        const thunk = fetchTable();

        await thunk(dispatch, () => {}, undefined);

        const {calls} = dispatch.mock;
        expect(calls.length).toBe(2);

        const [start, end] = calls;

        expect(start[0].type).toBe('table/fetchTable/pending');
        expect(end[0].type).toBe('table/fetchTable/rejected');
        expect(end[0].payload).toBe('Ошибка запроса');
    });
});
describe("TableSlice", () => {
    it ('should change status with "fetchTable.pending" action', () => {
        const state = tableReducer(initialState, fetchTable.pending('string', undefined));
        expect(state.request_status.loading).toBe(true);
    })
    it ('should fetch table with "fetchTable.fulfilled" action', () => {
        const state = tableReducer(initialState, fetchTable.fulfilled(mockTable, 'string', undefined));
        expect(state.table).toEqual(mockTable);
        expect(state.request_status).toEqual({
            error: null,
            loading: false,
        })
    })
    // it ('should change status and error wih ""')})