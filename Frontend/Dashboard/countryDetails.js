document.addEventListener("DOMContentLoaded", function() {
    const country = localStorage.getItem("country");
    console.log(country);
    const token = localStorage.getItem('Token');
    console.log(token);

    axios
        .post(
            `http://127.0.0.1:3000/api/country`,
            { country },
            {
                headers: {
                    Authorization: `${token}`,
                },
            }
        )
        .then((res) => {
            console.log(res.data.msg[0]['Name']);
            let keys = Object.keys(res.data.msg[0]);
            console.log(keys);
            let details = document.getElementById('details');
            for(let i = 0; i < keys.length; i++){
                let row = document.createElement('tr');

                let columnKey = document.createElement('td');
                columnKey.textContent = keys[i];
                row.appendChild(columnKey);

                let columnValue = document.createElement('td');
                columnValue.textContent = res.data.msg[0][keys[i]];
                row.appendChild(columnValue);

                details.appendChild(row);
            }
        })
        .catch((err) => {
            console.log(err);
        });
});
