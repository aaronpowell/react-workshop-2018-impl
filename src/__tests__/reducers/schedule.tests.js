import { addToSchedule } from '../reducers/schedule';

describe('add to schedule', () => {
    it('will add to schedule', () => {
        const initState = { schedule: [] };
        const talk = { title: 'Test' };

        const newState = addToSchedule(initState, talk);

        expect(newState.schedule.length).toBe(1);
    });
});