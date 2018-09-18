import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Agenda from '../../pages/Agenda';

async function tick() {
    return Promise.resolve();
}

configure({ adapter: new Adapter() });

describe('<Agenda /> Page', () => {
    it('Should update state with fetch result', async () => {
        const mockTalk = {
            location: 'test',
            title: 'A test talk',
            speaker: 'Test Speaker',
            link: 'https://a.test.url'
        };
        
        const fetchAgenda = () => Promise.resolve([mockTalk]);

        const component = shallow(<Agenda fetchAgenda={fetchAgenda} match={{ params: { day: ''} }} />);

        await tick();

        expect(component.state().talks[0]).toBe(mockTalk);
    });
})