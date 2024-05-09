import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";
export function isiTablePresensi(results) {
    results.forEach(isiRow);
    clearTable();
}
function isiRow(value) {
    let content =
        isiTabel.replace("ID", value._id)
            .replace("Merek", value.merek)
            .replace("Model", value.model)
            .replace("Tipe", value.tipe)
            .replace("Harga", value.harga)
            .replace("Warna", value.warna)
            .replace("Tahun_Rilis", value.tahun_rilis)
            .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabel", content);
}

function clearTable() {
    const tableBody = document.querySelector('#isiTabel tbody');
    if (tableBody) {
        tableBody.innerHTML = '';
    }
}