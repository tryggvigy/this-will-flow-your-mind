// @flow

// Node
import crypto from 'crypto'
const mac = crypto.createHmac('sha1', 'super secret')

// Events
function onClick(e: Event) {
  e.preventDefault()
}
const onDrag = (e: DragEvent) => e.clientX

// Navigator
const browserLanguage = navigator.language
