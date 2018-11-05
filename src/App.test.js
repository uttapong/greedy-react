import React from 'react'
import { shallow } from 'enzyme';
// import sinon from 'sinon';
import App from './App';
import Denom from "./Denom";
import { DH_CHECK_P_NOT_PRIME } from 'constants';


describe('<App />', () => {
  let amount=parseFloat((Math.random()*10000).toFixed(2))
  it('sums all denoms compare to change', () => {
    const wrapper = shallow(<App amount={amount}/>);
    // console.log(wrapper.debug('xxx'))
    let denoms = wrapper.find(Denom)
    let sum=0.00
    denoms.forEach((denom)=>{
      // console.log(denom.debug());
      sum+=parseInt(denom.prop('amount'))*parseFloat(denom.prop('label'))
    })
    expect(amount).toEqual(sum);
  });
});