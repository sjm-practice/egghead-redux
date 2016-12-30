/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import chai, { expect } from "chai";
import deepFreeze from "deepfreeze";
import todos from "../../../imports/api/reducers/todos";

describe("Todos Reducers", function () {
  describe("AddTodo", function () {
    it("should add a todo to state, without mutating original state", function () {
      const stateBefore = [];

      const action = {
        type: "ADD_TODO",
        id: 0,
        text: "Learn Redux",
      };

      const stateAfter = [
        { id: 0, text: "Learn Redux", completed: false },
      ];

      deepFreeze(stateBefore);  // throws if mutated
      deepFreeze(action);

      expect(todos(stateBefore, action)).to.deep.equal(stateAfter);
    });
  });

  describe("ToggleTodo", function () {
    it("should toggle the given todo", function () {
      const stateBefore = [
        { id: 0, text: "Learn Redux", completed: false },
        { id: 1, text: "Practice Redux", completed: false },
      ];

      const action = {
        type: "TOGGLE_TODO",
        id: 1,
      };

      const stateAfter = [
        { id: 0, text: "Learn Redux", completed: false },
        { id: 1, text: "Practice Redux", completed: true },
      ];

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(todos(stateBefore, action)).to.deep.equal(stateAfter);
    });
  });

});

