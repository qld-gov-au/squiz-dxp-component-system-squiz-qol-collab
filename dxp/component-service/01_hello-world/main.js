export default {
  async main({ text }, info) {
    return `<div class="container mt-4">
      <h1>${text}</h1> 
    </div>`;
  }
}