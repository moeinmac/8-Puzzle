const randomButton = document.querySelector(".randomButton");

const pickRandom = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const randomState = () => {
  let initialState = "012345678";
  // const iterationCount = Math.floor(Math.random() * 100) + 1;
  let iterationCount = 0;
  let tempNode;
  tempNode = new TreeNode(initialState, 0);
  // for (let i = 1; i <= 3; i++) {
  //   const AllNextStates = tempNode.nextState();
  //   console.log(AllNextStates);
  //   const nextState = pickRandom(AllNextStates);
  //   console.log(nextState);
  //   tempNode = new TreeNode(nextState,0);
  // }
  const Interval = setInterval(() => {
    iterationCount += 1;
    if (iterationCount >= 50) clearInterval(Interval);

    const AllNextStates = tempNode.nextState();
    console.log(AllNextStates);
    const nextState = pickRandom(AllNextStates);

    console.log(nextState);
    Board.draw(nextState);
    tempNode = new TreeNode(nextState, 0);
  }, 200);

};

randomButton.addEventListener("click", randomState);
