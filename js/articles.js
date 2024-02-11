document.addEventListener('DOMContentLoaded', function () {
    const readMoreLinks = document.querySelectorAll('.read-more');

    readMoreLinks.forEach((link) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const card = this.closest('.card');
            const hiddenContent = card.querySelector('.hidden-content');

            if (hiddenContent) {
                if (hiddenContent.style.display === "none") {
                    hiddenContent.style.display = "block";
                } else {
                    hiddenContent.style.display = "none";
                }
            }
        });
    });
});
