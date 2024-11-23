const taskItems = document.querySelectorAll('#taskList li');
taskItems.forEach(item => {

    item.addEventListener("click", () => {
  
      item.classList.toggle('selected');
    });
  });