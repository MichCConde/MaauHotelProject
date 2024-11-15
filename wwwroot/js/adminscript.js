// Sidebar open/close functions
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("defaultSidebar").style.visibility = "hidden";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("main").style.opacity = "0";  // Hide the main content
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("defaultSidebar").style.visibility = "visible";
    document.getElementById("main").style.marginLeft = "5%";
    document.getElementById("main").style.opacity = "1";  // Show the main content
    document.body.style.backgroundColor = "white";
}

// Content updating based on sidebar selection
document.addEventListener("DOMContentLoaded", function () {
    const contentBox = document.getElementById("contentBox");

    // Content for each section
    const content = {
        dashboard: {
            title: "Dashboard",
            text: "Welcome to the Dashboard. Here you can view the overall summary and metrics."
        },
        bookings: {
            title: "Bookings",
            text: "View and manage all current bookings here. You can see the status, dates, and details of each booking."
        },
        schedule: {
            title: "Schedule",
            text: "This is your Schedule section. View your upcoming appointments and availability here."
        },
        payments: {
            title: "Payments",
            text: "Check recent payments, invoices, and payment history in this section."
        },
        rates: {
            title: "Rates",
            text: "Manage rates and pricing information here. Update service costs and special offers."
        },
        more: {
            title: "More Options",
            text: "Explore more options and settings here. Customize your experience."
        }
    };

    // Function to update content box based on the selected section
    function updateContent(section) {
        const { title, text } = content[section];
        contentBox.innerHTML = `<h2>${title}</h2><p>${text}</p>`;
    }

    // Add event listeners for both detailed and default sidebar links
    const sections = ["dashboard", "bookings", "schedule", "payments", "rates", "more"];
    sections.forEach((section) => {
        document.getElementById(`${section}-detail`).addEventListener("click", () => updateContent(section));
        document.getElementById(`${section}-default`).addEventListener("click", () => updateContent(section));
    });
});
