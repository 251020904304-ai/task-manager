
document.addEventListener('DOMContentLoaded', () => {

 const app = document.getElementById('app');

 // Tạo form thêm task

 const form = document.createElement('form');

 const input = document.createElement('input');

 input.type = 'text';

 input.placeholder = 'Nhập công việc mới...';

 input.required = true;

 const prioritySelect = document.createElement('select');

 const options = ['Thấp', 'Trung bình', 'Cao'];

 options.forEach(option => {

 const opt = document.createElement('option');

 opt.value = option.toLowerCase();

 opt.textContent = option;

 prioritySelect.appendChild(opt);

 });

 const button = document.createElement('button');

 button.textContent = 'Thêm';
 form.appendChild(input);

 form.appendChild(prioritySelect);

 form.appendChild(button);

 app.appendChild(form);

});

