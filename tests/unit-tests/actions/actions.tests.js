/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { expect } from "chai";
import {
  addTodo,
  setVisibilityFilter,
  toggleTodo
} from "../../../imports/api/actions/actionCreators";

describe("actions", function () {
  it("should create an action to add a todo", function () {
    const text = "test add todo";
    const addTodoAction = addTodo(text);

    expect(addTodoAction.type).to.equal("ADD_TODO");
    expect(addTodoAction.id).to.be.a("number");
    expect(addTodoAction.text).to.equal(text);
  });

  it("should create an action to set visibility filter", function () {
    const filter = "SHOW_ALL";
    const expectedAction = {
      type: "SET_VISIBILITY_FILTER",
      filter,
    };

    expect(setVisibilityFilter(filter)).to.deep.equal(expectedAction);
  });

  it("should create an action to toggle todo", function () {
    const id = 123;
    const expectedAction = {
      type: "TOGGLE_TODO",
      id,
    };

    expect(toggleTodo(id)).to.deep.equal(expectedAction);
  });
});
