import { get } from "https://bukulapak.github.io/api/process.js";
import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../js/table.js";
let urlAPI = "https://uts-jul2024-547e81327e27.herokuapp.com/bodomoal";
get(urlAPI, isiTablePresensi);
function isiTablePresensi(results) {
    results.forEach(isiRow);
}
function isiRow(value) {
    let content = 
        `<tr>
            <th scope="row">${value.id}</th>
            <td>${value.merek}</td>
            <td>${value.model}</td>
            <td>${value.tipe}</td>
            <td>${value.harga}</td>
            <td>${value.warna}</td>
            <td>${value.tahun_rilis}</td>
        </tr>`;
    addInner("iniTabel", content);
}
