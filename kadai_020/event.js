const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  setTimeout(() => {
    const text = document.getElementById('text').textContent;
    document.getElementById('text').textContent = 'ボタンをクリックしました';
  },2000)
  });
