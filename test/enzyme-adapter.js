import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

/**
 * Method dedicated to create Enzyme Adapter for Jest
 *
 * @returns {Enzyme.<Adapter>}
 */
export const createEnzymeAdapter = () => {
  return Enzyme.configure({ adapter: new Adapter() })
}
