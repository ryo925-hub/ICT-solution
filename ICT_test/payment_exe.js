const payBtn = document.getElementById('payBtn');
const resultMessage = document.getElementById('resultMessage');
let selectedMethod = null;

// 支払い方法の選択
document.querySelectorAll('input[name="payment"]').forEach((radio) => {
  radio.addEventListener('change', (e) => {
    selectedMethod = e.target.value;
    payBtn.disabled = false;
    resultMessage.classList.add('hidden');
  });
});

// 支払いボタン押下
payBtn.addEventListener('click', () => {
  if (!selectedMethod) return;

  let message = '';
  switch (selectedMethod) {
    case 'credit':
      message = 'クレジットカードでの支払いが完了しました。';
      break;
    case 'paypal':
      message = 'PayPalでの支払いが完了しました。';
      break;
    case 'bank':
      message = '銀行振込の手続きが完了しました。';
      break;
  }

  resultMessage.textContent = message;
  resultMessage.classList.remove('hidden');
  payBtn.disabled = true;
});

homeBtn.addEventListener('click', () => {
  // ここで戻り先を設定（例：トップページや別のHTML）
  window.location.href = "event/event_exp.html"; // 必要なら "home.html" に変更可
});
