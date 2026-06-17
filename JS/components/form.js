export default function formSubmit() 
{
  const form = document.querySelector(".contact-form");
  const status = document.querySelector(".form-status");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    status.textContent = "Message has been sent successfully!";
    status.style.display = "block";
    form.reset();
  });
}
