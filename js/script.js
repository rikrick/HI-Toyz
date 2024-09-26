function validatedata() {
  const email = document.getElementById("email");
  const username = document.getElementById("username");
  const password = document.getElementById("passwordde");
  const agree = document.getElementById("agree");
  const date = document.getElementById("date");

  const erroremail = document.getElementById("erroremail");
  const errorpassw = document.getElementById("errorpasse");
  const errorname = document.getElementById("errorname");
  const erroragree = document.getElementById("erroragree");
  const errordate = document.getElementById("errordate");

  let valid = true;

  errorname.textContent = "";
  erroremail.textContent = "";
  errorpassw.textContent = "";
  erroragree.textContent = "";
  errordate.textContent = "";

  if (username.value.length < 5) {
    errorname.textContent = "Error! Username must be at least 5 characters.";
    valid = false;
  }

  if (!email.value.endsWith("@gmail.com")) {
    erroremail.textContent = "Error! Email must end with @gmail.com.";
    valid = false;
  }

  if (password.value.length < 6) {
    errorpassw.textContent = "Error! Password must be at least 6 characters.";
    valid = false;
  }

  if (!agree.checked) {
    erroragree.textContent = "Error! You must agree to the terms.";
    valid = false;
  }

  if (!date.value) {
    errordate.textContent = "Error! Please select your date of birth.";
    valid = false;
  }

  return valid;
}
