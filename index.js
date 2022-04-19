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
                  .join(",")}</td>
              </tr>
      `;
    });
  } catch (error) {
    console.log(error);
  }
};

window.onload = () => {
  loadAll();
};