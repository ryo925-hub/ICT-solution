function showForm() {
  const method = document.getElementById("method").value;
  const form = document.getElementById("paymentForm");
  const result = document.getElementById("result");
  result.style.display = "none";
  let html = "";

  if (method === "card") {
    html = `
      <h3>💳 クレジットカード情報</h3>
      <input type="text" id="cardNumber" placeholder="カード番号 (例: 4111 1111 1111 1111)"
             inputmode="numeric" maxlength="19" autocomplete="cc-number">
      <input type="text" id="expiry" placeholder="有効期限 (MM/YY)"
             inputmode="numeric" maxlength="5" autocomplete="cc-exp">
      <input type="text" id="holder" placeholder="カード名義人">
      <input type="text" id="cvv" placeholder="セキュリティコード (CVV)" inputmode="numeric" maxlength="4">
      <button type="button" onclick="registerCard()">登録</button>
    `;
  } else if (method === "paypal") {
    html = `
      <h3>🅿️  PayPal情報</h3>
      <input type="email" id="email" placeholder="メールアドレス">
      <input type="password" id="password" placeholder="パスワード">
      <button type="button" onclick="registerPayPal()">登録</button>
    `;
  } else if (method === "bank") {
    html = `
      <h3>🏦 銀行口座情報</h3>
      <input type="text" id="bankName" placeholder="銀行名">
      <input type="text" id="branch" placeholder="支店名">
      <input type="text" id="account" placeholder="口座番号">
      <input type="text" id="holder" placeholder="口座名義">
      <button type="button" onclick="registerBank()">登録</button>
    `;
  }

  form.innerHTML = html;

  if (method === "card") initCardFormatting();
}

// ---------- カード入力欄のフォーマット ----------
function initCardFormatting() {
  const cardInput = document.getElementById("cardNumber");
  const expiryInput = document.getElementById("expiry");

  // 4桁ごとにスペース挿入（自然なカーソル制御付き）
  cardInput.addEventListener("input", (e) => {
    const el = e.target;
    const cursorPos = el.selectionStart;
    const raw = el.value;
    const digitsOnly = raw.replace(/\D/g, "");

    // 入力前の数字数をカウント（カーソル位置まで）
    const digitsBeforeCursor = raw.slice(0, cursorPos).replace(/\D/g, "").length;

    // 4桁ごとにスペースを挿入
    const formatted = digitsOnly.replace(/(.{4})/g, "$1 ").trim();

    // 書き換え
    el.value = formatted;

    // 書き換え後のカーソル位置を数字数から計算
    let newCursor = formatted.split("").reduce((acc, ch) => {
      if (/\d/.test(ch)) acc.digitCount++;
      if (acc.digitCount === digitsBeforeCursor && acc.pos === -1) acc.pos = acc.index + 1;
      acc.index++;
      return acc;
    }, { digitCount: 0, pos: -1, index: 0 }).pos;
    if (newCursor === -1) newCursor = formatted.length;

    el.setSelectionRange(newCursor, newCursor);
  });

  // 有効期限: 自動でスラッシュ追加
  expiryInput.addEventListener("input", (e) => {
    let val = e.target.value.replace(/\D/g, "");
    if (val.length > 2) val = val.slice(0, 2) + "/" + val.slice(2, 4);
    e.target.value = val;
  });
}

// ---------- 登録処理 ----------
function registerCard() {
  const cardNumberRaw = document.getElementById("cardNumber").value || "";
  const expiry = document.getElementById("expiry").value || "";
  const holder = document.getElementById("holder").value || "";
  const cvv = document.getElementById("cvv").value || "";

  const cardNumberDigits = cardNumberRaw.replace(/\D/g, "");

  if (!cardNumberDigits) {
    alert("カード番号を入力してください。");
    return;
  }

  showResult(`✅ 登録が完了しました！
--------------------------
決済方法: クレジットカード
番号: ${cardNumberRaw}
有効期限: ${expiry}
名義人: ${holder}
CVV: ${cvv}`);
}

function registerPayPal() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  showResult(`✅ 登録が完了しました！
--------------------------
決済方法: PayPal
メール: ${email}
パスワード: ${"*".repeat(password.length)}`);
}

function registerBank() {
  const bankName = document.getElementById("bankName").value;
  const branch = document.getElementById("branch").value;
  const account = document.getElementById("account").value;
  const holder = document.getElementById("holder").value;

  showResult(`✅ 登録が完了しました！
--------------------------
決済方法: 銀行振込
銀行名: ${bankName}
支店名: ${branch}
口座番号: ${account}
口座名義: ${holder}`);
}

function showResult(text) {
  const result = document.getElementById("result");
  result.style.display = "block";
  result.textContent = text;
}
