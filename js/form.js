// ------------------------------| Datavalidering |----------
const form = document.querySelector("form");
// --------------------| Defined Constants |----------
const purposeOutput = document.querySelector("#summary_purpose");
const descriptionOutput = document.querySelector("#summary_description");
const imageOutput = document.querySelector("#summary_image");
const nameOutput = document.querySelector("#summary_name");
const phoneOutput = document.querySelector("#summary_phone");
const mailOutput = document.querySelector("#summary_mail");

// --------------------| Functions |----------
function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}
function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  //----------| Værdier samlet fra form |----------
  const purpose = formData.get("form_purpose_radio");
  const description = formData.get("form_item_description");
  const image = formData.get("form_item_image");
  const name = formData.get("form_name");
  const phone = formData.get("form_phone");
  const mail = formData.get("form_mail");
  //----------| Værdier vist i summary |----------
  purposeOutput.textContent = purpose;
  descriptionOutput.textContent = description;
  imageOutput.textContent = image;
  nameOutput.textContent = name;
  phoneOutput.textContent = phone;
  mailOutput.textContent = mail;
  //----------| Reset |----------
  form.reset();
}
form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit, true);

// ------------------------------| Adaptiv formular |----------
