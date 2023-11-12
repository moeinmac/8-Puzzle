let frontier = [];
const expandedNodes = [];
let soloutionNode;

const search = (heuristic) => {
  let currentNode = new TreeNode(INITIAL_STATE, 0);
  while(currentNode.state !== GOAL_STATE){
    frontier = [...frontier, ...currentNode.expand()];
    expandedNodes.push(currentNode);
    frontier = filterFronier(frontier,expandedNodes[expandedNodes.length - 1]);

    let bestNodeIndex;
    if(heuristic === "M") bestNodeIndex = findMinFByManhattan(frontier)
    else bestNodeIndex = findMinFByHamming(frontier)

    currentNode = frontier[bestNodeIndex]
  }
  INITIAL_STATE = currentNode.state
  soloutionNode = currentNode
  const optimalPath = findOptimalPath(currentNode);
  const opInt = setInterval(() => {
    if(optimalPath.length <= 1){
      clearInterval(opInt)
      isSolveButton(true);
    }
    Board.draw(optimalPath[0])
    optimalPath.shift()
  }, 500);
};

const filterFronier = (frontier,lastExpanded) => {
  return frontier.filter((node)=>{
    return node.state !== lastExpanded.state
  })
}

const findMinFByManhattan = (frontier) => {
  let minNode = frontier[0];
  frontier.forEach((node) => {
    if (minNode.depth + minNode.manhattan() > node.depth + node.manhattan())
      minNode = node;
  });
  return frontier.indexOf(minNode)
};

const findMinFByHamming = (frontier) => {
  let minNode = frontier[0];
  frontier.forEach((node) => {
    if (minNode.depth + minNode.hamming() > node.depth + node.hamming())
      minNode = node;
  });
  return frontier.indexOf(minNode)
};

const findOptimalPath = (node) => {
  const path = [];
  let currentNode = node
  while (currentNode.parent) {
    path.unshift(currentNode.state);
    currentNode = currentNode.parent
  }
  path.unshift(currentNode.state);
  return path
}