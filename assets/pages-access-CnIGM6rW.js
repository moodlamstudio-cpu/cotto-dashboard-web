async function i(){const e="ffd2ba185cf52de55c3049f47ffc949b932ee942056457b8521f703cfece66af",t="cotto_pages_pin_verified";return sessionStorage.getItem(t)===e?!0:(document.body.innerHTML=`
    <main class="access-screen">
      <section class="access-panel">
        <h1>COTTO Offline Sales Monitor</h1>
        <form id="pagesAccessForm">
          <label for="pagesPin">รหัสเข้าใช้งาน</label>
          <input id="pagesPin" type="password" inputmode="numeric" required autofocus />
          <button class="metric-button active" type="submit">เข้าใช้งาน</button>
          <p id="pagesAccessMessage" role="status"></p>
        </form>
      </section>
    </main>`,document.getElementById("pagesAccessForm").addEventListener("submit",async n=>{n.preventDefault();const s=document.getElementById("pagesPin"),o=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(s.value.trim()));if(Array.from(new Uint8Array(o),a=>a.toString(16).padStart(2,"0")).join("")!==e){document.getElementById("pagesAccessMessage").textContent="รหัสไม่ถูกต้อง",s.select();return}sessionStorage.setItem(t,e),window.location.reload()}),!1)}export{i as unlockDashboard};
