document.addEventListener("DOMContentLoaded", function () {
    var ourServicesDropdown = document.getElementById('ourServices');
    var servicesDropdown = document.getElementById('services');
    var airFreshenerCheckbox = document.getElementById('airFreshener');
    var tireShineCheckbox = document.getElementById('tireShine');
    var floorMatCleanCheckbox = document.getElementById('floorMatClean');
    var airFreshenerDiv = document.getElementById('airFreshenerDiv');
    var tireShineDiv = document.getElementById('tireShineDiv');
    var floorMatCleanDiv = document.getElementById('floorMatCleanDiv');

    // Initially disable the services dropdown and checkboxes
    servicesDropdown.disabled = true;
    airFreshenerCheckbox.disabled = true;
    tireShineCheckbox.disabled = true;
    floorMatCleanCheckbox.disabled = true;

    // Event listener for ourServices dropdown change
    ourServicesDropdown.addEventListener('change', function () {
        if (ourServicesDropdown.value === 'car_detailing') {
            servicesDropdown.disabled = false;
        } else {
            servicesDropdown.disabled = true;
            servicesDropdown.value = ""; // Reset to initial state
            
            // Clear checkboxes and disable them
            airFreshenerCheckbox.checked = false;
            tireShineCheckbox.checked = false;
            floorMatCleanCheckbox.checked = false;
            airFreshenerCheckbox.disabled = true;
            tireShineCheckbox.disabled = true;
            floorMatCleanCheckbox.disabled = true;

            // Add disabled class to checkbox divs
            airFreshenerDiv.classList.add('disabled');
            tireShineDiv.classList.add('disabled');
            floorMatCleanDiv.classList.add('disabled');
        }
    });

    // Event listener for services dropdown change
    servicesDropdown.addEventListener('change', function () {
        var selectedService = servicesDropdown.value;
        
        // Clear checkboxes
        airFreshenerCheckbox.checked = false;
        tireShineCheckbox.checked = false;
        floorMatCleanCheckbox.checked = false;

        switch (selectedService) {
            case 'service1': // Silver
                airFreshenerDiv.classList.remove('disabled');
                tireShineDiv.classList.remove('disabled');
                floorMatCleanDiv.classList.remove('disabled');
                airFreshenerCheckbox.disabled = false;
                tireShineCheckbox.disabled = false;
                floorMatCleanCheckbox.disabled = false;
                break;
            case 'service2': // Gold
                airFreshenerDiv.classList.add('disabled');
                tireShineDiv.classList.add('disabled');
                floorMatCleanDiv.classList.remove('disabled');
                airFreshenerCheckbox.disabled = true;
                tireShineCheckbox.disabled = true;
                floorMatCleanCheckbox.disabled = false;
                break;
            case 'service3': // Platinum Car
            case 'service4': // Platinum SUV
            case 'service5': // Platinum Van
                airFreshenerDiv.classList.add('disabled');
                tireShineDiv.classList.add('disabled');
                floorMatCleanDiv.classList.add('disabled');
                airFreshenerCheckbox.disabled = true;
                tireShineCheckbox.disabled = true;
                floorMatCleanCheckbox.disabled = true;
                break;
            default:
                airFreshenerDiv.classList.remove('disabled');
                tireShineDiv.classList.remove('disabled');
                floorMatCleanDiv.classList.remove('disabled');
                airFreshenerCheckbox.disabled = false;
                tireShineCheckbox.disabled = false;
                floorMatCleanCheckbox.disabled = false;
        }
    });

    // Event listener for focus and blur events on both dropdowns
    var servicesDropdowns = document.querySelectorAll('.bothServices');
    var placeholderOptions = document.querySelectorAll('.placeholder');

    servicesDropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('focus', function () {
            placeholderOptions.forEach(function (placeholderOption) {
                placeholderOption.style.display = "none";
            });
        });

        dropdown.addEventListener('blur', function () {
            if (dropdown.value === "") {
                placeholderOptions.forEach(function (placeholderOption) {
                    placeholderOption.style.display = "block";
                });
            }
        });
    });
});
