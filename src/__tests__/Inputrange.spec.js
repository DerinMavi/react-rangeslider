import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import renderer from 'react-test-renderer'
import Slider from '../Inputrange'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('Inputrange specs', () => {
  it('should render properly', () => {
    const slider = shallow(<Slider />)
    expect(slider.hasClass('inputrange')).toBeTruthy()
    expect(slider.children().length).toEqual(3)
    expect(slider.find('.inputrange__fill').length).toEqual(1)
    expect(slider.find('.inputrange__handle').length).toEqual(1)
  })

  it('should have default props', () => {
    const slider = mount(<Slider />)
    expect(slider.prop('min')).toEqual(0)
    expect(slider.prop('max')).toEqual(100)
    expect(slider.prop('step')).toEqual(1)
    expect(slider.prop('value')).toEqual(0)
    expect(slider.prop('orientation')).toEqual('horizontal')
    expect(slider.prop('reverse')).toEqual(false)
    expect(slider.prop('handleLabel')).toEqual('')
    expect(slider.prop('tooltip')).toEqual('on')
    expect(slider.prop('labels')).toEqual({})
    expect(slider.prop('disabled')).toEqual(false)
  })

  it('should render basic slider with defaults', () => {
    const tree = renderer.create(<Slider />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render slider when props passed in', () => {
    const tree = renderer
      .create(<Slider min={10} max={50} value={20} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
