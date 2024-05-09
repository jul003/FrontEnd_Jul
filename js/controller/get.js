import { isiTabel } from "../temp/table.js";

export function isiTablePresensi(results) {
    clearTable();
    results.forEach(isiRow);
}

function isiRow(value) {
    let content =
        isiTabel.replace("#ID", value._id)
            .replace("#Merek", value.merek)
            .replace("#Model", value.model)
            .replace("#Tipe", value.tipe)
            .replace("#Harga", value.harga)
            .replace("#Warna", value.warna)
            .replace("#Tahun", value.tahun_rilis);

    const tableBody = document.querySelector('#iniTabel tbody');
    if (tableBody) {
        // Create a new row element
        let newRow = document.createElement('tr');
        newRow.innerHTML = content; // Set content to the new row
        tableBody.appendChild(newRow); // Append the new row to the tbody
    }
}

function clearTable() {
    const tableBody = document.querySelector('#iniTabel tbody');
    if (tableBody) {
        tableBody.innerHTML = ''; // Clear the inner HTML of the tbody
    }
}
