
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function openCartPage() {
  window.location.href = "../screens/order_page.html";
}

function openProfilePage() {
  window.location.href = "../screens/ProfileFile.html";
}

function openWishListPage() {
  window.location.href = "../screens/order_page.html";
}

function openHelpPage() {
  window.location.href = "../screens/aboutus.html";
}


// swet details programmatically from json on load the page

$().ready(function () {
    $.getJSON('../json/profile.json', function (data) {
      console.log(data);
      // document.getElementById("email").innerHTML  = 
      $('#email').append(data.email)
      $('#contactNo').append(data.contact)
      $('#gender').append(data.gender)
      $('#dob').append(data.dob)
      $('#address1').append(data.address_1)
      $('#address2').append(data.address_2)
      $('#rewards').append(data.rewards)
      $('#newsletter_subscription').append(data.newsletter_subscription)
      $('#preferences').append(data.preferences)
    });
  });

