document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const tableBody = document.getElementById('employee-table-body');
    const rows = tableBody.getElementsByTagName('tr');
  
    searchInput.addEventListener('input', function() {
      const searchTerm = searchInput.value.toLowerCase();
  
      for (let i = 0; i < rows.length; i++) {
        const name = rows[i].getElementsByTagName('td')[0].textContent.toLowerCase();
        if (name.includes(searchTerm)) {
          rows[i].style.display = '';
        } else {
          rows[i].style.display = 'none';
        }
      }
    });
  });