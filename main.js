let copyTxt = document.getElementById("copy-txt");
input.value;
input.onkeyup = () => {
  let input = document.getElementById("input");
  let value = input.value;
  let result = convertText(value);
  copyTxt.textContent = result;
};

function convertText(text) {
  let result = "";
  for (let c of text) {
    switch (c.toUpperCase()) {
      case "A": result += "Ꭿ"; break;
      case "B": result += "Ᏼ"; break;
      case "C": result += "Ꮯ"; break;
      case "D": result += "Ꭰ"; break;
      case "E": result += "Ꭼ"; break;
      case "F": result += "Ғ"; break;
      case "G": result += "Ꮐ"; break;
      case "H": result += "Ꮋ"; break;
      case "I": result += "Ꭵ"; break;
      case "J": result += "Ꮰ"; break;
      case "K": result += "Ꮶ"; break;
      case "L": result += "Ꮮ"; break;
      case "M": result += "Ꮇ"; break;
      case "N": result += "Ꮑ"; break;
      case "O": result += "Ꮎ"; break;
      case "P": result += "Ꮲ"; break;
      case "Q": result += "Ꭴ"; break;
      case "R": result += "Ꭱ"; break;
      case "S": result += "Ꮪ"; break;
      case "T": result += "Ꭲ"; break;
      case "U": result += "Ꮜ"; break;
      case "V": result += "Ꮙ"; break;
      case "W": result += "Ꮃ"; break;
      case "X": result += "᙭"; break;
      case "Y": result += "Ꮍ"; break;
      case "Z": result += "Ꮓ"; break;
      default: result += c; break;
      // ** مرحبا هنا devi speed بعد هاذا كود يمكنك اضافة اي زخرفة اخرا تريدها
            case "A": result += "Ꭿ"; break;
      case "ا": result += "أ"; break; //** مثلا هكذا */
      case "ب": result += "ب"; break;
      case "ت": result += "ت"; break;
      // ** مهم ان فكرة وصلت 
    }
  }
  return result;
}





// ** ===============================================================================

(function () {
const STATUS_URL = 'https://raw.githubusercontent.com/devispeed/this1is1end/refs/heads/main/status.json';
  const overlay = document.getElementById("maintenance-overlay");
  const msgEl = document.getElementById("maintenance-message");
  const btn = document.getElementById("try-again");

  let lastWasMaintenance = false;

  async function fetchStatus() {
    try {
      const res = await fetch(STATUS_URL + "?ts=" + Date.now(), {
        cache: "no-store",
      });
      if (!res.ok) throw new Error("status fetch failed " + res.status);
      const data = await res.json();

      if (data.maintenance) {
        msgEl.textContent =
          data.message || "نقوم حالياً بأعمال صيانة. يرجى المحاولة لاحقاً.";
        overlay.style.display = "block";
        lastWasMaintenance = true;
      } else {
        overlay.style.display = "none";
        if (lastWasMaintenance && data.reloadOnResume) {
          // “إعادة تشغيل” واجهة المستخدم = إعادة تحميل الصفحة
          location.reload();
        }
        lastWasMaintenance = false;
      }
    } catch (e) {
      // لو فشل الجلب، لا تُغلق الموقع تلقائياً حتى لا توقفه بسبب عطل مؤقت
      console.warn("Failed to read status.json", e);
    }
  }

  // زر "تحديث الصفحة"
  btn.addEventListener("click", () => location.reload());

  // فحص عند التحميل، ثم كل 60 ثانية
  fetchStatus();
  setInterval(fetchStatus, 60 * 1000);

  // عندما يعود المستخدم للنافذة، افحص فورًا
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) fetchStatus();
  });
})();

// ** ===============================================================================
