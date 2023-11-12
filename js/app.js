const buttonsContainer = document.querySelector(".buttonsContainer");
const controls = document.querySelector(".controls");
const randomButton = document.querySelector(".randomButton");
const solveButton = document.querySelector(".solveButton");
const detailButton = document.querySelector(".detailButton");
const detailElm = document.querySelector(".detailElm")

const m_heu = document.querySelector(".m_heu");
const h_heu = document.querySelector(".h_heu");

const pickRandom = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const isSolveButton = (isSolved) => {
  if (isSolved) {
    buttonsContainer.classList.add("solved");
    solveButton.innerHTML = "Solved!";
    return;
  }
  buttonsContainer.classList.remove("solved");
  solveButton.innerHTML = "Solve!";
};

const randomState = () => {
  let iterationCount = 0;
  let tempNode;
  tempNode = new TreeNode(INITIAL_STATE, 0);

  const Interval = setInterval(() => {
    const AllNextStates = tempNode.nextState();
    const nextState = pickRandom(AllNextStates);

    Board.draw(nextState);
    tempNode = new TreeNode(nextState, 0);

    iterationCount += 1;
    if (iterationCount >= 50) {
      clearInterval(Interval);
      INITIAL_STATE = nextState;
    }
  }, 100);
  
  isSolveButton();
  detailButton.classList.remove("active");
  detailElm.classList.remove("active")
  detailElm.innerHTML = ""
};

const searchTree = () => {
  if (m_heu.classList.contains("active")) search("M");
  else search("H");
};

m_heu.addEventListener("click", () => {
  if (!m_heu.classList.contains("active")) {
    h_heu.classList.remove("active");
    m_heu.classList.add("active");
  }
});
h_heu.addEventListener("click", () => {
  if (!h_heu.classList.contains("active")) {
    m_heu.classList.remove("active");
    h_heu.classList.add("active");
  }
});

const detailSoloution = () => {
  if (!detailButton.classList.contains("active")) {
    detailButton.classList.add("active");
    detailElm.classList.add("active");
    detailElm.innerHTML = `
      Explored Nodes : ${expandedNodes.length}
      Found on Depth : ${soloutionNode.depth}
      Frointier Length : ${frontier.length}
    `;
    controls.appendChild(detailElm);
  } else {
    detailButton.classList.remove("active");
    detailElm.classList.remove("active")
    detailElm.innerHTML = ""
  }
};

randomButton.addEventListener("click", randomState);
solveButton.addEventListener("click", searchTree);
detailButton.addEventListener("click", detailSoloution);
