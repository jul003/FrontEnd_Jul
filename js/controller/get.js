import { addInner } from "https://bukulapak.github.io/element/process.js";
import { isiTabel } from "../temp/table.js";
export function isiTablePresensi(results) {
    results.forEach(isiRow);
    clearTable();
}
function isiRow(value) {
    let content =
        isiTabel.replace("ID", value._id)
            .replace("#Merek", value.merek)
            .replace("#Model", value.model)
            .replace("#Tipe", value.tipe)
            .replace("#Harga", value.harga)
            .replace("#Warna", value.warna)
            .replace("#Tahun", value.tahun_rilis)

    let tableBody = document.querySelector('tbody');
    if (tableBody) {
        let tableRow = tableBody.querySelector('tr');
        if (tableRow) {
            tableRow.innerHTML = content;
        }
    }
}