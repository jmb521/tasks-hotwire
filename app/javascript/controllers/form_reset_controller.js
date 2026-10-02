import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form-reset"
export default class extends Controller {

  static targets = ["nameInput"]

  reset(event) {
    if(event.detail.success) {
      this.element.reset()
    }
  }

  validate(event) {
    if(this.nameInputTarget.value.trim() === "" ) {
      this.nameInputTarget.classList.add('input-error')
    } else {
      this.nameInputTarget.classList.remove('input-error')
    }
  }

  preventInvalidSubmit(event) {
    if(this.nameInputTarget.value.trim() === "") {
      event.preventDefault()
      this.nameInputTarget.classList.add("input-error")
    }
  }
}
