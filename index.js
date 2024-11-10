document.addEventListener('DOMContentLoaded', function() {
    const fixButton = document.getElementById('fixButton');

    fixButton.addEventListener('click', function() {
        alert('Instructions to fix bootloop:\n\n1. Boot into Recovery Mode.\n2. Uninstall Magisk Modules.\n3. Flash Stock Boot Image.\n4. Boot into Safe Mode.\n5. Use ADB Commands to Remove Modules.');
    });
});
  
