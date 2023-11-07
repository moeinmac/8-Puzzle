const GOAL_STATE = "012345678";

class TreeNode {
  constructor(state, depth) {
    this.state = state;
    this.depth = depth;
  }

  isGoal() {
    return this.state === GOAL_STATE;
  }

  nextState() {
    const actions = this.getActions();
    const zero = this.state.indexOf("0");
    let newZeroIndex;

    const AllNextStates = [];

    if (actions.length == 0) {
      console.log("No Avaiable Action!");
      return;
    }

    actions.forEach((action) => {
      switch (action) {
        case "T":
          newZeroIndex = zero - 3;
          break;
        case "B":
          newZeroIndex = zero + 3;
          break;
        case "L":
          newZeroIndex = zero - 1;
          break;
        case "R":
          newZeroIndex = zero + 1;
          break;
      }

      let tempState = this.state.split("");
      tempState[zero] = tempState[newZeroIndex];
      tempState[newZeroIndex] = "0";
      AllNextStates.push(tempState.join(""));
    });

    return AllNextStates;
  }
  getActions() {
    // Which Actions Are Available?
    const actions = [];
    const zero = this.state.indexOf("0");
    const col = zero % 3;
    const row = ~~(zero / 3);
    
    if (col <= 1) actions.push("R");
    if (col >= 1) actions.push("L");
    if (row <= 1) actions.push("B");
    if (row >= 1) actions.push("T");

    return actions;
  }
}