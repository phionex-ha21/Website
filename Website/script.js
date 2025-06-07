
 fetch("https://your-project.up.railway.app/register", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, email, password }),
});
    
   document.getElementById("signupForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const loader = document.getElementById("loader");
    const message = document.getElementById("message");

    if (!name || !email || !password) {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
        return;
    }

    loader.style.display = "inline-block";
    message.textContent = "";

    try {
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            message.textContent = data.message || "Registration successful!";
            message.style.color = "lightgreen";
            document.getElementById("signupForm").reset();
        } else {
            message.textContent = data.error || "Registration failed!";
            message.style.color = "red";
        }
    } catch (error) {
        message.textContent = "Network error. Please try again.";
        message.style.color = "red";
    } finally {
        loader.style.display = "none";
    }
});
