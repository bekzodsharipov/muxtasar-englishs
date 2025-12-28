document.addEventListener("DOMContentLoaded", (function () {
    const e = document.querySelectorAll(".webinar-cta"),
        t = document.getElementById("registrationModal"),
        n = document.getElementById("closeModalBtn"),
        o = document.querySelector(".homeModalOverlay"),
        d = document.getElementById("registrationForm"),
        l = document.getElementById("name"),
        a = document.getElementById("nameError"),
        c = document.getElementById("phone"),
        i = document.getElementById("phoneError"),
        r = document.getElementById("submitBtn"),
        s = document.getElementById("selectedCountry"),
        m = document.getElementById("selectedCountryCode"),
        u = document.getElementById("countryDropdown"),
        y = document.getElementById("dropdownIcon"),
        E = setupPhoneFormatter({
            inputEl: c,
            codeLabelEl: m,
            dropdownEl: u,
            triggerEl: s,
            iconEl: y,
            errorEl: i,
            defaultCode: "+998"
        });
    let p = !1,
        g = 0;

    function f() {
        t && (p = !0, g = window.scrollY, t.style.display = "block", document.body.style.overflow = "hidden", a.style.display = "none", i.style.display = "none")
    }

    function v() {
        t && p && (p = !1, t.style.display = "none", document.body.style.overflow = "", document.body.style.position = "", document.body.style.top = "", window.scrollTo(0, g))
    }
    e.forEach((e => e.addEventListener("click", f))), n && n.addEventListener("click", v), o && o.addEventListener("click", v), d.addEventListener("submit", (function (e) {
        e.preventDefault();
        const t = l.value.trim(),
            n = c.value.trim();
        let o = !1;
        if (t ? a.style.display = "none" : (a.style.display = "block", o = !0), E.validate(n) ? i.style.display = "none" : (i.style.display = "block", o = !0), o) return;
        r.textContent = "YUBORILMOQDA...", r.disabled = !0;
        const d = new Date,
            s = d.toLocaleDateString("uz-UZ"),
            m = d.toLocaleTimeString("uz-UZ"),
            u = {
                Ism: t,
                TelefonRaqam: E.getCurrentCode() + " " + n,
                SanaSoat: s + " - " + m
            };
        localStorage.setItem("formData", JSON.stringify(u)), window.location.href = "/thankYou.html", r.textContent = "DAVOM ETISH", r.disabled = !1, l.value = "", c.value = "", v()
    }))
})), document.addEventListener("DOMContentLoaded", (function () {
    document.querySelectorAll(".webinar-faq__dropdown").forEach((e => {
        const t = e.querySelector(".webinar-faq__dropdown__head");
        t && t.addEventListener("click", (function () {
            if (e.classList.contains("is-open")) e.classList.remove("is-open"), e.style.maxHeight = "80px";
            else {
                e.classList.add("is-open"), e.style.maxHeight = "200px";
                const t = e.scrollHeight;
                e.style.maxHeight = t + "px"
            }
        }))
    }))
}));
document.addEventListener("DOMContentLoaded", (() => {
    const t = document.getElementById("timer");
    let e = 120;
    const n = setInterval((() => {
        const a = Math.floor(e / 60),
            o = e % 60;
        t.textContent = `${String(a).padStart(2, "0")}:${String(o).padStart(2, "0")}`, e <= 0 && clearInterval(n), e--
    }), 1e3)
}));