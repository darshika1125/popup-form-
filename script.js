document.getElementById("brandForm").addEventListener("submit", function (e) {
      const form = e.target;
      const errorMsg = document.getElementById("errorMsg");
      let isValid = true;

      [...form.elements].forEach((el) => {
        if (el.required && !el.value.trim()) {
          isValid = false;
        }
      });

      if (!isValid) {
        e.preventDefault();
        errorMsg.style.display = "block";
      } else {
        errorMsg.style.display = "none";
      }
    });
