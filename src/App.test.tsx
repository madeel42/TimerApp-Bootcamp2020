import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow, ShallowWrapper,configure  } from "enzyme"
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe("App", () => {
  let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>

  beforeEach(() => (container = shallow(<App />)))

  it("should render a <div />", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1)
  })
})


test('renders Timer App', () => {
const renderResponse =  render(<App />);
  const linkElement = renderResponse.getByText(/Timer App/i);
  expect(linkElement).toBeInTheDocument();
});
