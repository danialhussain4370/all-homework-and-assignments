let book = {
    title: "Nexskill",
    author: "Zeshan Ali",
    year: 2024,
    available: true,
  
    borrowBook: function() {
      book.available = false;
    },
  
    returnBook: function() {
      book.available = true;
    },
  
    printDetails: function() {
      console.log("Title: " + book.title + ", Author: " + book.author + ", Year: " + book.year + ", Available: " + book.available);
    }
  };
  
  
  book.printDetails();  
  
  book.borrowBook();
  book.printDetails(); 
  
  book.returnBook();
  book.printDetails();  
  