/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import React from "react";
import { shallow } from "enzyme";
import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import AppContainer from "../../../imports/ui/containers/AppContainer";

chai.use(chaiEnzyme());

describe("<AppContainer />", function () {
  it("should display 'Here we go!'", function () {
    const wrapper = shallow(<AppContainer />);
    expect(wrapper.find("h1")).to.have.text("Here we go!");
  });
});
