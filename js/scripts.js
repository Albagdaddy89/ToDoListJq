$(document).ready(() => {

    $('#addButton').on('click', newItem);

    // Reordering the items (this can remain outside the newItem function)
    $('#list').sortable();

    function newItem() {
        let li = $('<li></li>'); 
        let inputValue = $('#input').val();
        li.append(inputValue);

        if (inputValue === '') {
            alert('You must write something before clicking Add');
            return; // Stop further execution if input is empty
        }

        let list = $('#list');
        list.append(li);

        // Functionality to cross out list item
        li.on('dblclick', function() {
            li.toggleClass('strike');
        });

        // Adding the delete button "X" to the list item
        let crossOutButton = $('<button></button>');
        crossOutButton.append(document.createTextNode('X'));
        li.append(crossOutButton);

        // Delete list item when the "X" button is clicked
        crossOutButton.on('click', function() {
            li.remove();
        });
    }
});
