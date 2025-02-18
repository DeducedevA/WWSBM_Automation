import 'cypress-file-upload';

describe('File Upload Test', () => {
    it('should upload a file successfully', () => {
      // Visit the page with the file upload form
      cy.visit('https://example.com/upload'); // Replace with your URL
  
      // Select the file input element and attach the file
      const fileName = 'sampleFile.txt'; // Name of the file in fixtures
      cy.get('input[type="file"]').attachFile(fileName);
  
      // Perform any additional steps after upload
      cy.get('button[type="submit"]').click(); // Submit the form
  
      // Assert the file upload result
      cy.contains('Upload Successful').should('be.visible'); // Adjust based on your app
    });
  });
  