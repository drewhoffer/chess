import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="chess"
export default class extends Controller {
  static targets = ["state", "fen"];
  connect() {
    console.log("connected");
  }
}
