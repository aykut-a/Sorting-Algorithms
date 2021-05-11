import { weristDran, insertSort } from './Sorting Algorithms/insertionSort.js'
import { bubbleSort } from './Sorting Algorithms/bubbleSort.js'
import { selectionSort } from './Sorting Algorithms/selectionSort.js'
import { heapSort } from './Sorting Algorithms/heapSort.js'
import { mergeSort, brokenToPiecesZero } from './Sorting Algorithms/mergeSort.js'
import { quickSort } from './Sorting Algorithms/quickSort.js'


// The states
let stickFrequency = 5
let unsortedArray = []
let sortingType = ''
let numberOfSticks = 0
let amIcurrentlySorting = false


// Just Mess It Up Again Button :)

const messItUpButton = document.querySelector('.generate-new-array-button')
messItUpButton.addEventListener('click', messItUp)

function messItUp() {
  subZero()
  generateSticks()
}


// Console Handling 
const header = document.querySelector('[header]')

function makeItUnclickable() {
  Array.from(document.querySelectorAll('[header-item]')).forEach(item => item.style.color = 'var(--orange)')
  amIcurrentlySorting = true
  header.style.pointerEvents = 'none'
}

function makeItClickable() {
  Array.from(document.querySelectorAll('[header-item]')).forEach(item => item.style.color = 'white')
  amIcurrentlySorting = false
  header.style.pointerEvents = 'auto'
}




// More or Less Sticks to Sort

const moreButton = document.querySelector('[mas]')
const lessButton = document.querySelector('[menos]')
moreButton.addEventListener('click', () => lessOrMoreSticks(1))
lessButton.addEventListener('click', () => lessOrMoreSticks(-1))

// Sort Button
const sortButton = document.querySelector('[sort-button]')

sortButton.addEventListener('click', () => {
  sortingType = sortingSelector.value
  if (inHere.children[0].classList.contains('greenStick')) { return }
  sortEm()
})


// Selector for the Sorting Types 
const sortingSelector = document.querySelector('[sorting-type-select]')

// Where will the Sticks Be Gone to Mi'lady
const inHere = document.querySelector('[in-here]')


// To Determine the Frequency of the Sticks

function lessOrMoreSticks(amount) {
  if (stickFrequency === 2 && amount === -1) { return }
  if (stickFrequency === 8 && amount === 1) { return }
  subZero()
  stickFrequency += amount
  generateSticks()
}

function subZero() {
  inHere.innerHTML = ''
  unsortedArray = []
}


// Generate em Sticks 

generateSticks() // As the page opens for first time :)

function generateSticks() {
  numberOfSticks = Math.pow(2, stickFrequency)
  for (let i = 0; i < numberOfSticks; i++) {
    if (i < numberOfSticks / 2) {
      let random = Math.floor(Math.random() * 156)
      unsortedArray.push(random + 100)
      continue
    }
    if (i >= numberOfSticks / 2) {
      let random = Math.floor(Math.random() * 256)
      unsortedArray.push(random + 256)
    }
  }
  unsortedArray.sort(() => 0.5 - Math.random()) // Mess them
  unsortedArray.forEach(stick => putInSticks(stick))
}

function putInSticks(input) {
  const stick = document.createElement('div')
  stick.style.width = `${1280 / numberOfSticks}px`
  stick.style.height = `${input}px`
  stick.classList.add('stick')
  inHere.append(stick)
  stick.setAttribute('id', inHere.childElementCount - 1)
}


// Sorting Functions Fire Off

function sortEm() {
  makeItUnclickable()
  if (sortingType === 'bubble') { bubbleSort() }
  if (sortingType === 'select') { selectionSort() }
  if (sortingType === 'insert') { insertSort(weristDran) }
  if (sortingType === 'heap') { heapSort() }
  if (sortingType === 'merge') {
    brokenToPiecesZero()
    mergeSort(Array.from(inHere.children))
  }
  if (sortingType === 'quick') {
    quickSortedSuccess = false
    const self = setInterval(() => {
      if (quickSortedSuccess) {
        Array.from(inHere.children).forEach(stick => {
          stick.classList.remove('orangeStick')
          stick.classList.add('greenStick')
        })
        clearInterval(self)
        return
      }
      quickSort(inHere.children)
    }, (1024 / inHere.children.length) * 15)
  }
}


let quickSortedSuccess

function quickSortedSuccessZero() {
  quickSortedSuccess = true
}


// A Swap Function Used in Most

function insertBeforeFunction(a, b) {
  let parent = a.parentElement
  parent.insertBefore(a, b)
}


// Check the Order Animation and Confirm

let greenOrder = 0

function checkTheOrder(arr) {
  const greenThem = setInterval(() => {
    if (greenOrder === arr.length) {
      clearInterval(greenThem)
      makeItClickable()
      greenOrder = 0
      return
    }
    arr[greenOrder].classList.remove('orangeStick')
    arr[greenOrder].classList.add('greenStick')
    greenOrder += 1
  }, 1024 / inHere.children.length)

}


export { unsortedArray, insertBeforeFunction, inHere, quickSortedSuccessZero, makeItClickable, checkTheOrder }