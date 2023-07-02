const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const text = document.getElementById('text').textContent;
    document.getElementById('text').textContent = 'ボタンをクリックしました';
  });
