

document.addEventListener("DOMContentLoaded", function () {
  const rolodexDiv = document.getElementById("rolodex");
  const addContactForm = document.getElementById("add-contact");
  const contacts = [
    {
      firstname: "Sofia",
      lastname: "Files",
      email: "sfiles0@yahoo.co.jp",
      mobile: "4301327952"
    },
    {
      firstname: "Iorgos",
      lastname: "Slimm",
      email: "islimm1@icio.us",
      mobile: "3482850730"
    },
    {
      firstname: "Orlando",
      lastname: "Yallowley",
      email: "oyallowley2@comsenz.com",
      mobile: "4061820275"
    },
    {
      firstname: "Ava",
      lastname: "Wisdish",
      email: "awisdish3@ucoz.com",
      mobile: "5072421161"
    },
    {
      firstname: "Daisie",
      lastname: "MacKenney",
      email: "dmackenney4@ed.gov",
      mobile: "7511371029"
    },
    {
      firstname: "Perry",
      lastname: "Strooband",
      email: "pstrooband5@comsenz.com",
      mobile: "1136840363"
    }
  ];
  

  function addContactToRolodex(contact) {
    const contactDiv = document.createElement("div");
    contactDiv.className = "contact";

    const nameHeader = document.createElement("h3");
    nameHeader.textContent = `${contact.firstname} ${contact.lastname}`;

    const emailPara = document.createElement("p");
    emailPara.textContent = contact.email;

    const mobilePara = document.createElement("p");
    mobilePara.textContent = contact.mobile;

    contactDiv.appendChild(nameHeader);
    contactDiv.appendChild(emailPara);
    contactDiv.appendChild(mobilePara);

    rolodexDiv.appendChild(contactDiv);
  }

  addContactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstNameInput = document.getElementById("firstname");
    const lastNameInput = document.getElementById("lastname");
    const emailInput = document.getElementById("email");
    const mobileInput = document.getElementById("mobile");

    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const email = emailInput.value;
    const mobile = mobileInput.value;

    const newContact = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      mobile: mobile,
    };

    addContactToRolodex(newContact);
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    mobileInput.value = "";
  });

 
  contacts.forEach((contact) => {
    addContactToRolodex(contact);
  });
});
