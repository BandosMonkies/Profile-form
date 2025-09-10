// Update datetime
function updateDateTime() {
    const now = new Date();
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    document.getElementById('datetime').textContent = 
        'Date & Time: ' + now.toLocaleDateString('en-US', options);
}

// Update preview in real-time
function updatePreview() {
    const fullName = document.getElementById('fullName').value || '-';
    const email = document.getElementById('email').value || '-';
    const phone = document.getElementById('phone').value || '-';
    const bio = document.getElementById('bio').value || '-';

    document.getElementById('previewName').textContent = fullName;
    document.getElementById('previewEmail').textContent = email;
    document.getElementById('previewPhone').textContent = phone;
    document.getElementById('previewBio').textContent = bio;
}

// Add event listeners for real-time preview
document.getElementById('fullName').addEventListener('input', updatePreview);
document.getElementById('email').addEventListener('input', updatePreview);
document.getElementById('phone').addEventListener('input', updatePreview);
document.getElementById('bio').addEventListener('input', updatePreview);

// Form submission handler
document.getElementById('profileForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        bio: document.getElementById('bio').value
    };

    // Here you can add your backend integration
    console.log('Form submitted:', formData);
    alert('Form submitted successfully! Check console for data.');
});

// Initialize datetime
updateDateTime();
// Update datetime every second
setInterval(updateDateTime, 1000);

// Initialize preview
updatePreview();