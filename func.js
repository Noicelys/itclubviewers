const clubs = {
  sports: ["ชมรมบาสเกตบอล", "ชมรมวอลเลย์บอล", "ชมรมแบดมินตัน", "ชมรมตะกร้อ", "ชมรมเปตอง"],
  arts: ["ชมรมศิลปะ", "ชมรมดนตรี", "ชมรมเชฟตัวน้อย", "ชมรมAnimation"],
  technology: ["ชมรมเขียนเว็บ", "ชมรมEsport", "ชมรมพิมพ์สัมผัสด้วยคอมพิวเตอร์", "ชมรมเทรดทองคำ"],
  academic: ["ชมรมหมากกระดาน"],
  others: ["ชมรมจิตอาสา", "Plant Club"]
};

const csvUrls = [
  { name: "ชมรมศิลปะ", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTdlB_ZQlXPmgYvm2PE3VDE-UhmZxYIOEDdvT-I9h4OT7lJiQhYoN433yHqCfJZJmURxpfbuKJKnMnx/pub?gid=0&single=true&output=csv" },
  { name: "ชมรมแบดมินตัน", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSpjBLenWp2nBZrU_RZ8kyuTN3TkMOJceSkIZgK2bwZ9GVRY1SsaNwkvmiwusAJHGqQabfxRrTfjZsL/pub?output=csv" },
  { name: "ชมรมเขียนเว็บ", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQoQPzDkOVae4nxV-A2xVTRz0PDodwgCivhnCuJFcHwGEiMFonYVXwfjFfxJ4Ub1KVT8xew5m7jsi7c/pub?output=csv" },
  { name: "ชมรมEsport", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQH06OwWlDV0f71pt_pg6dQu7fGEwHWIlQp6toqANItCkWE6xw4uKPO_6ucb8ZUqlvq23YAEKQYkesp/pub?output=csv" },
  { name: "ชมรมวอลเลย์บอล", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vS93jc9G9geI0wX3Ly_5zR8MWjFjl3oYyRWqs19DTafBaUi7o03uWFLpB1Ra0XchjolhWfzgNU0jp5u/pub?output=csv" },
  { name: "ชมรมเทรดทองคำ", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR46FvH3p6mKdJA2RGjfWZbAouELt2qujhi_tJGFxZCDMdHzsbM2pLJrV9E0vKpTS2iC9SM_1Rwugsb/pub?output=csv" },
  { name: "ชมรมตะกร้อ", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRUVBUL8xyDjsttjsERUFmtDZn0-k19Fq0sxhmLQW6XmRO6nOC8p3Q4e4luErVILQCUfmJ0XuRe4Y1I/pub?output=csv" },
  { name: "ชมรมเปตอง", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vToqZUGbAvLrSLA5lif0de-GEf6IgBiZnwo3-Zb5BiR8VwOVUYK3y_eYaRI-JBl4JscL0Cv4RngD-8h/pub?output=csv" },
  { name: "ชมรมเชฟตัวน้อย", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_ie3zKIge6DgrkH10qH2HhKeoadwB1rW7H1yCwRTplDXHb_v5Qv7eaZkl8WaU2jVZ9L3ZmKYYlBNo/pub?output=csv" },
  { name: "ชมรมจิตอาสา", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRgIOQy4SiQ_ontNitRFVp1hrB0gKNq3AVbGesxwh0iFHRUrKImwuvUYeXrO8h5lgORdEzMGqmaen3P/pub?output=csv" },
  { name: "ชมรมAnimation", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRvqXasqupMnSKoxiOzZN8p2RJTcsFR-wQo6jOl8OEefpxn6cJVpvW3yLV8d893vffdTSg0BPKXvvOu/pub?output=csv" },
  { name: "Plant Club", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSTRa3UG0MFe4cDRc3nrxyUAO6Kvwp1g3J-gi9KkQc0mP9ztGalXOKdzHZNuntcIHGTgEPBdoRwNz7S/pub?output=csv" },
  { name: "ชมรมบาสเกตบอล", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRM0h6Ocje1sRjixVMvyNXL1sWNW4Gg8R-BTRgZswY4GUZESvFaFLoQ4li4LHO1b_ZzC1n6MKFy3Uze/pub?output=csv" },
  { name: "ชมรมดนตรี", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTmHC0BQfZN0zpdo2yj-EaM-X1U9jd39IEHjtIG2jSL8FFrVx2G73ggr5DEBLZLPqsEhsT9vJuoqrWa/pub?output=csv" },
  { name: "ชมรมพิมพ์สัมผัสด้วยคอมพิวเตอร์", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-fSeQGrSlUyTMacY-DSkzBNukN-WuTyPxX3hzousFcPq5B106XGYXOvB4MpYp9XedZTPsQMaMHDyW/pub?output=csv" },
  { name: "ชมรมหมากกระดาน", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRPijUq9JykhPQRfJgn7lOVVuqx0BbN5iulKwXFJl4s41bPmXIVLAJRzb64RHPLqAPtd2ngxw4wclbN/pub?output=csv"}  
];

let sheetsData = [];
const tabsDiv = document.getElementById("tabs");
const contentsDiv = document.getElementById("tab-contents");

function createTable(rows, hideClubColumn = false) {
  if (!rows || rows.length === 0) {
    const div = document.createElement("div");
    div.className = "no-data";
    div.textContent = "ไม่พบข้อมูล";
    return div;
  }

  const wrapper = document.createElement("div");
  wrapper.className = "table-wrapper";

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");

  let clubColumnIndex = -1;
  rows[0].forEach((h, idx) => {
    const headerLower = String(h).toLowerCase().trim();
    if (headerLower.includes("ชมรม") || headerLower === "club") {
      clubColumnIndex = idx;
    }
  });

  rows[0].forEach((h, idx) => {
    if (hideClubColumn && idx === clubColumnIndex) return;
    const th = document.createElement("th");
    th.textContent = h || ``;
    
    if (idx === 0) {
      th.classList.add("sticky-col");
    }
    
    headRow.appendChild(th);
  });
  thead.appendChild(headRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  for (let i = 1; i < rows.length; i++) {
    const r = rows[i];
    if (!r || r.length === 0) continue;
    
    const tr = document.createElement("tr");
    
    r.forEach((c, idx) => {
      if (hideClubColumn && idx === clubColumnIndex) return;
      const td = document.createElement("td");

      if (idx === 0) {
        td.classList.add("sticky-col");
      }

      const cellValue = String(c || '').trim().toUpperCase();
      if (cellValue === "TRUE" || cellValue === "T") {
        td.innerHTML = '<i class="bi bi-check-square-fill"></i>';
      } else if (cellValue === "FALSE" || cellValue === "F") {
        td.innerHTML = '<i class="bi bi-square"></i>';
      } else {
        td.textContent = c || '';
      }

      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  }

  table.appendChild(tbody);
  wrapper.appendChild(table);
  return wrapper;
}

function getCurrentTabIndex() {
  const activeTab = document.querySelector(".tab-button.active");
  if (!activeTab) return -1;
  return Array.from(tabsDiv.children).indexOf(activeTab) - 1;
}

function getFilteredData(sheetIndex) {
  const groupVal = document.getElementById("filter-group").value;
  const yearVal = document.getElementById("filter-year").value;
  const clubSelectVal = document.getElementById("filter-club-select").value;
  const clubVal = document.getElementById("filter-club").value.trim().toLowerCase();
  const roomVal = document.getElementById("filter-room").value;
  
  let allRows;
  if (sheetIndex === -1) {
    allRows = [];
    if (sheetsData.length > 0) {
      allRows.push([...sheetsData[0][0]]);
      sheetsData.forEach(sheet => {
        allRows.push(...sheet.slice(1));
      });
    }
  } else {
    allRows = sheetsData[sheetIndex].map(row => [...row]);
  }

  if (!allRows || allRows.length === 0) {
    return [];
  }

  const header = allRows[0];
  const filtered = [header];

  for (let i = 1; i < allRows.length; i++) {
    const r = allRows[i];
    const rowText = r.join(' ').toLowerCase();
    
    let matchGroup = groupVal === "all" || rowText.includes(groupVal.toLowerCase());
    let matchYear = yearVal === "all" || r.some(c => String(c).trim() === yearVal);
    let matchClubSelect = clubSelectVal === "all" || r.some(c => String(c).trim() === clubSelectVal);
    let matchClub = clubVal === "" || rowText.includes(clubVal);
    let matchRoom = roomVal === "all" || r.some(c => String(c).trim() === roomVal);
    
    if (matchGroup && matchYear && matchClubSelect && matchClub && matchRoom) {
      filtered.push(r);
    }
  }

  // เรียงลำดับตามรหัสนักศึกษา จากน้อยไปมาก เฉพาะเมื่อกรองตามห้อง
  if (filtered.length > 1 && roomVal !== "all") {
    const dataRows = filtered.slice(1);
    dataRows.sort((a, b) => {
      // หาคอลัมน์ที่มีรหัสนักศึกษา (คอลัมน์ที่มีตัวเลข 10-11 หลัก)
      let idxA = 0, idxB = 0;
      for (let i = 0; i < a.length; i++) {
        const val = String(a[i] || '').trim();
        if (/^\d{10,11}$/.test(val)) {
          idxA = i;
          break;
        }
      }
      for (let i = 0; i < b.length; i++) {
        const val = String(b[i] || '').trim();
        if (/^\d{10,11}$/.test(val)) {
          idxB = i;
          break;
        }
      }
      
      const idA = String(a[idxA] || '').trim();
      const idB = String(b[idxB] || '').trim();
      return idA.localeCompare(idB, undefined, { numeric: true });
    });
    return [filtered[0], ...dataRows];
  }

  return filtered;
}

function filterTableData(sheetIndex) {
  const groupVal = document.getElementById("filter-group").value;
  const yearVal = document.getElementById("filter-year").value;
  const clubSelectVal = document.getElementById("filter-club-select").value;
  const clubVal = document.getElementById("filter-club").value.trim().toLowerCase();
  const roomVal = document.getElementById("filter-room").value;
  
  const filtered = getFilteredData(sheetIndex);

  const hideClubColumn = (groupVal !== "all" || yearVal !== "all") && 
                         clubVal === "" && clubSelectVal === "all" && roomVal === "all";

  const contentDiv = sheetIndex === -1 
    ? document.getElementById("tab-content-all") 
    : document.getElementById("tab-content-" + sheetIndex);
  
  contentDiv.innerHTML = "";
  const table = createTable(filtered, hideClubColumn);
  contentDiv.appendChild(table);
}

function exportToExcel() {
  const currentTabIndex = getCurrentTabIndex();
  const filtered = getFilteredData(currentTabIndex);
  
  if (!filtered || filtered.length <= 1) {
    alert("ไม่มีข้อมูลให้ Export");
    return;
  }

  const exportData = filtered.map((row, idx) => {
    if (idx === 0) return row;
    return row.map(cell => {
      const cellValue = String(cell || '').trim().toUpperCase();
      if (cellValue === "TRUE" || cellValue === "T") return "✓";
      if (cellValue === "FALSE" || cellValue === "F") return "✗";
      return cell;
    });
  });

  const ws = XLSX.utils.aoa_to_sheet(exportData);
  const wb = XLSX.utils.book_new();
  
  const groupVal = document.getElementById("filter-group").value;
  const yearVal = document.getElementById("filter-year").value;
  const roomVal = document.getElementById("filter-room").value;
  const clubSelectVal = document.getElementById("filter-club-select").value;
  
  let fileName = "ชมรมแผนกไอที";
  if (currentTabIndex >= 0) {
    fileName = csvUrls[currentTabIndex].name;
  }
  if (groupVal !== "all") fileName += `_${groupVal}`;
  if (yearVal !== "all") fileName += `_ปี${yearVal}`;
  if (roomVal !== "all") fileName += `_${roomVal}`;
  if (clubSelectVal !== "all") fileName += `_${clubSelectVal}`;
  
  XLSX.utils.book_append_sheet(wb, ws, "ข้อมูล");
  XLSX.writeFile(wb, `${fileName}.xlsx`);
}

async function loadSheets() {
  try {
    contentsDiv.innerHTML = '<div class="loading"><div class="spinner-border text-primary" role="status"><span class="visually-hidden">กำลังโหลด...</span></div><p class="mt-2">กำลังโหลดข้อมูล...</p></div>';
    
    const allBtn = document.createElement("button");
    allBtn.textContent = "ข้อมูลทั้งหมด";
    allBtn.className = "tab-button active";
    allBtn.addEventListener("click", () => {
      document.querySelectorAll(".tab-button").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
      allBtn.classList.add("active");
      document.getElementById("tab-content-all").classList.add("active");
      filterTableData(-1);
    });
    tabsDiv.appendChild(allBtn);

    const allContentDiv = document.createElement("div");
    allContentDiv.id = "tab-content-all";
    allContentDiv.className = "tab-content active";
    contentsDiv.innerHTML = "";
    contentsDiv.appendChild(allContentDiv);

    const fetchPromises = csvUrls.map(({ url }) => 
      fetch(url)
        .then(res => {
          if (!res.ok) throw new Error('Network error');
          return res.text();
        })
        .then(text => {
          return new Promise((resolve) => {
            Papa.parse(text, {
              skipEmptyLines: true,
              complete: (results) => {
                resolve(results.data);
              }
            });
          });
        })
    );
    
    const allData = await Promise.all(fetchPromises);
    sheetsData = allData;
    
    allData.forEach((rows, i) => {
      const { name } = csvUrls[i];
      const btn = document.createElement("button");
      btn.textContent = name;
      btn.className = "tab-button";
      btn.addEventListener("click", () => {
        document.querySelectorAll(".tab-button").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
        btn.classList.add("active");
        document.getElementById("tab-content-" + i).classList.add("active");
        filterTableData(i);
      });
      tabsDiv.appendChild(btn);

      const contentDiv = document.createElement("div");
      contentDiv.id = "tab-content-" + i;
      contentDiv.className = "tab-content";
      contentsDiv.appendChild(contentDiv);
    });

    populateClubs();
    filterTableData(-1);
    
  } catch (error) {
    console.error('Error loading data:', error);
    contentsDiv.innerHTML = '<div class="no-data">เกิดข้อผิดพลาดในการโหลดข้อมูล: ' + error.message + '</div>';
  }
}

function populateClubs() {
  const clubSelect = document.getElementById("filter-club-select");
  clubSelect.querySelectorAll("option:not([value='all'])").forEach(o => o.remove());

  Object.values(clubs).flat().sort().forEach(club => {
    const option = document.createElement("option");
    option.value = club;
    option.textContent = club;
    clubSelect.appendChild(option);
  });
}

document.getElementById("filter-group").addEventListener("change", () => {
  filterTableData(getCurrentTabIndex());
});

document.getElementById("filter-year").addEventListener("change", () => {
  filterTableData(getCurrentTabIndex());
});

document.getElementById("filter-room").addEventListener("change", () => {
  filterTableData(getCurrentTabIndex());
});

document.getElementById("filter-club-select").addEventListener("change", () => {
  filterTableData(getCurrentTabIndex());
});

document.getElementById("filter-club").addEventListener("input", () => {
  filterTableData(getCurrentTabIndex());
});

document.getElementById("export-btn").addEventListener("click", exportToExcel);

loadSheets();