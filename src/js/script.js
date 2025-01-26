const btn = document.getElementById("btn")
const adviceId = document.getElementById("advice-id")
const adviceContent = document.getElementById("advice-content")

async function adviceGenerator() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice")
    const newAdvice = await response.json()
    adviceId.innerText = `ADVICE #${newAdvice.slip.id}`
    adviceContent.innerText = `"${newAdvice.slip.advice}"`
  } catch (err) {
    console.log(err)
  }
}

btn.addEventListener("click", () => {
  adviceGenerator()
})
