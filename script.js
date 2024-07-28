document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var studentId = document.getElementById('student-id').value;

    // هنا يمكنك إضافة الكود لاسترجاع النتيجة من قاعدة البيانات أو ملف JSON
    // على سبيل المثال، يمكننا استخدام نتائج ثابتة لاختبار الوظيفة

    var results = {
        '123': 'نتيجة الطالب 123: ناجح',
        '456': 'نتيجة الطالب 456: راسب',
        '789': 'نتيجة الطالب 789: ناجح'
    };

    var resultText = results[studentId] || 'لم يتم العثور على نتيجة لهذا الرقم';

    document.getElementById('result').innerText = resultText;
});
