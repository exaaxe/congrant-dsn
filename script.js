const students = [
    { id: "17380", name: "ไอ้เต่า🐢", text: "กูคือไอ้เต่าล้านปี" },
    { id: "17374", name: "เสี่ยกัน🔫", text: "เดินทางมาถึงวันสุดท้ายของชีวิตม.ปลายแล้วนะครับ รีบๆจบทนายแล้วมาว่าความให้กูด้วยกูจะเปิดเว็บบา" },
    { id: "17386", name: "คิด คิด คิดแต่ไม่ถึง💭", text: "ว่าที่วิศวะตัวตึงยินดีด้วยนะครับมึงพยายามมามากละได้ที่เรียนสมจัยแล้วดีใจด้วยจ้า" },
    { id: "17395", name: "กล้าPhubet🌿", text: "ดีใจด้วยนั้ม ถ้าได้ไปเรียนแม่โจ้ หาสาวน่ารักๆมาฝากด้วย" },
    { id: "17398", name: "เจ้านายชอบมิ้ว🥛", text: "แหลมนะครับอันนี้ๆ" }
];

function showStudentInfo() {
    const studentId = document.getElementById('studentId').value;
    const studentInfoDiv = document.getElementById('studentInfo');
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popupMessage');

    const student = students.find(student => student.id === studentId);

    if (student) {
        studentInfoDiv.innerHTML = `
            <h2>congrant ด้วยกับมายg</h2>
            <p><strong>ถึง</strong> ${student.name}</p>
            <p><strong></strong> ${student.text}</p>
        `;
        studentInfoDiv.classList.add('show'); // Apply class to show info with animation
    } else {
        studentInfoDiv.innerHTML = '';
        popupMessage.textContent = 'ไอ้โง่เสร่อพิมพ์ทำควยไร';
        popup.style.display = 'block';


    }
}
function toggleRainbow() {
    const button = document.getElementById('rainbowButton');
    button.classList.toggle('active');
}

