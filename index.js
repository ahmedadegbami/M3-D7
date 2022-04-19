let url = "https://jsonplaceholder.typicode.com/users ";

const loadAll = async () => {
  try {
    const response = await fetch(url);
    const infos = await response.json();
    console.log(infos);

    let tbody = document.querySelector("tbody");
    tbody.innerHTML = "";

    infos.forEach((info, index) => {
      tbody.innerHTML += `<tr>
                <th scope="row">${index + 1} </th>
                <td>${info.name}</td>
                <td>${info.username}</td>
                <td>${info.email}</td>
                <td>${Object.values(info.address)
                  .filter((value) => typeof value !== "object")
                  .join(", ")}</td>
              </tr>
      `;
    });
  } catch (error) {
    console.log(error);
  }
};

const searchInput = document.getElementById("search");
searchInput.addEventListener("input", async function (e) {
  try {
    let query = e.target.value;
    let selected = document.querySelector(".custom-select").value;
    const response = await fetch(url);
    const infos = await response.json();
    console.log(infos);
    const filtered = infos.filter((info) =>
      info[selected].toLowerCase().includes(query)
    );
    console.log(filtered);
  } catch (error) {
    console.log(error);
  }
});

window.onload = () => {
  loadAll();
};
