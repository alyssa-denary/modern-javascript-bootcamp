const allParagraphs = document.querySelectorAll("p");
allParagraphs.forEach((p) => {
  if (p.textContent.includes(" the ")) {
    // Spaces around the to exclude words with 'the' embedded (ex: other)
    p.remove();
  }
});
