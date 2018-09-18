import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Talk from '../../components/Talk';
import { A } from 'glamorous';

configure({ adapter: new Adapter() });

describe('<Talk />', () => {
    it('should render talk location', () => {
        const talkInfo = {
            location: 'test',
            title: 'A test talk',
            speaker: 'Test Speaker',
            link: 'https://a.test.url'
        };

        const component = shallow(<Talk talk={talkInfo} />);

        const header = component.find('h5');

        expect(header.text()).toBe(talkInfo.location);
    });

    it('should render talk link', () => {
        const talkInfo = {
            location: 'test',
            title: 'A test talk',
            speaker: 'Test Speaker',
            link: 'https://a.test.url'
        };

        const component = mount(<Talk talk={talkInfo} />);

        const link = component.find(A);

        expect(link.props().href).toBe(talkInfo.link);
        expect(link.text()).toBe(talkInfo.title);
    });

    it('should match snapshot', () => {
        const talkInfo = {
            location: 'test',
            title: 'A test talk',
            speaker: 'Test Speaker',
            link: 'https://a.test.url'
        };

        const component = mount(<Talk talk={talkInfo} />);

        expect(component).toMatchSnapshot();
    })
});