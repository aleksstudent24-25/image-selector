document.getElementById("images").addEventListener("change", () => changeImg());

function changeImg() {
  const option = document.getElementById("images").value;
  const img = document.getElementById("img");

  //   console.log(option);
  switch (option) {
    case "imgCat":
      img.src = `./images/cat.jpg`;
      break;
    case "imgElf":
      img.src = `./images/elf.jpg`;
      break;
    case "imgDoshin":
      img.src = `./images/doshin.png`;
      break;
    default:
      img.src = `#`;
  }

  //   if (option === "imgCat") img.src = `./images/cat.jpg`;
  //   else if (option === "imgElf") img.src = `./images/elf.jpg`;
  //   else if (option === "imgDoshin") img.src = `./images/doshin.png`;
  //   else img.src = "";
}
