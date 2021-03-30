function previous(element) {
  let fatherDiv = element.parentNode.id;
  switch (fatherDiv) {
    case 'addressDiv':
      element.parentNode.style.display = 'none';
      document.getElementById('personalDiv').style.display = 'block';
      document.getElementById('profileDiv').style.display = 'none';
      document.getElementById('resultDiv').style.display = 'none';
      break;
    case 'profileDiv':
      element.parentNode.style.display = 'none';
      document.getElementById('personalDiv').style.display = 'none';
      document.getElementById('addressDiv').style.display = 'block';
      document.getElementById('resultDiv').style.display = 'none';

      break;
    case 'resultDiv':
      element.parentNode.style.display = 'none';
      document.getElementById('personalDiv').style.display = 'none';
      document.getElementById('addressDiv').style.display = 'none';
      document.getElementById('profileDiv').style.display = 'block';

      break;

    default:
      break;
  }
}


// next
function nextDiv(element) {
  let fatherDiv = element.parentNode.id;
  switch (fatherDiv) {
    case 'personalDiv':
      let checkFirstName = document.getElementsByName('firstName')[0].checkValidity();
      let checkLastName = document.getElementsByName('lastName')[0].checkValidity();
      let checkBirthDate = document.getElementsByName('birthDate')[0].checkValidity();
      let checkNationality = document.getElementsByName('nationality')[0].checkValidity();

      showData();

      if(checkFirstName && checkLastName && checkBirthDate && checkNationality) {
        element.parentNode.style.display = 'none';
      document.getElementById('addressDiv').style.display = 'block';
      document.getElementById('profileDiv').style.display = 'none';
      document.getElementById('resultDiv').style.display = 'none';
      break;
      } else {
        alert('Bitte füllen Sie alle Felder aus')
      }

    case 'addressDiv':
      let checkAddress = document.getElementsByName('address')[0].checkValidity();
      let checkHouseNumber = document.getElementsByName('houseNumber')[0].checkValidity();
      let checkZipCode = document.getElementsByName('zipCode')[0].checkValidity();

      showData();

      if(checkAddress && checkHouseNumber && checkZipCode){
        element.parentNode.style.display = 'none';
      document.getElementById('personalDiv').style.display = 'none';
      document.getElementById('profileDiv').style.display = 'block';
      document.getElementById('resultDiv').style.display = 'none';
      break;
      } else {
        alert('Bitte füllen Sie alle Felder aus');
      }


    case 'profileDiv':
      let checkUserName = document.getElementsByName('username')[0].checkValidity();
      let checkPassword = document.getElementsByName('password')[0].checkValidity();
      let checkPasswordRepeat = document.getElementsByName('password-repeat')[0].checkValidity();
      let checkImageFile = document.getElementsByName('imageFile')[0].checkValidity();

      showData();

      if(checkUserName && checkPassword && checkPasswordRepeat && checkImageFile) {
        element.parentNode.style.display = 'none';
        document.getElementById('personalDiv').style.display = 'none';
        document.getElementById('addressDiv').style.display = 'none';
        document.getElementById('resultDiv').style.display = 'block';

        break;
      } else {
        alert('Bitte füllen Sie alle Felder aus');
      }

    
    default:
      break;
  }
}

function showData() {

  const name = document.getElementsByName('firstName')[0].value + " " + document.getElementsByName('lastName')[0].value;
  document.getElementById("nameLabel").innerText = name;

  let birthDate = document.getElementsByName('birthDate')[0].value;
  document.querySelector('#birthDateLabel').innerText = birthDate;

  let nationality = document.getElementsByName('nationality')[0].value;
  document.querySelector('#nationalityLabel').innerText  = nationality;

  const totalAddress = document.getElementsByName('address')[0].value + " " + document.getElementsByName('houseNumber')[0].value + " " + document.getElementsByName('zipCode')[0].value;
  document.querySelector('#addressLabel').innerText = totalAddress;
  
  let usernameLabel = document.getElementsByName('username')[0].value;
  document.querySelector('#usernameLabel').innerText = usernameLabel;
  
  let passwordLabel = document.getElementsByName('password')[0].value;
  document.querySelector('#passwordLabel').innerText = passwordLabel;

  let photoLabel = document.getElementsByName('imageFile')[0];
  let photo = photoLabel.value.replace("C:\\fakepath\\", "./images/");
  document.querySelector('#photoLabel').src = photo;

}
