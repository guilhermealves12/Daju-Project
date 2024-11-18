const menuToggle = document.getElementById("menu_toggle")
const navList = document.getElementById("nav_list")

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active")
})

/* EMAIL FORM */
emailjs.init("PHqRZrrlldM33uEwz")

document
  .getElementById("emailForm")
  .addEventListener("submit", function (event) {
    event.preventDefault()

    const userEmail = document.getElementById("userEmail").value
    const messageDiv = document.getElementById("message")

    const templateParams = {
      to_email: "guilhermedahora.estudos@gmail.com",
      from_email: userEmail,
      message: `Novo cadastro de email: ${userEmail}`,
    }

    emailjs.send("service_48ptzm6", "template_e048erj", templateParams).then(
      function (response) {
        messageDiv.textContent = "Email cadastrado com sucesso!"
        messageDiv.className = "message success"
        document.getElementById("userEmail").value = ""

        setTimeout(() => {
          messageDiv.textContent = ""
          messageDiv.className = "message"
        }, 5000)
      },
      function (error) {
        messageDiv.textContent = "Erro ao cadastrar email. Tente novamente."
        messageDiv.className = "message error"
        console.error("Erro:", error)

        setTimeout(() => {
          messageDiv.textContent = ""
          messageDiv.className = "message"
        }, 5000)
      }
    )

    function isValidEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return re.test(email)
    }

    if (!isValidEmail(userEmail)) {
      messageDiv.textContent = "Por favor, insira um email válido"
      messageDiv.className = "message error"

      // Remove a mensagem após 5 segundos
      setTimeout(() => {
        messageDiv.textContent = ""
        messageDiv.className = "message"
      }, 5000)

      return
    }
  })
