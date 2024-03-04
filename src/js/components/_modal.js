import {
  getScrollbarWidth,
  getTransitionDuration
} from '../_utils.js'

const buttons = document.querySelectorAll('[data-modal]')

const ACTIVE_CLASS = 'is-active'
const CLASS_MODAL_OPEN = 'modal-is-open'

const VAR_OFFSET_SCROLL = '--offset-scroll'

// Initialize the modal
// @param {HTMLElement} button - The button element
function initModal (button) {
  if (!button) return

  const target = document.getElementById(button.dataset.modal)

  if (!target) return

  const dialog = target.querySelector('.modal-dialog')
  const closeButtons = document.querySelectorAll('.modal-close')

  function clickOutside (e) {
    if (!dialog.contains(e.target)) {
      hideModal(target)
    }

    target.removeEventListener('click', clickOutside)
  }

  button.addEventListener('click', (e) => {
    showModal(target)
    target.addEventListener('click', clickOutside)
  })

  closeButtons.forEach((close) => {
    close.addEventListener('click', () => hideModal(target))
  })
}

// Hide the modal
// @param {HTMLElement} target - The modal element
function hideModal (target) {
  const delay = getTransitionDuration(target) + 5
  target.classList.remove(ACTIVE_CLASS)

  setTimeout(() => {
    document.body.classList.remove(CLASS_MODAL_OPEN)
    document.body.removeAttribute('style')
  }, delay)
}

// Show the modal
// @param {HTMLElement} target - The modal element
function showModal (target) {
  const scrollbarWidth = getScrollbarWidth() + 'px'
  const disableScroll = target.dataset.disableScroll

  target.classList.add(ACTIVE_CLASS)
  document.body.classList.add(CLASS_MODAL_OPEN)

  if (disableScroll) {
    document.body.style.setProperty(VAR_OFFSET_SCROLL, scrollbarWidth)
    document.body.style.paddingRight = scrollbarWidth
    document.body.style.overflow = 'hidden'
  }
}

buttons.forEach((button) => {
  initModal(button)
})
