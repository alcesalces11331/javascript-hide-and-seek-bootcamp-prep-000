function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
  const firstList = rankedLists[0]
  const secondList = rankedLists[0]
  let child1 = firstList.children
  let child2 = secondList.children
  for (var i = 0; i < child1.length; i++) {
    
  }
}