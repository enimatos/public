'use strict';

// console.log('here\'s a hidden message');

// This is a single comment.

/*Here's a
 milti-line
 comment.
 */

let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;