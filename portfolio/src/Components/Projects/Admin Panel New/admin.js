let arr = [];

const addcat = () => {
    let name = document.cform.kin.value;
    let cid = document.cform.catid.value;

    let data = JSON.parse(localStorage.getItem("Catinfo"));
    let len = (data != null) ? data.length : 0;

    if (cid != "") {
        // upddate
        data.forEach((i) => {
            if (i.id == cid) {
                i.cname = name; 
            }
        });
        arr = data;
    } else {
        // insert
        let obj = {
            "id": len + 1,
            "cname": name
        }
        arr.push(obj);

    }

    localStorage.setItem("Catinfo", JSON.stringify(arr));
    document.cform.kin.value = "";
    document.cform.catid.value = "";

    dispcat();
    return false;
}



const dispcat = () => {
    let tr = '';
    let data = JSON.parse(localStorage.getItem("Catinfo"));
    if (data != null) {
        data.forEach((i) => {
            tr += `
            <tr>
                <td>${i.id}</td>
                <td>${i.cname}</td>
                <td>
 
                 <button type="button" onclick="editData(${i.id})">Edit </button>
                 <button type="button" onclick="deletData(${i.id})">Delete </button>

                </td>
            </tr>   `;
        });
    }
    document.getElementById("dis").innerHTML = tr;
}
dispcat();


const deletData = (id) => {
    let data = JSON.parse(localStorage.getItem("Catinfo"));

    let finRsult = data.filter((i) => {
        return i.id != id;
    });

    let a = 1;
    let res = finRsult.map((i) => {
        i.id = a++;
        return i;
    });


    localStorage.setItem("Catinfo", JSON.stringify(res));


    dispcat();
};



const editData = (id) => {
    let data = JSON.parse(localStorage.getItem("Catinfo"));
    let finRsult = data.filter((i) => {
        return i.id == id;
    });
    finRsult.map((i) => {
        document.cform.kin.value = i.cname;
        document.cform.catid.value = i.id;

    });
};