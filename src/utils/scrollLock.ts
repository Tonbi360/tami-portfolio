let lockCount = 0
const previousOverflow = window?.document?.body?.style?.overflow || ''

export function lockBodyScroll() {
  if (lockCount === 0) {
    document.body.style.overflow = 'hidden'
  }
  lockCount += 1
}

export function unlockBodyScroll() {
  lockCount = Math.max(0, lockCount - 1)
  if (lockCount === 0) {
    document.body.style.overflow = previousOverflow
  }
}
