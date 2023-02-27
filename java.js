$(document).ready(function() {

    // When the search form is submitted
    $('form').submit(function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get form data
      var origin = $('#origin').val();
      var destination = $('#destination').val();
      var date = $('#date').val();
  
      // Send an AJAX request to get available buses
      $.ajax({
        url: 'get_buses.php',
        type: 'GET',
        data: { origin: origin, destination: destination, date: date },
        success: function(response) {
          // Display the results
          $('.results table tbody').html(response);
        },
        error: function() {
          // Display an error message
          $('.results table tbody').html('<tr><td colspan="7">Error fetching available buses</td></tr>');
        }
      });
    });
  
    // When a "Book Now" button is clicked
    $('.results table').on('click', 'a.book-now', function(event) {
      event.preventDefault(); // Prevent link click
  
      // Get the bus ID
      var bus_id = $(this).data('bus-id');
  
      // Send an AJAX request to book the bus
      $.ajax({
        url: 'book_bus.php',
        type: 'POST',
        data: { bus_id: bus_id },
        success: function(response) {
          // Display a success message
          alert('Bus booked successfully!');
        },
        error: function() {
          // Display an error message
          alert('Error booking the bus');
        }
      });
    });
  
  });
  