    // Elements
    const profileName = document.getElementById("profileName");
    const profileBio = document.getElementById("profileBio");
    const profilePicture = document.getElementById("profilePicture");
    const uploadPicture = document.getElementById("uploadPicture");
    const changePictureButton = document.getElementById("changePictureButton");
    const editProfile = document.getElementById("editProfile");
    const saveProfile = document.getElementById("saveProfile");

    // Editable fields
    const profileNameInput = document.createElement("input");
    const profileBioInput = document.createElement("textarea");

    // Load saved data from localStorage
    const loadProfile = () => {
        const savedName = localStorage.getItem("profileName");
        const savedBio = localStorage.getItem("profileBio");
        const savedPicture = localStorage.getItem("profilePicture");

        if (savedName) profileName.textContent = savedName;
        if (savedBio) profileBio.textContent = savedBio;
        if (savedPicture) profilePicture.src = savedPicture;
    };

    // Save data to localStorage
    const saveToLocalStorage = () => {
        localStorage.setItem("profileName", profileName.textContent);
        localStorage.setItem("profileBio", profileBio.textContent);
        localStorage.setItem("profilePicture", profilePicture.src);
    };

    // Change profile picture
    changePictureButton.addEventListener("click", () => {
        uploadPicture.click();
    });

    uploadPicture.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                profilePicture.src = e.target.result;
                saveToLocalStorage();
            };
            reader.readAsDataURL(file);
        }
    });

    // Edit profile
    editProfile.addEventListener("click", () => {
        profileNameInput.value = profileName.textContent;
        profileBioInput.value = profileBio.textContent;

        profileName.replaceWith(profileNameInput);
        profileBio.replaceWith(profileBioInput);

        editProfile.style.display = "none";
        saveProfile.style.display = "inline-block";
    });

    // Save profile changes
    saveProfile.addEventListener("click", () => {
        profileName.textContent = profileNameInput.value;
        profileBio.textContent = profileBioInput.value;

        profileNameInput.replaceWith(profileName);
        profileBioInput.replaceWith(profileBio);

        editProfile.style.display = "inline-block";
        saveProfile.style.display = "none";

        saveToLocalStorage();
    });

    // Load profile on page load
    loadProfile();