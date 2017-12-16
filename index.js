function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
  const firstList = rankedLists[0]
  const secondList = rankedLists[1]
  let child1 = firstList.children
  let child2 = secondList.children
  for (let i = 0; i < child1.length; i++) {
    child1[i].innerHTML = parseInt(child1[i].innerHTML) + n
  }
  for (let i = 0; i < child2.length; i++) {
    child2[i].innerHTML = parseInt(child2[i].innerHTML) + n
  }
}

function deepestChild() {
  const dchild = document.querySelector('#grand-node div div div div')
  return dchild
}