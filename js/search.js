let frontier = [];
const expandedNodes = [];

const search = (heuristic) => {
  let currentNode = new TreeNode(INITIAL_STATE, 0);
  while(currentNode.state !== GOAL_STATE){
    frontier = [...frontier, ...currentNode.expand()];
    expandedNodes.push(currentNode);
    console.log({currentNode});
    console.log({expandedNodes});
    frontier = filterFronier(frontier,expandedNodes[expandedNodes.length - 1]);
    console.log({frontier});

    let bestNodeIndex;
    if(heuristic === "M") bestNodeIndex = findMinFByManhattan(frontier)
    else bestNodeIndex = findMinFByHamming(frontier)
    console.log({"BEST" : frontier[bestNodeIndex]});
    currentNode = frontier[bestNodeIndex]
  }
  Board.draw(currentNode.state)
  
};

const filterFronier = (frontier,lastExpanded) => {
  console.log({lastExpanded});
  const newFr = frontier.filter((node)=>{
    return node.state !== lastExpanded.state
  })
  return newFr
}

const findMinFByManhattan = (frontier) => {
  let minNode = frontier[0];
  frontier.forEach((node) => {
    if (minNode.depth + minNode.manhattan() > node.depth + node.manhattan())
      minNode = node;
  });
  return frontier.indexOf(minNode)
};

const findMinFByHamming = (frontier) => {};
