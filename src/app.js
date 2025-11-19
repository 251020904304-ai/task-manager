document.addEventListener('DOMContentLoaded', () => {
 const app = document.getElementById('app');
 // Tạo form thêm task
 const form = document.createElement('form');
 const input = document.createElement('input');
 input.type = 'text';
 input.placeholder = 'Nhập công việc mới...';
 const button = document.createElement('button');
 button.textContent = 'Thêm';

 form.appendChild(input);

 form.appendChild(button);
 app.appendChild(form);
});

