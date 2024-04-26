
// Remove the line '<!DOCTYPE html>'

<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Avatar Selection</title>
</head>
<body>
    <section id="avatar">
        <h2>Avatar</h2>
        <form id="avatar-form">
            <label for="avatar-select">Select your avatar:</label>
            <select id="avatar-select" name="avatar">
                <option value="avatar1.png">Avatar 1</option>
                <option value="avatar2.png">Avatar 2</option>
                <option value="avatar3.png">Avatar 3</option>
                <option value="avatar4.png">Avatar 4</option>
            </select>
            <button type="submit">Submit</button>
        </form>
        <div id="selected-avatar"></div>
    </section>

    <script>
        document.getElementById('avatar-form').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission

            var selectedAvatar = document.getElementById('avatar-select').value;
            var avatarImage = document.createElement('img');
            avatarImage.src = selectedAvatar;
            avatarImage.alt = 'Selected Avatar';

            var selectedAvatarDiv = document.getElementById('selected-avatar');
            selectedAvatarDiv.innerHTML = ''; // Clear previous avatar
            selectedAvatarDiv.appendChild(avatarImage);
        });
    </script>
</body>
</html>
